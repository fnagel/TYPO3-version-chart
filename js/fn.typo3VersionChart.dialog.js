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
			showLog: window.location.search.match( /[\?&]log\b/ ) || 1,
			element: null,
			options: {
				title: "TYPO3 Version Chart",
				width: 500,
				modal: true,
				autoOpen: window.location.search.match( /[\?&]dialog\b/ ) || 1
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
						"Show all": function() {
							that.options.dialog.element.dialog( "close" );
						},
						"Show active & non-dev": function() {
							that.refreshDefaults();
							that.options.dialog.element.dialog( "close" );
						}
					}
				},
				this.options.dialog.options
			);

		if ( this.options.dialog.showLog ) {
			this._logQueue = new Array();
			this._logFireTimeout = true;
			
			this._logElement = $( '<div class="log">' )
				.appendTo( this.options.dialog.element )
				.before( "<br /><br /><p>Status:</p>" );
		}

		this.options.dialog.element.dialog( dialogOptions );
	},

	_log: function( msg ) {
		this._super( msg );
		
		if ( this.options.dialog.showLog ) {
			this._logQueue.unshift( msg );
			
			if ( this._logFireTimeout ) {
				this._updateLog();
			}
		}
	},

	_updateLog: function( msg ) {
		var that = this;
		
		this._logFireTimeout = false;		
		this._logElement.prepend( "<p>" + this._logQueue.pop() + "</p>" );
		
		window.setTimeout( function() {	
			if ( that._logQueue.length ) {
				that._updateLog()	
			} else {
				that._logFireTimeout = true;
			}	
		}, 150 );
	}
});

}( jQuery ));
