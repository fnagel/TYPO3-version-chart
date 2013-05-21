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
					"4.5.0rc3": {
						"version": "4.5.0rc3",
						"date": "2011-01-25 17:24:55 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0rc3.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0rc3.tar.gz"
						}
					},						
					"4.5.0rc2": {
						"version": "4.5.0rc2",
						"date": "2011-01-25 02:25:20 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0rc2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0rc2.tar.gz"
						}
					},				
					"4.5.0rc1": {
						"version": "4.5.0rc1",
						"date": "2011-01-22 13:36:13 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0rc1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0rc1.tar.gz"
						}
					},			
					"4.5.0beta4": {
						"version": "4.5.0beta4",
						"date": "2011-01-12 17:44:04 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0beta4.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0beta4.tar.gz"
						}
					},		
					"4.5.0beta3": {
						"version": "4.5.0beta3",
						"date": "2010-12-28 09:39:26 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0beta3.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0beta3.tar.gz"
						}
					},	
					"4.5.0beta2": {
						"version": "4.5.0beta2",
						"date": "2010-12-01 16:57:36 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0beta2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0beta2.tar.gz"
						}
					},
					"4.5.0beta1": {
						"version": "4.5.0beta1",
						"date": "2010-11-17 19:24:21 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0beta1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0beta1.tar.gz"
						}
					},
					"4.5.0alpha3": {
						"version": "4.5.0alpha3",
						"date": "2010-10-20 02:39:31 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0alpha3.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0alpha3.tar.gz"
						}
					},
					"4.5.0alpha2": {
						"version": "4.5.0alpha2",
						"date": "2010-09-22 01:55:23 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0alpha2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0alpha2.tar.gz"
						}
					},
					"4.5.0alpha1": {
						"version": "4.5.0alpha1",
						"date": "2010-08-24 07:41:55 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0alpha1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-5-0alpha1.tar.gz"
						}
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
