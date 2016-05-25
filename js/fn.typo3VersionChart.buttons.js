/*!
 * jQuery TYPO3 Version Chart - Button creation and functionality
 * http://typo3versions.felixnagel.com/
 *
 * Copyright 2013-2016 Felix Nagel
 */
(function( $ ) {

$.widget( "ui.typo3VersionChart", $.ui.typo3VersionChart, {

	_drawHtml: function() {
		this._super();

		this.buttons = $( "<form id='buttons' class='ui-helper-clearfix'>" ).prependTo( this.element );
		this._drawMajorButtons();
		this._drawBranchesBoxes();
		this._drawTypeBoxes();
		this._drawControlButtons();
	},

	_initEvents: function() {
		var that = this;

		this._super();

		this._on( this.buttons, {
			click: function( event ){
				if ( $( event.target ).is( "input" ) ) {
					that.refreshFromButtons();
				}
			}
		});
	},

	checkVersionTypes: function( types ){
		var buttonset = this.buttons.find( ".typo3-type.ui-buttonset" ),
			buttons =  buttonset.find( "input" );

		buttons.prop( "checked", false );
		$.each( types, function( index, data ) {
			buttons.filter( "[value='typo3-type-" + data + "']" ).prop( "checked", true );
		});
		buttonset.buttonset( "refresh" );
	},

	checkMajor: function( version ){
		var buttonset = this.buttons.find( ".typo3-branch.ui-buttonset" ),
			buttons =  buttonset.find( "input" );

		buttons.prop( "checked", false );
		buttons.filter( ".typo3-major-" + version ).prop( "checked", true );
		buttonset.buttonset( "refresh" );
	},

	checkNonOutdatedBranches: function() {
		var buttonset = this.buttons.find( ".typo3-branch.ui-buttonset" ),
			buttons =  buttonset.find( "input");

		buttons.prop( "checked", false );
		buttons.not(".trash").prop( "checked", true );
		buttonset.buttonset( "refresh" );
	},

	refreshDefaults: function() {
		this.checkNonOutdatedBranches();
		this.checkVersionTypes( [ "release", "regular", "security" ] );
		this.refreshFromButtons();
	},

	refreshFromButtons: function() {
		this.refresh( this._processForm() );
	},

	_processForm: function() {
		var that = this,
			types = [ ".major" ],
			branches = [],
			selector = [];

		$.each( that.buttons.find( "input:checked" ), function() {
			var button = $( this ),
				buttonset = button.parent( ".ui-buttonset" );

			if ( buttonset.hasClass( "typo3-type" ) ) {
				types.push( "." + button.val() );
			}
			if ( buttonset.hasClass( "typo3-branch" ) ) {
				branches.push( "." + button.val() );
			}
		});

		$.each( types, function( i1, type ){
			if ( branches.length ) {
				$.each( branches, function( i2, branch ){
					selector.push( branch + type );
				});
			} else {
				selector = types;
			}
		});

		return selector.join( "," );
	},


	_drawControlButtons: function() {
		var that = this,
			buttonSet = $( "<div>", {
				"class": "controls"
			});

		$( "<buttton>", {
			text: "show all",
			title: "Show all versions (" + this.typo3.versions_total + " releases)",
			click: function( event ) {
				that.buttons.find( "input:checkbox" ).prop( "checked", true );
				that.buttons.find( ".ui-buttonset" ).buttonset( "refresh" );
				that.chart.isotope({ filter: "" });
				event.preventDefault();
			}
		})
		.appendTo( buttonSet )
		.button({
	        icons: { primary: "ui-icon-bullet" }
        });

		$( "<buttton>", {
			text: "show active",
			title: "Show all non-dev versions of all maintained branches (" + this.typo3.versions_active_total + " releases)",
			click: function( event ) {
				that.refreshDefaults();
				event.preventDefault();
			}
		})
		.appendTo( buttonSet )
		.button({
	        icons: { primary: "ui-icon-radio-on" }
        });

		$( "<buttton>", {
			text: "clear",
			title: "Clear all (show no releases)",
			click: function( event ) {
				that.buttons.find( "input:checkbox" ).prop( "checked", false );
				that.buttons.find( ".ui-buttonset" ).buttonset( "refresh" );
				that.chart.isotope({ filter: ".major" });
				event.preventDefault();
			}
		})
		.appendTo( buttonSet )
		.button({
	        icons: { primary: "ui-icon-radio-off" }
        });

		buttonSet.buttonset().appendTo( this.buttons );
	},

	_drawMajorButtons: function() {
		var that = this,
			major = {},
			buttonSet = $( "<div>", {
				"class": "typo3-major"
			});

		Object.keys( this.typo3.versions )
			.sort()
			.reverse()
			.forEach(function( branchIndex ) {
				var majorSort = that._convertVersion( branchIndex, "major" );

				if ( !major [ majorSort ] ) {
					major[ majorSort ] = true;

					$( "<buttton>", {
						text: majorSort + ".x",
						click: function( event ) {
							that.checkMajor( majorSort );
							that.refresh( that._processForm() );
							event.preventDefault();
						}
					})
					.appendTo( buttonSet )
					.button();
				}
			});

		buttonSet.buttonset().appendTo( this.buttons );
	},

	_drawBranchesBoxes: function() {
		var that = this,
			branches = {};

		$.each( this.typo3.versions, function( branchIndex, branchData ){
			var branchSort = that._convertVersion( branchIndex ),
				icon = false;

			// LTS
			if ( branchSort === 4.5 || branchSort === 6.2 ) {
				icon = "clock";
			}
			// Outdated
			if ( !branchData.active && branchData.stable !== "0.0.0"  ) {
				icon = "trash";
			}

			branches[ branchSort ] = {
				name: branchIndex,
				icon: icon,
				css: "typo3-major-" + that._convertVersion( branchIndex, "major" )
			};
		});

		this._renderCheckboxGroup( branches , "typo3-branch" );
	},

	_drawTypeBoxes: function() {
		this._renderCheckboxGroup( {
			development: {
				name: "Development",
				icon: "lightbulb"
			},
			release: {
				name: "Release",
				icon: "tag"
			},
			regular: {
				name: "Regular",
				icon: "calendar"
			},
			security: {
				name: "Security",
				icon: "alert"
			},
			elts: {
				name: "ELTS",
				icon: "locked"
			}
		}, "typo3-type" );
	},

	_renderCheckboxGroup: function( group, name ) {
		var buttonSet = $( "<div>", {
			"class": name
		});

		Object.keys( group )
			.sort()
			.reverse()
			.forEach(function( index ) {
				var data = group[ index ],
					value = name + "-" + index,
					id = "check-boxgroup-" + value;

				$( "<input>", {
					type: "checkbox",
					name: value,
					value: value,
					id: id
				})
				.addClass( data.css )
				.addClass( data.icon )
				.appendTo( buttonSet )
				.after ( $( "<label for='" + id + "'>" + data.name + "</label>" ) )
				.button({
					icons: { secondary: ( data.icon ) ? "ui-icon-" + data.icon : null	}
				});
			});

		buttonSet.buttonset().appendTo( this.buttons );
	}
});

}( jQuery ));
