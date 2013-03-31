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
		this._super();
		
		this._drawButtons();
		this._delay( function(){
			this.checkNonOutdatedBranches();
			this.checkVersionTypes( ["release", "regular", "security"] );
			this.refreshFromButtons();
		}, 1000);		
	},

	checkVersionTypes: function( types ){	
		var buttonset = this.buttons.find( ".typo3-type.ui-buttonset" );			
		
		$.each( types, function( index, data ) {	
			console.log(buttonset.find( "input.typo3-type-" + data ));
			buttonset.find( "input.typo3-type-" + data ).prop( 'checked', true );		
		});		
		buttonset.buttonset( "refresh" );
	},
	
	checkNonOutdatedBranches: function(){	
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
	
	refreshFromButtons: function( filter ) {
		this.refresh( this._processForm() );
	},

	_initEvents: function() {
		var that = this;
		
		// add event to buttons
		this._on( this.buttons, {
			click: function( event ){
				if ( $( event.target ).is( "input" ) ) {
				}
			}
		});

		this._super();
	},

	_drawButtons: function() {
		this.buttons = $( '<form id="buttons" class="ui-helper-clearfix">' ).prependTo( this.element );

		this._drawBranchesButtons();
		this._drawReleaseTypeButtons();
		this._drawControlButtons();
	},

	_processForm: function() {
		var that = this,
			types = [ ".major" ],
			branches = [],
			selector = [];

		$.each( that.buttons.find( "input:checked" ), function(){
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
		var that = this;

		var buttonSet = $( "<div>", {
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

		buttonSet.buttonset().appendTo( this.buttons );
	},

	_drawBranchesButtons: function() {
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

	_drawReleaseTypeButtons: function() {
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
