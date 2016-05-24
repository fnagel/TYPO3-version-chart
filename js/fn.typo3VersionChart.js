/*!
 * jQuery TYPO3 Version Chart
 * http://typo3versions.felixnagel.com/
 *
 * Copyright 2013-2016 Felix Nagel
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.dialog.js
 *	jquery.ui.button.js
 *
 * todo and ideas:
 *  make language strings options
 *  add more Version and branch related data
 */
(function( $, undefined ) {

$.widget( "ui.typo3VersionChart", {
	version: "@VERSION",
	defaultElement: "<div>",
	options: {
		debug: false,
		dateFormat: "dd. M yy",
		ajax: {
			// TYPO3 version json URL (CORS issues)
			// dataType: "json",
			// url: "http://get.typo3.org/json",

			// using YQL for cross domain AJAX request
			dataType: "yql-json",
			url: "http://query.yahooapis.com/v1/public/yql?q=select * from json where url='http://get.typo3.org/json'&format=json&jsonCompat=new",
			converters: {
				// add YQL json converter
				"text yql-json": function( raw ){
					var data = $.parseJSON(raw);
					// normalize YQL responses
					return data.query.results.json;
				}
			}
		},
		// additional data to merge with the original json
		typo3data: {},

		// callbacks
		ready: null
	},

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
			this._showMsg( "Problems with the JSON data (source invalid). Please reload.", "Error" );
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
			data.latest_old_stable &&
			data.latest_lts &&
			data.latest_old_lts
		);
	},

	_initSource: function( data ) {
		$.extend( true, data, this.options.typo3data );

		this.typo3 = {
			latest: {
				stable: data.latest_stable,
				oldStable: data.latest_old_stable,
				lts: data.latest_lts,
				oldLts: data.latest_old_lts,
			},
			versions_total: 0
		};

		// remove latest version related items
		delete data.latest_stable;
		delete data.latest_old_stable;
		delete data.latest_lts;
		delete data.latest_old_lts;

		this.typo3.versions = data;
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

	__drawHtml: function() {
		var that = this,
			html = [];

		$.each( this.typo3.versions, function( branchIndex, branchData ){
			$.each( branchData.releases, function( releaseIndex, releaseData  ){
				that.typo3.versions_total++;

				// add version item
				html.push( that._renderItem( branchIndex, that._renderItemInfo( branchIndex, releaseData ) ,  "typo3-release-" + that._convertVersion( branchIndex ) + " typo3-type-" + releaseData.type + " "  ) );
			});

			// add branch item
			html.push( that._renderItem( branchIndex, "<h3>" + branchIndex + "</h3>" + that._renderBranchTags( branchData, branchIndex ), "major ui-widget-header " ) );
		});

		this.chart.html( html.join( "" ) );
	},

	_renderItemInfo: function( branchIndex, releaseData ) {
		var content = [];

		content.push( "<strong>" + releaseData.version + "</strong>" );
		content.push( "<p><small>" + this._formatDate( releaseData.date ) + "</small></p>" );
		content.push( "<div class='tags'>" + this._renderItemTags( releaseData, branchIndex ) + "</div>" );

		return content.join( "" );
	},

	_renderItemDialogContent: function( branchIndex, releaseData ) {
		var content = [];

		content.push( "<p>Released: <em title='" + releaseData.date + "'>" + this._formatDate( releaseData.date ) + "</em></p>" );
		content.push( "<p>Wiki page: <a href='" + this._getWikiUrl( releaseData ) + "'>TYPO3 " + releaseData.version + "</a></p>" );
		content.push( "<p>Download: <a href='" + releaseData.url.tar + "'>tar</a> | <a href='" + releaseData.url.zip + "'>zip</a></p>" );
		content.push( "<div class='tags'>" );
		content.push( this._renderBranchTags( this.typo3.versions[ branchIndex ], branchIndex ) );
		content.push( this._renderItemTags( releaseData, branchIndex ) );
		content.push( "</div>" );

		return content.join( "" );
	},

	_getWikiUrl: function( data ) {
		var url = "http://wiki.typo3.org/TYPO3_";

		// new link structure in wiki due to renaming
		if ( this._getDate( data.date ) > new Date( "May 01, 2014" ) || data.version === "6.2.1" ) {
			url += "CMS_";
		}

		return url + data.version;
	},

	_renderItem: function( branchIndex, content, css ) {
		return "<div data-branch='" + branchIndex + "' class='item " + css + "ui-widget-content ui-corner-all typo3-branch-" + this._convertVersion( branchIndex ) + " typo3-major-" + this._convertVersion( branchIndex, "major") + "'>" + content + "</div>";
	},

	_renderBranchTags: function( branchData, branchIndex ){
		var tags = [],
			lastVersionData;

		// outdated branch
		if ( !branchData.active && branchData.stable !== "0.0.0" ) {
			lastVersionData = branchData.releases[ branchData.latest || branchData.latestRelease ];
			tags.push( this._renderTag( "trash", "", "Outdated branch! Deprecated and no longer maintained. Last release: " + branchData.latest + " (" + this._formatDate( lastVersionData.date ) + ")" ) );
		}

		// LTS & End of maintenance
		switch ( branchIndex ) {
			case "8":
				tags.push( this._renderTag( "clock", "", "The upcoming LTS release, scheduled for April 2017. Once released, it will get 3 years of important and security fixes from the day of the release." ) );
				break;
			case "7":
				tags.push( this._renderTag( "clock", "", "The current stable LTS release (for all new projects). The latest version with Long Term Support. It will have full support until April 2017 and security bugfixes until November 2018." ) );
				break;
			case "6.2":
				tags.push( this._renderTag( "clock", "", "The current stable LTS release (for existing projects). The old version with Long Term Support. It will have maintenance and security-related bugfixes until March 2017." ) );
				break;
			case "4.7":
				tags.push( this._renderTag( "clock", "", "This branch will get full support (bug fixes and security fixes) until October 2013, but will get security fixes until October 2014." ) );
				break;
			case "4.5":
				tags.push( this._renderTag( "clock", "", "The old stable LTS release: this branch will get full support (bug fixes and security fixes) until April 2014. Important and security related fixes will be provided until March 2015." ) );
				break;
		}

		return tags.join( "" );
	},

	_renderItemTags: function( releaseData ){
		var tags = [];

		// tag latest versions
		switch (releaseData.version) {
			case this.typo3.latest.stable:
				tags.push( this._renderTag( "check", "", "Latest stable release" ) );
				break;
			case this.typo3.latest.oldStable:
				tags.push( this._renderTag( "check", "", "Latest old stable release" ) );
				break;
			case this.typo3.latest.lts:
				tags.push( this._renderTag( "check", "", "Latest current stable LTS release" ) );
				break;
			case this.typo3.latest.oldLts:
				tags.push( this._renderTag( "check", "", "Latest old stable LTS release" ) );
				break;
		}

		// version type
		switch (releaseData.type) {
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
		this._on( this.chart.find( ".item:not(.major)" ) , {
			click: function( event ) {
				var item = $( event.currentTarget ),
					version = item.find( "strong" ).text(),
					branch =  item.attr( "data-branch" ).replace( /-/g, "." );

				this.openVersionDialog( version, branch, item );
				event.preventDefault();
			}
		});

		// add tooltips
		this.document.tooltip();
	},

	openVersionDialog: function( version, branch, positionOf ) {
		$( "<div>", {
			html: this._renderItemDialogContent( branch, this.typo3.versions[ branch ].releases[ version ] )
		} ).dialog({
            title: "TYPO3 " + version,
            position: {
               of: positionOf
            }
        });
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
						return item.attr( "data-branch" );
					}
				},
				sortBy: "branch",
				sortAscending: false
			},
			// create callback
			this._log( "jQuery Isotope initialized." )
		);
	},

	_convertVersion: function( version, key ) {
		var value = version.replace( /\./g, "-" );

		if ( key === "major" ) {
			value = value.charAt( 0 );
		}

		return value;
	},
	
	_getDate: function( string ) {
		return new Date( string.replace( /-/g, "/" ) );
	},

	_formatDate: function( string ) {
		return $.datepicker.formatDate( this.options.dateFormat, this._getDate( string ) );
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
			if ( data ) {
				console.log( msg, data );
			} else {
				console.log( msg );
			}
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

}( jQuery ));


