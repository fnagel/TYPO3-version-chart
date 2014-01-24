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
				"text-indent": false
			}
		},
		concat : {
			options : {
				banner : "/*! <%= pkg.name %> v<%= pkg.version %> - <%= pkg.title %> - <%= grunt.template.today('dd-mm-yyyy HH:MM') %> */\n"
			},
			standalone : {
				src : [
					"js/jquery-1.9.1.js",
					"js/jquery-ui-1.10.3.custom.js",
					"js/jquery.isotope.js",
					"js/fn.typo3VersionChart.js",
					"js/fn.typo3VersionChart.buttons.js",
					"js/fn.typo3VersionChart.typo3data.js"
				],
				dest : "js/scripts.js"
			}
		},
		uglify : {
			options: {
				report: "min",
				preserveComments : "some"
			},
			files : {
				src : [ "js/scripts.js" ],
				dest : "js/scripts.min.js"
			}
		},
		cssmin: {
			options: {
				report: "min"
			},
			files : {
				src: [
					"css/jquery-ui-1.10.3.custom.css", 
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
				tasks : ["jshint"]
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