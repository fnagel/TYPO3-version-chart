/*!
 * jQuery TYPO3 Version Chart - TYPO3 additional data addition
 * http://www.felixnagel.com/typo3-version-chart
 *
 * Copyright 2013 Felix Nagel
 */
(function( $ ) {

$.widget( "ui.typo3VersionChart", $.ui.typo3VersionChart, {
	options: {
		dialog: {	
			element: null,
			options: {
				title: "TYPO3 Version Chart",
				width: 500,
				modal: true,
				autoOpen: ( window.location.search.match( /[\?&]disable-dialog\b/ ) ) ? 0 : 1
			}
		}
	},	
	
	_create: function() {
		this._addDialog();		
		this._super();
	},
	
	_addDialog: function() {			
		var that = this,
			dialogOptions = $.extend({			
					open: function() {
						$('body > .ui-widget-overlay').on('click', function() {
							that.options.dialog.element.dialog('close');
						});
					},
					buttons: {
						"Report issue": function() {
							window.open( "https://github.com/fnagel/TYPO3-version-chart/issues/new", '_newtab' );
						},
						"Fork me on GitHub": function() {
							window.open( "https://github.com/fnagel/TYPO3-version-chart", '_newtab' );
						},
						"Close": function() {
							that.options.dialog.element.dialog( "close" );
						}
					},
					close: function() {
						that.refreshDefaults();
						// remove close callback event
						that.options.dialog.element.dialog( "option", "close", null );
					} 
				}, 
				this.options.dialog.options
			);
	
		this.options.dialog.element.dialog( dialogOptions );
	}
});

}( jQuery ));
