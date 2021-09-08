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
					// jQuery
					"bower_components/jquery/dist/jquery.js",

					// jQuery UI core
					"bower_components/jquery-ui/ui/version.js",
					"bower_components/jquery-ui/ui/focusable.js",
					"bower_components/jquery-ui/ui/data.js",
					"bower_components/jquery-ui/ui/disable-selection.js",
					"bower_components/jquery-ui/ui/form.js",
					"bower_components/jquery-ui/ui/form-reset-mixin.js",
					"bower_components/jquery-ui/ui/ie.js",
					"bower_components/jquery-ui/ui/keycode.js",
					"bower_components/jquery-ui/ui/labels.js",
					"bower_components/jquery-ui/ui/plugin.js",
					"bower_components/jquery-ui/ui/safe-active-element.js",
					"bower_components/jquery-ui/ui/safe-blur.js",
					"bower_components/jquery-ui/ui/scroll-parent.js",
					"bower_components/jquery-ui/ui/tabbable.js",
					"bower_components/jquery-ui/ui/unique-id.js",

					"bower_components/jquery-ui/ui/widget.js",
					"bower_components/jquery-ui/ui/position.js",
					"bower_components/jquery-ui/ui/mouse.js",
					"bower_components/jquery-ui/ui/draggable.js",
					"bower_components/jquery-ui/ui/resizable.js",

					// jQuery UI widgets
					"bower_components/jquery-ui/ui/widgets/button.js",
					"bower_components/jquery-ui/ui/widgets/controlgroup.js",
					"bower_components/jquery-ui/ui/widgets/checkboxradio.js",
					"bower_components/jquery-ui/ui/widgets/dialog.js",
					"bower_components/jquery-ui/ui/widgets/tooltip.js",

					// Isotope
					"bower_components/isotope/jquery.isotope.js",

					// Project
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
					"bower_components/jquery-ui/themes/base/controlgroup.css",
					"bower_components/jquery-ui/themes/base/checkboxradio.css",
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
				tasks : ["csslint", "cssmin"]
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
