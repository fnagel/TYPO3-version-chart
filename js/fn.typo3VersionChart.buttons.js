/*!
 * jQuery TYPO3 Version Chart - Button state
 * http://www.felixnagel.com/typo3-version-chart
 *
 * Copyright 2013 Felix Nagel
 */
(function( $ ) {

$.widget( "ui.typo3VersionChart", $.ui.typo3VersionChart, {
	options: {
	},

	_start: function() {
		this._drawButtons();
		this._super();
	},

	checkVersionTypes: function( types ){
		var buttonset = this.buttons.find( ".typo3-type.ui-buttonset" ),
			buttons =  buttonset.find( "input");

		buttons.prop( 'checked', false );
		$.each( types, function( index, data ) {
			buttons.filter( "input.typo3-type-" + data ).prop( 'checked', true );
		});
		buttonset.buttonset( "refresh" );
	},

	checkMajor: function( version ){
		var buttonset = this.buttons.find( ".typo3-branch.ui-buttonset" ),
			buttons =  buttonset.find( "input");

		buttons.prop( 'checked', false );
		buttons.each( function() {
			var button = $( this );
				branch = button.attr( "data-filter" );

			if ( branch.slice( 0, -1 ) == version ) {
				button.prop( 'checked', true );
			}
		});
		buttonset.buttonset( "refresh" );
	},

	checkNonOutdatedBranches: function() {
		var buttonset = this.buttons.find( ".typo3-branch.ui-buttonset" ),
			buttons =  buttonset.find( "input");

		buttons.prop( 'checked', false );
		buttons.each( function() {
			var button = $( this );
				branch = button.attr( "data-filter" );

			if ( branch >= 45 ) {
				button.prop( 'checked', true );
			}
		});
		buttonset.buttonset( "refresh" );
	},

	refreshDefaults: function() {
		this.checkNonOutdatedBranches();
		this.checkVersionTypes( ["release", "regular", "security"] );
		this.refreshFromButtons();
	},

	refreshFromButtons: function( filter ) {
		this.refresh( this._processForm() );
	},

	_initEvents: function() {
		var that = this;

		// add event to buttons
		this._on( this.buttons, {
			click: function( event ){
				if ( $( event.target ).is( "input" ) ) {
					that.refreshFromButtons();
				}
			}
		});

		this._super();
	},

	_drawButtons: function() {
		this.buttons = $( '<form id="buttons" class="ui-helper-clearfix">' ).prependTo( this.element );

		this._drawMajorButtons();
		this._drawBranchesBoxes();
		this._drawTypeBoxes();
		this._drawControlButtons();
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
			text: "show all (" + this.typo3.meta.versions_total + ")",
			click: function( event ) {
				that.buttons.find( "input:checkbox" ).prop( 'checked', true );
				that.buttons.find( ".ui-buttonset" ).buttonset( "refresh" );
				that.chart.isotope({ filter: "" });
				event.preventDefault();
			}
		})
		.appendTo( buttonSet )
		.button();

		$( "<buttton>", {
			text: "show none",
			click: function( event ) {
				that.buttons.find( "input:checkbox" ).prop( 'checked', false );
				that.buttons.find( ".ui-buttonset" ).buttonset( "refresh" );
				that.chart.isotope({ filter: ".major" });
				event.preventDefault();
			}
		})
		.appendTo( buttonSet )
		.button();

		$( "<buttton>", {
			title: "Show all non-dev versions of all maintained branches",
			text: "reset",
			click: function( event ) {
				that.refreshDefaults();
				event.preventDefault();
			}
		})
		.appendTo( buttonSet )
		.button();

		buttonSet.buttonset().appendTo( this.buttons );
	},

	_drawMajorButtons: function() {
		var that = this,
			major = {},
			buttonSet = $( "<div>", {
				"class": "typo3-major"
			});

		$.each( this.typo3.versions, function( branchIndex, branchData ){
			var majorSort = that._convertVersion( branchIndex, "major" );

			if ( !major [ majorSort ] ) {
				major[ majorSort ] = true;

				$( "<buttton>", {
					text: majorSort + ".0",
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

			if ( branchSort == 45 ) {
				icon = "clock";
			}
			if ( branchSort < 45 ) {
				icon = "trash";
			}

			branches[ branchSort ] = {
				name: branchIndex,
				icon: icon,
			};
		});

		this._renderCheckboxGroup( branches , "typo3-branch" );
	},

	_drawTypeBoxes: function() {
		this._renderCheckboxGroup( {
			development: {
				name: "Development",
				icon: "lightbulb",
			},
			release: {
				name: "Release",
				icon: "tag",
			},
			regular: {
				name: "Regular",
				icon: "wrench",
			},
			security: {
				name: "Security",
				icon: "alert",
			}
		}, "typo3-type" );
	},

	_renderCheckboxGroup: function( group, name ) {
		var buttonSet = $( "<div>", {
			"class": name
		});

		$.each( group, function( index, data ){
			var value = name + '-' + index,
				id = 'check-boxgroup-' + value;

			$( '<input>', {
				type: "checkbox",
				name: value,
				value: value,
				id: id,
				"data-filter": index,
				"class": value
			})
			.appendTo( buttonSet )
			.after ( $( '<label for="' + id + '">' + data.name + '</label>' ) )
			.button({
				icons: { secondary: ( data.icon ) ? "ui-icon-" + data.icon : null	}
			});
		});

		buttonSet.buttonset().appendTo( this.buttons );
	}
});

}( jQuery ));