/*!
 * jQuery TYPO3 Version Chart - Button creation and functionality
 * http://typo3versions.felixnagel.com/
 *
 * Copyright 2013-2021 Felix Nagel
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
		var buttonset = this.buttons.find( ".typo3-type.ui-controlgroup" ),
			buttons =  buttonset.find( "input" );

		buttons.prop( "checked", false );
		$.each( types, function( index, data ) {
			buttons.filter( "[value='typo3-type-" + data + "']" ).prop( "checked", true );
		});
		buttonset.controlgroup( "refresh" );
	},

	checkMajor: function( version ){
		var buttonset = this.buttons.find( ".typo3-branch-index.ui-controlgroup" ),
			buttons =  buttonset.find( "input" );

		buttons.prop( "checked", false );
		buttons.filter( ".typo3-major-" + version ).prop( "checked", true );
		buttonset.controlgroup( "refresh" );
	},

	checkNonOutdatedBranches: function() {
		var buttonset = this.buttons.find( ".typo3-branch-index.ui-controlgroup" ),
			buttons =  buttonset.find( "input");

		buttons.prop( "checked", false );
		buttons.not(".trash").prop( "checked", true );
		buttonset.controlgroup( "refresh" );
	},

	showActive: function() {
		this.checkNonOutdatedBranches();
		this.checkVersionTypes( [ "release", "regular", "security" ] );
		this.refreshFromButtons();
	},

	showAll: function() {
		this.buttons.find( "input:checkbox" ).prop( "checked", true );
		this.buttons.find( ".ui-controlgroup" ).controlgroup( "refresh" );
		this.refresh( "" );
	},

	showNone: function() {
		var controlgroups = this.buttons.find( ".ui-controlgroup" );

		controlgroups.filter(":not(.typo3-type)").find( "input:checkbox" ).prop( "checked", false );
		controlgroups.filter(".typo3-type").find( "input:checkbox" ).prop( "checked", true );
		controlgroups.controlgroup( "refresh" );

		this.refresh( ".major" );
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
				buttonset = button.parent( ".ui-controlgroup" );

			if ( buttonset.hasClass( "typo3-type" ) ) {
				types.push( "." + button.val() );
			}
			if ( buttonset.hasClass( "typo3-branch-index" ) ) {
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

		$( "<a>", {
			text: "show all",
			title: "Show all versions (" + this.typo3.versions_total + " releases)",
			click: function( event ) {
				that.showAll();
				event.preventDefault();
			}
		})
		.appendTo( buttonSet )
		.button({
	        icon: "ui-icon-bullet"
        });

		$( "<a>", {
			text: "show active",
			title: "Show all non-dev versions of all maintained branches (" + this.typo3.versions_active_total + " releases)",
			click: function( event ) {
				that.showActive();
				event.preventDefault();
			}
		})
		.appendTo( buttonSet )
		.button({
	        icon: "ui-icon-radio-on"
        });

		$( "<a>", {
			text: "clear",
			title: "Clear all (show no releases)",
			click: function( event ) {
				that.showNone();
				event.preventDefault();
			}
		})
		.appendTo( buttonSet )
		.button({
	        icon: "ui-icon-radio-off"
        });

		buttonSet.controlgroup().appendTo( this.buttons );
	},

	_drawMajorButtons: function() {
		var that = this,
			major = {},
			buttonSet = $( "<div>", {
				"class": "typo3-major"
			});

		this._sortByVersion( this.typo3.versions ).forEach(function( branchIndex ) {
			var majorSort = that._convertVersion( branchIndex, "major" );

			if ( !major[ majorSort ] ) {
				major[ majorSort ] = true;

				$( "<a>", {
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

		buttonSet.controlgroup().appendTo( this.buttons );
	},

	_sortByVersion: function(data) {
		var that = this;

		return Object.keys( data ).sort( function( a, b ) {
			return that._convertVersion( a ).floatval() > that._convertVersion( b ).floatval();
		} ).reverse();
	},

	_drawBranchesBoxes: function() {
		var that = this,
			branches = [];

		$.each( this.typo3.versions, function( branchIndex, branchData ){
			var icon = false;

			// Outdated
			if ( !branchData.active && branchData.stable !== "0.0.0" ) {
				icon = "trash";
			}
			// ELTS
			if ( branchData.elts ) {
				icon = "locked";
			}

			branches[ that._formatVersion( branchIndex ) ] = {
				name: branchIndex,
				icon: icon,
				css: "typo3-major-" + that._convertVersion( branchIndex, "major" )
			};
		});

		this._renderCheckboxGroup( branches , "typo3-branch-index" );
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
			}),
			process = function( index ) {
				var data = group[ index ],
					value = name + "-" + index,
					id = "check-boxgroup-" + value,
					icon = "";

				if ( data.icon ) {
					icon = "<span class='ui-icon ui-icon-" + data.icon + "'></span>";
				}

				$( "<input>", {
					type: "checkbox",
					name: value,
					value: value,
					id: id
				})
				.addClass( data.css )
				.addClass( data.icon )
				.appendTo( buttonSet )
				.after ( $( "<label for='" + id + "'>" + data.name + icon + "</label>" ) )
				// Empty options are needed for the checkbox to be rendered (no idea why)
				.button({});
			};

		if (name === "typo3-branch-index") {
			this._sortByVersion( group ).forEach(process);
		} else {
			Object.keys( group ).forEach(process);
		}


		buttonSet.controlgroup().appendTo( this.buttons );
	}
});

}( jQuery ));
