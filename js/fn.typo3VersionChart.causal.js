/*!
 * jQuery TYPO3 Version Chart - Casual.ch TYPO3 JSON v2
 * http://typo3versions.felixnagel.com/
 *
 * Copyright 2015 Felix Nagel
 */
(function( $ ) {

$.widget( "ui.typo3VersionChartV2", $.ui.typo3VersionChart, {
	options: {
		ajax: {
			dataType: "jsonp",
			url: "https://www.causal.ch/?eID=extensions&route=/v2"
		}
	},

	_sourceIsValid: function( data ) {
		return ( data.payload && data.payload.branches && data.payload.latest );
	},

	_initSource: function( data ) {
		this.typo3 = {
			latest: data.payload.latest,
			versions_total: 0
		};

		this.typo3.versions = data.payload.branches;
	}

});

}( jQuery ));
