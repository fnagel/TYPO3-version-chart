/*!
 * jQuery TYPO3 Version Chart - TYPO3 additional data addition
 * http://www.felixnagel.com/typo3-version-chart
 *
 * Copyright 2013 Felix Nagel
 */
(function( $ ) {

$.widget( "ui.typo3VersionChart", $.ui.typo3VersionChart, {
	options: {	
		// additional data to merge with the original json
		typo3data: {
			"4.4": {
				"releases": {
					"4.4.0": {
						breaking_changes: true
					},
					"4.4.1": {
						breaking_changes: true
					},
					"4.4.5": {
						breaking_changes: true
					},
					"4.4.9": {
						breaking_changes: true
					},
					"4.4.14": {
						breaking_changes: true
					}
				}
			},
			"4.5": {
				"releases": {
					"4.5.0": {
						breaking_changes: true
					},
					"4.5.1": {
						breaking_changes: true
					},
					"4.5.4": {
						breaking_changes: true
					},
					"4.5.14": {
						breaking_changes: true
					},
					"4.5.24": {
						breaking_changes: true
					}
				}
			},
			"4.7": {
				"releases": {
					"4.7.0": {
						breaking_changes: true
					},
					"4.7.9": {
						breaking_changes: true
					}
				}
			},
			"6.0": {
				"releases": {
					"6.0.3": {
						breaking_changes: true
					}
				}
			}
		}
	}
});

}( jQuery ));
