/*!
 * jQuery TYPO3 Version Chart
 * http://typo3versions.felixnagel.com/
 *
 * Copyright 2013-2021 Felix Nagel
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.dialog.js
 *	jquery.ui.button.js
 */
(function( $, undefined ) {

$.widget( "ui.typo3VersionChart", {
	defaultElement: "<div>",
	options: {
		debug: true,
		dateLocale: undefined,
		dateFormat: {
			year: "numeric",
			month: "short",
			day: "numeric"
		},
		ajax: {
			dataType: "json",
			url: "https://get.typo3.org/json"
		},
		// Additional data to merge with the original json
		typo3data: {},
		// Download URL
		downloadUrl: "https://get.typo3.org",

		// callbacks
		ready: null
	},

	itemSelector: ".item:not(.major)",

	_create: function() {
		var that = this;
		this.id = this.element.uniqueId().attr( "id" );

		this._log( "AJAX request started: load JSON data." );
		this.xhr = $.ajax( $.extend( {
			success: function( data ) {
				that.start( data );
			},
			error: function() {
				that._showMsg( "Could not load JSON data! Please try again later...", "Error" );
			}
		}, that.options.ajax ) );
	},

	start: function( data ) {
		if ( !(data && $.isPlainObject( data ) && !$.isEmptyObject( data ) && this._sourceIsValid( data ) ) ) {
			this._showMsg( "Problems with the JSON data (source invalid). Please reload.", "Error", data );
			return;
		}

		this._initSource( data );

		this._drawHtml();
		this._initIsotope();
		this._initEvents();

		this._log( "TYPO3 version chart is ready!", data );
		this._trigger( "ready" );
	},

	refresh: function( filter ) {
		this.chart.isotope({ filter: filter });
	},

	_sourceIsValid: function( data ) {
		return (
			data.latest_stable &&
			data.latest_lts &&
			data.latest_old_lts
		);
	},

	_initSource: function( data ) {
		var that = this,
			dataSorted;

		$.extend( true, data, this.options.typo3data );

		this.typo3 = {
			versions: {},
			latest: {
				stable: data.latest_stable,
				lts: data.latest_lts,
				oldLts: data.latest_old_lts
			},
			versions_active_total: 0,
			versions_total: 0
		};

		$.each( data, function( branchIndex, branchData ){
			if ( !branchData || !branchData.releases ) {
				return true;
			}

			Object.keys( branchData.releases ).forEach(function( version ) {
				branchData.releases[ version ] = that._prepareVersionData( branchData.releases[ version ] );
			} );

			dataSorted = [];
			Object.keys( branchData.releases )
				.sort( function( a, b ) {
					return that._sortTypo3Versions( branchData.releases[ a ], branchData.releases[ b ] );
				} )
				.reverse()
				.forEach(function( version ) {
					that.typo3.versions_total++;
					dataSorted.push( branchData.releases[ version ] );
				} );

			that.typo3.versions[ branchIndex ] = branchData;
			that.typo3.versions[ branchIndex ].releases = dataSorted;
		});
	},

	_drawHtml: function() {
		this._log( "Building HTML.", this.typo3 );

		this.chart = $( "<div>" );
		this.element.append( this.chart );

		if ( this.options.debug ) {
			this.__drawHtml();
		} else {
			try {
				this.__drawHtml();
			} catch ( error ) {
				this._showMsg( "Data seems invalid.", "Error", this.typo3 );
			}
		}
	},

	_prepareVersionData: function ( data ) {
		data.date = this._getDate( data.date );

		return data;
	},

	_sortTypo3Versions: function ( a, b ) {
		return ( a.date - b.date );
	},

	__drawHtml: function() {
		var that = this,
			html = [];

		$.each( this.typo3.versions, function( branchIndex, branchData ){
			$.each( branchData.releases, function( releaseIndex, releaseData  ){
				if ( branchData.active && releaseData.type !== "development" ) {
					that.typo3.versions_active_total++;
				}

				var branch = that._convertVersion( releaseData.version ),
					type = releaseData.type + ( releaseData.elts ? " typo3-type-elts" : "" );

				// add version item
				html.push(
					that._renderItem(
						branchIndex,
						"data-version='" + releaseData.version + "'" + " data-branch='" + branch + "'",
						"typo3-type-" + type + " typo3-branch-" + that._formatVersion( branch ),
						that._renderItemInfo( releaseData )
					)
				);
			});

			// add branch item
			html.push(
				that._renderItem(
					branchIndex,
					"",
					"major ui-widget-header",
					"<h3>" + branchIndex + "</h3>" + that._renderBranchTags( branchData, branchIndex )
				)
			);

		});

		this.chart.html( html.join( "" ) );
	},

	_renderItem: function( branchIndex, attributes, css, content ) {
		attributes += " data-branch-index='" + branchIndex + "'";
		attributes += " class='item ui-widget-content ui-corner-all " + css +
		              " typo3-major-" + this._convertVersion( branchIndex, "major" ) +
		              " typo3-branch-index-" + this._formatVersion( branchIndex ) + "'";

		return "<div " + attributes + ">" + content + "</div>";
	},

	_renderItemInfo: function( releaseData ) {
		var content = [];

		content.push( "<strong>" + releaseData.version + "</strong>" );
		content.push( "<p><small>" + this._formatDate( releaseData.date ) + "</small></p>" );
		content.push( "<div class='tags'>" + this._renderItemTags( releaseData ) + "</div>" );

		return content.join( "" );
	},

	_renderItemDialogContent: function( branchIndex, releaseData ) {
		var content = [];

		content.push( "<p>Released: <em title='" + releaseData.date.toUTCString() + "'>" + this._formatDate( releaseData.date ) + "</em></p>" );
		content.push( "<p>Wiki page: <a href='" + this._getWikiUrl( releaseData ) + "'>TYPO3 " + releaseData.version + "</a></p>" );

		if ( releaseData.url ) {
			content.push( "<p>Download: " );
			content.push( "<a href='" + this.options.downloadUrl + releaseData.url.tar + "'>tar</a>" );
			content.push( " | " );
			content.push( "<a href='" + this.options.downloadUrl + releaseData.url.zip + "'>zip</a>" );
			content.push( "</p>" );
		}

		// ELTS repositories are not available at GitHub
		if ( !releaseData.elts ) {
			content.push( "<p>Git: <a href='" + this._getGitTagUrl( releaseData ) + "'>Tag</a></p>" );
		}

		content.push( "<div class='tags'>" );
		content.push( this._renderBranchTags( this.typo3.versions[ branchIndex ], branchIndex ) );
		content.push( this._renderItemTags( releaseData, branchIndex ) );
		content.push( "</div>" );

		return content.join( "" );
	},

	_getGitTagUrl: function( releaseData ) {
		var version = releaseData.version;

		if ( this._convertVersion( version, "major" ).intval() >= 9 ) {
			version = "v" + version;
		}

		return this._getGitBaseUrl() + "releases/tag/" + version;
	},

	_getGitBaseUrl: function() {
		return "https://github.com/TYPO3/TYPO3.CMS/";
	},

	// @todo Some day, rename method, text and link to https://get.typo3.org/release-notes/
	_getWikiUrl: function( data ) {
		var url = "http://wiki.typo3.org/TYPO3_";

		// New link structure in wiki due to renaming
		if ( data.date > new Date( "May 01, 2014" ) || data.version === "6.2.1" ) {
			url += "CMS_";
		}

		// Wiki redirects do not work for TYPO3 10
		if ( this._convertVersion( data.version, "major" ).intval() >= 10 ) {
			url = "https://get.typo3.org/release-notes/";
		}

		return url + data.version;
	},

	_renderBranchTags: function( branchData, branchIndex ){
		var tags = [],
			lastVersion = branchData.latest || branchData.latestRelease;

		// outdated branch
		if ( !branchData.active && branchData.stable !== "0.0.0" && lastVersion ) {
			tags.push( this._renderTag( "trash", "", "Deprecated branch. Last public release: " + lastVersion + " (" + this._formatDate( this.getVersionData( lastVersion, branchIndex ).date ) + ")" ) );
		}

		// ELTS branch
		if ( branchData.elts ) {
			tags.push( this._renderTag( "locked", "", "Extended Long Time Support version (ELTS, paid support version)" ) );
		}

		// LTS & End of maintenance
		switch ( branchIndex ) {
			case "11":
				tags.push( this._renderTag( "clock", "", "TYPO3 v11 LTS version will be fully supported for 1.5 years, and will be supported with security and critical fixes until October 2024." ) );
				break;
			case "10":
				tags.push( this._renderTag( "clock", "", "TYPO3 v10 LTS version will be fully supported for 1.5 years, and will be supported with security and critical fixes until April 2023." ) );
				break;
			case "9":
				tags.push( this._renderTag( "clock", "", "The TYPO3 v9 LTS version will be fully supported for 1.5 years, and will be supported with security and critical fixes until October 2021." ) );
				break;
			case "8":
				tags.push( this._renderTag( "clock", "", "The TYPO3 v8 LTS version will be fully supported until TYPO3 v9 LTS is out, and will be supported with security and critical fixes until March 2020." ) );
				break;
			case "7":
				tags.push( this._renderTag( "clock", "", "The TYPO3 v7 LTS version will be fully supported until TYPO3 v8 LTS is out, and will be supported with security and critical fixes until November 2018." ) );
				break;
			case "6.2":
				tags.push( this._renderTag( "clock", "", "The TYPO3 v6 LTS version will have maintenance and security-related bugfixes until March 2017." ) );
				break;
			case "4.7":
				tags.push( this._renderTag( "clock", "", "This branch will get full support (bug fixes and security fixes) until October 2013, but will get security fixes until October 2014." ) );
				break;
			case "4.5":
				tags.push( this._renderTag( "clock", "", "The branch will get full branch will get full support (bug fixes and security fixes) until April 2014. Important and security related fixes will be provided until March 2015. In addition, there is a paid ELTS (extended LTS) with security and stability fixes (support planned to end on March 31st, 2016)." ) );
				break;
		}

		return tags.join( "" );
	},

	_renderItemTags: function( releaseData ){
		var tags = [];

		// tag latest versions
		switch ( releaseData.version ) {
			case this.typo3.latest.stable:
				tags.push( this._renderTag( "check", "", "Latest stable release" ) );
				break;
			case this.typo3.latest.lts:
				tags.push( this._renderTag( "clock", "", "Latest current stable LTS release" ) );
				break;
			case this.typo3.latest.oldLts:
				tags.push( this._renderTag( "clock", "", "Latest old stable LTS release" ) );
				break;
		}

		if ( releaseData.elts ) {
			tags.push( this._renderTag( "locked", "typo3-type-" + releaseData.type, "ELTS version" ) );
		}

		// version type
		switch ( releaseData.type ) {
			case "security":
				tags.push( this._renderTag( "alert", "typo3-type-" + releaseData.type, "Security patch included!" ) );
				break;
			case "development":
				tags.push( this._renderTag( "lightbulb", "typo3-type-" + releaseData.type, "Development version" ) );
				break;
			case "release":
				tags.push( this._renderTag( "tag", "typo3-type-" + releaseData.type, "Release version" ) );
				break;
			case "regular":
				tags.push( this._renderTag( "calendar", "typo3-type-" + releaseData.type, "Regular version" ) );
				break;
		}

		// breaking changes
		if ( releaseData.breaking_changes ) {
			tags.push( this._renderTag( "wrench", "typo3-type-breaking", "Introduces breaking changes. See Wiki for more information." ) );
		}

		return tags.join( "" );
	},

	_renderTag: function( icon, css, title ) {
		var content = "<span class='ui-icon ui-icon-" + icon + "'></span>";
		return "<span class='ui-button ui-state-default " + css + "' title='" + title + "'>" + content + "</span>";
	},

	_initEvents: function() {
		this._on( this.window , {
			keydown: function ( event ) {
				if ( event.keyCode === $.ui.keyCode.ESCAPE ) {
					$( ".ui-dialog-content" ).dialog( "close" );
					event.preventDefault();
				}
			}
		});

		this._on( this.chart.find( this.itemSelector ) , {
			click: function( event ) {
				var item = $( event.currentTarget ),
					version = item.attr( "data-version" ),
					branch =  item.attr( "data-branch-index" ),
					versionData = this.getVersionData( version, branch );

				if( event.altKey ) {
					if ( event.shiftKey ) {
						if ( !versionData.elts ) {
							this.openTab( this._getGitTagUrl( versionData ) );
						} else {
							window.alert( "Not available for ELTS versions." );
						}
					} else {
						this.openTab( this._getWikiUrl( versionData ) );
					}
				}
				else if( event.ctrlKey ) {
					this.toggleHighlightItem( version );
				}
				else {
					this.openVersionDialog( version, branch, item );
				}

				event.preventDefault();
			}
		});

		// add tooltips
		this.document.tooltip();
	},

	openTab: function( url ) {
		window.open( url , "_blank" );
	},

	toggleHighlightItem: function( version ) {
		this.chart.find( this.itemSelector ).filter( "[data-version='" + version + "']" ).toggleClass( "ui-state-highlight" );
	},

	openVersionDialog: function( version, branch, positionOf ) {
		$( "<div>", {
				html: this._renderItemDialogContent( branch, this.getVersionData( version, branch ) )
		} ).dialog({
            title: "TYPO3 " + version,
            position: {
                my: "center bottom",
                at: "center top-20",
                of: positionOf
            }
        });
	},

	getVersionData: function( version, branch ) {
		return $.grep( this.typo3.versions[ branch ].releases, function( data ) {
			return data.version === version;
		})[ 0 ];
	},

	_initIsotope: function() {
		this.chart.isotope(
			// options
			{
				itemSelector: ".item",
				layoutMode: "categoryRows",
				categoryRows: {
					gutter: 30
				},
				getSortData: {
					branch: function ( item ) {
						return item.attr( "data-branch-index" ).floatval();
					}
				},
				sortBy: "branch",
				sortAscending: false
			},
			// create callback
			this._log( "jQuery Isotope initialized." )
		);
	},

	_formatVersion: function( version ) {
		return ( version + "" ).replace( /\./g, "-" );
	},

	_convertVersion: function( version, key ) {
		var split = version.split( "." );

		if ( key === "major" ) {
			return split[ 0 ];
		}

		return ( split[ 0 ] + "." + split[ 1 ] );
	},

	_getDate: function( value ) {
		if ( $.type( value ) !== "date" ) {
			value = value.replace( /-/g, "/" );

			if ( value.search( "CEST" ) !== -1) {
				// Summertime
				value = value.replace( /CEST/g, "UTC+0200" );
			} else {
				value = value.replace( /CET/g, "UTC+0100" );
			}

			return new Date( value );
		}

        return value;
	},

	_formatDate: function( date ) {
		return date.toLocaleDateString( this.options.dateLocale , this.options.dateFormat );
	},

	_setOption: function( key, value ) {
		this._super( key, value );

		if ( key === "disabled" && value && this.xhr ) {
			this.xhr.abort();
		}
	},

	_showMsg: function( msg, title, data ) {
		var text = title + ": " + msg;

		this._log( text, data );

		if ($.ui.dialog) {
			$( "<div>", { html: msg } ).dialog({
				title: title,
				modal: true
			});
		} else {
			alert( text );
		}
	},

	_log: function( msg, data ) {
		if ( this.options.debug ) {
			console.log( msg, data );
		}
	},

	_destroy: function() {
		this.xhr.abort();
		this.element.empty();
	}
});

// extend Isotope with categoryRows custom layout mode
// taken from the Isotope Demo Website
$.extend( $.Isotope.prototype, {
	_categoryRowsReset : function() {
		this.categoryRows = {
			x : 0,
			y : 0,
			height : 0,
			currentCategory : null
		};
	},

	_categoryRowsLayout : function( $elems ) {
		var instance = this,
			containerWidth = this.element.width(),
			sortBy = this.options.sortBy,
			props = this.categoryRows;

		$elems.each( function() {
			var $this = $(this),
				atomW = $this.outerWidth(true),
				atomH = $this.outerHeight(true),
				category = $.data( this, "isotope-sort-data" )[ sortBy ];

			if ( category !== props.currentCategory ) {
				// new category, new row
				props.x = 0;
				props.height += props.currentCategory ? instance.options.categoryRows.gutter : 0;
				props.y = props.height;
				props.currentCategory = category;
			} else if ( props.x !== 0 && atomW + props.x > containerWidth ) {
				// if this element cannot fit in the current row
				props.x = 0;
				props.y = props.height;
			}

			// position the atom
			instance._pushPosition( $this, props.x, props.y );

			props.height = Math.max( props.y + atomH, props.height );
			props.x += atomW;
		});
	},

	_categoryRowsGetContainerSize : function () {
		return { height : this.categoryRows.height };
	},

	_categoryRowsResizeChanged : function() {
		return true;
	}
});

String.prototype.intval = function() {
	return parseInt( this, 10 );
};

String.prototype.floatval = function() {
	return parseFloat( this );
};

}( jQuery ));


