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
				autoOpen: ( window.location.search.match( /[\?&]dialog=0/ ) ) ? 0 : 1
			}
		}
	},

	_create: function() {
		this._addDialog();
		this._super();
	},

	start: function( data ) {
		var that = this,
			buttonsOptions = {
				"Show all": function() {
					that.options.dialog.element.dialog( "close" );
				},
				"Show active (default)": function() {
					that.refreshDefaults();
					that.options.dialog.element.dialog( "close" );
				}
			};

		this._super( data );
		// ready callback is fired right before this line
		this.options.dialog.element.dialog( "option", "buttons", buttonsOptions );


	},

	_addDialog: function() {
		var that = this,
			dialogOptions = $.extend({
					open: function() {
						$('body > .ui-widget-overlay').on('click', function() {
							that.options.dialog.element.dialog('close');
						});
					}
				},
				this.options.dialog.options
			);

		this._logElement = $( '<div class="log">' ).appendTo( this.options.dialog.element );

		this.options.dialog.element.dialog( dialogOptions );
	},

	_log: function( msg ) {
		this._super( msg );
		this._logElement.html( "Status: " + msg );
	}
});

}( jQuery ));
