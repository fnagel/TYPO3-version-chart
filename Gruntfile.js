module.exports = function (grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		jshint : {
			files : [
				"js/fn.typo3VersionChart.js",
				"js/fn.typo3VersionChart.buttons.js",
				"js/fn.typo3VersionChart.typo3data.js"
			],
			options : {
				"boss": true,
				"curly": true,
				"eqeqeq": true,
				"eqnull": true,
				"expr": true,
				"immed": true,
				"noarg": true,
				"onevar": true,
				"quotmark": "double",
				"smarttabs": true,
				"trailing": true,
				"undef": true,
				"unused": true,
				"devel": true,
				"node": true,
				"browser": true,
				"globals": {
					"jQuery": true
				}
			}
		},
		csslint: {
			files : ["css/main.css"],
			options: {
				"adjoining-classes": false,
				"box-model": false,
				"compatible-vendor-prefixes": false,
				"duplicate-background-images": false,
				"import": false,
				"important": false,
				"outline-none": false,
				"overqualified-elements": false,
				"text-indent": false,
				"ids": false
			}
		},
		concat : {
			options : {
				banner : "/*! <%= pkg.name %> v<%= pkg.version %> - <%= pkg.title %> - <%= grunt.template.today('dd-mm-yyyy HH:MM') %> */\n"
			},
			standalone : {
				src : [
					"bower_components/jquery/dist/jquery.js",
					"bower_components/jquery-ui/ui/core.js",
					"bower_components/jquery-ui/ui/widget.js",
					"bower_components/jquery-ui/ui/position.js",
					"bower_components/jquery-ui/ui/mouse.js",
					"bower_components/jquery-ui/ui/draggable.js",
					"bower_components/jquery-ui/ui/resizable.js",
					"bower_components/jquery-ui/ui/button.js",
					"bower_components/jquery-ui/ui/dialog.js",
					"bower_components/jquery-ui/ui/tooltip.js",
					"bower_components/isotope/jquery.isotope.js",
					"js/fn.typo3VersionChart.js",
					"js/fn.typo3VersionChart.buttons.js",
					"js/fn.typo3VersionChart.typo3data.js"
				],
				dest : "dist/scripts.js"
			}
		},
		uglify : {
			options: {
				report: "min",
				preserveComments : "some"
			},
			files : {
				src : [ "dist/scripts.js" ],
				dest : "dist/scripts.min.js"
			}
		},
		cssmin: {
			options: {
				report: "min"
			},
			files : {
				src: [
					"bower_components/jquery-ui/themes/base/core.css",
					"bower_components/jquery-ui/themes/base/button.css",
					"bower_components/jquery-ui/themes/base/dialog.css",
					"bower_components/jquery-ui/themes/base/draggable.css",
					"bower_components/jquery-ui/themes/base/resizable.css",
					"bower_components/jquery-ui/themes/base/tooltip.css",
					"css/jquery-ui.theme.css",
					"css/kube.css",
					"css/isotope.css",
					"css/main.css"
				],
				dest: "css/styles.min.css"
			}
		},
		watch : {
			scripts: {
				files : ["<%= jshint.files %>"],
				tasks : ["jshint", "concat"]
			},
			styles: {
				files : ["<%= csslint.files %>"],
				tasks : ["csslint"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-csslint");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-concat");

	grunt.registerTask("test", ["jshint", "csslint"]);
		
	grunt.registerTask("default", ["jshint", "csslint", "concat", "uglify", "cssmin"]);

};