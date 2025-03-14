/*!
 * jQuery TYPO3 Version Chart - TYPO3 additional data
 * http://typo3versions.felixnagel.com/
 *
 * Copyright 2013-2025 Felix Nagel
 */
(function( $ ) {

$.widget( "ui.typo3VersionChart", $.ui.typo3VersionChart, {
	options: {
		// Additional data to merge with the original json
		typo3data: {
			"13": {
				"releases": {
					"13.4.3": {
						"breaking_changes": true
					},
					"13.4.0": {
						"type": "release"
					},
					"13.3.0": {
						"type": "release"
					},
					"13.2.0": {
						"type": "release"
					},
					"13.1.0": {
						"type": "release"
					},
					"13.0.0": {
						"type": "release",
						"breaking_changes": true
					}
				}
			},
			"12": {
				"releases": {
					"12.4.18": {
						"breaking_changes": true
					},
					"12.4.15": {
						"breaking_changes": true
					},
					"12.4.12": {
						"breaking_changes": true
					},
					"12.4.0": {
						"type": "release"
					},
					"12.3.0": {
						"type": "release"
					},
					"12.2.0": {
						"type": "release"
					},
					"12.1.0": {
						"type": "release"
					},
					"12.0.0": {
						"type": "release",
						"breaking_changes": true
					}
				}
			},
			"11": {
				"releases": {
					"11.5.43": {
						"version": "11.5.43",
						"date": "2025-01-21 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"11.5.42": {
						"version": "11.5.42",
						"date": "2025-01-14 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"11.5.35": {
						"breaking_changes": true
					},
					"11.5.23": {
						"breaking_changes": true
					},
					"11.5.18": {
						"breaking_changes": true
					},
					"11.5.14": {
						"breaking_changes": true
					},
					"11.5.11": {
						"breaking_changes": true
					},
					"11.5.0": {
						"type": "release"
					},
					"11.4.0": {
						"type": "release"
					},
					"11.3.0": {
						"type": "release"
					},
					"11.2.0": {
						"type": "release"
					},
					"11.1.0": {
						"type": "release"
					},
					"11.0.0": {
						"type": "release",
						"breaking_changes": true
					}
				}
			},
			"10": {
				"releases": {
					"10.4.49": {
						"version": "10.4.49",
						"date": "2025-01-21 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"10.4.48": {
						"version": "10.4.48",
						"date": "2025-01-14 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"10.4.47": {
						"version": "10.4.47",
						"date": "2024-10-15 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"10.4.46": {
						"version": "10.4.46",
						"date": "2024-08-19 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"10.4.45": {
						"version": "10.4.45",
						"date": "2024-05-14 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"10.4.44": {
						"version": "10.4.44",
						"date": "2024-02-14 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"10.4.43": {
						"version": "10.4.43",
						"date": "2024-02-13 12:00:00 UTC",
						"elts": true,
						"type": "security",
						"breaking_changes": true
					},
					"10.4.42": {
						"version": "10.4.42",
						"date": "2023-11-21 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"10.4.41": {
						"version": "10.4.41",
						"date": "2023-11-14 12:00:00 UTC",
						"elts": true,
						"type": "security",
						"breaking_changes": true
					},
					"10.4.40": {
						"version": "10.4.40",
						"date": "2023-07-25 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"10.4.39": {
						"version": "10.4.39",
						"date": "2023-07-25 12:00:00 UTC",
						"elts": true,
						"type": "security",
						"breaking_changes": true
					},
					"10.4.38": {
						"version": "10.4.38",
						"date": "2023-07-04 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"10.4.19": {
						"breaking_changes": true
					},
					"10.4.11": {
						"breaking_changes": true
					},
					"10.4.10": {
						"breaking_changes": true
					},
					"10.4.6": {
						"breaking_changes": true
					},
					"10.4.4": {
						"breaking_changes": true
					},
					"10.4.1": {
						"breaking_changes": true
					},
					"10.4.0": {
						"breaking_changes": true,
						"type": "release"
					},
					"10.3.0": {
						"type": "release"
					},
					"10.2.0": {
						"type": "release"
					},
					"10.1.0": {
						"type": "release"
					},
					"10.0.0": {
						"type": "release",
						"breaking_changes": true
					}
				}
			},
			"9": {
				"releases": {
					"9.5.50": {
						"version": "9.5.50",
						"date": "2025-01-21 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"9.5.49": {
						"version": "9.5.49",
						"date": "2025-01-14 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"9.5.48": {
						"version": "9.5.48",
						"date": "2024-05-14 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"9.5.47": {
						"version": "9.5.47",
						"date": "2024-02-14 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"9.5.46": {
						"version": "9.5.46",
						"date": "2024-02-13 12:00:00 UTC",
						"elts": true,
						"type": "security",
						"breaking_changes": true
					},
					"9.5.45": {
						"version": "9.5.45",
						"date": "2023-11-21 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"9.5.44": {
						"version": "9.5.44",
						"date": "2023-11-14 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"9.5.43": {
						"version": "9.5.43",
						"date": "2023-07-25 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"9.5.42": {
						"version": "9.5.42",
						"date": "2023-07-25 12:00:00 UTC",
						"elts": true,
						"type": "security",
						"breaking_changes": true
					},
					"9.5.41": {
						"version": "9.5.41",
						"date": "2023-07-04 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"9.5.40": {
						"version": "9.5.40",
						"date": "2023-02-07 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"9.5.39": {
						"version": "9.5.39",
						"date": "2022-12-15 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"9.5.38": {
						"version": "9.5.38",
						"date": "2022-12-13 12:00:00 UTC",
						"elts": true,
						"type": "security",
						"breaking_changes": true
					},
					"9.5.37": {
						"version": "9.5.37",
						"date": "2022-09-12 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"9.5.36": {
						"version": "9.5.36",
						"date": "2022-06-15 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"9.5.35": {
						"version": "9.5.35",
						"date": "2022-06-14 12:00:00 UTC",
						"elts": true,
						"type": "security",
						"breaking_changes": true
					},
					"9.5.34": {
						"version": "9.5.34",
						"date": "2022-04-12 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"9.5.33": {
						"version": "9.5.33",
						"date": "2022-02-22 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"9.5.32": {
						"version": "9.5.32",
						"date": "2021-11-11 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},


					"9.5.19": {
						"breaking_changes": true
					},
					"9.5.15": {
						"breaking_changes": true
					},
					"9.5.0": {
						"type": "release"
					},
					"9.4.0": {
						"type": "release"
					},
					"9.3.0": {
						"type": "release"
					},
					"9.2.0": {
						"type": "release"
					},
					"9.1.0": {
						"type": "release"
					},
					"9.0.0": {
						"type": "release",
						"breaking_changes": true
					}
				}
			},
			"8": {
				"releases": {
					"8.7.58": {
						"version": "8.7.58",
						"date": "2024-02-14 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"8.7.57": {
						"version": "8.7.57",
						"date": "2024-02-13 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"8.7.56": {
						"version": "8.7.56",
						"date": "2023-11-21 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"8.7.55": {
						"version": "8.7.55",
						"date": "2023-11-14 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"8.7.54": {
						"version": "8.7.54",
						"date": "2023-07-25 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"8.7.53": {
						"version": "8.7.53",
						"date": "2023-07-25 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"8.7.52": {
						"version": "8.7.52",
						"date": "2022-07-04 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"8.7.51": {
						"version": "8.7.51",
						"date": "2023-07-02 12:00:00 UTC",
						"elts": true,
						"type": "security",
						"breaking_changes": true
					},
					"8.7.50": {
						"version": "8.7.50",
						"date": "2022-12-15 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"8.7.49": {
						"version": "8.7.49",
						"date": "2022-12-13 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"8.7.48": {
						"version": "8.7.48",
						"date": "2022-09-12 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"8.7.47": {
						"version": "8.7.47",
						"date": "2022-02-22 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"8.7.46": {
						"version": "8.7.46",
						"date": "2022-02-22 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"8.7.45": {
						"version": "8.7.45",
						"date": "2022-02-22 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"8.7.44": {
						"version": "8.7.44",
						"date": "2021-11-11 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"8.7.43": {
						"version": "8.7.43",
						"date": "2021-08-16 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"8.7.42": {
						"version": "8.7.42",
						"date": "2021-08-10 12:00:00 UTC",
						"elts": true,
						"type": "security",
						"breaking_changes": true
					},
					"8.7.41": {
						"version": "8.7.41",
						"date": "2021-07-20 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"8.7.40": {
						"version": "8.7.40",
						"date": "2021-03-16 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"8.7.39": {
						"version": "8.7.39",
						"date": "2020-12-18 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"8.7.38": {
						"version": "8.7.38",
						"date": "2020-11-17 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"8.7.37": {
						"version": "8.7.37",
						"date": "2020-09-08 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"8.7.36": {
						"version": "8.7.36",
						"date": "2020-07-28 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"8.7.35": {
						"version": "8.7.35",
						"date": "2020-07-07 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"8.7.34": {
						"version": "8.7.34",
						"date": "2020-05-19 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"8.7.33": {
						"version": "8.7.33",
						"date": "2020-05-12 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"8.7.25": {
						"breaking_changes": true
					},
					"8.0.0": {
						"breaking_changes": true
					}
				}
			},
			"7": {
				"releases": {
					"7.6.56": {
						"version": "7.6.56",
						"date": "2022-02-22 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"7.6.55": {
						"version": "7.6.55",
						"date": "2021-11-11 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"7.6.54": {
						"version": "7.6.54",
						"date": "2021-08-16 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"7.6.53": {
						"version": "7.6.53",
						"date": "2021-08-10 12:00:00 UTC",
						"elts": true,
						"type": "security",
						"breaking_changes": true
					},
					"7.6.52": {
						"version": "7.6.52",
						"date": "2021-07-20 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"7.6.51": {
						"version": "7.6.51",
						"date": "2021-03-16 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"7.6.50": {
						"version": "7.6.50",
						"date": "2020-12-18 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"7.6.49": {
						"version": "7.6.49",
						"date": "2020-11-17 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"7.6.48": {
						"version": "7.6.48",
						"date": "2020-11-17 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"7.6.47": {
						"version": "7.6.47",
						"date": "2020-09-08 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"7.6.46": {
						"version": "7.6.46",
						"date": "2020-07-28 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"7.6.45": {
						"version": "7.6.45",
						"date": "2020-07-07 12:01:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"7.6.44": {
						"version": "7.6.44",
						"date": "2020-07-07 12:00:00 UTC",
						"elts": true,
						"type": "regular",
						"breaking_changes": true
					},
					"7.6.43": {
						"version": "7.6.43",
						"date": "2020-05-19 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"7.6.42": {
						"version": "7.6.42",
						"date": "2020-05-12 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"7.6.41": {
						"version": "7.6.41",
						"date": "2020-01-28 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"7.6.40": {
						"version": "7.6.40",
						"date": "2019-12-17 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"7.6.39": {
						"version": "7.6.39",
						"date": "2019-08-20 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"7.6.38": {
						"version": "7.6.38",
						"date": "2019-06-25 12:00:00 UTC",
						"elts": true,
						"type": "security",
						"breaking_changes": true
					},
					"7.6.37": {
						"version": "7.6.37",
						"date": "2019-05-08 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"7.6.36": {
						"version": "7.6.36",
						"date": "2019-05-07 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"7.6.35": {
						"version": "7.6.35",
						"date": "2019-03-21 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"7.6.34": {
						"version": "7.6.34",
						"date": "2019-01-23 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"7.6.33": {
						"version": "7.6.33",
						"date": "2019-01-22 12:00:00 UTC",
						"elts": true,
						"type": "security",
						"breaking_changes": true
					},
					"7.6.11": {
						"breaking_changes": true
					},
					"7.0.0": {
						"breaking_changes": true
					}
				}
			},
			"6.2": {
				"releases": {
					"6.2.57": {
						"version": "6.2.57",
						"date": "2021-03-16 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.56": {
						"version": "6.2.56",
						"date": "2020-12-18 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"6.2.55": {
						"version": "6.2.55",
						"date": "2020-11-17 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"6.2.54": {
						"version": "6.2.54",
						"date": "2020-11-17 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.53": {
						"version": "6.2.53",
						"date": "2020-09-08 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"6.2.52": {
						"version": "6.2.52",
						"date": "2020-07-28 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.51": {
						"version": "6.2.51",
						"date": "2020-07-07 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"6.2.50": {
						"version": "6.2.50",
						"date": "2020-05-19 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"6.2.49": {
						"version": "6.2.49",
						"date": "2020-05-12 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.48": {
						"version": "6.2.48",
						"date": "2020-01-28 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"6.2.47": {
						"version": "6.2.47",
						"date": "2019-12-17 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.46": {
						"version": "6.2.46",
						"date": "2019-08-20 12:00:00 UTC",
						"elts": true,
						"type": "regular"
					},
					"6.2.45": {
						"version": "6.2.45",
						"date": "2019-07-02 12:00:00 UTC",
						"elts": true,
						"type": "regular",
						"breaking_changes": true
					},
					"6.2.44": {
						"version": "6.2.44",
						"date": "2018-06-25 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.43": {
						"version": "6.2.43",
						"date": "2018-05-08 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.42": {
						"version": "6.2.42",
						"date": "2018-05-07 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.41": {
						"version": "6.2.41",
						"date": "2018-03-19 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.40": {
						"version": "6.2.40",
						"date": "2019-01-22 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.39": {
						"version": "6.2.39",
						"date": "2018-12-11 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.38": {
						"version": "6.2.38",
						"date": "2018-07-12 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.37": {
						"version": "6.2.37",
						"date": "2018-05-22 12:00:00 UTC",
						"elts": true,
						"type": "release"
					},
					"6.2.36": {
						"version": "6.2.36",
						"date": "2018-03-13 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.35": {
						"version": "6.2.35",
						"date": "2017-09-06 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.34": {
						"version": "6.2.34",
						"date": "2017-09-05 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.33": {
						"version": "6.2.33",
						"date": "2017-08-29 12:00:00 UTC",
						"elts": true,
						"type": "release"
					},
					"6.2.32": {
						"version": "6.2.32",
						"date": "2017-08-29 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"6.2.0": {
						"breaking_changes": true
					}
				}
			},
			"6.1": {
				"releases": {
					"6.1.0": {
						"breaking_changes": true
					}
				}
			},
			"6.0": {
				"releases": {
					"6.0.0": {
						"breaking_changes": true
					},
					"6.0.3": {
						"breaking_changes": true
					}
				}
			},
			"4.7": {
				"releases": {
					"4.7.9": {
						"breaking_changes": true
					},
					"4.7.0": {
						"breaking_changes": true
					}
				}
			},
			"4.5": {
				"releases": {
					"4.5.50": {
						"version": "4.5.50",
						"date": "2017-01-09 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"4.5.49": {
						"version": "4.5.49",
						"date": "2017-11-23 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"4.5.48": {
						"version": "4.5.48",
						"date": "2016-07-20 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"4.5.47": {
						"version": "4.5.47",
						"date": "2016-05-23 12:00:00 UTC",
						"elts": true,
						"type": "elts"
					},
					"4.5.46": {
						"version": "4.5.46",
						"date": "2016-04-18 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"4.5.45": {
						"version": "4.5.45",
						"date": "2016-02-24 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"4.5.44": {
						"version": "4.5.44",
						"date": "2016-02-16 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"4.5.43": {
						"version": "4.5.43",
						"date": "2015-12-15 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"4.5.42": {
						"version": "4.5.42",
						"date": "2015-09-08 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"4.5.41": {
						"version": "4.5.41",
						"date": "2015-07-01 12:00:00 UTC",
						"elts": true,
						"type": "security"
					},
					"4.5.24": {
						"breaking_changes": true
					},
					"4.5.14": {
						"breaking_changes": true
					},
					"4.5.4": {
						"breaking_changes": true
					},
					"4.5.1": {
						"breaking_changes": true
					},
					"4.5.0": {
						"breaking_changes": true
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
					}
				}
			},
			"4.4": {
				"releases": {
					"4.4.14": {
						"breaking_changes": true
					},
					"4.4.9": {
						"breaking_changes": true
					},
					"4.4.5": {
						"breaking_changes": true
					},
					"4.4.1": {
						"breaking_changes": true
					},
					"4.4.0": {
						"breaking_changes": true
					},
					"4.4.0RC2": {
						"version": "4.4.0RC2",
						"date": "2010-06-20 14:37:20 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0RC2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0RC2.tar.gz"
						}
					},
					"4.4.0RC1": {
						"version": "4.4.0RC1",
						"date": "2010-06-17 05:54:00 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0RC1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0RC1.tar.gz"
						}
					},
					"4.4.0beta3": {
						"version": "4.4.0beta3",
						"date": "2010-05-31 08:42:43 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0beta3.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0beta3.tar.gz"
						}
					},
					"4.4.0beta2": {
						"version": "4.4.0beta2",
						"date": "2010-05-03 09:38:56 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0beta2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0beta2.tar.gz"
						}
					},
					"4.4.0beta1": {
						"version": "4.4.0beta1",
						"date": "2010-04-14 23:58:46 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0beta1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0beta1.tar.gz"
						}
					},
					"4.4.0alpha2": {
						"version": "4.4.0alpha2",
						"date": "2010-03-16 03:47:24 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0alpha2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0alpha2.tar.gz"
						}
					},
					"4.4.0alpha1": {
						"version": "4.4.0alpha1",
						"date": "2010-02-23 03:31:44 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0alpha1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-4-0alpha1.tar.gz"
						}
					}
				}
			},
			"4.3": {
				"releases": {
					"4.3.0RC2": {
						"version": "4.3.0RC2",
						"date": "2009-11-25 15:45:49 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-3-0RC2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-3-0RC2.tar.gz"
						}
					},
					"4.3.0RC1": {
						"version": "4.3.0RC1",
						"date": "2009-11-18 01:01:35 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-3-0RC1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-3-0RC1.tar.gz"
						}
					},
					"4.3.0beta3": {
						"version": "4.3.0beta3",
						"date": "2009-11-08 11:59:31 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-3-0beta3.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-3-0beta3.tar.gz"
						}
					},
					"4.3.0beta2": {
						"version": "4.3.0beta2",
						"date": "2009-10-22 05:21:51 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-3-0beta2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-3-0beta2.tar.gz"
						}
					},
					"4.3.0beta1": {
						"version": "4.3.0beta1",
						"date": "2009-10-01 11:27:40 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-3-0beta1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-3-0beta1.tar.gz"
						}
					},
					"4.3.0alpha3": {
						"version": "4.3.0alpha3",
						"date": "2009-05-23 08:35:00 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-3-0alpha3.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-3-0alpha3.tar.gz"
						}
					},
					"4.3.0alpha2": {
						"version": "4.3.0alpha2",
						"date": "2009-03-11 11:22:42 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-3-0alpha2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-3-0alpha2.tar.gz"
						}
					},
					"4.3.0alpha1": {
						"version": "4.3.0alpha1",
						"date": "2008-11-12 11:43:55 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-3-0alpha1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-3-0alpha1.tar.gz"
						}
					}
				}
			},
			"4.2": {
				"releases": {
					"4.2.7": {
						"version": "4.2.7",
						"date": "2009-07-02 06:00:51 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-7.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-7.tar.gz"
						}
					},
					"4.2.6": {
						"version": "4.2.6",
						"date": "2009-02-10 00:46:18 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-6.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-6.tar.gz"
						}
					},
					"4.2.5": {
						"version": "4.2.5",
						"date": "2009-01-24 07:38:01 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-5.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-5.tar.gz"
						}
					},
					"4.2.4": {
						"version": "4.2.4",
						"date": "2009-01-20 07:44:45 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-4.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-4.tar.gz"
						}
					},
					"4.2.3": {
						"version": "4.2.3",
						"date": "2008-11-10 19:13:19 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-3.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-3.tar.gz"
						}
					},
					"4.2.2": {
						"version": "4.2.2",
						"date": "2008-10-06 02:34:01 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-2.tar.gz"
						}
					},
					"4.2.1": {
						"version": "4.2.1",
						"date": "2008-06-11 01:20:24 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-1.tar.gz"
						}
					},
					"4.2.0": {
						"version": "4.2.0",
						"date": "2008-05-24 04:50:28 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0.tar.gz"
						}
					},
					"4.2.0RC2": {
						"version": "4.2.0RC2",
						"date": "2008-05-24 04:50:04 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0RC2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0RC2.tar.gz"
						}
					},
					"4.2.0RC1": {
						"version": "4.2.0RC1",
						"date": "2008-05-24 04:49:09 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0RC1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0RC1.tar.gz"
						}
					},
					"4.2.0beta3": {
						"version": "4.2.0beta3",
						"date": "2008-05-24 04:49:00 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-2-0beta3.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0beta3.tar.gz"
						}
					},
					"4.2.0beta2a": {
						"version": "4.2.0beta2a",
						"date": "2008-05-24 04:48:49 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-2-0beta2a.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0beta2a.tar.gz"
						}
					},
					"4.2.0beta2": {
						"version": "4.2.0beta2",
						"date": "2008-05-24 04:48:34 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-2-0beta2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0beta2.tar.gz"
						}
					},
					"4.2.0beta1a": {
						"version": "4.2.0beta1a",
						"date": "2008-05-24 04:47:56 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-2-0beta1a.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0beta1a.tar.gz"
						}
					},
					"4.2.0beta1": {
						"version": "4.2.0beta1",
						"date": "2008-05-24 04:47:45 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-2-0beta1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0beta1.tar.gz"
						}
					},
					"4.2.0alpha3": {
						"version": "4.2.0alpha3",
						"date": "2008-01-16 01:43:55 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-2-0alpha3.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0alpha3.tar.gz"
						}
					},
					"4.2.0alpha2": {
						"version": "4.2.0alpha2",
						"date": "2007-11-15 12:41:55 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-2-0alpha2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0alpha2.tar.gz"
						}
					},
					"4.2.0alpha1": {
						"version": "4.2.0alpha1",
						"date": "2007-09-07 06:15:10 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-2-0alpha1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-2-0alpha1.tar.gz"
						}
					}
				}
			},
			"4.1": {
				"releases": {
					"4.1.11": {
						"version": "4.1.11",
						"date": "2009-07-02 02:32:06 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-11.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-11.tar.gz"
						}
					},
					"4.1.10": {
						"version": "4.1.10",
						"date": "2009-02-10 00:29:13 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-10.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-10.tar.gz"
						}
					},
					"4.1.9": {
						"version": "4.1.9",
						"date": "2009-01-24 07:23:58 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-9.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-9.tar.gz"
						}
					},
					"4.1.8": {
						"version": "4.1.8",
						"date": "2009-01-20 04:35:31 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-8.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-8.tar.gz"
						}
					},
					"4.1.7": {
						"version": "4.1.7",
						"date": "2008-06-11 01:34:28 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-7.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-7.tar.gz"
						}
					},
					"4.1.6": {
						"version": "4.1.6",
						"date": "2008-03-03 11:34:16 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-6.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-6.tar.gz"
						}
					},
					"4.1.5": {
						"version": "4.1.5",
						"date": "2007-12-14 05:19:50 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-5.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-5.tar.gz"
						}
					},
					"4.1.4": {
						"version": "4.1.4",
						"date": "2007-12-10 11:00:48 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-4.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-4.tar.gz"
						}
					},
					"4.1.3": {
						"version": "4.1.3",
						"date": "2007-10-22 13:19:15 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-3.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-3.tar.gz"
						}
					},
					"4.1.2": {
						"version": "4.1.2",
						"date": "2007-07-16 12:22:44 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-2.tar.gz"
						}
					},
					"4.1.1": {
						"version": "4.1.1",
						"date": "2007-04-02 15:11:06 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-1.tar.gz"
						}
					},
					"4.1.0": {
						"version": "4.1.0",
						"date": "2007-03-05 16:59:41 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-0.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-0.tar.gz"
						}
					},
					"4.1.0RC2": {
						"version": "4.1.0RC2",
						"date": "2007-02-20 20:44:38 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-0RC2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-0RC2.tar.gz"
						}
					},
					"4.1.0RC1": {
						"version": "4.1.0RC1",
						"date": "2007-02-06 16:34:46 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-0RC1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-1-0RC1.tar.gz"
						}
					}
				}
			},
			"4.0": {
				"releases": {
					"4.0.12": {
						"version": "4.0.12",
						"date": "2009-02-10 00:12:39 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-12.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-12.tar.gz"
						}
					},
					"4.0.11": {
						"version": "4.0.11",
						"date": "2009-01-24 07:14:34 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-11.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-11.tar.gz"
						}
					},
					"4.0.10": {
						"version": "4.0.10",
						"date": "2009-01-20 05:47:31 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-10.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-10.tar.gz"
						}
					},
					"4.0.9": {
						"version": "4.0.9",
						"date": "2008-06-11 01:46:14 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-9.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-9.tar.gz"
						}
					},
					"4.0.8": {
						"version": "4.0.8",
						"date": "2007-12-10 11:47:31 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-8.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-8.tar.gz"
						}
					},
					"4.0.7": {
						"version": "4.0.7",
						"date": "2007-07-16 12:35:39 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-7.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-7.tar.gz"
						}
					},
					"4.0.6": {
						"version": "4.0.6",
						"date": "2007-04-02 15:11:47 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-6.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-6.tar.gz"
						}
					},
					"4.0.5": {
						"version": "4.0.5",
						"date": "2007-02-20 20:41:10 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-5.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-5.tar.gz"
						}
					},
					"4.0.4": {
						"version": "4.0.4",
						"date": "2007-01-11 08:27:57 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-4.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-4.tar.gz"
						}
					},
					"4.0.3": {
						"version": "4.0.3",
						"date": "2006-12-11 04:00:22 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-3.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-3.tar.gz"
						}
					},
					"4.0.2": {
						"version": "4.0.2",
						"date": "2006-09-24 05:41:46 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-2.tar.gz"
						}
					},
					"4.0.1": {
						"version": "4.0.1",
						"date": "2006-08-01 09:30:23 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-1.tar.gz"
						}
					},
					"4.0.0": {
						"version": "4.0.0",
						"date": "2006-04-07 05:28:18 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-0.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-0.tar.gz"
						}
					},
					"4.0.0rc4": {
						"version": "4.0.0rc4",
						"date": "2007-02-20 20:44:38 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-0rc4.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-0rc4.tar.gz"
						}
					},
					"4.0.0rc2": {
						"version": "4.0.0rc2",
						"date": "2007-02-20 20:44:38 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-0rc2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-0rc2.tar.gz"
						}
					},
					"4.0.0rc1": {
						"version": "4.0.0rc1",
						"date": "2007-02-06 16:34:46 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-0rc1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-0rc1.tar.gz"
						}
					},
					"4.0.0beta3": {
						"version": "4.0.0beta3",
						"date": "2009-11-08 11:59:31 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-0-0beta3.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-0beta3.tar.gz"
						}
					},
					"4.0.0beta2": {
						"version": "4.0.0beta2",
						"date": "2009-10-22 05:21:51 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-0-0beta2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-0beta2.tar.gz"
						}
					},
					"4.0.0beta1": {
						"version": "4.0.0beta1",
						"date": "2009-10-01 11:27:40 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_4-0-0beta1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_4-0-0beta1.tar.gz"
						}
					}
				}
			},
			"3.8": {
				"releases": {
					"3.8.0": {
						"version": "3.8.0",
						"date": "2005-05-22 16:15:20 UTC",
						"type": "release",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-8-0.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-8-0.tar.gz"
						}
					},
					"3.8.0rc1": {
						"version": "3.8.0rc1",
						"date": "2005-05-14 03:56:05 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-8-0rc1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-8-0rc1.tar.gz"
						}
					},
					"3.8.0beta2": {
						"version": "3.8.0beta2",
						"date": "2005-04-17 18:29:43 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_3-8-0beta2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-8-0beta2.tar.gz"
						}
					},
					"3.8.0beta1": {
						"version": "3.8.0beta1",
						"date": "2005-04-05 00:47:05 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/tree/TYPO3_3-8-0beta1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-8-0beta1.tar.gz"
						}
					}
				}
			},
			"3.7": {
				"releases": {
					"3.7.0": {
						"version": "3.7.0",
						"date": "2004-09-23 17:11:40 UTC",
						"type": "release",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-7-0.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-7-0.tar.gz"
						}
					},
					"3.7.0RC2": {
						"version": "3.7.0RC2",
						"date": "2004-09-19 16:26:01 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-7-0RC2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-7-0RC2.tar.gz"
						}
					},
					"3.7.0RC1": {
						"version": "3.7.0RC1",
						"date": "2004-09-14 14:33:18 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-7-0RC1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-7-0RC1.tar.gz"
						}
					}
				}
			},
			"3.6": {
				"releases": {
					"3.6.1": {
						"version": "3.6.1",
						"date": "2004-05-11 02:26:47 UTC",
						"type": "regular",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-6-1.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-6-1.tar.gz"
						}
					},
					"3.6.0FINAL": {
						"version": "3.6.0FINAL",
						"date": "2004-04-30 11:08:57 UTC",
						"type": "release",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-6-0FINAL.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-6-0FINAL.tar.gz"
						}
					},
					"3.6.0RC2": {
						"version": "3.6.0RC2",
						"date": "2004-04-26 14:58:46 UTC",
						"type": "development",
						"url": {
							"zip": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-6-0RC2.zip",
							"tar": "https://github.com/TYPO3/TYPO3v4-Core/archive/TYPO3_3-6-0RC2.tar.gz"
						}
					}
				}
			}
		}
	}
});

}( jQuery ));
