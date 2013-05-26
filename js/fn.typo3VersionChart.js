/*!
 * jQuery TYPO3 Version Chart
 * http://typo3-version-chart.felixnagel.com/
 *
 * Copyright 2013 Felix Nagel
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
		ajax: {
			dataType: 'json',
			// TYPO3 version json URL
			// url: "./data/typo3.json"
			// using YQL for cross domain AJAX request
			url: 'http://query.yahooapis.com/v1/public/yql?q=select * from json where url="http://get.typo3.org/json"&format=json&jsonCompat=new'
		},
		// additional data to merge with the original json
		typo3data: {},

		// callbacks
		ready: null
	},

	_create: function() {
		var that = this;
		this.id = this.element.uniqueId().attr( "id" );

		this.xhr = $.ajax($.extend({
			success: function( data ) {	
				that._start( data );
			},
			error: function( xhr,err ) {
				that._showMsg( "Could not load JSON data! Please try again later!" );
			}
		}, that.options.ajax ));
	},

	_start: function( data ) {
		if ( !data && $.isEmptyObject(data) ) {
			alert("Problems with the JSON data. Please try again later...");
			return;
		}
		
		this._initSource( data );	
		this._drawHtml();
		this._initIsotope();
		this._initEvents();
		
		this._trigger( "ready" );
	},

	refresh: function( filter ) {
		this.chart.isotope({ filter: filter });
	},

	_initSource: function( data ) {
		// normalize YQL responses
		if ( data.query ) {
			data = data.query.results.json;
		}

		$.extend( true, data, this.options.typo3data );

		// todo: rework this to a for loop checking for all non integers
		this.typo3 = {
			meta: {
				latest_stable: data.latest_stable,
				latest_old_stable: data.latest_old_stable,
				latest_lts: data.latest_lts,
				latest_deprecated: data.latest_deprecated,
				versions_total: 0
			}
		};

		// remove latest version related items
		delete data.latest_stable;
		delete data.latest_old_stable;
		delete data.latest_lts;
		delete data.latest_deprecated;

		this.typo3.versions = data;
	},

	_drawHtml: function() {
		var that = this,
			html = []
			counter = 0;

		this.chart = $( "<div>" );
		this.element.empty().append( this.chart );

		$.each( this.typo3.versions, function( branchIndex, branchData ){
			$.each( branchData.releases, function( releaseIndex, releaseData  ){
				that.typo3.meta.versions_total++;

				// add version item
				html.push( that._renderItem( branchIndex, that._renderItemInfo( branchIndex, releaseData ) ,  'typo3-release-' + that._convertVersion( branchIndex ) + ' typo3-type-' + releaseData.type + ' '  ) );
			});

			// add branch item
			html.push( that._renderItem( branchIndex, "<h3>" + branchIndex + "</h3>" + that._renderBranchTags( branchData, branchIndex ), "major ui-widget-header " ) );
		});

		this.chart.html( html.join( "" ) );
	},

	_renderItemInfo: function( branchIndex, releaseData ) {
		var content = [];

		content.push( '<strong>' + releaseData.version + '</strong>' );
		// todo: format date with jQuery UI datepicker
		content.push( '<p><small>' + releaseData.date.slice(0, -13) + '</small></p>' );
		content.push( '<div class="ui-helper-hidden">' );
		content.push( '<p>Released: ' + releaseData.date + '</p>' );
		content.push( '<p>Wiki page: <a href="http://wiki.typo3.org/TYPO3_' + releaseData.version + '">TYPO3 ' + releaseData.version + '</a></p>' );
		content.push( '<p>Download: <a href="' + releaseData.url.tar + '">tar</a> | <a href="' + releaseData.url.zip + '">zip</a></p>' );
		content.push( '<div class="tags">' + this._renderItemTags( releaseData, branchIndex ) + '</div>' );
		content.push( '</div>' );
		content.push( '<div class="tags">' + this._renderItemTags( releaseData, branchIndex ) + '</div>' );

		return content.join( "" );
	},

	_renderItem: function( branchIndex, content, css ) {
		return '<div data-branch="' + this._convertVersion( branchIndex ) + '" class="item ' + css + 'ui-widget-content ui-corner-all typo3-branch-' + this._convertVersion( branchIndex ) + ' typo3-major-' + this._convertVersion( branchIndex, "major") + '">' + content + '</div>';
	},

	_renderBranchTags: function( branchData, branchIndex ){
		var tags = [];

		// outdated branch
		if ( !branchData.active ) {
			tags.push( this._renderTag( "trash", "", "info", "Outdated branch! Deprecated and no longer maintained." ) );
		}

		// LTS
		if ( branchIndex == 4.5 ) {
			tags.push( this._renderTag( "clock", "", "info", "Long Time Support (LTS): will get full support (bug fixes and security fixes) until April 2014. Important and security related fixes will be provided until October 2014." ) );
		}
		if ( branchIndex == 6.2 ) {
			tags.push( this._renderTag( "clock", "", "info", "Long Time Support (LTS): will get full support (bug fixes and security fixes) until October 2016." ) );
		}

		return tags.join( "" )
	},

	_renderItemTags: function( releaseData, branchIndex ){
		var tags = [];

		// tag latest versions
		if ( releaseData.version ==  this.typo3.meta.latest_stable) {
			tags.push( this._renderTag( "check", "", "", "Latest stable release" ) );
		}
		if ( releaseData.version ==  this.typo3.meta.latest_old_stable) {
			tags.push( this._renderTag( "check", "", "", "Latest old stable release" ) );
		}
		if ( releaseData.version ==  this.typo3.meta.latest_lts) {
			tags.push( this._renderTag( "check", "", "", "The latest stable LTS release (for old projects)" ) );
		}
		if ( releaseData.version ==  this.typo3.meta.latest_deprecated) {
			tags.push( this._renderTag( "check", "", "", "Latest obsolete stable release" ) );
		}

		// version type
		switch (releaseData.type) {
			case "security":
				tags.push( this._renderTag( "alert", "typo3-type-" + releaseData.type, "", "Security patch included!" ) );
				break;
			case "development":
				tags.push( this._renderTag( "lightbulb", "typo3-type-" + releaseData.type, "", "Development version" ) );
				break;
			case "release":
				tags.push( this._renderTag( "tag", "typo3-type-" + releaseData.type, "", "Release version" ) );
				break;
			case "regular":
				tags.push( this._renderTag( "calendar", "typo3-type-" + releaseData.type, "", "Regular version" ) );
				break;
		}

		// breaking changes
		if ( releaseData.breaking_changes ) {
			tags.push( this._renderTag( "wrench", "typo3-type-breaking", "", "Introduces breaking changes. See Wiki for more information." ) );
		}

		return tags.join( "" )
	},

	_renderTag: function( icon, css, state, title ) {
		var content = '<span class="ui-icon ui-icon-' + icon + '"></span>';

		if ( !state ) {
			state = "default";
		}

		return '<span class="ui-button ui-state-' + state + ' ' + css + '" title="' + title + '">' + content + '</span>';
	},

	_initEvents: function() {
		// add dialogs
		this.items = this.chart.find(".item");
		this._on( this.items.filter( ".item:not(.major)") , {
			click: function( event ) {
				var link = $( event.currentTarget );
				$( "<div>", { html: link.find( ".ui-helper-hidden" ).html() } ).dialog({
					title: "TYPO3 " + link.find( "strong" ).text(),
					position: {
						of: link
					}
				});
				event.preventDefault();
			}
		});

		// add tooltips
		this.element.tooltip();
	},

	_initIsotope: function() {
		this.chart.isotope({
			itemSelector : '.item',
			layoutMode : 'categoryRows',
			categoryRows : {
				gutter : 30
			},
			getSortData : {
				branch : function ( item ) {
					return item.attr('data-branch');
				}
			},
			sortBy : 'branch',
			sortAscending : false,
		});
	},

	_convertVersion: function( version, key ) {
		var value = version.replace(/\./g, "");

		if ( key == "major" ) {
			value = value.slice( 0, -1 )
		}

		return value;
	},

	_setOption: function( key, value ) {
		var that = this;

		this._super( key, value );

		if ( key === "disabled" && value && this.xhr ) {
			this.xhr.abort();
		}
	},

	_showMsg: function( msg ) {
		$( "<div>", { html: msg } ).dialog({
			title: "Info",
			modal: true
		});
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
				category = $.data( this, 'isotope-sort-data' )[ sortBy ],
				x, y;

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


