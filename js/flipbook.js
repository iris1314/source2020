/* v 2.30
author http://codecanyon.net/user/creativeinteractivemedia/portfolio?ref=creativeinteractivemedia
*/
var FLIPBOOK = FLIPBOOK || {};

{ /* Main */
    (function init(jQuery, window, document, undefined) {

        jQuery.fn.flipBook = function(options) {
            //entry point
            return new FLIPBOOK.Main(options, this);
        };

        // DEFAULT OPTIONS
        jQuery.fn.flipBook.options = {

            name: "",

            /*array of page objects - this must be passed to plugin constructor
            {
                src:"page url",
                thumb:"thumb url",
            }*/
            pages: [],

            /*array of table_of_content objects
            {
                title:"Cover",
                page:"1",
            }*/
            tableOfContent: [],

            tableOfContentCloseOnClick: false,

            /*array of html_content objects
            {
                htmlContent:"<div style='display:block;'></div>",
                page:"1",
            }*/
            htmlContents: [],

            webglMinAndroidVersion: 4.4,

            deeplinking: {
                // deep linking options go gere
                enabled: false,
                prefix: ""
            },

            rootFolder: "",

            assets: {
                preloader: "images/preloader.jpg",
                overlay: "images/overlay.png",
                transparent: "images/transparent.png",
                flipMp3: ""
            },

            //pdf file
            pdfUrl: null,
            pdfBrowserViewerIfMobile: false,
            pdfBrowserViewerFullscreen: true,
            pdfBrowserViewerFullscreenTarget: "_blank",
            pdfPageScale: 2,

            rightToLeft: false,

            //page that will be displayed when the book starts
            startPage: 0,

            //if the sound is enabled
            sound: true,

            backgroundColor: "rgb(81, 85, 88)",
            backgroundPattern: "",
            backgroundTransparent: false,

            //book default settings
            pageWidth: null,
            pageHeight: null,
            thumbnailWidth: 100,

            loadAllPages: false,

            //menu buttons
            currentPage: {
                enabled: true,
                title: "Current page"
            },
            btnNext: {
                enabled: true,
                title: "Next page",
                icon: "fa-angle-right"
            },
            btnLast: {
                enabled: false,
                title: "Last page",
                icon: "fa-angle-double-right"
            },
            btnPrev: {
                enabled: true,
                title: "Previous page",
                icon: "fa-angle-left"
            },
            btnFirst: {
                enabled: false,
                title: "First page",
                icon: "fa-angle-double-left"
            },
            btnZoomIn: {
                enabled: true,
                title: "Zoom in",
                icon: "fa-plus"
            },
            btnZoomOut: {
                enabled: true,
                title: "Zoom out",
                icon: "fa-minus"
            },
            btnToc: {
                enabled: true,
                title: "Table of content",
                icon: "fa-list-ol"
            },
            btnThumbs: {
                enabled: true,
                title: "Pages",
                icon: "fa-th-large"
            },
            btnShare: {
                enabled: true,
                title: "Share",
                icon: "fa-link"
            },
            btnDownloadPages: {
                enabled: true,
                title: "Download pages",
                icon: "fa-download",
                url: "images/pages.zip"
            },
            btnDownloadPdf: {
                forceDownload: false,
                enabled: true,
                title: "Download PDF",
                icon: "fa-file",
                url: "images/pages.pdf",
                openInNewWindow: true
            },
            btnSound: {
                enabled: true,
                title: "Volume",
                icon: "fa-volume-up"
            },
            btnExpand: {
                enabled: true,
                title: "Toggle fullscreen",
                icon: "fa-expand",
                iconAlt: "fa-compress"
            },
            btnSlideshow: {
                enabled: false,
                title: "Toggle slideshow",
                icon: "fa-play",
                iconAlt: "fa-pause"
            },
            btnPrint: {
                enabled: true,
                title: "Print",
                icon: "fa-print"
            },

            btnAutoplay: {
                enabled: true,
                title: "Autoplay",
                icon: "fa-play"
            },

            autoplayOnStart: false,
            autoplayInterval: 3000,

            btnTocIfMobile: true,
            btnThumbsIfMobile: true,
            btnShareIfMobile: false,
            btnDownloadPagesIfMobile: true,
            btnDownloadPdfIfMobile: true,
            btnSoundIfMobile: false,
            btnExpandIfMobile: true,
            btnPrintIfMobile: false,

            sideNavigationButtons: true,
            hideMenu: false,

            //share

            google_plus: {
                enabled: true,
                url: null
            },
            twitter: {
                enabled: true,
                url: null,
                description: null
            },
            facebook: {
                enabled: true,
                load_sdk: true,
                url: null,
                app_id: null,
                title: null,
                caption: null,
                description: null,
                image: null
            },
            pinterest: {
                enabled: true,
                url: null,
                image: null,
                description: null
            },
            email: {
                enabled: true,
                title: null,
                description: null
            },

            pdf: {
                annotationLayer: false,
            },

            pageTextureSize: 2048, //1024 or 2048

            //flip animation type; can be "2d", "3d" , "webgl", "swipe"
            viewMode: 'webgl',
            singlePageMode: false,
            singlePageModeIfMobile: true,
            useMobileView: false,
            zoomLevels: [.85, 2, 5],
            zoomDisabled: false,
            responsiveView: true,
            responsiveViewTreshold: 768,
            minPixelRatio: 1,

            //flip animation parameters
            time1: 300,
            transition1: 'easeInSine',
            time2: 400,
            transition2: 'easeOutSine',

            skin: "light", //"dark", "light", "grey"

            contentOnStart: false,
            thumbnailsOnStart: false,

            //lightbox settings
            lightBox: false,
            lightBoxOpened: false,
            lightBoxFullscreen: false,
            lightboxCloseOnClick: false,
            lightboxBackground: null, //css of flipbook background, rgba or hexadecimal color or bg image, for example 'rgba(0,0,0,.5)' or '#F0F0F0' or 'url("overlay.png" ) repeat'

            // WebGL settings
            pan: 0,
            panMax: 10,
            panMax2: 2,
            panMin: -10,
            panMin2: -2,
            tilt: 0,
            tiltMax: 0,
            tiltMax2: 0,
            tiltMin: -20,
            tiltMin2: -5,

            rotateCameraOnMouseMove: false,
            rotateCameraOnMouseDrag: true,

            lights: true,

            spotlightColor: 0xFFFFFF,
            spotlightIntensity: .14,

            ambientLightColor: 0x333333,

            pageRoughness: 1,
            pageMetalness: 0,

            pageHardness: 2,
            coverHardness: 2,
            pageSegmentsW: 5,
            pageSegmentsH: 1,

            pageMiddleShadowSize: 2,
            pageMiddleShadowColorL: "#999999",
            pageMiddleShadowColorR: "#777777",
            pageFlipDuration: 1,

            antialias: false,

            //mobile devices settings - override any setting, for example 
            /*
            mobile = {
                zoomLevels:[1,2], 
                singlePage:false
            }
            */
            mobile: {},

            allowPageScroll: 'vertical', // 'none', 'horizontal', 'vertical' or 'auto'

            logoImg: '', //url of logo image
            logoUrl: '', // url target 
            logoCSS: 'position:absolute;',

            //UI settings

            menuMargin: 0,
            menuPadding: 0,
            menuAlignHorizontal: 'center', //'right', 'left', 'center'
            // menuAlignVertical:'bottom', //'top' or 'bottom'
            menuShadow: '0 0 6px rgba(0,0,0,0.16), 0 0 6px rgba(0,0,0,0.23)',
            menuBackground: '',
            menuOverBook: false,

            btnSize: 12,
            btnRadius: 4,
            btnMargin: 4,
            btnPaddingV: 10,
            btnPaddingH: 10,
            btnShadow: '',
            btnTextShadow: '',
            btnBorder: '',
            btnColor: '',
            btnBackground: 'none',

            sideBtnSize: 40,
            sideBtnRadius: 0,
            sideBtnMargin: 0,
            sideBtnPaddingV: 0,
            sideBtnPaddingH: 0,
            sideBtnShadow: '',
            sideBtnTextShadow: '',
            sideBtnBorder: '',
            sideBtnColor: '#222',
            sideBtnBackground: 'rgba(255,255,255,.3)',


            currentPagePositionV: 'top', //'top' or 'top'
            currentPagePositionH: 'left', // 'left' or 'left'
            currentPageMarginV: 5, // margin vertical in px
            currentPageMarginH: 5 // margin horizontal in px

        };

        FLIPBOOK.Main = function(options, elem) {
            var self = this;
            self.elem = elem;
            self.$elem = jQuery(elem);
            self.options = {};

            var dummyStyle = document.createElement('div').style,
                vendor = (function() {
                    var vendors = 't,webkitT,MozT,msT,OT'.split(','),
                        t,
                        i = 0,
                        l = vendors.length;

                    for (; i < l; i++) {
                        t = vendors[i] + 'ransform';
                        if (t in dummyStyle) {
                            return vendors[i].substr(0, vendors[i].length - 1);
                        }
                    }
                    return false;
                })(),
                prefixStyle = function(style) {
                    if (vendor === '')
                        return style;

                    style = style.charAt(0).toUpperCase() + style.substr(1);
                    return vendor + style;
                },

                isAndroid = (/android/gi).test(navigator.appVersion),
                isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
                has3d = prefixStyle('perspective') in dummyStyle

            this.msie = window.navigator.userAgent.indexOf("MSIE ");

            self.isAndroid = isAndroid;
            self.has3d = has3d;

            //detect webgl


            function webgl_detect(return_context) {
                if (!!window.WebGLRenderingContext) {
                    var canvas = document.createElement("canvas"),
                        names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
                        context = false;

                    for (var i = 0; i < 4; i++) {
                        try {
                            context = canvas.getContext(names[i]);
                            if (context && typeof context.getParameter == "function") {
                                // WebGL is enabled
                                if (return_context) {
                                    // return WebGL object if the function's argument is present
                                    return { name: names[i], gl: context };
                                }
                                // else, return just true
                                return true;
                            }
                        } catch (e) {}
                    }

                    // WebGL is supported, but disabled
                    return true;
                }

                // WebGL not supported
                return false;
            }




            self.hasWebGl = webgl_detect()

            self.thumbsShowing = false
            self.tocShowing = false



            //default options are overridden by options object passed to plugin constructor
            self.options = jQuery.extend({}, jQuery.fn.flipBook.options, options);

            self.options.isMobile = jQuery.browser.mobile || isIDevice || isAndroid

            //self.options.pageTextureSize = self.options.isMobile ? 1024 : self.options.pageTextureSize

            if (self.options.isMobile) {

                for (var key in self.options.mobile) {
                    self.options[key] = self.options.mobile[key]
                }

            }

            self.options.main = self;
            self.options.pageShininess = self.options.pageShininess / 2;
            self.s = 0;

            self.pdfPages = []
            self.pdfPagesRendered = []
            self.pdfAnnotations = []

            jQuery('head').append("<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />");

            if (self.options.singlePageMode) {
                self.options.viewMode = '3d'
                self.options.rightToLeft = false
                    // self.options.pageMode = 'singlePage'
            }



            if (self.options.isMobile && self.options.useMobileView)
                self.options.viewMode = 'swipe';

            if (self.options.isMobile) {
                self.options.singlePageMode = self.options.singlePageModeIfMobile ? true : self.options.singlePageMode
                if (self.options.singlePageMode) {
                    self.viewMode = '3d'
                    self.options.viewMode = '3d'
                }

                self.options.btnPrint = {
                    enabled: false
                }
                self.options.btnDownloadPages = {
                    enabled: false
                }
            }

            function getAndroidVersion(ua) {
                ua = (ua || navigator.userAgent).toLowerCase();
                var match = ua.match(/android\s([0-9\.]*)/);
                return match ? match[1] : false;
            };

            if (self.options.viewMode == 'webgl') {
                if (!self.hasWebGl || ((parseFloat(getAndroidVersion()) < self.options.webglMinAndroidVersion) && self.isAndroid))
                    self.options.viewMode = '3d'
            }
            if (self.options.viewMode == '3d' && !self.has3d)
                self.options.viewMode = '2d'

            self.webgl = self.options.viewMode == 'webgl'

            if (self.options.isMobile && options.pdfBrowserViewerIfMobile && self.options.pdfUrl) {

                // if( options.pdfBrowserViewerIfMobile && options.pdfUrl){  // TEST mobile = true

                if (self.options.lightBox && !self.options.lightBoxOpened) {
                    self.$elem.on("touched click", function() {
                        openPdfBrowserViewer()
                    }).css('cursor', 'pointer')
                } else {
                    openPdfBrowserViewer()
                }
                return;
            }

            function openPdfBrowserViewer() {
                if (self.options.pdfBrowserViewerFullscreen) {
                    window.open(self.options.pdfUrl, self.options.pdfBrowserViewerFullscreenTarget)
                } else {
                    jQuery('<object type="application/pdf"/>').width("100%").height("100%").attr('data', self.options.pdfUrl).appendTo(self.$elem)
                        //<div> <object data="test.pdf" type="application/pdf" width="300" height="200"> alt : <a href="test.pdf">test.pdf</a> </object> </div>
                }
            }

            /*if (self.options.pages && self.options.pages.length > 0)
                self.options.pdfUrl = ""
             */

            self.options.pdfMode = Boolean(self.options.pdfUrl && self.options.pdfUrl != "")

            self.pages = self.options.pages;

            var zl = self.options.zoomLevels

            if (typeof zl == 'string')
                zl = zl.split(',')

            for (i = 0; i < zl.length; i++) {
                zl[i] = Number(zl[i])
            }

            if (self.options.backgroundTransparent)
                self.options.backgroundPattern = self.options.assets.transparent;

            self.options.zoomLevels = zl;

            self.options.zoomMin = zl[0]
            self.options.zoom = self.options.zoomMin
            self.options.zoomMax = zl[zl.length - 1]
            self.onZoom(self.options.zoom)
            self.wrapper = jQuery(document.createElement('div'))
                .addClass('flipbook-main-wrapper');

            if (self.options.backgroundColor != "")
                self.wrapper.css('background', self.options.backgroundColor);
            if (self.options.backgroundPattern != "")
                self.wrapper.css('background', 'url(' + self.options.backgroundPattern + ') repeat');

            self.bookLayer = jQuery(document.createElement('div'))
                .addClass('flipbook-bookLayer')
                .appendTo(self.wrapper)

            if (self.options.hideMenu)
                self.bookLayer.css('bottom', '0')

            self.book = jQuery(document.createElement('div'))
                .addClass('book')
                .appendTo(self.bookLayer);

            this.createLoadingBar();

            //start page
            if (self.options.deeplinking.enabled) {
                window.onhashchange = function(e) {
                    if (!self.Book.enabled) return;
                    var targetPage = self.getPageFromHash()
                    targetPage = self.options.rightToLeft ? self.options.pages.length - targetPage + 1 : targetPage
                    if (self.options.singlePageMode) targetPage--;
                    if (typeof(self.Book) != 'undefined' && targetPage >= 0) {
                        self.Book.goToPage(targetPage, true)
                    }
                }
                if (this.options.startPage <= 1) {
                    var p = this.getPageFromHash()
                    if (p > 0) this.options.lightBoxOpened = true
                    this.options.startPage = p
                }
            }



            this.options.startPage = this.options.singlePageMode ? this.options.startPage - 1 : this.options.startPage

            function loadFirstPage() {
                self.setLoadingProgress(.1)
                self.loadPages([0, 1], function() {
                    var p1 = self.pages[0].img
                    var p2 = self.pages[1].img
                    var r1 = p1.width / p1.height
                    var r2 = p2.width / p2.height

                    if (!self.options.pageWidth) self.options.pageWidth = p1.width
                    if (!self.options.pageHeight) self.options.pageHeight = p1.height

                    self.options.pageMode = (r2 / r1 > 1.5) ? 'doubleWithCover' : 'singlePage'

                    self.setLoadingProgress(1)
                    self.start();
                })
            }

            //if pdf
            if (!self.options.pdfMode) {
                if (!self.options.lightBox) {
                    self.wrapper.appendTo(self.$elem);
                    //load first page
                    loadFirstPage()
                } else {
                    self.$elem.css('cursor', 'pointer')
                        .bind('tap click', function(e) {
                            if (self.lightbox) {
                                self.lightboxStart()
                                return
                            }
                            //load first page
                            loadFirstPage()
                            if (self.options.lightBoxFullscreen) {
                                self.toggleExpand()
                            }
                        });
                    if (this.options.startPage > 1 || this.options.lightBoxOpened)
                        loadFirstPage()
                }
            } else if (!self.options.lightBox) {
                self.initPdf();
                self.wrapper.appendTo(self.$elem);
            } else {
                self.$elem.css('cursor', 'pointer')
                    .bind('tap click', function(e) {
                        //darken
                        //add preloader
                        self.initPdf(e);

                        if (self.options.lightBoxFullscreen) {
                            setTimeout(function() {
                                self.toggleExpand(e)
                            }, 1000)

                        }

                        /* self.lightboxImg = self.$elem.find('img')[0]
                         if(self.lightboxImg){
                               var cover =document.createElement('img')
                               cover.src = self.lightboxImg.src
                               document.body.appendChild(cover)

                               var pos = jQuery(self.lightboxImg).offset()
                               

                               var windowX = -jQuery(window).scrollLeft()
                               var windowY = -jQuery(window).scrollTop()

                               console.log(pos)
                               console.log(windowX)
                               console.log(windowY)
                                     
                         }*/

                    });
                //open lightbox
                if (this.options.startPage > 1 || this.options.lightBoxOpened)
                    self.initPdf()
            }

            this.flipsound = document.createElement('audio');
            this.flipsound.setAttribute('src', this.options.assets.flipMp3);
            this.flipsound.setAttribute('type', 'audio/mpeg')
        };

        FLIPBOOK.Main.prototype = {
            start: function() {
                if (this.started)
                    return;
                this.started = true;

                if (this.options.lightBox) {
                    //test out
                    this.lightbox = new FLIPBOOK.Lightbox(this, this.wrapper, this.options);
                    this.wrapper.css('background', 'none');
                    this.bookLayer.css('background', 'none');
                    this.book.css('background', 'none');

                    this.lightbox.openLightbox();
                    this.lightboxStart()

                }

                this.createBook();
            },

            lightboxStart: function() {

                var self = this;
                if (!this.started) this.start();

                if (typeof this.Book == 'undefined') {

                    setTimeout(function() {
                        self.lightboxStart()
                    }, 100);
                    return;

                }

                this.Book.enable();

                if (this.options.contentOnStart) this.toggleToc(true);

                if (this.options.thumbnailsOnStart) this.toggleThumbs(true);

                self.updateCurrentPage();
                self.initColors();
                self.resize();

            },

            setHash: function(page) {

                jQuery("body").trigger({
                    type: "updatePage",
                    page: page,
                    name: this.options.name
                });

                if (this.options.deeplinking.enabled && this.Book.enabled)
                    window.location.hash = "#" + this.options.deeplinking.prefix + String(page)

            },

            clearHash: function() {

                if (this.options.deeplinking.enabled)
                    window.location.hash = "";

            },

            getPageFromHash: function() {

                var res = parseInt(window.location.hash.replace(/#/g, '').replace(this.options.deeplinking.prefix, ""))
                if (isNaN(res)) res = 0;
                return res;
            },

            initColors: function() {

                jQuery(".skin-color-bg")
                    .removeClass("flipbook-bg-light")
                    .removeClass("flipbook-bg-dark")
                    .addClass("flipbook-bg-" + this.options.skin);

                jQuery(".skin-color")
                    .removeClass("flipbook-color-light")
                    .removeClass("flipbook-color-dark")
                    .addClass("flipbook-color-" + this.options.skin);
            },

            lightboxEnd: function() {

                this.Book.disable();

                screenfull.exit();

                if (window.location.hash) {
                    // var urlWithoutHash = document.location.href.replace(location.hash , "" );
                    this.clearHash()
                }

                this.setLoadingProgress(1)

            },

            turnPageComplete: function() {

                this.animating = false;
                this.updateCurrentPage();

                //autoplay
                var rightIndex = this.Book.rightIndex || 0;
                if ((rightIndex > this.pages.length - 1) && this.autoplay) {
                    this.toggleAutoplay(false)
                }

                jQuery(this).trigger("onTurnPageComplete")
            },

            updateCurrentPage: function(index) {

                if (typeof this.currentPage === 'undefined')
                    return;
                var rtl = this.options.rightToLeft
                var total = this.options.numPages
                var rightIndex = this.Book.rightIndex || 0;
                if (this.options.singlePageMode) {
                    //rightIndex++;
                    if (this.options.rightToLeft) rightIndex = this.options.pages.length - rightIndex;

                    this.currentPage.attr('value', String(rightIndex + 1))
                    this.currentPage.text(String(rightIndex + 1) + ' / ' + String(total))

                    this.enablePrev(rightIndex > 0)
                    this.enableNext(rightIndex <= this.pages.length - 1)
                    this.enableAutoplay(rightIndex <= this.pages.length - 1)

                    this.currentPageNumber = rightIndex
                    this.setHash(this.currentPageNumber + 1)
                    return
                }

                if (typeof(index) != 'undefined')
                    rightIndex = index

                var current = rtl ? this.options.pages.length - rightIndex : rightIndex
                    /*if (current % 2 == 0 && current < this.options.numPages)
                    current++*/
                var s

                if (current > total || (current == total && total % 2 == 0))
                    s = total
                else if (current < 1)
                    s = 1
                else
                    s = String(current) + '-' + String(current + 1)

                s += ' / ' + total

                this.currentPage.attr('value', String(current));
                this.currentPage.text(String(s));

                if (this.s && this.options.pdfPageScale > 0)
                    this.Book.goToPage(0)

                if (total % 2 != 0) total--

                    if (rtl) {

                        this.enablePrev(current < total)
                        this.enableNext(current > 1)
                        this.enableAutoplay(current > 1)

                    } else {

                        this.enablePrev(current > 1)
                        this.enableNext(current < total)
                        this.enableAutoplay(current < total)

                    }

                this.setHash(current)

            },

            initPdf: function(e) {

                var self = this;
                if (self.started) return;

                this.setLoadingProgress(.1)

                if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.pdfjsSrc] && typeof PDFJS == 'undefined') {
                    self.loadScript(FLIPBOOK.pdfjsSrc, function() { self.initPdf(e) })
                    return;
                }

                PDFJS.disableWorker = this.options.disableWorker || false;
                PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK
                PDFJS.workerSrc = FLIPBOOK.pdfjsworkerSrc || this.options.pdfjsworkerSrc || window.location.hostname + '/wp-content/plugins/real3d-flipbook/js/pdf.worker.min.js';
                PDFJS.disableAutoFetch = true;
                PDFJS.disableStream = true;

                PDFJS.getDocument(self.options.pdfUrl /*, null, false, getDocumentProgress*/ ).then(function(pdf) {

                    self.pdfDocument = pdf

                    self.options.numPages = pdf.pdfInfo.numPages;

                    self.pages = []

                    for (var i = 0; i < self.options.numPages; i++) {

                        var p = {
                            canvas: {}
                        }

                        if (self.options.pages && self.options.pages[i]) {
                            jQuery.extend(p, self.options.pages[i])
                        } else {
                            p.title = i + 1
                        }

                        self.pages[i] = p
                    }

                    self.options.pages = self.pages


                    self.pdfService = new FLIPBOOK.PdfService(pdf, self)
                    var e = e
                    self.pdfService.init(function() {
                        self.options.pageMode = this.double ? 'doubleWithCover' : 'singlePage'
                        self.viewportOriginal = this.viewports[1]

                        var bh = self.book.height()
                        var pageSize = 1000
                        self.options.pageWidth = pageSize * self.viewportOriginal.width / self.viewportOriginal.height;
                        self.options.pageHeight = pageSize;

                        if (self.options.loadAllPages) {
                            for (var i = 0; i < self.pdfDocument.pdfInfo.numPages; i++) {
                                self.loadPageFromPdf(i)
                            }
                        }

                        self.start()

                    })
                });
            },

            loadPages: function(arr, callback) {

                if (this.options.pdfMode) {

                    this.loadPagesFromPdf(arr, size, callback)

                } else {

                    while (arr[0] < 0) arr.shift()
                    while (!this.pages[arr[arr.length - 1]]) arr.pop()

                    var index = arr[0],
                        self = this;
                    arr.shift()
                    var self = this
                    this.pages[index].img = new Image()
                    this.pages[index].img.setAttribute("id", index);
                    this.pages[index].img.onload = function() {
                        jQuery(self).trigger("pageLoaded", [parseInt(jQuery(this).attr('id')), 1]);
                        if (arr.length == 0)
                            callback.call(self)
                        else
                            self.loadPages(arr, callback)
                    }
                    this.pages[index].img.src = this.pages[index].src

                }

            },

            loadPagesFromPdf: function(arr, size, callback) {

                var toLoad = arr[0],
                    self = this;

                arr.shift()

                if (arr.length > 0) {

                    this.loadPageFromPdf(toLoad, size, function() {
                        self.loadPagesFromPdf(arr, size, callback)
                    })
                } else
                    this.loadPageFromPdf(toLoad, size, callback)

            },

            loadPageFromPdf: function(pageIndex, size, callback) {

                var self = this;
                var pdf = self.pdfDocument;
                var pdfPageIndex = self.options.pageMode == 'doubleWithCover' ? Math.round(pageIndex / 2) + 1 : pageIndex + 1
                size = size || this.options.pageTextureSize

                if (pdfPageIndex > pdf.pdfInfo.numPages) {
                    //callback.call(self)
                    return;
                }
                if (!self.options.pages[pageIndex]) {
                    callback.call(self)
                } else {
                    if (self.pdfService.pages[pdfPageIndex])
                        self.renderPageFromPdf(self.pdfService.pages[pdfPageIndex], size, callback)
                    else {
                        self.pdfService.getViewport(pdfPageIndex, function(viewport) {
                            self.renderPageFromPdf(self.pdfService.pages[pdfPageIndex], size, callback)
                        });
                    }
                }

            },

            renderPageFromPdf: function(pdfPage, size, callback) {

                var self = this,
                    pi = pdfPage.pageIndex,
                    v = pdfPage.getViewport(1),
                    d = Math.max(v.width, v.height),
                    d = v.height,
                    scale = size / d

                if (self.pdfPagesRendered[pi] && self.pdfPagesRendered[pi][size]) {

                    self.onPdfPageRendered(pi, size, callback)

                } else {

                    if (!self.pdfPagesRendered[pi])
                        self.pdfPagesRendered[pi] = {}
                    self.pdfPagesRendered[pi][size] = 'rendering'

                    self.pdfPagesRendering = self.pdfPagesRendering || []
                    self.pdfPagesRendering[pi] = self.pdfPagesRendering[pi] || []


                    this.pdfService.renderPage(pdfPage, size, function(pdfPage) {

                        self.pdfPagesRendering[pi][size] = false
                        self.pdfPagesRendered[pi][size] = pdfPage

                        self.onPdfPageRendered(pdfPage.pageIndex, size, callback)
                    })

                }
            },

            onPdfPageRendered: function(pi, size, callback) {

                var self = this,
                    p = self.pdfPagesRendered[pi][size];

                if (!p.canvas) return;

                var c = p.canvas[size],
                    h = self.pdfPagesRendered[pi][size].htmlContent;

                if (typeof c == 'undefined') return;

                if (self.options.pageMode == 'doubleWithCover') {

                    if (pi == 0) {

                        self.options.pages[0].canvas[size] = c
                        initializeHtmlContent(h, pi)
                            //self.options.pages[0].htmlContent = h
                        jQuery(self).trigger("pageLoaded", [0, size]);

                    } else if (pi == self.options.pages.length / 2) {

                        self.options.pages[self.options.pages.length - 1].canvas[size] = c
                        initializeHtmlContent(h, self.options.pages.length - 1)
                            //self.options.pages[self.options.pages.length - 1].htmlContent = h

                        jQuery(self).trigger("pageLoaded", [self.options.pages.length - 1, size]);

                    } else {

                        h.style.transformOrigin = '0 0'

                        //create a new canvas
                        var lCanvas = document.createElement('canvas');
                        var lcontext = lCanvas.getContext('2d');
                        lcontext.fillStyle = '#FFFFFF';

                        //set dimensions
                        lCanvas.width = c.width / 2;
                        lCanvas.height = c.height;

                        if (self.webgl) {
                            lCanvas.width = size
                            lCanvas.height = size;
                            lCanvas.scaleX = (c.width / 2) / size
                            lCanvas.scaleY = c.scaleY
                        }

                        lcontext.drawImage(c, 0, 0);

                        var rCanvas = document.createElement('canvas');
                        var rcontext = rCanvas.getContext('2d');
                        rcontext.fillStyle = '#FFFFFF';

                        rCanvas.width = c.width / 2;
                        rCanvas.height = c.height;

                        if (self.webgl) {

                            rCanvas.width = size
                            rCanvas.height = size;
                            rCanvas.scaleX = (c.width / 2) / size
                            rCanvas.scaleY = c.scaleY

                        }

                        //document.body.appendChild(lCanvas)
                        //document.body.appendChild(rCanvas)

                        //right half
                        rcontext.drawImage(c, c.width / 2, 0, c.width / 2, c.height, 0, 0, c.width / 2, c.height);

                        self.options.pages[2 * pi].canvas = self.options.pages[2 * pi].canvas || {}
                        self.options.pages[2 * pi - 1].canvas = self.options.pages[2 * pi - 1].canvas || {}

                        self.options.pages[2 * pi].canvas[size] = rCanvas
                        self.options.pages[2 * pi - 1].canvas[size] = lCanvas

                        /*if(!self.options.pages[2 * pi - 1].htmlContentInitialized){
                             if(self.options.pages[2 * pi - 1].htmlContent)
                                h.appendChild(self.options.pages[2 * pi - 1].htmlContent)
                             self.options.pages[2 * pi - 1].htmlContentInitialized = true
                             self.options.pages[2 * pi - 1].htmlContent = h       
                        }*/

                        initializeHtmlContent(h, 2 * pi - 1)

                        jQuery(self).trigger("pageLoaded", [2 * pi - 1, size]);

                        setTimeout(function() {

                            jQuery(self).trigger("pageLoaded", [2 * pi, size]);

                        }, 10)

                    }

                } else {

                    self.options.pages[pi].canvas[size] = c;
                    initializeHtmlContent(h, pi)
                        //self.options.pages[pi].htmlContent = h;

                    jQuery(self).trigger("pageLoaded", [pi, size]);

                }

                self.setLoadingProgress(1);

                if (callback)
                    callback.call(self);


                function initializeHtmlContent(h, pi) {
                    var page = self.options.pages[pi]
                    if (!page.htmlContentInitialized) {
                        if (page.htmlContent)
                            jQuery(h).append(jQuery(page.htmlContent))
                        page.htmlContentInitialized = true
                        page.htmlContent = h
                    }
                }

            },

            loadThumbsFromPdf: function() {

                var self = this,
                    pdf = self.pdfDocument,
                    info = pdf.pdfInfo,
                    numPages = info.numPages,
                    scale = .4;

                for (var i = 0; i < numPages; i++) {

                    var canvas = document.createElement('canvas');
                    self.pages[i].thumbCanvas = canvas
                    pdf.getPage(i + 1).then(function(page) {
                        var viewport = page.getViewport(scale);

                        //
                        // Prepare canvas using PDF page dimensions
                        //
                        var c = self.pages[page.pageIndex].thumbCanvas
                        var context = c.getContext('2d');
                        c.height = viewport.height;
                        c.width = viewport.width;


                        //
                        // Render PDF page into canvas context
                        //
                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        page.render(renderContext);
                        self.thumbScroll.refresh()

                    });

                }

            },

            scrollPageIntoView: function(pageNumber) {

                this.Book.goToPage(pageNumber)

            },

            loadScript: function(src, callback) {

                var self = this
                var script = document.createElement('script');
                var prior = document.getElementsByTagName('script')[0];
                script.async = 1;
                prior.parentNode.insertBefore(script, prior);

                script.onload = script.onreadystatechange = function(_, isAbort) {
                    if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                        script.onload = script.onreadystatechange = null;
                        script = undefined;

                        if (!isAbort) {
                            if (callback) callback.call(self);
                        }
                        FLIPBOOK.scriptsLoaded[src] = true;
                    }
                };

                script.src = src;

            },

            createBook: function() {

                var self = this;

                /*if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.touchSwipeSrc] && typeof(window.jQuery.fn.swipe) == 'undefined') {
                    self.loadScript(FLIPBOOK.touchSwipeSrc, self.createBook)
                    return;
                }*/

                /*if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.shareSrc]) {
                    self.loadScript(FLIPBOOK.shareSrc, self.createBook)
                    return;
                }*/

                if (self.options.viewMode == "webgl") {
                    if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.threejsSrc] && typeof THREE == 'undefined') {
                        self.loadScript(FLIPBOOK.threejsSrc, self.createBook)
                        return;
                    }
                    if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.flipbookWebGlSrc] && typeof FLIPBOOK.BookWebGL == 'undefined') {
                        self.loadScript(FLIPBOOK.flipbookWebGlSrc, self.createBook)
                        return;
                    }
                }

                this.initEasing()

                if (self.options.pageMode == "doubleWithCover" && self.options.pages.length > 2) {
                    var newArr = [self.options.pages[0]]
                    for (var i = 1; i <= self.options.pages.length - 2; i++) {
                        var p = self.options.pages[i]
                        var left = {
                            src: p.src,
                            thumb: p.thumb,
                            title: p.title,
                            htmlContent: p.htmlContent,
                            side: 'left'
                        }
                        var right = {
                            src: p.src,
                            thumb: p.thumb,
                            title: p.title,
                            htmlContent: p.htmlContent,
                            side: 'right'
                        }
                        if (self.options.rightToLeft) {
                            newArr.push(right)
                            newArr.push(left)
                        } else {
                            newArr.push(left)
                            newArr.push(right)
                        }

                    }
                    newArr.push(self.options.pages[self.options.pages.length - 1])
                    self.options.pages = newArr
                }

                this.options.numPages = this.options.pages.length
                if (this.options.numPages % 2 != 0 && !this.options.singlePageMode && this.options.viewMode != 'swipe') {
                    this.oddPages = true
                    this.options.oddPages = true
                    this.options.pages.push({
                        src: this.options.assets.preloader,
                        thumb: ''
                    })
                }

                if (self.options.rightToLeft) {
                    self.pagesReversed = [];
                    for (var i = self.options.pages.length - 1; i >= 0; i--) {
                        self.pagesReversed.push(self.options.pages[i]);
                    }
                    self.options.pages = self.pagesReversed;
                }

                if (self.options.pages.length > 0) {
                    for (var i = 0; i < self.options.pages.length; i++) {
                        if (typeof(self.options.pages[i].htmlContent) != 'undefined') {
                            // self.options.viewMode = '3d'
                            self.options.hasHtmlContent = true
                        }
                    }
                }

                if (self.options.viewMode == "webgl") {
                    var bookOptions = self.options;
                    bookOptions.pagesArr = self.options.pages;
                    bookOptions.scroll = self.scroll;
                    bookOptions.parent = self;
                    self.Book = new FLIPBOOK.BookWebGL(self.book[0], bookOptions);
                    self.webglMode = true;
                    self.initSwipe();
                } else if (self.options.viewMode == "swipe") {
                    self.Book = new FLIPBOOK.BookCarousel(self.book[0], self.options);
                } else {
                    if (self.options.viewMode != "2d")
                        self.options.viewMode = "3d"

                    // window.addEventListener('FLIPBOOK.bookInitialized', function(){
                    self.scroll = new FLIPBOOK.IScroll(self.bookLayer[0], {
                        zoom: true,
                        zoomMin: self.options.zoomMin,
                        zoomMax: self.options.zoomMax,
                        scrollX: true,
                        scrollY: true,
                        scrollbars: true,
                        // mouseWheel: true,
                        keepInCenterV: true,
                        keepInCenterH: true,
                        preventDefault: false //for text selection and other events in html layer
                            // wheelAction: 'zoom'
                    });

                    self.Book = new FLIPBOOK.Book3(self.book[0], self.options);
                    self.scroll.on("zoomEnd", function() {
                        self.onZoom(self.scroll.scale / self.ratio)
                    })

                    self.initSwipe();

                    self.webglMode = false;
                }

                jQuery(self.Book).bind('flipEnd', function() {

                    var book = this
                    var rightIndex = book.rightIndex
                    var s = ''
                    if (book.mode == 1) {
                        s = String(rightIndex + 1)
                    } else {
                        var left = String(rightIndex)
                        var right = (rightIndex + 1)


                        if (left == 0 || left == right) s = String(right);
                        else if (right > book.pagesArr.length) s = String(left);
                        else s = String(left) + ',' + String(right)

                    }
                    s += '/'
                    s += String(book.pagesArr.length)
                    self.currentPage.val(String(s));
                })

                this.createToc(this.options.tableOfContent);
                this.thumbsCreated = false;
                this.createMenu();

                if (!this.options.menuOverBook) this.bookLayer.css('bottom', this.menuWrapper.height() + 'px');

                this.createCurrentPage();
                if (!this.options.currentPage.enabled) {
                    this.currentPageHolder.hide()
                }

                this.createLogo()

                this.onBookCreated()
            },

            onBookCreated: function() {

                var o = this.options
                    //this.setLoadingProgress(.5)
                    /*if (o.lightBox){
                        this.lightbox.openLightbox();
                        this.lightboxStart()
                    }*/

                var self = this
                jQuery(window).resize(function() {
                    self.resize();
                });

                self.resize();

                if (!this.options.menuOverBook) this.bookLayer.css('bottom', this.menuWrapper.height() + 'px');

                if (o.rightToLeft) {
                    self.Book.goToPage(Number(o.pages.length - Number(o.startPage) + 1), true);
                } else {
                    self.Book.goToPage(Number(o.startPage), true);
                }

                this.updateCurrentPage();

                //keyboard evetns
                document.addEventListener("keydown", function(e) {
                    e = e || window.event;
                    switch (e.keyCode) {
                        //left
                        case 37:
                            self.Book.prevPage();
                            break;
                            //up
                        case 38:
                            self.zoomIn();
                            break;
                            //right
                        case 39:
                            self.Book.nextPage();
                            break;
                            //down
                        case 40:
                            self.zoomOut();
                            break;
                    }
                })

                if (!o.zoomDisabled) {
                    //disable page scrolling
                    jQuery(this.wrapper).on('DOMMouseScroll', function(e) {
                        e.preventDefault();
                    });
                    jQuery(this.wrapper).on('mousewheel', function(e) {
                        e.preventDefault();
                    });
                }

                this.zoom = o.zoom;

                //add mouse scroll listeners
                if (!o.zoomDisabled) {
                    //Firefox
                    this.bookLayer.bind('DOMMouseScroll', function(e) {
                        if (e.originalEvent.detail > 0) {
                            //scroll down
                            // console.log('Down');
                            self.zoomOut()
                        } else {
                            //scroll up
                            // console.log('Up');
                            self.zoomIn()
                        }
                        //prevent page fom scrolling
                        return false;
                    });

                    //IE, Opera, Safari
                    this.bookLayer.bind('mousewheel', function(e) {
                        // alert("mousewheel")
                        if (e.originalEvent.wheelDelta < 0) {
                            //scroll down
                            // console.log('Down');
                            self.zoomOut()
                        } else {
                            //scroll up
                            // console.log('Up');
                            self.zoomIn()
                        }
                        //prevent page fom scrolling
                        return false;
                    });

                    this.bookLayer.bind('gesturestart', function(e) {
                        // alert("gesturestart")
                        if (e.scale < 1.0) {
                            // User moved fingers closer together
                        } else if (e.scale > 1.0) {
                            // User moved fingers further apart
                        }
                    }, false);

                    this.bookLayer.bind('gestureend', function(e) {
                        // alert("gestureend")
                        if (e.scale < 1.0) {
                            self.zoomOut()
                                // User moved fingers closer together
                        } else if (e.scale > 1.0) {
                            self.zoomIn()
                                // User moved fingers further apart
                        }
                    }, false);

                    this.bookLayer.bind('gesturechange', function(e) {
                        // alert("gesturechange")
                        if (e.scale < 1.0) {
                            // User moved fingers closer together
                            self.zoomOut()
                        } else if (e.scale > 1.0) {
                            // User moved fingers further apart
                            self.zoomIn()
                        }
                    }, false);

                }

                if (o.contentOnStart) self.toggleToc(true);

                if (o.thumbnailsOnStart) self.toggleThumbs(true);

                if (o.autoplayOnStart) self.toggleAutoplay(true);

                self.Book.enable()
                self.Book.updateVisiblePages()

                /*if (self.options.lightBox && !self.options.lightBoxOpened)
                self.Book.disable()
            else {
                if (self.options.contentOnStart)
                    self.toggleToc(true);
                if (self.options.thumbnailsOnStart)
                    self.toggleThumbs(true);

                self.Book.enable()
            }*/
                self.initColors();

            },

            initSwipe: function() {

                var self = this
                window.jQuery(this.bookLayer).swipe({

                    swipeStatus: function(e, phase, direction, distance, duration, fingerCount, fingerData) {
                        // console.log(direction, ' ',phase)
                        if (phase == 'start') {

                            try { self.currentPageInput.trigger('blur') } catch (e) {}
                        }

                        if (e.target === self.arrowL[0] || e.target === self.arrowR[0]) return;

                        if ((direction == "up" || direction == "down") && phase == 'move') return;
                        self.Book.onSwipe(e, phase, direction, distance, duration, fingerCount, fingerData)
                    },
                    allowPageScroll: self.options.allowPageScroll

                });

            },

            createButton: function(btn) {

                var $btn = jQuery(document.createElement('span'))
                    .attr('aria-hidden', 'true')
                    .appendTo(this.menu)
                    .addClass(btn.icon)
                    .addClass('flipbook-icon-general flipbook-menu-btn skin-color skin-color-bg fa')
                    .attr('title', btn.title)

                var o = this.options;

                $btn.css({

                    'width': o.btnSize + 'px',
                    'font-size': o.btnSize + 'px',
                    'border-radius': o.btnRadius + 'px',
                    'margin': o.btnMargin + 'px',
                    'padding': o.btnPaddingV + 'px ' + o.btnPaddingH + 'px',
                    'text-shadow': o.btnTextShadow,
                    'box-shadow': o.btnShadow,
                    'border': o.btnBorder,
                    'color': o.btnColor,
                    'background': o.btnBackground

                })

                return $btn

            },

            createMenu: function() {

                var o = this.options

                // if (this.s && o.pdfPageScale > 0) this.onBookCreated = this.createMenu

                /*if (!screenfull.enabled) {
                    this.options.btnExpand = {
                        enabled: false
                    }
                    this.options.btnExpandLightbox = {
                        enabled: false
                    }
                }*/
                var self = this;
                this.menuWrapper = jQuery(document.createElement('div'))
                    .addClass('flipbook-menuWrapper')

                this.menuWrapper.appendTo(this.wrapper);

                if (o.hideMenu)
                    this.menuWrapper.hide();

                this.menu = jQuery(document.createElement('div'))
                    .addClass('flipbook-menu skin-color-bg')
                    .appendTo(this.menuWrapper)
                    .css({
                        'background': o.menuBackground,
                        'box-shadow': o.menuShadow,
                        'margin': o.menuMargin + 'px',
                        'padding': o.menuPadding + 'px',
                        'text-align': o.menuAlignHorizontal
                    })

                //if(o.menuAlignVertical === 'top') this.menuWrapper.css({'top':'0','bottom':'initial'});

                //arrows
                if (o.sideNavigationButtons) {

                    //if (self.options.btnNext.enabled)
                    self.btnNext = jQuery('<div><div class="flipbook-arrow-wrapper"><span class="flipbook-right-arrow fa fa-angle-right skin-color skin-color-bg"></div></div>')
                        .appendTo(self.bookLayer)
                        .bind('tap click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.nextPage();
                        });


                    self.arrowL = self.btnNext.find('span')

                    self.arrowL.css({

                        'width': o.sideBtnSize + 'px',
                        'font-size': o.sideBtnSize + 'px',
                        'border-radius': o.sideBtnRadius + 'px',
                        'margin-top': String(-o.sideBtnSize / 2) + 'px',
                        'margin-right': o.sideBtnMargin + 'px',
                        'padding': o.sideBtnPaddingV + 'px ' + o.sideBtnPaddingH + 'px',
                        'text-shadow': o.sideBtnTextShadow,
                        'box-shadow': o.sideBtnShadow,
                        'border': o.sideBtnBorder,
                        'color': o.sideBtnColor,
                        'background': o.sideBtnBackground

                    })


                    //if (self.options.btnPrev.enabled)
                    self.btnPrev = jQuery('<div><div class="flipbook-arrow-wrapper"><span class="flipbook-left-arrow fa fa-angle-left skin-color skin-color-bg"></div></div>')
                        .appendTo(self.bookLayer)
                        .bind('tap click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.prevPage();
                        })

                    self.arrowR = self.btnPrev.find('span')

                    self.arrowR.css({

                        'width': o.sideBtnSize + 'px',
                        'font-size': o.sideBtnSize + 'px',
                        'border-radius': o.sideBtnRadius + 'px',
                        'margin-top': String(-o.sideBtnSize / 2) + 'px',
                        'margin-left': o.sideBtnMargin + 'px',
                        'padding': o.sideBtnPaddingV + 'px ' + o.sideBtnPaddingH + 'px',
                        'text-shadow': o.sideBtnTextShadow,
                        'box-shadow': o.sideBtnShadow,
                        'border': o.sideBtnBorder,
                        'color': o.sideBtnColor,
                        'background': o.sideBtnBackground

                    })

                    /*if (self.options.btnFirst.enabled)
                        self.btnFirst = jQuery('<div><div class="flipbook-arrow-wrapper"><span class="flipbook-first-arrow fa ' + self.options.btnFirst.icon + '"></div></div>')
                        .appendTo(self.bookLayer)
                        .bind('tap click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.goToPage(1);
                        });

                    if (self.options.btnLast.enabled)
                        self.btnLast = jQuery('<div><div class="flipbook-arrow-wrapper"><span class="flipbook-last-arrow fa ' + self.options.btnLast.icon + '"></div></div>')
                        .appendTo(self.bookLayer)
                        .bind('tap click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.goToPage(self.pages.length);
                        });*/
                } else {

                    if (o.btnFirst.enabled)
                        this.btnFirst = this.createButton(o.btnFirst)
                        .bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.goToPage(1);
                        })

                    if (o.btnPrev.enabled)
                        this.btnPrev = this.createButton(o.btnPrev)
                        .bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.prevPage();
                        })

                    if (o.btnNext.enabled)
                        this.btnNext = this.createButton(o.btnNext)
                        .bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.nextPage();
                        })


                    if (o.btnLast.enabled)
                        this.btnLast = this.createButton(o.btnLast)
                        .bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            self.Book.goToPage(self.pages.length);
                        })
                }

                if (o.btnAutoplay.enabled)
                    this.btnAutoplay = this.createButton(o.btnAutoplay)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        if (!self.autoplay)
                            self.Book.nextPage()
                        self.toggleAutoplay();
                    });

                if (o.btnZoomIn.enabled)
                    this.btnZoomIn = this.createButton(o.btnZoomIn)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.zoomIn();
                    });

                if (o.btnZoomOut.enabled)
                    this.btnZoomOut = this.createButton(o.btnZoomOut)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.zoomOut();
                    });

                this.onZoom(o.zoom)
                if (o.btnToc.enabled && (o.btnTocIfMobile || !o.isMobile))
                    this.btnToc = this.createButton(o.btnToc)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.toggleToc();
                    });

                if (o.btnThumbs.enabled && (o.btnThumbsIfMobile || !o.isMobile))
                    this.btnThumbs = this.createButton(o.btnThumbs)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.toggleThumbs();
                    });

                if (o.btnShare.enabled /*&& o.socialShare.length > 0*/ && (o.btnShareIfMobile || !o.isMobile)) {

                    this.btnShare = this.createButton(o.btnShare)
                        .addClass('flipbook-share')

                    this.share = new Share(this.btnShare[0], {
                        networks: {
                            google_plus: o.google_plus,
                            twitter: o.twitter,
                            facebook: o.facebook,
                            pinterest: o.pinterest,
                            email: o.email
                        }
                    });
                }

                if (o.btnDownloadPages.enabled && (o.btnDownloadPagesIfMobile || !o.isMobile))
                    this.btnDownloadPages = this.createButton(o.btnDownloadPages)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        window.location = o.btnDownloadPages.url;
                    });

                if (o.btnPrint.enabled && (o.btnPrintIfMobile || !o.isMobile))
                    this.btnPrint = this.createButton(o.btnPrint)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.togglePrintWindow();
                    });

                if (o.btnDownloadPdf.enabled && (o.btnDownloadPdfIfMobile || !o.isMobile)) {

                    this.btnDownloadPdf = this.createButton(o.btnDownloadPdf)

                    if (o.pdfMode)
                        o.btnDownloadPdf.url = o.pdfUrl

                    // if(o.btnDownloadPdf.forceDownload){
                    if (false) {
                        this.btnDownloadPdf.append('<a style="display:block;position:absolute;top:0;left:0;width:40px;height:40px;" download="' + o.btnDownloadPdf.url + '"></a>')
                    } else {
                        this.btnDownloadPdf
                            .bind('touchend click', function(e) {
                                e.stopPropagation();
                                e.preventDefault();
                                var target = o.btnDownloadPdf.openInNewWindow || typeof(o.btnDownloadPdf.openInNewWindow == 'undefined') ? '_blank' : '_self'
                                window.open(o.btnDownloadPdf.url, target)
                            });
                    }

                }

                if (o.sound && o.btnSound.enabled && (o.btnSoundIfMobile || !o.isMobile))
                    this.btnSound = this.createButton(o.btnSound)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        if (o.sound) {
                            o.sound = false
                            jQuery(this)
                                .addClass('fa-volume-off')
                                .removeClass('fa-volume-up');
                        } else {
                            o.sound = true
                            jQuery(this)
                                .addClass('fa-volume-up')
                                .removeClass('fa-volume-off');
                        }
                    });

                if (o.btnExpand.enabled && (o.btnExpandIfMobile || !o.isMobile))
                    this.btnExpand = this.createButton(o.btnExpand)
                    .addClass('btnExpand')
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.toggleExpand()
                    })


                if (o.btnSlideshow.enabled)
                    this.btnExpand = this.createButton(o.btnSlideshow)
                    .addClass('btnSlideshow')
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.toggleSlideshow()
                    })

                document.addEventListener("MSFullscreenChange", function(e) {
                    self.handleFsChange()
                });

                document.addEventListener("mozfullscreenchange", function(e) {
                    self.handleFsChange()
                });

                document.addEventListener("webkitfullscreenchange", function(e) {
                    self.handleFsChange()
                });

                document.addEventListener("fullscreenchange", function(e) {
                    self.handleFsChange()
                });
            },

            handleFsChange: function() {

                var self = this
                var $el = self.lightbox ? jQuery(document.body) : self.$elem
                if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || this.isFullscreen) {
                    jQuery('.btnExpand')
                        .addClass(self.options.btnExpand.iconAlt)
                        .removeClass(self.options.btnExpand.icon);

                    $el.addClass('flipbook-browser-fullscreen')
                } else {
                    jQuery('.btnExpand')
                        .addClass(self.options.btnExpand.icon)
                        .removeClass(self.options.btnExpand.iconAlt);

                    $el.removeClass('flipbook-browser-fullscreen')
                }

                this.triggerResize()

            },

            createLogo: function() {
                var o = this.options
                if (!o.logoImg) return;

                var $logo = jQuery('<img>')
                    .attr('src', o.logoImg)
                    .attr('style', o.logoCSS)
                    .appendTo(this.wrapper)

                if (o.logoAlignH == 'right')
                    $logo.css('right', '0')
                if (o.logoAlignV == 'bottom')
                    $logo.css('bottom', '0')

                if (o.logoUrl) {
                    $logo.bind('touchend click', function() {
                        window.open(o.logoUrl, '_blank')
                    })
                }
            },
            createLoadingBar: function() {
                /*this.loadingBar = jQuery(document.createElement('div'))
                .addClass('flipbook-loading-bar')
                .appendTo(this.wrapper);

            this.progressBar = jQuery(document.createElement('div'))
                .addClass('flipbook-progress-bar')
                .appendTo(this.loadingBar);*/

                //this.loadingGif = jQuery('<div id="floatingCirclesG"><div class="f_circleG" id="frotateG_01"></div><div class="f_circleG" id="frotateG_02"></div><div class="f_circleG" id="frotateG_03"></div><div class="f_circleG" id="frotateG_04"></div><div class="f_circleG" id="frotateG_05"></div><div class="f_circleG" id="frotateG_06"></div><div class="f_circleG" id="frotateG_07"></div><div class="f_circleG" id="frotateG_08"></div></div>')
                //    .appendTo(this.wrapper);



                if (this.options.preloader)
                    this.preloader = this.options.preloader
                else
                    this.preloader = jQuery('<div class="cssload-container"><div class="cssload-speeding-wheel"></div></div>')

                if (this.options.lightBox)
                    this.preloader.appendTo(jQuery('body'));
                else
                    this.preloader.appendTo(this.wrapper);

                this.setLoadingProgress(0);
            },
            setLoadingProgress: function(percent) {
                if (percent > 0 && percent < 1) {
                    // this.loadingBar.css('display', 'block');
                    this.preloader.css('display', 'block');
                } else {
                    // this.loadingBar.css('display', 'none');
                    this.preloader.css('display', 'none');
                }
                // this.progressBar.css('width', (percent * 100).toString() +'%');
            },
            createNavigation: function() {
                var self = this;

                this.navLeft = jQuery('<div />');
                this.navLeft
                    // .appendTo(this.bookLayer)
                    // .css('position','absolute')
                    // .css('width','200px')
                    // .css('height','200px')
                    .css('background', '#f00')
                    .css('left', '0')
                    .css('top', '200px')
                    .attr('aria-hidden', 'true')
                    .addClass('skin-color fa fa-chevron-left fa-5x')
                    .css('margin-top', this.navLeft.height() + 'px')
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.Book.prevPage();
                    });

                this.navRight = jQuery('<div />')
                    .appendTo(this.bookLayer)
                    .css('position', 'absolute')
                    .css('width', '200px')
                    .css('height', '200px')
                    .css('margin-top', '-100px')
                    .css('background', '#f00')
                    .css('right', '0')
                    .css('top', '200px')
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.Book.nextPage();
                    });


            },
            playFlipSound: function() {
                var self = this
                if (this.options.sound && this.Book.enabled && typeof(this.flipsound.play) != 'undefined') {
                    this.flipsound.currentTime = 0;
                    setTimeout(function() {
                        self.flipsound.play()
                    }, 100);
                }
            },


            onMouseWheel: function(e) {
                //console.log(e)

                if ('wheelDeltaX' in e) {
                    wheelDeltaX = e.wheelDeltaX / 12;
                    wheelDeltaY = e.wheelDeltaY / 12;
                } else if ('wheelDelta' in e) {
                    wheelDeltaX = wheelDeltaY = e.wheelDelta / 12;
                } else if ('detail' in e) {
                    wheelDeltaX = wheelDeltaY = -e.detail * 3;
                } else {
                    return;
                }
                if (wheelDeltaX > 0)
                    this.zoomIn()
                else
                    this.zoomOut();

            },
            zoomOut: function() {

                var zl = this.options.zoomLevels;
                /*if(this.zoom <= zl[0])
                    return*/
                for (var i = 0; i < zl.length; i++) {
                    var level = zl[i]
                    if (this.zoom == level && i > 0) {
                        this.zoom = zl[i - 1]
                        break;
                    }
                    // this.zoom = zl[0]
                }
                switch (this.options.viewMode) {
                    case '2d':
                    case '3d':
                        this.scroll.zoom(this.zoom * this.ratio, this.bookLayer.width() / 2, this.bookLayer.height() / 2, 0);
                        break;
                    case 'webgl':
                        this.Book.zoomTo(this.zoom);
                        break;
                    case 'swipe':
                        this.Book.zoomOut(this.zoom);
                        break;
                }
                this.onZoom(this.zoom)
            },
            zoomIn: function() {
                var zl = this.options.zoomLevels;
                /*if(this.zoom >= zl[zl.length-1])
                    return*/
                for (var i = 0; i < zl.length; i++) {
                    var level = zl[i]
                    if (this.zoom == level && i < (zl.length - 1)) {
                        this.zoom = zl[i + 1]
                        break;
                    }
                    // this.zoom = zl[0]
                }
                switch (this.options.viewMode) {
                    case '2d':
                    case '3d':
                        this.scroll.zoom(this.zoom * this.ratio, this.bookLayer.width() / 2, this.bookLayer.height() / 2, 0);
                        break;
                    case 'webgl':
                        this.Book.zoomTo(this.zoom);
                        break;
                    case 'swipe':
                        this.Book.zoomIn(this.zoom);
                        break;
                }
                this.onZoom(this.zoom)
            },
            onZoom: function(newZoom) {
                this.zoom = newZoom
                this.enableButton(this.btnZoomIn, newZoom < this.options.zoomMax)
                this.enableButton(this.btnZoomOut, newZoom > this.options.zoomMin)
                    // this.enableSwipe(newZoom <= this.options.zoomMin)
                this.enableSwipe(newZoom <= 1)
                if (this.pdfDocument)
                    this.pdfResize()
            },
            enableSwipe: function(val) {
                if (this.bookLayer) {
                    var action = val ? "enable" : "disable"
                    window.jQuery(this.bookLayer).swipe(action)
                }
            },
            createCurrentPage: function() {
                var self = this;

                var currentPageHolder = jQuery('<div>').appendTo(this.wrapper).addClass('flipbook-currentPageHolder')

                if (this.options.currentPagePositionV == 'top')
                    currentPageHolder.css('top', '0')
                else
                    currentPageHolder.css('bottom', '0')

                if (this.options.currentPagePositionH == 'left')
                    currentPageHolder.css('left', '0')
                else
                    currentPageHolder.css('right', '0')

                currentPageHolder.css('margin', this.options.currentPageMarginV + 'px ' + this.options.currentPageMarginH + 'px')

                this.currentPageHolder = currentPageHolder
                this.currentPage = jQuery(document.createElement('div'))
                    .addClass('flipbook-currentPageNumber')
                    .appendTo(currentPageHolder)

                var $form = jQuery('<form>')
                    .appendTo(currentPageHolder)
                    .submit(function(e) {

                        var value = parseInt(self.currentPageInput.val());
                        value = value > self.pages.length ? self.pages.length : value;
                        if (self.options.rightToLeft) {

                            value = self.options.pages.length - value + 1;
                        }
                        //self.updateCurrentPage();
                        if (self.options.singlePageMode) value--;
                        self.Book.goToPage(value);
                        self.currentPageInput.trigger('blur')
                        return false
                    })

                this.currentPageInput = jQuery('<input type="text" maxlength="4">')
                    .addClass('flipbook-currentPageInput')
                    .appendTo($form)
                    .focus(function() {

                        self.currentPageInput.val('').width(self.currentPageHolder.width())
                        self.currentPage.addClass('flipbook-color-transparent')

                    })
                    .blur(function() {

                        self.currentPage.removeClass('flipbook-color-transparent')
                        self.currentPageInput.val('')

                    })

            },

            createToc: function(tocArray) {
                var self = this;
                this.tocHolder = jQuery('<div>')
                    .addClass('flipbook-tocHolder skin-color-bg')
                    .appendTo(this.wrapper)
                    .css('left', '-1000px')
                this.toc = jQuery('<div>')
                    .addClass('.flipbook-toc')
                    .appendTo(this.tocHolder);
                self.tocScroll = new FLIPBOOK.IScroll(self.tocHolder[0], {
                    bounce: false,
                    mouseWheel: true,
                    scrollbars: true
                });

                //tiile
                var title = jQuery(document.createElement('span'))
                    .addClass('flipbook-tocTitle')
                    .addClass('skin-color')
                    .appendTo(this.toc);

                var btnClose = jQuery('<span>')
                    .attr('aria-hidden', 'true')
                    .appendTo(title)
                    .addClass('flipbook-btn-close fa fa-times flipbook-icon-general skin-color')
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.toggleToc();
                    });


                if (tocArray.length > 0) {

                    var pages = this.pages;
                    for (var i = 0; i < tocArray.length; i++) {

                        var tocItem = jQuery(document.createElement('a'))
                            .attr('class', 'flipbook-tocItem')
                            // .addClass('skin-color-bg')
                            .addClass('skin-color')
                            .attr('title', tocArray[i].page)
                            .appendTo(this.toc)
                            //                    .unbind(self.CLICK_EV)
                            .bind('touchend click', function(e) {
                                e.stopPropagation();
                                e.preventDefault();

                                if (!self.tocScroll.moved) {
                                    var clickedPage = Number(jQuery(this).attr('title'));
                                    if (self.options.rightToLeft)
                                        clickedPage = self.pages.length - clickedPage + 1;

                                    if (self.options.singlePageMode) clickedPage--;

                                    if (self.Book.goingToPage != clickedPage) {
                                        self.Book.goToPage(clickedPage);
                                        if (self.options.tableOfContentCloseOnClick)
                                            self.toggleToc(false)
                                    }
                                }
                            });
                        jQuery(document.createElement('span'))
                            .appendTo(tocItem)
                            .text(tocArray[i].title);
                        jQuery(document.createElement('span'))
                            .appendTo(tocItem)
                            .attr('class', 'right')
                            .text(tocArray[i].page);
                    }

                } else {
                    var pages = this.pages;
                    for (var i = 0; i < pages.length; i++) {
                        if (pages[i].title == "")
                            continue;
                        if (typeof pages[i].title === "undefined")
                            continue;

                        var tocItem = jQuery(document.createElement('a'))
                            .attr('class', 'flipbook-tocItem')
                            // .addClass('skin-color-bg')
                            .addClass('skin-color')
                            .attr('title', String(i + 1))
                            .appendTo(this.toc)
                            //                    .unbind(self.CLICK_EV)
                            .bind('touchend click', function(e) {
                                e.stopPropagation();
                                e.preventDefault();

                                if (!self.tocScroll.moved) {
                                    var clickedPage = Number(jQuery(this).attr('title'));
                                    if (self.options.rightToLeft)
                                        clickedPage = self.pages.length - clickedPage - 1;
                                    if (self.options.singlePageMode) clickedPage--;
                                    if (self.Book.goingToPage != clickedPage) {
                                        self.Book.goToPage(clickedPage);
                                        if (self.options.tableOfContentCloseOnClick)
                                            self.toggleToc(false)
                                    }

                                    //                            console.log(e,this);

                                }
                            });
                        jQuery(document.createElement('span'))
                            .appendTo(tocItem)
                            .text(pages[i].title);
                        jQuery(document.createElement('span'))
                            .appendTo(tocItem)
                            .attr('class', 'right')
                            .text(i + 1);
                    }
                }

                self.tocScroll.refresh();
            },

            enablePrev: function(val) {

                this.enableButton(this.btnPrev, val)
                this.enableButton(this.btnFirst, val)
                this.Book.enablePrev(val)

            },

            enableNext: function(val) {

                this.enableButton(this.btnNext, val)
                this.enableButton(this.btnLast, val)
                this.Book.enableNext(val)

            },

            enableAutoplay: function(val) {

                this.enableButton(this.btnAutoplay, val)
                this.enableButton(this.btnAutoplay, val)

            },

            enableButton: function(button, enabled) {
                if (typeof(button) == 'undefined')
                    return;
                if (enabled) {
                    button.css('opacity', '1')
                    button.css('pointer-events', 'auto')
                } else {
                    button.css('opacity', '.3')
                    button.css('pointer-events', 'none')
                }
                button.enabled = enabled
            },
            resize: function(self) {
                if (typeof(self) == 'undefined') self = this
                    // console.log(self)
                this.blw = self.bookLayer.width()
                this.blh = self.bookLayer.height()
                var bw = self.book.width()
                var bh = self.book.height()

                if (this.blw / this.blh >= bw / bh)
                    self.fitToHeight(true);
                else
                    self.fitToWidth(true);

                if (self.options.viewMode == 'swipe') {
                    self.Book.onResize();
                }
                if (self.options.viewMode == 'webgl') {
                    self.Book.onResize();
                    //fixes issue with resizing canvas when going to fullscreen in Safari (Mac)
                    setTimeout(function() {
                        self.Book.onResize();
                    }, 1000)
                }

                if (this.pdfDocument) {
                    this.pdfResize()
                }

                if (this.scroll) this.scroll.refresh()
            },
            pdfResize: function() {
                var self = this
                    /*
                        //this.pdfDocument.getPage(1).then(function(page) {
                        //self.viewportOriginal = page.getViewport(1);
                    var bh = self.bookLayer.height()
                    scale = bh / self.viewportOriginal.height
                    scale *= self.zoom

                    function findClosestInArray(num, arr) {
                        var minDist = null
                        var dist
                        for (var i = 0; i < arr.length; i++) {
                            dist = Math.abs(num - arr[i])
                            if (!minDist || dist < minDist) {
                                minDist = dist
                                min = arr[i]
                            }
                        }
                        return min
                    }

                    scale = findClosestInArray(scale, self.options.pdf.supportedScales)


                    if (self.Book && self.options.pdf.currentScale != scale)*/
                self.Book.onZoom();
                //});


            },
            fitToHeight: function(resize) {
                var x = this.bookLayer.height();
                var y = this.book.height();
                if (resize)
                    this.ratio = x / y;
                this.fit(this.ratio, resize);
                this.thumbsVertical();
            },
            fitToWidth: function(resize) {
                var x = this.bookLayer.width();
                var y = this.book.width();
                if (resize)
                    this.ratio = x / y;
                this.fit(this.ratio, resize);
                //            this.thumbsHorizontal();
                this.thumbsVertical();
            },
            fit: function(r, resize) {
                if (!this.webglMode && this.scroll) {
                    r = resize ? this.ratio : this.scroll.scale;
                    if (resize) {

                        this.scroll.options.zoomMin = r * this.options.zoomMin;
                        this.scroll.options.zoomMax = r * this.options.zoomMax;
                    }
                    this.scroll.zoom(r * this.options.zoom, this.bookLayer.width() / 2, this.bookLayer.height() / 2, 0);
                }
            },
            createThumbs: function() {
                var self = this,
                    point1,
                    point2;
                if (!self.options.btnThumbs.enabled) {
                    return;
                }
                if (self.options.pdfMode) {
                    self.loadThumbsFromPdf()
                }
                self.thumbsCreated = true;
                //create thumb holder - parent for thumb container
                self.thumbHolder = jQuery(document.createElement('div'))
                    .addClass('flipbook-thumbHolder')
                    .addClass('skin-color-bg')
                    .appendTo(self.wrapper);
                //create thumb container - parent for thumbs
                self.thumbsContainer = jQuery(document.createElement('div')).
                appendTo(self.thumbHolder)
                    .addClass('flipbook-thumbContainer')

                .width(2 * self.options.thumbnailWidth + 25);

                //tiile
                var title = jQuery(document.createElement('span'))
                    .addClass('flipbook-thumbsTitle')
                    // .addClass('skin-color-bg')
                    .addClass('skin-color')
                    .appendTo(this.thumbHolder);

                var btnClose = jQuery(document.createElement('span'))
                    .attr('aria-hidden', 'true')
                    .appendTo(title)
                    .addClass('flipbook-btn-close')
                    .addClass('fa fa-times')
                    .addClass('flipbook-icon-general')
                    .addClass('skin-color')
                    // .addClass('skin-color-bg')
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.toggleThumbs();
                    });



                self.thumbs = [];
                var pages = self.pages;

                var $thumb = jQuery('<div class="flipbook-thumb">').appendTo(self.thumbsContainer).width(self.options.thumbnailWidth);

                for (var i = 0; i < pages.length; i++) {
                    var th = pages[i].thumb;

                    var $thumb = jQuery('<div class="flipbook-thumb">').appendTo(self.thumbsContainer);

                    if (pages[i].thumbCanvas) {
                        var $thumbImg = jQuery(pages[i].thumbCanvas)
                    } else if (th) {
                        var $thumbImg = jQuery('<img/>').attr('src', th)
                        $thumbImg[0].onload = function() {
                            self.thumbScroll.refresh()
                        }

                    } else
                        continue;
                    $thumbImg.appendTo($thumb)
                        .width(self.options.thumbnailWidth)
                        .attr('title', i + 1)
                        .bind('touchend click', function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            if (!self.thumbScroll.moved) {
                                var clickedPage = Number(jQuery(this).attr('title'));
                                if (self.options.rightToLeft)
                                    clickedPage = pages.length - clickedPage + 1;

                                if (self.options.singlePageMode) clickedPage--;
                                if (self.Book.goingToPage != clickedPage)
                                    self.Book.goToPage(clickedPage);
                            }
                        });
                    var $pageNumber = jQuery('<span/>').text(i + 1)
                        .appendTo($thumb)
                        .addClass('skin-color')
                        .addClass('flipbook-thumb-num')
                        .width(self.options.thumbnailWidth);
                }
                /*if(self.options.rightToLeft){
                    jQuery('.flipbook-thumb').css('float','right')
                }*/
                self.thumbScroll = new FLIPBOOK.IScroll(self.thumbHolder[0], {
                    bounce: false,
                    mouseWheel: true,
                    scrollbars: true
                });
            },
            toggleThumbs: function(value) {
                if (!this.thumbsCreated) {
                    this.createThumbs()
                    this.initColors()
                }
                if (this.thumbHolder) {
                    if (!this.thumbsShowing || value) {
                        this.thumbHolder.css('left', '0')
                        if (this.tocShowing)
                            this.toggleToc()
                        this.thumbsVertical();

                        this.bookLayer.css('left', this.thumbHolder.width() + 'px')
                        this.thumbsShowing = true
                    } else {
                        this.thumbHolder.css('left', '-1000px')
                        this.bookLayer.css('left', '0')
                        this.thumbsShowing = false
                    }
                    this.resize()
                }
            },
            toggleToc: function(value) {
                if (!this.tocShowing || value) {
                    this.tocShowing = true
                    this.tocHolder.css('left', '0')
                    if (this.thumbsShowing)
                        this.toggleThumbs()
                    this.tocScroll.refresh();
                    this.bookLayer.css('left', this.tocHolder.width() + 'px')
                } else {
                    this.tocHolder.css('left', '-1000px')
                    this.tocShowing = false
                    this.bookLayer.css('left', '0')
                }
                this.resize()
            },
            printPdf: function(url) {
                var iframe = this._printIframe;
                if (!this._printIframe) {
                    iframe = this._printIframe = document.createElement('iframe');
                    document.body.appendChild(iframe);

                    iframe.style.display = 'none';
                    iframe.onload = function() {
                        setTimeout(function() {
                            iframe.focus();
                            iframe.contentWindow.print();
                        }, 1);
                    };
                }

                iframe.src = url;
            },
            togglePrintWindow: function(value) {
                var self = this;

                if (self.options.pdfUrl) {
                    self.printPdf(self.options.pdfUrl)
                    return
                }

                function printme() {
                    link = "about:blank";
                    var pw = window.open(link, "_new");
                    pw.document.open();
                    var images = ""
                    for (var i = 0; i < self.options.pages.length; i++) {
                        if (self.options.pages[i].src)
                            images += '<img src="' + self.options.pages[i].src.toString() + '"/>\n'
                    }
                    var printHtml = printWindowHtml(images)
                    pw.document.write(printHtml);
                    pw.document.close();
                }


                function printWindowHtml(images) {
                    // We break the closing script tag in half to prevent
                    // the HTML parser from seeing it as a part of
                    // the *main* page.

                    return "<html>\n" +
                        "<head>\n" +
                        "<title>Temporary Printing Window</title>\n" +
                        "<script>\n" +
                        "function step1() {\n" +
                        "  setTimeout('step2()', 10);\n" +
                        "}\n" +
                        "function step2() {\n" +
                        "  window.print();\n" +
                        "  window.close();\n" +
                        "}\n" +
                        "</scr" + "ipt>\n" +
                        "</head>\n" +
                        "<body onLoad='step1()'>\n" +
                        images +
                        "</body>\n" +
                        "</html>\n";
                }

                printme()
                return;


                var self = this
                if (!this.printWindowCreated) {
                    this.printWindowCreated = true
                    this.printWindow = jQuery('<div>').addClass('flipbook-print-window').appendTo(this.wrapper)
                    var html = jQuery('<div class="panel panel-default">' +
                        '<div class="panel-heading">Print</div>' +
                        '<div class="panel-body">' +
                        '<div class="row">' +
                        '<div class="col-lg-12">' +
                        '<form role="form">' +
                        '<div class="form-group">' +
                        '<label></label>' +
                        '<label class="radio-inline"><input type="radio" name="optionsRadiosInline" id="optionsRadiosInline1" value="option1" checked>Left page</label>' +
                        '<label class="radio-inline"><input type="radio" name="optionsRadiosInline" id="optionsRadiosInline2" value="option2">Right page</label>' +
                        '<label class="radio-inline"><input type="radio" name="optionsRadiosInline" id="optionsRadiosInline3" value="option3">All pages</label>' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label>Or select one or more pages</label>' +
                        '<select multiple class="form-control">' +
                        '<option>Page 1</option>' +
                        '</select>' +
                        '</div>' +
                        '<button type="button" class="btn btn-default btn-close">Close</button>' +
                        '<button type="button" class="btn btn-default pull-right btn-print">Print</button>' +
                        '</form>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>').appendTo(this.printWindow).hide().fadeIn()

                    this.printWindow.find('.btn-print').bind('touchend click', function() {
                        printme()
                    })
                    this.printWindow.find('.btn-close').bind('touchend click', function() {
                        self.printWindow.fadeToggle()
                    })
                } else {
                    this.printWindow.fadeToggle()
                }
            },
            thumbsVertical: function() {
                if (!this.thumbsCreated)
                    return;
                this.thumbScroll.hScroll = false;
                this.thumbScroll.vScroll = true;
                this.thumbScroll.refresh();
            },

            toggleExpand: function(e) {

                this.browserFullscreen = true
                var elem = this.lightbox ? document.documentElement : this.elem[0]

                //var elem = this.elem[0]

                if (screenfull.enabled) {

                    screenfull.toggle(elem)

                } else {

                    jQuery(elem).toggleClass('flipbook-browser-fullscreen')
                    this.isFullscreen = !this.isFullscreen
                    this.handleFsChange()

                }

                // this.triggerResize() 

            },

            toggleAutoplay: function(value) {
                var self = this
                this.autoplay = value || !this.autoplay;

                if (this.autoplay) {
                    jQuery('.fa-play').removeClass('fa-play').addClass('fa-pause')
                    this.autoplayTimer = setInterval(function() {
                        if (self.autoplay) {
                            self.Book.nextPage()
                        }
                    }, self.options.autoplayInterval)
                } else {
                    jQuery('.fa-pause').removeClass('fa-pause').addClass('fa-play')
                    clearInterval(self.autoplayTimer)
                }
            },

            triggerResize: function() {

                // var self = this
                setTimeout(function() {
                    // self.zoomIn()
                    // self.zoomOut()
                    jQuery(window).trigger('resize');
                }, 100);
                setTimeout(function() {
                    // self.zoomIn()
                    // self.zoomOut()
                    jQuery(window).trigger('resize');
                }, 500);
                setTimeout(function() {
                    // self.zoomIn()
                    // self.zoomOut()
                    jQuery(window).trigger('resize');
                }, 2000);

            },

            toggleSlideshow: function() {

            },

            initEasing: function() {
                //easign functions
                window.jQuery.extend(window.jQuery.easing, {
                    def: 'easeOutQuad',
                    swing: function(x, t, b, c, d) {
                        //alert(jQuery.easing.default);
                        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
                    },
                    easeInQuad: function(x, t, b, c, d) {
                        return c * (t /= d) * t + b;
                    },
                    easeOutQuad: function(x, t, b, c, d) {
                        return -c * (t /= d) * (t - 2) + b;
                    },
                    easeInOutQuad: function(x, t, b, c, d) {
                        if ((t /= d / 2) < 1)
                            return c / 2 * t * t + b;
                        return -c / 2 * ((--t) * (t - 2) - 1) + b;
                    },
                    easeInCubic: function(x, t, b, c, d) {
                        return c * (t /= d) * t * t + b;
                    },
                    easeOutCubic: function(x, t, b, c, d) {
                        return c * ((t = t / d - 1) * t * t + 1) + b;
                    },
                    easeInOutCubic: function(x, t, b, c, d) {
                        if ((t /= d / 2) < 1)
                            return c / 2 * t * t * t + b;
                        return c / 2 * ((t -= 2) * t * t + 2) + b;
                    },
                    easeInQuart: function(x, t, b, c, d) {
                        return c * (t /= d) * t * t * t + b;
                    },
                    easeOutQuart: function(x, t, b, c, d) {
                        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
                    },
                    easeInOutQuart: function(x, t, b, c, d) {
                        if ((t /= d / 2) < 1)
                            return c / 2 * t * t * t * t + b;
                        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                    },
                    easeInQuint: function(x, t, b, c, d) {
                        return c * (t /= d) * t * t * t * t + b;
                    },
                    easeOutQuint: function(x, t, b, c, d) {
                        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                    },
                    easeInOutQuint: function(x, t, b, c, d) {
                        if ((t /= d / 2) < 1)
                            return c / 2 * t * t * t * t * t + b;
                        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
                    },
                    easeInSine: function(x, t, b, c, d) {
                        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
                    },
                    easeOutSine: function(x, t, b, c, d) {
                        return c * Math.sin(t / d * (Math.PI / 2)) + b;
                    },
                    easeInOutSine: function(x, t, b, c, d) {
                        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
                    },
                    easeInExpo: function(x, t, b, c, d) {
                        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
                    },
                    easeOutExpo: function(x, t, b, c, d) {
                        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
                    },
                    easeInOutExpo: function(x, t, b, c, d) {
                        if (t == 0)
                            return b;
                        if (t == d)
                            return b + c;
                        if ((t /= d / 2) < 1)
                            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
                    },
                    easeInCirc: function(x, t, b, c, d) {
                        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
                    },
                    easeOutCirc: function(x, t, b, c, d) {
                        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
                    },
                    easeInOutCirc: function(x, t, b, c, d) {
                        if ((t /= d / 2) < 1)
                            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
                    },
                    easeInElastic: function(x, t, b, c, d) {
                        var s = 1.70158;
                        var p = 0;
                        var a = c;
                        if (t == 0)
                            return b;
                        if ((t /= d) == 1)
                            return b + c;
                        if (!p)
                            p = d * .3;
                        if (a < Math.abs(c)) {
                            a = c;
                            var s = p / 4;
                        } else
                            var s = p / (2 * Math.PI) * Math.asin(c / a);
                        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                    },
                    easeOutElastic: function(x, t, b, c, d) {
                        var s = 1.70158;
                        var p = 0;
                        var a = c;
                        if (t == 0)
                            return b;
                        if ((t /= d) == 1)
                            return b + c;
                        if (!p)
                            p = d * .3;
                        if (a < Math.abs(c)) {
                            a = c;
                            var s = p / 4;
                        } else
                            var s = p / (2 * Math.PI) * Math.asin(c / a);
                        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
                    },
                    easeInOutElastic: function(x, t, b, c, d) {
                        var s = 1.70158;
                        var p = 0;
                        var a = c;
                        if (t == 0)
                            return b;
                        if ((t /= d / 2) == 2)
                            return b + c;
                        if (!p)
                            p = d * (.3 * 1.5);
                        if (a < Math.abs(c)) {
                            a = c;
                            var s = p / 4;
                        } else
                            var s = p / (2 * Math.PI) * Math.asin(c / a);
                        if (t < 1)
                            return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
                    },
                    easeInBack: function(x, t, b, c, d, s) {
                        if (s == undefined)
                            s = 1.70158;
                        return c * (t /= d) * t * ((s + 1) * t - s) + b;
                    },
                    easeOutBack: function(x, t, b, c, d, s) {
                        if (s == undefined)
                            s = 1.70158;
                        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
                    },
                    easeInOutBack: function(x, t, b, c, d, s) {
                        if (s == undefined)
                            s = 1.70158;
                        if ((t /= d / 2) < 1)
                            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
                    },
                    easeInBounce: function(x, t, b, c, d) {
                        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
                    },
                    easeOutBounce: function(x, t, b, c, d) {
                        if ((t /= d) < (1 / 2.75)) {
                            return c * (7.5625 * t * t) + b;
                        } else if (t < (2 / 2.75)) {
                            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                        } else if (t < (2.5 / 2.75)) {
                            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                        } else {
                            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                        }
                    },
                    easeInOutBounce: function(x, t, b, c, d) {
                        if (t < d / 2)
                            return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
                        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
                    }
                });
            }
        };

        { /* FLIPBOOK.Lightbox */

            FLIPBOOK.Lightbox = function(context, content, options) {

                var self = this;
                this.context = context;
                this.options = options;
                this.lightboxOpened = false
                context.$elem.bind('tap click', function(e) {
                    self.openLightbox();
                    /*if (self.context.options.lightBoxFullscreen) {
                        self.context.toggleExpand()
                    }*/
                });

                var img = jQuery(context.elem).find('img');

                self.overlay = jQuery(document.createElement('div'))
                    .attr('class', 'flipbook-overlay')
                    .css('display', 'none')
                    .bind('tap click', function(e) {
                        if (jQuery(e.target).hasClass('flipbook-bookLayer') && self.options.lightboxCloseOnClick) {
                            self.closeLightbox();
                        }
                    })
                    .appendTo('body')

                if (options.lightboxBackground)
                    self.overlay.css('background', options.lightboxBackground)

                jQuery(document).keyup(function(e) {
                    if (e.keyCode == 27) {
                        self.closeLightbox();
                    } // escape key maps to keycode `27`
                });


                self.wrapper = jQuery(document.createElement('div'))
                    .css('height', 'auto')
                    .appendTo(self.overlay);

                self.wrapper
                    .attr('class', 'flipbook-wrapper-transparent')
                    .css('margin', '0px auto')
                    .css('padding', '0px')
                    .css('height', '100%')
                    .css('width', '100%');

                content
                    .appendTo(self.wrapper);

                // close button
                var $toolbar = jQuery('<div/>')
                    .appendTo(self.wrapper)
                    .addClass('flipbook-lightbox-toolbar');

                /*var $close = jQuery('<span title="Press Esc tp close"/>')
                    .appendTo($toolbar)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.closeLightbox();
                    })
                    .addClass('flipbook-lightbox-close fa fa-times');*/


                var $close = jQuery('<span title="Press Esc tp close"/>')
                    .appendTo($toolbar)
                    .bind('touchend click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        self.closeLightbox();
                    })
                    .addClass('skin-color skin-color-bg flipbook-lightbox-close fa fa-times');

                //    this.overlay.css('display','none');

            };

            FLIPBOOK.Lightbox.prototype = {

                openLightbox: function() {
                    var self = this;
                    this.overlay.css('visibility', 'visible');
                    this.overlay.css('display', 'none');
                    this.wrapper.css('display', 'none');
                    this.overlay.fadeIn("fast", function() {
                        self.wrapper.css('display', 'block')
                        self.wrapper.css('opacity', '1')
                        self.context.lightboxStart();
                        self.lightboxOpened = true
                    });
                    this.wrapper.css('display', 'block')
                    this.wrapper.css('opacity', '0')
                    jQuery('body').css('overflow', 'hidden');
                    // self.context.resize();
                },
                closeLightbox: function() {
                    var self = this;
                    if (self.lightboxOpened != true) return;
                    self.lightboxOpened = false;
                    this.overlay.fadeOut("fast");
                    //        this.overlay.css('visibility','hidden');
                    jQuery('body').css('overflow', 'auto');

                    self.context.lightboxEnd();
                },
                resize: function() {
                    var self = this;
                    var jQuerywindow = jQuery(window),
                        ww = jQuerywindow.width(),
                        wh = jQuerywindow.height();

                }
            };
        }

        { /* FLIPBOOK.BookCarousel */
            FLIPBOOK.BookCarousel = function(el, options) {

                this.main = options.main;
                this.options = options
                options.singlePageMode = true
                this.singlePage = options.singlePageMode
                this.pageWidth = this.options.pageWidth
                this.pageHeight = this.options.pageHeight

                this.scroller = typeof el == 'object' ? el : document.getElementById(el);
                this.$scroller = jQuery(this.scroller).removeClass('book').addClass('flipbook-carousel-scroller')

                this.$wrapper = jQuery(this.main.bookLayer[0])

                /*this.$zoomLayer = jQuery('<div>').appendTo(this.main.wrapper).addClass('flipbook-zoomLayer')

                this.$zoomScroller = jQuery('<div style="background:#f00;display:block;position:relative;">')
                    .width(this.options.pageWidth)
                    .height(this.options.pageHeight)
                    .appendTo(this.$zoomLayer)*/


                var numPages = this.options.pages.length

                /*this.$scroller.width(numPages * this.$wrapper.width())*/
                this.slides = []
                this.pagesArr = []
                this.leftPage = 0
                this.rightPage = 0

                //var $ul = jQuery('<ul>').appendTo(this.$scroller)
                for (var i = 0; i < numPages; i++) {
                    //var $li = jQuery('<li>').appendTo($ul)
                    var $slide = jQuery('<div>').appendTo(this.$scroller).addClass('flipbook-carousel-slide')
                    this.slides.push($slide)
                    var $page = jQuery('<div>')
                        .addClass('flipbook-carousel-page')
                        .css('background', '#ddd')
                        .width(this.$wrapper.height() * this.pageWidth / this.pageHeight)
                        .height(this.$wrapper.height())
                        .hide()
                    this.pagesArr.push($page)
                }

                this.iscroll = new FLIPBOOK.IScroll(this.main.bookLayer[0], {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    snap: true,
                    snapSpeed: 400,
                    keyBindings: false,
                    //zoom: true,
                    //mouseWheel: true,
                    //wheelAction: 'zoom'
                });


                this.rightIndex = 0


                // this.onResize()


                var self = this
                this.iscroll.on("scrollEnd", function() {


                    //options.main.turnPageComplete()
                    self.updateVisiblePages()

                })

                /*this.iscroll.on("zoomStart", function() {
                    var page = this.currentPage.pageX
                    debugger
                })

                this.iscroll.on("zoomEnd", function() {
                    var page = this.currentPage.pageX
                    debugger
                })*/

                jQuery(this.main).bind('pageLoaded', function(e, i) {

                    self.pagesArr[i].empty()
                    if (self.options.pages[i].img) {
                        var $img = jQuery(self.options.pages[i].img).addClass('flipbook-carousel-page-inner')
                        self.pagesArr[i].append($img)
                    }
                    if (self.options.pages[i].canvas) {
                        var $c = jQuery(self.options.pages[i].canvas).addClass('flipbook-carousel-page-inner')
                        self.pagesArr[i].append($c)
                    }
                    if (self.options.pages[i].htmlContent) {
                        var $h = jQuery(self.options.pages[i].htmlContent).addClass('flipbook-carousel-page-inner')
                        var s = self.$wrapper.height() / 1000
                        $h.css({
                            'transform': 'scale(' + s + ')',
                            '-webkit-transform': 'scale(' + s + ')',
                        })
                        self.pagesArr[i].append($h)
                    }

                })
            }
            FLIPBOOK.BookCarousel.prototype.constructor = FLIPBOOK.BookCarousel;
            FLIPBOOK.BookCarousel.prototype = {
                goToPage: function(value, time) {
                    //go to page 1,2,... first page is 1
                    if (isNaN(value) || value < 1)
                        value = 1
                    var slide
                    if (this.mode == 2)
                        slide = Math.floor(value / 2)
                    else
                        slide = value - 1
                    this.iscroll.goToPage(slide, 0, time || 300)

                },
                setSingle: function() {
                    if (this.mode == 1) return
                    this.mode = 1
                    this.$scroller.empty()
                    for (var i = 0; i < this.pagesArr.length; i++) {
                        this.pagesArr[i].appendTo(this.slides[i])
                        this.pagesArr[i].slide = i
                        this.$scroller.append(this.slides[i])
                    };
                    this.$scroller.width(this.$scroller.children().length * this.$wrapper.width())
                    this.iscroll.refresh()
                    this.goToPage(this.left, 0)
                    this.updateVisiblePages()


                },
                setDouble: function() {
                    if (this.mode == 2) return
                    this.mode = 2
                    this.$scroller.empty()
                    for (var i = 0; i < this.pagesArr.length; i++) {
                        this.pagesArr[i].appendTo(this.slides[Math.ceil(i / 2)])
                        this.pagesArr[i].slide = Math.ceil(i / 2)
                        this.$scroller.append(this.slides[Math.ceil(i / 2)])
                    };
                    this.$scroller.width(this.$scroller.children().length * this.$wrapper.width())
                    this.iscroll.refresh()
                    this.goToPage(this.left, 0)
                    this.updateVisiblePages()
                },
                nextPage: function() {
                    this.iscroll.goToPage(this.iscroll.currentPage.pageX + 1, 0, 300)
                },
                prevPage: function() {
                    this.iscroll.goToPage(this.iscroll.currentPage.pageX - 1, 0, 300)
                },
                updateVisiblePages: function() {

                    var page = this.iscroll.currentPage.pageX
                    if (this.mode == 1) {
                        this.rightIndex = page
                        this.left = this.rightIndex + 1
                        this.right = this.rightIndex + 1
                    } else {
                        this.rightIndex = page * 2
                        this.left = this.rightIndex
                        this.right = this.rightIndex + 1
                    }

                    jQuery(this).trigger('flipEnd')

                    var currSlide = this.getCurrentSlide()
                    var numSlides = this.getNumSlides()
                    var toLoad = this.getSlidePages(currSlide)
                        //console.log("currSlide= ",currSlide,", numSlides=",numSlides,'\n')
                        /*for (var i = 0; i < this.pagesArr.length; i++) {
                       this.pagesArr[i].hide()
                    }*/
                        /*var currSlide = this.getCurrentSlide()
                    var toLoad = this.getSlidePages(currSlide)*/
                    if (currSlide > 0) {
                        toLoad = toLoad.concat(this.getSlidePages(currSlide - 1))
                    }
                    if (currSlide < (numSlides - 1)) {
                        toLoad = toLoad.concat(this.getSlidePages(currSlide + 1))
                    }

                    for (var i = 0; i < toLoad.length; i++) {
                        this.pagesArr[toLoad[i]].show()
                    }


                    this.enablePrev(currSlide > 0)
                    this.enableNext(currSlide < (numSlides - 1))

                    this.main.options.pageTextureSize = this.$wrapper.height()

                    this.main.loadPages(toLoad, function() {})

                    /*var $img = jQuery('<img>').attr('src',this.options.pages[this.rightIndex].src)

                    this.$zoomScroller.empty().append($img)
                
                    this.zoomScroll = new IScroll(this.$zoomLayer[0], {
                        zoom: true,
                        scrollX: true,
                        scrollY: true,
                        mouseWheel: true,
                        wheelAction: 'zoom',

                        //zoomMin: this.options.zoomMin,
                        //zoomMax: this.options.zoomMax,
                        scrollbars: true,
                        // mouseWheel: true,
                        keepInCenterV: true,
                        keepInCenterH: true,
                        //preventDefault: false
                    });*/

                },
                getCurrentSlide: function() {
                    return this.iscroll.currentPage.pageX
                },
                getNumSlides: function() {
                    return this.$scroller.children().length
                },
                getSlidePages: function(index) {
                    var pages = []
                    slide = this.slides[index]
                    for (var i = 0; i < this.pagesArr.length; i++) {
                        var page = this.pagesArr[i]
                        if (page.slide == index)
                            pages.push(i)
                    }
                    return pages
                },
                hidePage: function(index) {

                },
                showPage: function(index) {

                },
                disable: function() {

                },
                enable: function() {

                },
                resize: function() {},
                onResize: function() {

                    var w = this.$wrapper.width()
                    var h = this.$wrapper.height()
                    for (var i = 0; i < this.slides.length; i++) {
                        this.slides[i].width(w).height(h)

                        this.pagesArr[i].width(this.$wrapper.height() * this.pageWidth / this.pageHeight)
                            .height(this.$wrapper.height())
                    }

                    if (2 * this.pageWidth / this.pageHeight > w / h)
                        this.setSingle()
                    else
                        this.setDouble()

                    this.$scroller.width(this.$scroller.children().length * this.$wrapper.width())
                    this.iscroll.refresh()
                        //this.updateVisiblePages()



                    /* this.setSingle()*/
                },
                zoomTo: function(val, time) {
                    /*this.iscrollZoom.zoom(2, 0, 0, 100)*/

                },

                zoomIn: function(value) {

                    this.zoomTo(value)

                },

                zoomOut: function(value) {

                    this.zoomTo(value)

                },

                onZoom: function() {

                },

                enablePrev: function(val) {

                    this.main.enablePrev(val)

                },

                enableNext: function(val) {

                    this.main.enableNext(val)

                },

                enableAutoplay: function(val) {

                    this.main.enableAutoplay(val)

                },

                updateCurrentPage: function(val) {


                }
            }
        }

        { /* FLIPBOOK.Book3*/

            FLIPBOOK.Book3 = function(el, options) {

                this.main = options.main;
                this.options = options
                this.singlePage = options.singlePageMode
                this.pageWidth = this.options.pageWidth
                this.pageHeight = this.options.pageHeight

                this.wrapper = typeof el == 'object' ? el : document.getElementById(el);
                this.$wrapper = jQuery(this.wrapper).addClass('flipbook-book3')
                var s = this.wrapper.style;
                // s.width = String(2 * this.pageWidth) + 'px';
                if (this.singlePage)
                    s.width = String(this.pageWidth) + 'px';
                else
                    s.width = String(2 * this.pageWidth) + 'px';
                s.height = String(this.pageHeight) + 'px';


                this.$centerContainer = jQuery('<div>').appendTo(this.$wrapper).addClass('flipbook-center-container3')
                if (this.options.singlePageMode) {
                    this.$centerContainer.css({
                        'perspective-origin-x': '0',
                        '-webkit-perspective-origin-x': '0'
                    })
                }
                this.centerContainerStyle = this.$centerContainer[0].style
                this.pagesArr = []
                this.animating = false;
                this.rightIndex = options.rightToLeft ? options.pages.length : 0

                this.flippedleft = this.rightIndex;
                this.flippedright = options.pages.length - this.rightIndex;
                //create pages
                this.numPages = options.pages.length

                var page
                    //double page mode
                for (var i = 0; i < options.pages.length; i++) {
                    page = new FLIPBOOK.Page3(this, i, options.pages[i].src, options.pages[i].htmlContent)
                    this.pagesArr.push(page)
                    this.$centerContainer.append(page.$wrapper)
                    this.flippedright++;
                    if (options.loadAllPages)
                        page.load()
                }
                this.pagesArr[0].show()
                    //this.updateVisiblePages()
            }

            FLIPBOOK.Book3.prototype = {}

            FLIPBOOK.Book3.prototype.enablePrev = function(val) {

                this.prevEnabled = val

            }

            FLIPBOOK.Book3.prototype.enableNext = function(val) {

                this.nextEnabled = val

            }

            FLIPBOOK.Book3.prototype.isZoomed = function() {
                return this.main.zoom > this.options.zoomLevels[0] && this.main.zoom > 1
            }

            FLIPBOOK.Book3.prototype.onZoom = function() {
                if (!this.enabled) return;
                for (var i = 0; i < this.pagesArr.length; i++) {
                    this.pagesArr[i].loaded = false
                }
                var self = this;
                setTimeout(function() {
                    self.updateVisiblePages(false)
                }, 100);
            }

            FLIPBOOK.Book3.prototype.getNumPages = function() {}

            FLIPBOOK.Book3.prototype.updateBookPosition = function() {
                var transform
                if (this.rightIndex == 0) {
                    transform = 'translateX(-' + this.pageWidth / 2 + 'px)'
                } else if (this.rightIndex >= this.options.pages.length) {
                    transform = 'translateX(' + this.pageWidth / 2 + 'px)'
                } else {
                    transform = 'translateX(0)'
                }
                if (this.options.singlePageMode)
                    transform = 'translateX(0)'
                this._setStyle(this.centerContainerStyle, FLIPBOOK.IScroll.utils.style.transform, transform)
            }

            FLIPBOOK.Book3.prototype.updateVisiblePages = function(loadNextPrev) {
                if (typeof loadNextPrev == 'undefined')
                    loadNextPrev = true
                var transform = FLIPBOOK.IScroll.utils.style.transform
                for (var i = 0; i < this.pagesArr.length; i++) {
                    if (i == this.flippedleft)
                        this.pagesArr[i].show()
                    else if (i == (this.flippedleft - 1) && !this.options.singlePageMode)
                        this.pagesArr[i].show()
                    else
                        this.pagesArr[i].hide()
                    this.pagesArr[i]._setZIndex(0)
                    this.pagesArr[i]._setStyle(this.pagesArr[i].wrapper.style, transform, '');
                }
                this.updateBookPosition()

                if (this.pagesArr[this.rightIndex]) this.pagesArr[this.rightIndex].load()
                if (this.pagesArr[this.rightIndex + 1] && loadNextPrev) this.pagesArr[this.rightIndex + 1].load()
                if (this.pagesArr[this.rightIndex - 1]) this.pagesArr[this.rightIndex - 1].load()

                if (!this.options.singlePageMode) {
                    if (this.pagesArr[this.rightIndex + 2] && loadNextPrev) this.pagesArr[this.rightIndex + 2].load()
                    if (this.pagesArr[this.rightIndex - 2] && loadNextPrev) this.pagesArr[this.rightIndex - 2].load()
                    if (this.pagesArr[this.rightIndex - 3] && loadNextPrev) this.pagesArr[this.rightIndex - 3].load()
                }
            }


            FLIPBOOK.Book3.prototype.enable = function() {
                this.enabled = true
            }

            FLIPBOOK.Book3.prototype.disable = function() {
                this.enabled = false
            }

            FLIPBOOK.Book3.prototype.getLeftPage = function() {
                return this.pagesArr[this.flippedleft - 1]
            }

            FLIPBOOK.Book3.prototype.getRightPage = function() {
                return this.pagesArr[this.flippedleft]
            }

            FLIPBOOK.Book3.prototype.getLeftBackPage = function() {
                return this.pagesArr[this.flippedleft - 2]
            }

            FLIPBOOK.Book3.prototype.getRightBackPage = function() {
                return this.pagesArr[this.flippedleft + 1]
            }

            FLIPBOOK.Book3.prototype.getNextPage = function() {
                return this.pagesArr[this.flippedleft + 2]
            }

            FLIPBOOK.Book3.prototype.getPrevPage = function() {
                return this.pagesArr[this.flippedleft - 3]
            }

            FLIPBOOK.Book3.prototype.nextPage = function(instant, duration) {
                if (!this.nextEnabled) return
                var target = this.options.singlePageMode ? this.rightIndex + 1 : this.rightIndex + 2
                this.goToPage(target, instant)
            }

            FLIPBOOK.Book3.prototype.prevPage = function(instant) {
                if (!this.prevEnabled) return
                var target = this.options.singlePageMode ? this.rightIndex - 1 : this.rightIndex - 2
                this.goToPage(target, instant)
            }

            FLIPBOOK.Book3.prototype.goToPage = function(index, instant) {
                if (this.flipping)
                    return;

                if (index < 0)
                    index = 0;

                if (this.options.singlePageMode) {
                    //sp
                    if (index > this.pagesArr.length)
                        index = this.pagesArr.length
                } else {
                    //dp
                    if (index % 2 != 0)
                        index--;
                    if (index > this.pagesArr.length)
                        index = this.pagesArr.length
                }

                if (index == this.rightIndex) {
                    this.options.main.turnPageComplete()
                    return;
                }
                if (instant) {
                    this.flippedleft = index
                    this.flippedright = this.pagesArr.length - index
                    this.rightIndex = index
                    this.updateVisiblePages()
                    this.options.main.turnPageComplete()
                    return;
                }

                this.flipping = true
                var easing = "easeOutCubic"
                if (typeof jQuery.easing[easing] == 'undefined') {
                    this.options.main.initEasing()
                }

                //if(this.singlePage)
                var self = this
                this.goingToPage = index

                if (index > this.rightIndex) {
                    end = 180
                    if (self.angle <= 0 || self.angle >= 180 || !self.angle) self.angle = 1
                } else if (index < this.rightIndex) {
                    end = -180
                    if (self.angle >= 0 || self.angle <= -180 || !self.angle)
                        self.angle = -1
                }

                var duration = 1000
                var d = this.options.pageFlipDuration * duration
                d *= Math.abs(end - this.angle) / 180
                if (this.options.singlePageMode)
                    d /= 2;
                jQuery({
                    someValue: self.angle
                }).animate({
                    someValue: end
                }, {
                    duration: d,
                    easing: easing, // can be anything
                    step: function(now) {
                        self._setPageAngle(now)
                    },
                    complete: function() {
                        self.rightIndex = index
                        self.flippedleft = index
                        self.flippedright = self.pagesArr.length - index
                        self.updateVisiblePages()
                        self.angle = 0
                        self.flipping = false
                        self.options.main.turnPageComplete()
                    }
                });
                try {
                    this.options.main.playFlipSound()
                } catch (err) {

                }
            }

            FLIPBOOK.Book3.prototype.onSwipe = function(event, phase, direction, distance, duration, fingerCount, fingerData) {
                if (this.isZoomed())
                    return;
                if (event.target.className == "flipbook-page-link")
                    return;
                if (jQuery(event.target).parents().hasClass('flipbook-page-htmlContent'))
                    return;
                if (phase == 'start')
                    return;

                distance = fingerData[0].start.x - fingerData[0].end.x
                if (this.flipping)
                    return
                var angle = distance * 180 / this.options.main.blw
                if (phase == 'cancel' && fingerCount <= 1) {
                    if (angle > 0)
                        this.nextPage()
                    else if (angle < 0)
                        this.prevPage()
                }
                if (phase == 'end' && fingerCount <= 1) {
                    if (angle > 0)
                        this.nextPage()
                    else if (angle < 0)
                        this.prevPage()
                }
                if (phase == 'move' && fingerCount <= 1) {
                    if (angle > 0) {
                        if (!this.nextEnabled)
                            return
                        if (this.options.singlePageMode) {
                            if (this.rightIndex == (this.pagesArr.length - 1))
                                return
                        }
                        this.goingToPage = this.options.singlePageMode ? this.rightIndex + 1 : this.rightIndex + 2
                    } else if (angle < 0) {
                        if (!this.prevEnabled)
                            return
                        this.goingToPage = this.options.singlePageMode ? this.rightIndex - 1 : this.rightIndex - 2
                    }
                    if (this.goingToPage != this.rightIndex && this.goingToPage >= 0 && this.goingToPage <= this.pagesArr.length)
                        this._setPageAngle(angle)
                }

            }

            FLIPBOOK.Book3.prototype._setStyle = function(style, name, value) {
                if (style)
                    style[name] = value

            }

            FLIPBOOK.Book3.prototype._setPageAngle = function(angle) {
                this.angle = angle
                if (this.options.singlePageMode) {
                    if (angle > 0) {
                        front = this.pagesArr[this.rightIndex]
                        front._setAngle(angle / 2)
                        next = this.pagesArr[this.goingToPage]
                        if (next) next.show()
                    } else {
                        back = this.pagesArr[this.goingToPage]
                        back.show()
                        back._setAngle(angle / 2 + 90)
                    }
                    return;
                }

                if (angle > 0) {
                    front = this.pagesArr[this.rightIndex]
                    back = this.pagesArr[this.goingToPage - 1]
                    this.applyAngles(front, back, angle, 90, 0)
                    next = this.pagesArr[back.index + 1]
                    if (next) next.show()
                    var transform = FLIPBOOK.IScroll.utils.style.transform
                    if (this.rightIndex == 0)
                        this._setStyle(this.centerContainerStyle, transform, 'translateX(' + String(-this.options.pageWidth / 2 + angle / 180 * this.options.pageWidth / 2) + 'px)')
                    if (!next)
                        this._setStyle(this.centerContainerStyle, transform, 'translateX(' + String(angle / 180 * this.options.pageWidth / 2) + 'px)')
                } else {
                    back = this.pagesArr[this.rightIndex - 1]
                    front = this.pagesArr[this.goingToPage]
                    this.applyAngles(front, back, angle, -90, 180)
                    prev = this.pagesArr[this.goingToPage - 1]
                    if (prev) prev.show()
                    var transform = FLIPBOOK.IScroll.utils.style.transform
                    if (this.rightIndex == this.pagesArr.length)
                        this._setStyle(this.centerContainerStyle, transform, 'translateX(' + String(this.options.pageWidth / 2 + angle / 180 * this.options.pageWidth / 2) + 'px)')
                    if (!prev)
                        this._setStyle(this.centerContainerStyle, transform, 'translateX(' + String(angle / 180 * this.options.pageWidth / 2) + 'px)')
                }
                // console.log(front,back,angle)
            }

            FLIPBOOK.Book3.prototype.applyAngles = function(front, back, angle, x, y) {
                if (angle < x) {
                    if (front) {
                        front._setAngle(angle + y)
                        front.show()
                    }
                    if (back) {
                        back.hide()
                    }
                } else {
                    if (back) {
                        back._setAngle(angle + y)
                        back.show()
                    }
                    if (front) {
                        front.hide()
                    }
                }
            }

        }

        { /* FLIPBOOK.Page3*/

            FLIPBOOK.Page3 = function(book, index, texture, html) {

                this.book = book
                this.options = book.options
                this.texture = texture
                this.html = html
                this.index = index
                this.$wrapper = jQuery('<div>').addClass('flipbook-page3').width(book.options.pageWidth).height(book.options.pageHeight)
                this.wrapper = this.$wrapper[0]
                this.$img = jQuery('<img>').appendTo(this.$wrapper)
                this.$canvas = jQuery('<div>').appendTo(this.$wrapper).addClass('flipbook-page3-html')
                this.hidden = false
                this.hide()
                this.zIndex = 0
                if (this.options.singlePageMode) {
                    this.$wrapper.addClass('flipbook-page3-front')
                    this.type = "front"
                } else if (index % 2 == 0) {
                    this.$wrapper.css('left', String(this.book.options.pageWidth) + 'px').addClass('flipbook-page3-front')
                    this.type = "front"
                } else {
                    this.$wrapper.addClass('flipbook-page3-back')
                    this.type = 'back'
                }

                if (this.options.pageMode == 'doubleWithCover') {
                    if (index % 2 == 0 && index > 0) {
                        this.$img.css({
                                'transform': 'scaleX(2)',
                                '-webkit-transform': 'scaleX(2)',
                                'transform-origin': '100%',
                                '-webkit-transform-origin': '100%'
                            })
                            /*this.$canvas.css({
                                'transform': 'scaleX(2)',
                                '-webkit-transform': 'scaleX(2)',
                                'transform-origin': '100%',
                                '-webkit-transform-origin': '100%'
                            })*/
                    } else if (index % 2 == 1 && index < this.book.numPages - 1) {
                        this.$img.css({
                                'transform': 'scaleX(2)',
                                '-webkit-transform': 'scaleX(2)',
                                'transform-origin': '0',
                                '-webkit-transform-origin': '0'
                            })
                            /*this.$canvas.css({
                                'transform': 'scaleX(2)',
                                '-webkit-transform': 'scaleX(2)',
                                'transform-origin': '0',
                                '-webkit-transform-origin': '0'
                            })*/
                    }
                }

            }

            FLIPBOOK.Page3.prototype = {

                load: function() {
                    if (this.loaded == true)
                        return;
                    this.loaded = true;

                    var self = this,
                        main = this.book.main;

                    if (self.options.pdfMode) {
                        var index = self.options.rightToLeft ? this.book.pagesArr.length - this.index - 1 : this.index;

                        main.loadPagesFromPdf([index])

                        jQuery(main).bind('pageLoaded', function(e, i) {

                            if (i == index) {
                                c = self.options.pages[index].canvas[self.options.pageTextureSize]
                                h = self.options.pages[index].htmlContent
                                setMat(c, h, self.options.rightToLeft)
                            }
                        })

                        function setMat(c, h, front) {
                            self.$canvas.empty();
                            jQuery(c).appendTo(self.$canvas)
                            jQuery(h).appendTo(self.$canvas)

                            // jQuery(c).appendTo(jQuery('body'))
                            // jQuery(h).appendTo(jQuery('body'))
                            delete c
                        }
                    } else {
                        this.$img.attr('src', this.texture)
                            /*main.setLoadingProgress(.3)*/
                        this.$img[0].onload = function() {
                            self.$wrapper.css({
                                'background': 'none'
                            })
                            main.setLoadingProgress(1)
                        }
                        if (self.html)
                            jQuery(self.html).appendTo(self.$canvas)
                            //.addClass('noSwipe')
                    }
                },

                show: function() {
                    if (this.hidden) {
                        // this.$wrapper.show()
                        this.$wrapper[0].style.display = 'block'
                    }

                    this.hidden = false
                },

                hide: function() {
                    if (!this.hidden) {
                        // this.$wrapper.hide()
                        this.$wrapper[0].style.display = 'none'
                    }

                    this.hidden = true
                },

                _setScale: function(value) {
                    if (this.scale != value) {
                        var transform = FLIPBOOK.IScroll.utils.style.transform
                        var transformStyle = 'scaleX(' + String(value) + ')'
                        this.scale = value
                        this._setStyle(transform, transformStyle)
                    }
                },

                _setAngle: function(angle) {
                    // console.log(angle)
                    if (this.angle == angle) return;
                    this.angle = angle
                    var transform = FLIPBOOK.IScroll.utils.style.transform
                    var transformStyle
                    if (this.book.options.viewMode == "3d") {
                        if (this.type == 'front') {
                            transformStyle = 'rotateY(' + String(-angle) + 'deg)'
                        } else {
                            transformStyle = 'rotateY(' + String(180 - angle) + 'deg)'
                        }
                    } else if (this.book.options.viewMode == "2d") {
                        if (this.type == 'front') {
                            if (angle > 90) angle = 90
                            transformStyle = 'scaleX(' + String((180 - 2 * angle) / 180) + ')'
                        } else {
                            if (angle < 90) angle = 90
                            transformStyle = 'scaleX(' + String(-1 + (2 * angle) / 180) + ')'
                        }
                    }

                    /*if(angle == 90)
                    transformStyle = 'scaleX(0)'*/
                    this._setStyle(this.wrapper.style, transform, transformStyle);
                    var i
                    var max = 0;
                    for (i = 0; i < this.book.pagesArr.length; i++) {
                        if (i != this.index && this.book.pagesArr[i].zIndex > max)
                            max = this.book.pagesArr[i].zIndex
                    }
                    // console.log(max)
                    this._setZIndex(max + 1);
                },

                _setZIndex: function(val) {
                    if (this.zIndex != val)
                        this.wrapper.style['z-index'] = val
                    this.zIndex = val
                },

                _setStyle: function(style, name, value) {
                    if (style)
                        style[name] = value
                }

            }
        }

        {
            FLIPBOOK.getFlipbookSrc = function() {
                var scripts = document.getElementsByTagName("script");
                for (var i = 0; i < scripts.length; i++) {
                    var src = String(scripts[i].src)
                    if (src.match("flipbook.js") || src.match("flipbook.min.js"))
                        return src
                }
                return "";
            }

            FLIPBOOK.flipbookSrc = FLIPBOOK.getFlipbookSrc()

            FLIPBOOK.threejsSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/three.');
            FLIPBOOK.flipbookWebGlSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/flipbook.webgl.');
            FLIPBOOK.pdfjsSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/pdf.');
            FLIPBOOK.pdfjsworkerSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/pdf.worker.');
            //FLIPBOOK.touchSwipeSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/jquery.touchSwipe.');
            //FLIPBOOK.shareSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/share.');

            FLIPBOOK.scriptsLoaded = {};

        }

    })(jQuery, window, document)
}

{
    FLIPBOOK.PdfService = function(pdfDocument, main) {

        var self = this
        this.main = main
        this.pdfDocument = pdfDocument

        this.pages = []
        this.viewports = []
        this.canvases = []
        this.textContents = []

        this.init = function(callback) {
            self.getViewport(1, function(viewport) {
                self.r1 = viewport.width / viewport.height
                self.getViewport(2, function(viewport) {
                    self.r2 = viewport.width / viewport.height
                    self.double = self.r2 / self.r1 > 1.5
                    callback.call(self)
                })
            })
        }

        this.getViewport = function(index, callback) {
            if (!self.pages[index]) {
                pdfDocument.getPage(index).then(function(page) {
                    self.pages[index] = page
                    self.getViewport(index, callback)
                })
            } else {
                self.viewports[index] = self.pages[index].getViewport(1);
                callback.call(self, self.viewports[index]);
            }
        }

        this.getPage = function(index, callback) {

            var self = this;
            var pdfPageIndex = self.double ? Math.round(index / 2) + 1 : index + 1
            if (pdfPageIndex > pdfDocument.pdfInfo.numPages)
                return;
            if (self.pages[pdfPageIndex])
                self.renderPage(self.pages[pdfPageIndex], callback)
            else {
                pdfDocument.getPage(index).then(function(p) {
                    self.pages[index] = p
                    self.renderPage(p, callback)
                });
            }
        }

        this.renderPage = function(page, size, callback) {
            var self = this
            page.canvas = page.canvas || {}
            if (page.canvas[size]) {
                callback.call(self, page)
                return
            }

            if (page.rendering) {
                setTimeout(function() {
                    self.renderPage(page, size, callback)
                    return
                }, 300)
            }
            page.rendering = true

            getTextContent(page, function() {

                /*ar scale = 2048 / self.viewports[1].height,
                    v = page.getViewport(1),
                    d = Math.max(v.width, v.height),
                    scale = 2048 / d,
                    viewport = page.getViewport(scale),
                    canvas = document.createElement('canvas');*/


                var v = page.getViewport(1)
                    //var scale = self.main.options.pageTextureSize / v.height
                var portrait = v.width <= v.height
                var scale = portrait ? size / v.height : size / v.width
                var viewport = page.getViewport(scale)
                var canvas = document.createElement('canvas');

                canvas.width = viewport.width;
                canvas.height = viewport.height;

                if (self.main.webgl) {

                    if (portrait) {
                        canvas.height = size;
                        canvas.width = viewport.width > size ? viewport.width : size;
                        canvas.scaleX = viewport.width / size
                        canvas.scaleY = 1
                    } else {
                        canvas.width = size
                        canvas.height = viewport.height > size ? viewport.height : size
                        canvas.scaleY = viewport.height / size
                        canvas.scaleX = 1
                    }
                }

                //document.body.appendChild(canvas)

                /* canvas.width = 2048
                 canvas.height = 2048*/

                var ctx = canvas.getContext('2d');
                ctx.fillStyle = '#FFFFFF';

                var renderContext = {
                    canvasContext: ctx,
                    viewport: viewport,
                    //textLayer: textLayer
                };

                page.canvas[size] = canvas
                page.scale = scale
                canvas.ratio = viewport.width / viewport.height

                var renderTask = page.render(renderContext).then(function() {
                    if (callback)
                        callback.call(self, page)
                })
            })
        }

        function getTextContent(page, callback) {

            /*callback(page)
            return
*/
            if (page.htmlContent)
                callback(page)
            else
                page.getTextContent().then(function(textContent) {
                    page.textContent = textContent


                    var htmlContentDiv = document.createElement('div');
                    var defaultPageHeight = 1000;

                    //text layer
                    /*
                                var textLayerDiv = document.createElement('div');
                                textLayerDiv.className = 'flipbook-textLayer';
                                // textLayerDiv.style.width = viewport.width;
                                // textLayerDiv.style.height = viewport.height;

                                var textLayer = new TextLayerBuilder({
                                    textLayerDiv: textLayerDiv,
                                    pageIndex: pi,
                                    viewport: page.getViewport(1 * defaultPageHeight / viewportOriginal.height)
                                });
                                //the page. It is set to page.number - 1.
                                textLayer.setTextContent(textContent);
                                textLayer.render(TEXT_LAYER_RENDER_DELAY);
                                htmlContentDiv.appendChild(textLayerDiv)*/

                    //annotations (links) layer

                    var linkService = new PDFLinkService();
                    linkService.setViewer(self.main)
                    linkService.setDocument(self.pdfDocument)

                    var annotationsDiv = document.createElement('div')
                    var annotationLayerBuilder = new AnnotationLayerBuilder({
                        pageDiv: annotationsDiv,
                        pdfPage: page,
                        linkService: linkService
                    });

                    annotationLayerBuilder.render(page.getViewport(1 * defaultPageHeight / self.viewports[1].height), 'display');

                    htmlContentDiv.appendChild(annotationsDiv)
                    page.htmlContent = htmlContentDiv

                    callback(page)
                })
        }


        //////////////////napravi sa drawimage
        /*function cloneCanvas(c) {
            var data = c.getContext("2d").getImageData(0, 0, c.width, c.height)
            var c2 = document.createElement('canvas');
            c2.width = c.width;
            c2.height = c.height;
            var ctx2 = c2.getContext('2d');
            ctx2.putImageData(data, 0, 0);
            c.duplicate = c2
            return c2
        }*/

        this.getCanvasByHeight = function(index, height, onComplete) {

        }

        this.getThumb = function(index, complete) {

        }

    }
}

{ /* IScroll */


    /*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
    (function(window, document, Math) {
        var rAF = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };

        var utils = (function() {
            var me = {};

            var _elementStyle = document.createElement('div').style;
            var _vendor = (function() {
                var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                    transform,
                    i = 0,
                    l = vendors.length;

                for (; i < l; i++) {
                    transform = vendors[i] + 'ransform';
                    if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
                }

                return false;
            })();

            function _prefixStyle(style) {
                if (_vendor === false) return false;
                if (_vendor === '') return style;
                return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
            }

            me.getTime = Date.now || function getTime() {
                return new Date().getTime();
            };

            me.extend = function(target, obj) {
                for (var i in obj) {
                    target[i] = obj[i];
                }
            };

            me.addEvent = function(el, type, fn, capture) {
                el.addEventListener(type, fn, !!capture);
            };

            me.removeEvent = function(el, type, fn, capture) {
                el.removeEventListener(type, fn, !!capture);
            };

            me.prefixPointerEvent = function(pointerEvent) {
                return window.MSPointerEvent ?
                    'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10) :
                    pointerEvent;
            };

            me.momentum = function(current, start, time, lowerMargin, wrapperSize, deceleration) {
                var distance = current - start,
                    speed = Math.abs(distance) / time,
                    destination,
                    duration;

                deceleration = deceleration === undefined ? 0.0006 : deceleration;

                destination = current + (speed * speed) / (2 * deceleration) * (distance < 0 ? -1 : 1);
                duration = speed / deceleration;

                if (destination < lowerMargin) {
                    destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5 * (speed / 8)) : lowerMargin;
                    distance = Math.abs(destination - current);
                    duration = distance / speed;
                } else if (destination > 0) {
                    destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
                    distance = Math.abs(current) + destination;
                    duration = distance / speed;
                }

                return {
                    destination: Math.round(destination),
                    duration: duration
                };
            };

            var _transform = _prefixStyle('transform');

            me.extend(me, {
                hasTransform: _transform !== false,
                hasPerspective: _prefixStyle('perspective') in _elementStyle,
                hasTouch: 'ontouchstart' in window,
                hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
                hasTransition: _prefixStyle('transition') in _elementStyle
            });

            // This should find all Android browsers lower than build 535.19 (both stock browser and webview)
            me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));

            me.extend(me.style = {}, {
                transform: _transform,
                transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
                transitionDuration: _prefixStyle('transitionDuration'),
                transitionDelay: _prefixStyle('transitionDelay'),
                transformOrigin: _prefixStyle('transformOrigin')
            });

            me.hasClass = function(e, c) {
                var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
                return re.test(e.className);
            };

            me.addClass = function(e, c) {
                if (me.hasClass(e, c)) {
                    return;
                }

                var newclass = e.className.split(' ');
                newclass.push(c);
                e.className = newclass.join(' ');
            };

            me.removeClass = function(e, c) {
                if (!me.hasClass(e, c)) {
                    return;
                }

                var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
                e.className = e.className.replace(re, ' ');
            };

            me.offset = function(el) {
                var left = -el.offsetLeft,
                    top = -el.offsetTop;

                // jshint -W084
                while (el = el.offsetParent) {
                    left -= el.offsetLeft;
                    top -= el.offsetTop;
                }
                // jshint +W084

                return {
                    left: left,
                    top: top
                };
            };

            me.preventDefaultException = function(el, exceptions) {
                for (var i in exceptions) {
                    if (exceptions[i].test(el[i])) {
                        return true;
                    }
                }

                return false;
            };

            me.extend(me.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,

                mousedown: 2,
                mousemove: 2,
                mouseup: 2,

                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,

                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            });

            me.extend(me.ease = {}, {
                quadratic: {
                    style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    fn: function(k) {
                        return k * (2 - k);
                    }
                },
                circular: {
                    style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
                    fn: function(k) {
                        return Math.sqrt(1 - (--k * k));
                    }
                },
                back: {
                    style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    fn: function(k) {
                        var b = 4;
                        return (k = k - 1) * k * ((b + 1) * k + b) + 1;
                    }
                },
                bounce: {
                    style: '',
                    fn: function(k) {
                        if ((k /= 1) < (1 / 2.75)) {
                            return 7.5625 * k * k;
                        } else if (k < (2 / 2.75)) {
                            return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
                        } else if (k < (2.5 / 2.75)) {
                            return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
                        } else {
                            return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
                        }
                    }
                },
                elastic: {
                    style: '',
                    fn: function(k) {
                        var f = 0.22,
                            e = 0.4;

                        if (k === 0) {
                            return 0;
                        }
                        if (k == 1) {
                            return 1;
                        }

                        return (e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1);
                    }
                }
            });

            me.tap = function(e, eventName) {
                var ev = document.createEvent('Event');
                ev.initEvent(eventName, true, true);
                ev.pageX = e.pageX;
                ev.pageY = e.pageY;
                e.target.dispatchEvent(ev);
            };

            me.click = function(e) {
                var target = e.target,
                    ev;

                if (!(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName)) {
                    ev = document.createEvent('MouseEvents');
                    ev.initMouseEvent('click', true, true, e.view, 1,
                        target.screenX, target.screenY, target.clientX, target.clientY,
                        e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
                        0, null);

                    ev._constructed = true;
                    target.dispatchEvent(ev);
                }
            };

            return me;
        })();

        function IScroll(el, options) {
            this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
            this.scroller = this.wrapper.children[0];
            this.scrollerStyle = this.scroller.style; // cache style for better performance

            this.options = {

                zoomMin: 1,
                zoomMax: 4,
                startZoom: 1,

                resizeScrollbars: true,

                mouseWheelSpeed: 20,

                snapThreshold: 0.334,

                // INSERT POINT: OPTIONS

                startX: 0,
                startY: 0,
                scrollY: true,
                directionLockThreshold: 5,
                momentum: true,

                bounce: true,
                bounceTime: 600,
                bounceEasing: '',

                preventDefault: true,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                },

                HWCompositing: true,
                useTransition: true,
                useTransform: true,

                keepInCenterH: false,
                keepInCenterV: false
            };

            for (var i in options) {
                this.options[i] = options[i];
            }

            // Normalize options
            this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

            this.options.useTransition = utils.hasTransition && this.options.useTransition;
            this.options.useTransform = utils.hasTransform && this.options.useTransform;

            this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
            this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

            // If you want eventPassthrough I have to lock one of the axes
            this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
            this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

            // With eventPassthrough we also need lockDirection mechanism
            this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
            this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

            this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

            this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

            if (this.options.tap === true) {
                this.options.tap = 'tap';
            }

            if (this.options.shrinkScrollbars == 'scale') {
                this.options.useTransition = false;
            }

            this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

            // INSERT POINT: NORMALIZATION

            // Some defaults
            this.x = 0;
            this.y = 0;
            this.directionX = 0;
            this.directionY = 0;
            this._events = {};

            this.scale = Math.min(Math.max(this.options.startZoom, this.options.zoomMin), this.options.zoomMax);

            // INSERT POINT: DEFAULTS

            this._init();
            this.refresh();

            this.scrollTo(this.options.startX, this.options.startY);
            this.enable();
        }

        IScroll.prototype = {
            version: '5.1.3',

            _init: function() {
                this._initEvents();

                if (this.options.zoom) {
                    this._initZoom();
                }

                if (this.options.scrollbars || this.options.indicators) {
                    this._initIndicators();
                }

                if (this.options.mouseWheel) {
                    this._initWheel();
                }

                if (this.options.snap) {
                    this._initSnap();
                }

                if (this.options.keyBindings) {
                    this._initKeys();
                }

                // INSERT POINT: _init

            },

            destroy: function() {
                this._initEvents(true);

                this._execEvent('destroy');
            },

            _transitionEnd: function(e) {
                if (e.target != this.scroller || !this.isInTransition) {
                    return;
                }

                this._transitionTime();
                if (!this.resetPosition(this.options.bounceTime)) {
                    this.isInTransition = false;
                    this._execEvent('scrollEnd');
                }
            },

            _start: function(e) {
                // React to left mouse button only
                if (utils.eventType[e.type] != 1) {
                    if (e.button !== 0) {
                        return;
                    }
                }

                if (!this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated)) {
                    return;
                }

                if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                    e.preventDefault();
                }

                var point = e.touches ? e.touches[0] : e,
                    pos;

                this.initiated = utils.eventType[e.type];
                this.moved = false;
                this.distX = 0;
                this.distY = 0;
                this.directionX = 0;
                this.directionY = 0;
                this.directionLocked = 0;

                this._transitionTime();

                this.startTime = utils.getTime();

                if (this.options.useTransition && this.isInTransition) {
                    this.isInTransition = false;
                    pos = this.getComputedPosition();
                    this._translate(Math.round(pos.x), Math.round(pos.y));
                    this._execEvent('scrollEnd');
                } else if (!this.options.useTransition && this.isAnimating) {
                    this.isAnimating = false;
                    this._execEvent('scrollEnd');
                }

                this.startX = this.x;
                this.startY = this.y;
                this.absStartX = this.x;
                this.absStartY = this.y;
                this.pointX = point.pageX;
                this.pointY = point.pageY;

                this._execEvent('beforeScrollStart');
            },

            _move: function(e) {
                if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                    return;
                }

                if (this.options.preventDefault) { // increases performance on Android? TODO: check!
                    e.preventDefault();
                }

                var point = e.touches ? e.touches[0] : e,
                    deltaX = point.pageX - this.pointX,
                    deltaY = point.pageY - this.pointY,
                    timestamp = utils.getTime(),
                    newX, newY,
                    absDistX, absDistY;

                this.pointX = point.pageX;
                this.pointY = point.pageY;

                this.distX += deltaX;
                this.distY += deltaY;
                absDistX = Math.abs(this.distX);
                absDistY = Math.abs(this.distY);

                // We need to move at least 10 pixels for the scrolling to initiate
                if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) {
                    return;
                }

                // If you are scrolling in one direction lock the other
                if (!this.directionLocked && !this.options.freeScroll) {
                    if (absDistX > absDistY + this.options.directionLockThreshold) {
                        this.directionLocked = 'h'; // lock horizontally
                    } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
                        this.directionLocked = 'v'; // lock vertically
                    } else {
                        this.directionLocked = 'n'; // no lock
                    }
                }

                if (this.directionLocked == 'h') {
                    if (this.options.eventPassthrough == 'vertical') {
                        e.preventDefault();
                    } else if (this.options.eventPassthrough == 'horizontal') {
                        this.initiated = false;
                        return;
                    }

                    deltaY = 0;
                } else if (this.directionLocked == 'v') {
                    if (this.options.eventPassthrough == 'horizontal') {
                        e.preventDefault();
                    } else if (this.options.eventPassthrough == 'vertical') {
                        this.initiated = false;
                        return;
                    }

                    deltaX = 0;
                }

                deltaX = this.hasHorizontalScroll ? deltaX : 0;
                deltaY = this.hasVerticalScroll ? deltaY : 0;

                newX = this.x + deltaX;
                newY = this.y + deltaY;

                // Slow down if outside of the boundaries
                if (newX > 0 || newX < this.maxScrollX) {
                    newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
                }
                if (newY > 0 || newY < this.maxScrollY) {
                    newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
                }

                this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
                this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

                if (!this.moved) {
                    this._execEvent('scrollStart');
                }

                this.moved = true;

                this._translate(newX, newY);

                /* REPLACE START: _move */

                if (timestamp - this.startTime > 300) {
                    this.startTime = timestamp;
                    this.startX = this.x;
                    this.startY = this.y;
                }

                /* REPLACE END: _move */

            },

            _end: function(e) {
                if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                    return;
                }

                if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                    e.preventDefault();
                }

                var point = e.changedTouches ? e.changedTouches[0] : e,
                    momentumX,
                    momentumY,
                    duration = utils.getTime() - this.startTime,
                    newX = Math.round(this.x),
                    newY = Math.round(this.y),
                    distanceX = Math.abs(newX - this.startX),
                    distanceY = Math.abs(newY - this.startY),
                    time = 0,
                    easing = '';

                this.isInTransition = 0;
                this.initiated = 0;
                this.endTime = utils.getTime();

                // reset if we are outside of the boundaries
                if (this.resetPosition(this.options.bounceTime)) {
                    return;
                }

                this.scrollTo(newX, newY); // ensures that the last position is rounded

                // we scrolled less than 10 pixels
                if (!this.moved) {
                    if (this.options.tap) {
                        utils.tap(e, this.options.tap);
                    }

                    if (this.options.click) {
                        utils.click(e);
                    }

                    this._execEvent('scrollCancel');
                    return;
                }

                if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
                    this._execEvent('flick');
                    return;
                }

                // start momentum animation if needed
                if (this.options.momentum && duration < 300) {
                    momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                        destination: newX,
                        duration: 0
                    };
                    momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                        destination: newY,
                        duration: 0
                    };
                    newX = momentumX.destination;
                    newY = momentumY.destination;
                    time = Math.max(momentumX.duration, momentumY.duration);
                    this.isInTransition = 1;
                }


                if (this.options.snap) {
                    var snap = this._nearestSnap(newX, newY);
                    this.currentPage = snap;
                    time = this.options.snapSpeed || Math.max(
                        Math.max(
                            Math.min(Math.abs(newX - snap.x), 1000),
                            Math.min(Math.abs(newY - snap.y), 1000)
                        ), 300);
                    newX = snap.x;
                    newY = snap.y;

                    this.directionX = 0;
                    this.directionY = 0;
                    easing = this.options.bounceEasing;
                }

                // INSERT POINT: _end

                if (newX != this.x || newY != this.y) {
                    // change easing function when scroller goes out of the boundaries
                    if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
                        easing = utils.ease.quadratic;
                    }

                    this.scrollTo(newX, newY, time, easing);
                    return;
                }

                this._execEvent('scrollEnd');
            },

            _resize: function() {
                var that = this;

                clearTimeout(this.resizeTimeout);

                this.resizeTimeout = setTimeout(function() {
                    that.refresh();
                }, this.options.resizePolling);
            },

            resetPosition: function(time) {
                var x = this.x,
                    y = this.y;

                time = time || 0;

                if (!this.hasHorizontalScroll || this.x > 0) {
                    x = 0;
                } else if (this.x < this.maxScrollX) {
                    x = this.maxScrollX;
                }

                if (!this.hasVerticalScroll || this.y > 0) {
                    y = 0;
                } else if (this.y < this.maxScrollY) {
                    y = this.maxScrollY;
                }

                if (x == this.x && y == this.y) {
                    return false;
                }

                /*if(this.options.keepInCenterH && $(this.wrapper).width() > $(this.scroller).width())
            x = ($(this.wrapper).width() - $(this.scroller).width()) / 2*/

                this.scrollTo(x, y, time, this.options.bounceEasing);

                return true;
            },

            disable: function() {
                this.enabled = false;
            },

            enable: function() {
                this.enabled = true;
            },

            refresh: function() {
                var rf = this.wrapper.offsetHeight; // Force reflow

                this.wrapperWidth = this.wrapper.clientWidth;
                this.wrapperHeight = this.wrapper.clientHeight;

                /* REPLACE START: refresh */
                this.scrollerWidth = Math.round(this.scroller.offsetWidth * this.scale);
                this.scrollerHeight = Math.round(this.scroller.offsetHeight * this.scale);

                this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
                this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
                /* REPLACE END: refresh */

                this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
                this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

                if (!this.hasHorizontalScroll) {
                    this.maxScrollX = 0;
                    this.scrollerWidth = this.wrapperWidth;
                }

                if (!this.hasVerticalScroll) {
                    this.maxScrollY = 0;
                    this.scrollerHeight = this.wrapperHeight;
                }

                this.endTime = 0;
                this.directionX = 0;
                this.directionY = 0;

                this.wrapperOffset = utils.offset(this.wrapper);

                this._execEvent('refresh');

                this.resetPosition();

                // INSERT POINT: _refresh

            },

            on: function(type, fn) {
                if (!this._events[type]) {
                    this._events[type] = [];
                }

                this._events[type].push(fn);
            },

            off: function(type, fn) {
                if (!this._events[type]) {
                    return;
                }

                var index = this._events[type].indexOf(fn);

                if (index > -1) {
                    this._events[type].splice(index, 1);
                }
            },

            _execEvent: function(type) {
                if (!this._events[type]) {
                    return;
                }

                var i = 0,
                    l = this._events[type].length;

                if (!l) {
                    return;
                }

                for (; i < l; i++) {
                    this._events[type][i].apply(this, [].slice.call(arguments, 1));
                }
            },

            scrollBy: function(x, y, time, easing) {
                x = this.x + x;
                y = this.y + y;
                time = time || 0;

                this.scrollTo(x, y, time, easing);
            },

            scrollTo: function(x, y, time, easing) {

                if (this.options.keepInCenterH && this.scroller.offsetWidth * this.scale < this.wrapperWidth)
                    x = this.wrapperWidth / 2 - this.scroller.offsetWidth * this.scale / 2

                if (this.options.keepInCenterV && this.scroller.offsetHeight * this.scale < this.wrapperHeight)
                    y = this.wrapperHeight / 2 - this.scroller.offsetHeight * this.scale / 2

                easing = easing || utils.ease.circular;

                this.isInTransition = this.options.useTransition && time > 0;

                if (!time || (this.options.useTransition && easing.style)) {
                    this._transitionTimingFunction(easing.style);
                    this._transitionTime(time);
                    this._translate(x, y);
                } else {
                    this._animate(x, y, time, easing.fn);
                }
            },

            scrollToElement: function(el, time, offsetX, offsetY, easing) {
                el = el.nodeType ? el : this.scroller.querySelector(el);

                if (!el) {
                    return;
                }

                var pos = utils.offset(el);

                pos.left -= this.wrapperOffset.left;
                pos.top -= this.wrapperOffset.top;

                // if offsetX/Y are true we center the element to the screen
                if (offsetX === true) {
                    offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
                }
                if (offsetY === true) {
                    offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
                }

                pos.left -= offsetX || 0;
                pos.top -= offsetY || 0;

                pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
                pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

                time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

                this.scrollTo(pos.left, pos.top, time, easing);
            },

            _transitionTime: function(time) {
                time = time || 0;

                this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

                if (!time && utils.isBadAndroid) {
                    this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
                }


                if (this.indicators) {
                    for (var i = this.indicators.length; i--;) {
                        this.indicators[i].transitionTime(time);
                    }
                }


                // INSERT POINT: _transitionTime

            },

            _transitionTimingFunction: function(easing) {
                this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


                if (this.indicators) {
                    for (var i = this.indicators.length; i--;) {
                        this.indicators[i].transitionTimingFunction(easing);
                    }
                }


                // INSERT POINT: _transitionTimingFunction

            },

            _translate: function(x, y) {

                if (this.options.useTransform) {

                    /* REPLACE START: _translate */
                    this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ') ' + this.translateZ; /* REPLACE END: _translate */

                } else {
                    x = Math.round(x);
                    y = Math.round(y);
                    this.scrollerStyle.left = x + 'px';
                    this.scrollerStyle.top = y + 'px';
                }

                this.x = x;
                this.y = y;


                if (this.indicators) {
                    for (var i = this.indicators.length; i--;) {
                        this.indicators[i].updatePosition();
                    }
                }


                // INSERT POINT: _translate

            },

            _initEvents: function(remove) {
                var eventType = remove ? utils.removeEvent : utils.addEvent,
                    target = this.options.bindToWrapper ? this.wrapper : window;

                eventType(window, 'orientationchange', this);
                eventType(window, 'resize', this);

                if (this.options.click) {
                    eventType(this.wrapper, 'click', this, true);
                }

                if (!this.options.disableMouse) {
                    eventType(this.wrapper, 'mousedown', this);
                    eventType(target, 'mousemove', this);
                    eventType(target, 'mousecancel', this);
                    eventType(target, 'mouseup', this);
                }

                if (utils.hasPointer && !this.options.disablePointer) {
                    eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
                    eventType(target, utils.prefixPointerEvent('pointermove'), this);
                    eventType(target, utils.prefixPointerEvent('pointercancel'), this);
                    eventType(target, utils.prefixPointerEvent('pointerup'), this);
                }

                if (utils.hasTouch && !this.options.disableTouch) {
                    eventType(this.wrapper, 'touchstart', this);
                    eventType(target, 'touchmove', this);
                    eventType(target, 'touchcancel', this);
                    eventType(target, 'touchend', this);
                }

                eventType(this.scroller, 'transitionend', this);
                eventType(this.scroller, 'webkitTransitionEnd', this);
                eventType(this.scroller, 'oTransitionEnd', this);
                eventType(this.scroller, 'MSTransitionEnd', this);
            },

            getComputedPosition: function() {
                var matrix = window.getComputedStyle(this.scroller, null),
                    x, y;

                if (this.options.useTransform) {
                    matrix = matrix[utils.style.transform].split(')')[0].split(', ');
                    x = +(matrix[12] || matrix[4]);
                    y = +(matrix[13] || matrix[5]);
                } else {
                    x = +matrix.left.replace(/[^-\d.]/g, '');
                    y = +matrix.top.replace(/[^-\d.]/g, '');
                }

                return {
                    x: x,
                    y: y
                };
            },

            _initIndicators: function() {
                var interactive = this.options.interactiveScrollbars,
                    customStyle = typeof this.options.scrollbars != 'string',
                    indicators = [],
                    indicator;

                var that = this;

                this.indicators = [];

                if (this.options.scrollbars) {
                    // Vertical scrollbar
                    if (this.options.scrollY) {
                        indicator = {
                            el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
                            interactive: interactive,
                            defaultScrollbars: true,
                            customStyle: customStyle,
                            resize: this.options.resizeScrollbars,
                            shrink: this.options.shrinkScrollbars,
                            fade: this.options.fadeScrollbars,
                            listenX: false
                        };

                        this.wrapper.appendChild(indicator.el);
                        indicators.push(indicator);
                    }

                    // Horizontal scrollbar
                    if (this.options.scrollX) {
                        indicator = {
                            el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
                            interactive: interactive,
                            defaultScrollbars: true,
                            customStyle: customStyle,
                            resize: this.options.resizeScrollbars,
                            shrink: this.options.shrinkScrollbars,
                            fade: this.options.fadeScrollbars,
                            listenY: false
                        };

                        this.wrapper.appendChild(indicator.el);
                        indicators.push(indicator);
                    }
                }

                if (this.options.indicators) {
                    // TODO: check concat compatibility
                    indicators = indicators.concat(this.options.indicators);
                }

                for (var i = indicators.length; i--;) {
                    this.indicators.push(new Indicator(this, indicators[i]));
                }

                // TODO: check if we can use array.map (wide compatibility and performance issues)
                function _indicatorsMap(fn) {
                    for (var i = that.indicators.length; i--;) {
                        fn.call(that.indicators[i]);
                    }
                }

                if (this.options.fadeScrollbars) {
                    this.on('scrollEnd', function() {
                        _indicatorsMap(function() {
                            this.fade();
                        });
                    });

                    this.on('scrollCancel', function() {
                        _indicatorsMap(function() {
                            this.fade();
                        });
                    });

                    this.on('scrollStart', function() {
                        _indicatorsMap(function() {
                            this.fade(1);
                        });
                    });

                    this.on('beforeScrollStart', function() {
                        _indicatorsMap(function() {
                            this.fade(1, true);
                        });
                    });
                }


                this.on('refresh', function() {
                    _indicatorsMap(function() {
                        this.refresh();
                    });
                });

                this.on('destroy', function() {
                    _indicatorsMap(function() {
                        this.destroy();
                    });

                    delete this.indicators;
                });
            },

            _initZoom: function() {
                this.scrollerStyle[utils.style.transformOrigin] = '0 0';
            },

            _zoomStart: function(e) {
                var c1 = Math.abs(e.touches[0].pageX - e.touches[1].pageX),
                    c2 = Math.abs(e.touches[0].pageY - e.touches[1].pageY);

                this.touchesDistanceStart = Math.sqrt(c1 * c1 + c2 * c2);
                this.startScale = this.scale;

                this.originX = Math.abs(e.touches[0].pageX + e.touches[1].pageX) / 2 + this.wrapperOffset.left - this.x;
                this.originY = Math.abs(e.touches[0].pageY + e.touches[1].pageY) / 2 + this.wrapperOffset.top - this.y;

                this._execEvent('zoomStart');
            },

            _zoom: function(e) {
                if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                    return;
                }

                if (this.options.preventDefault) {
                    e.preventDefault();
                }

                var c1 = Math.abs(e.touches[0].pageX - e.touches[1].pageX),
                    c2 = Math.abs(e.touches[0].pageY - e.touches[1].pageY),
                    distance = Math.sqrt(c1 * c1 + c2 * c2),
                    scale = 1 / this.touchesDistanceStart * distance * this.startScale,
                    lastScale,
                    x, y;

                this.scaled = true;

                if (scale < this.options.zoomMin) {
                    scale = 0.5 * this.options.zoomMin * Math.pow(2.0, scale / this.options.zoomMin);
                } else if (scale > this.options.zoomMax) {
                    scale = 2.0 * this.options.zoomMax * Math.pow(0.5, this.options.zoomMax / scale);
                }

                lastScale = scale / this.startScale;
                x = this.originX - this.originX * lastScale + this.startX;
                y = this.originY - this.originY * lastScale + this.startY;

                this.scale = scale;

                this.scrollTo(x, y, 0);
            },

            _zoomEnd: function(e) {
                if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                    return;
                }

                if (this.options.preventDefault) {
                    e.preventDefault();
                }

                var newX, newY,
                    lastScale;

                this.isInTransition = 0;
                this.initiated = 0;

                if (this.scale > this.options.zoomMax) {
                    this.scale = this.options.zoomMax;
                } else if (this.scale < this.options.zoomMin) {
                    this.scale = this.options.zoomMin;
                }

                // Update boundaries
                this.refresh();

                lastScale = this.scale / this.startScale;

                newX = this.originX - this.originX * lastScale + this.startX;
                newY = this.originY - this.originY * lastScale + this.startY;

                if (newX > 0) {
                    newX = 0;
                } else if (newX < this.maxScrollX) {
                    newX = this.maxScrollX;
                }

                if (newY > 0) {
                    newY = 0;
                } else if (newY < this.maxScrollY) {
                    newY = this.maxScrollY;
                }

                if (this.x != newX || this.y != newY) {
                    this.scrollTo(newX, newY, this.options.bounceTime);
                }

                this.scaled = false;

                this._execEvent('zoomEnd');
            },

            zoom: function(scale, x, y, time) {
                if (scale < this.options.zoomMin) {
                    scale = this.options.zoomMin;
                } else if (scale > this.options.zoomMax) {
                    scale = this.options.zoomMax;
                }

                if (scale == this.scale) {
                    return;
                }

                var relScale = scale / this.scale;

                x = x === undefined ? this.wrapperWidth / 2 : x;
                y = y === undefined ? this.wrapperHeight / 2 : y;
                time = time === undefined ? 300 : time;

                x = x + this.wrapperOffset.left - this.x;
                y = y + this.wrapperOffset.top - this.y;

                x = x - x * relScale + this.x;
                y = y - y * relScale + this.y;

                this.scale = scale;

                this.refresh(); // update boundaries

                if (x > 0) {
                    x = 0;
                } else if (x < this.maxScrollX) {
                    x = this.maxScrollX;
                }

                if (y > 0) {
                    y = 0;
                } else if (y < this.maxScrollY) {
                    y = this.maxScrollY;
                }

                this.scrollTo(x, y, time);
            },

            _wheelZoom: function(e) {
                var wheelDeltaY,
                    deltaScale,
                    that = this;

                // Execute the zoomEnd event after 400ms the wheel stopped scrolling
                clearTimeout(this.wheelTimeout);
                this.wheelTimeout = setTimeout(function() {
                    that._execEvent('zoomEnd');
                }, 400);

                if ('deltaX' in e) {
                    wheelDeltaY = -e.deltaY / Math.abs(e.deltaY);
                } else if ('wheelDeltaX' in e) {
                    wheelDeltaY = e.wheelDeltaY / Math.abs(e.wheelDeltaY);
                } else if ('wheelDelta' in e) {
                    wheelDeltaY = e.wheelDelta / Math.abs(e.wheelDelta);
                } else if ('detail' in e) {
                    wheelDeltaY = -e.detail / Math.abs(e.wheelDelta);
                } else {
                    return;
                }

                deltaScale = this.scale + wheelDeltaY / 5;

                this.zoom(deltaScale, e.pageX, e.pageY, 0);
            },

            _initWheel: function() {
                utils.addEvent(this.wrapper, 'wheel', this);
                utils.addEvent(this.wrapper, 'mousewheel', this);
                utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

                this.on('destroy', function() {
                    utils.removeEvent(this.wrapper, 'wheel', this);
                    utils.removeEvent(this.wrapper, 'mousewheel', this);
                    utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
                });
            },

            _wheel: function(e) {
                if (!this.enabled) {
                    return;
                }

                e.preventDefault();
                e.stopPropagation();

                var wheelDeltaX, wheelDeltaY,
                    newX, newY,
                    that = this;

                if (this.wheelTimeout === undefined) {
                    that._execEvent('scrollStart');
                }

                // Execute the scrollEnd event after 400ms the wheel stopped scrolling
                clearTimeout(this.wheelTimeout);
                this.wheelTimeout = setTimeout(function() {
                    that._execEvent('scrollEnd');
                    that.wheelTimeout = undefined;
                }, 400);

                if ('deltaX' in e) {
                    if (e.deltaMode === 1) {
                        wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
                        wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
                    } else {
                        wheelDeltaX = -e.deltaX;
                        wheelDeltaY = -e.deltaY;
                    }
                } else if ('wheelDeltaX' in e) {
                    wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
                    wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                } else if ('wheelDelta' in e) {
                    wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
                } else if ('detail' in e) {
                    wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
                } else {
                    return;
                }

                wheelDeltaX *= this.options.invertWheelDirection;
                wheelDeltaY *= this.options.invertWheelDirection;

                if (!this.hasVerticalScroll) {
                    wheelDeltaX = wheelDeltaY;
                    wheelDeltaY = 0;
                }

                if (this.options.snap) {
                    newX = this.currentPage.pageX;
                    newY = this.currentPage.pageY;

                    if (wheelDeltaX > 0) {
                        newX--;
                    } else if (wheelDeltaX < 0) {
                        newX++;
                    }

                    if (wheelDeltaY > 0) {
                        newY--;
                    } else if (wheelDeltaY < 0) {
                        newY++;
                    }

                    this.goToPage(newX, newY);

                    return;
                }

                newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
                newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

                if (newX > 0) {
                    newX = 0;
                } else if (newX < this.maxScrollX) {
                    newX = this.maxScrollX;
                }

                if (newY > 0) {
                    newY = 0;
                } else if (newY < this.maxScrollY) {
                    newY = this.maxScrollY;
                }

                this.scrollTo(newX, newY, 0);

                // INSERT POINT: _wheel
            },

            _initSnap: function() {
                this.currentPage = {};

                if (typeof this.options.snap == 'string') {
                    this.options.snap = this.scroller.querySelectorAll(this.options.snap);
                }

                this.on('refresh', function() {
                    var i = 0,
                        l,
                        m = 0,
                        n,
                        cx, cy,
                        x = 0,
                        y,
                        stepX = this.options.snapStepX || this.wrapperWidth,
                        stepY = this.options.snapStepY || this.wrapperHeight,
                        el;

                    this.pages = [];

                    if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
                        return;
                    }

                    if (this.options.snap === true) {
                        cx = Math.round(stepX / 2);
                        cy = Math.round(stepY / 2);

                        while (x > -this.scrollerWidth) {
                            this.pages[i] = [];
                            l = 0;
                            y = 0;

                            while (y > -this.scrollerHeight) {
                                this.pages[i][l] = {
                                    x: Math.max(x, this.maxScrollX),
                                    y: Math.max(y, this.maxScrollY),
                                    width: stepX,
                                    height: stepY,
                                    cx: x - cx,
                                    cy: y - cy
                                };

                                y -= stepY;
                                l++;
                            }

                            x -= stepX;
                            i++;
                        }
                    } else {
                        el = this.options.snap;
                        l = el.length;
                        n = -1;

                        for (; i < l; i++) {
                            if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
                                m = 0;
                                n++;
                            }

                            if (!this.pages[m]) {
                                this.pages[m] = [];
                            }

                            x = Math.max(-el[i].offsetLeft, this.maxScrollX);
                            y = Math.max(-el[i].offsetTop, this.maxScrollY);
                            cx = x - Math.round(el[i].offsetWidth / 2);
                            cy = y - Math.round(el[i].offsetHeight / 2);

                            this.pages[m][n] = {
                                x: x,
                                y: y,
                                width: el[i].offsetWidth,
                                height: el[i].offsetHeight,
                                cx: cx,
                                cy: cy
                            };

                            if (x > this.maxScrollX) {
                                m++;
                            }
                        }
                    }

                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

                    // Update snap threshold if needed
                    if (this.options.snapThreshold % 1 === 0) {
                        this.snapThresholdX = this.options.snapThreshold;
                        this.snapThresholdY = this.options.snapThreshold;
                    } else {
                        this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                        this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
                    }
                });

                this.on('flick', function() {
                    var time = this.options.snapSpeed || Math.max(
                        Math.max(
                            Math.min(Math.abs(this.x - this.startX), 1000),
                            Math.min(Math.abs(this.y - this.startY), 1000)
                        ), 300);

                    this.goToPage(
                        this.currentPage.pageX + this.directionX,
                        this.currentPage.pageY + this.directionY,
                        time
                    );
                });
            },

            _nearestSnap: function(x, y) {
                if (!this.pages.length) {
                    return {
                        x: 0,
                        y: 0,
                        pageX: 0,
                        pageY: 0
                    };
                }

                var i = 0,
                    l = this.pages.length,
                    m = 0;

                // Check if we exceeded the snap threshold
                if (Math.abs(x - this.absStartX) < this.snapThresholdX &&
                    Math.abs(y - this.absStartY) < this.snapThresholdY) {
                    return this.currentPage;
                }

                if (x > 0) {
                    x = 0;
                } else if (x < this.maxScrollX) {
                    x = this.maxScrollX;
                }

                if (y > 0) {
                    y = 0;
                } else if (y < this.maxScrollY) {
                    y = this.maxScrollY;
                }

                for (; i < l; i++) {
                    if (x >= this.pages[i][0].cx) {
                        x = this.pages[i][0].x;
                        break;
                    }
                }

                l = this.pages[i].length;

                for (; m < l; m++) {
                    if (y >= this.pages[0][m].cy) {
                        y = this.pages[0][m].y;
                        break;
                    }
                }

                if (i == this.currentPage.pageX) {
                    i += this.directionX;

                    if (i < 0) {
                        i = 0;
                    } else if (i >= this.pages.length) {
                        i = this.pages.length - 1;
                    }

                    x = this.pages[i][0].x;
                }

                if (m == this.currentPage.pageY) {
                    m += this.directionY;

                    if (m < 0) {
                        m = 0;
                    } else if (m >= this.pages[0].length) {
                        m = this.pages[0].length - 1;
                    }

                    y = this.pages[0][m].y;
                }

                return {
                    x: x,
                    y: y,
                    pageX: i,
                    pageY: m
                };
            },

            goToPage: function(x, y, time, easing) {
                easing = easing || this.options.bounceEasing;

                if (x >= this.pages.length) {
                    x = this.pages.length - 1;
                } else if (x < 0) {
                    x = 0;
                }

                if (y >= this.pages[x].length) {
                    y = this.pages[x].length - 1;
                } else if (y < 0) {
                    y = 0;
                }

                var posX = this.pages[x][y].x,
                    posY = this.pages[x][y].y;

                time = time === undefined ? this.options.snapSpeed || Math.max(
                    Math.max(
                        Math.min(Math.abs(posX - this.x), 1000),
                        Math.min(Math.abs(posY - this.y), 1000)
                    ), 300) : time;

                this.currentPage = {
                    x: posX,
                    y: posY,
                    pageX: x,
                    pageY: y
                };

                this.scrollTo(posX, posY, time, easing);
            },

            next: function(time, easing) {
                var x = this.currentPage.pageX,
                    y = this.currentPage.pageY;

                x++;

                if (x >= this.pages.length && this.hasVerticalScroll) {
                    x = 0;
                    y++;
                }

                this.goToPage(x, y, time, easing);
            },

            prev: function(time, easing) {
                var x = this.currentPage.pageX,
                    y = this.currentPage.pageY;

                x--;

                if (x < 0 && this.hasVerticalScroll) {
                    x = 0;
                    y--;
                }

                this.goToPage(x, y, time, easing);
            },

            _initKeys: function(e) {
                // default key bindings
                var keys = {
                    pageUp: 33,
                    pageDown: 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40
                };
                var i;

                // if you give me characters I give you keycode
                if (typeof this.options.keyBindings == 'object') {
                    for (i in this.options.keyBindings) {
                        if (typeof this.options.keyBindings[i] == 'string') {
                            this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
                        }
                    }
                } else {
                    this.options.keyBindings = {};
                }

                for (i in keys) {
                    this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
                }

                utils.addEvent(window, 'keydown', this);

                this.on('destroy', function() {
                    utils.removeEvent(window, 'keydown', this);
                });
            },

            _key: function(e) {
                if (!this.enabled) {
                    return;
                }

                var snap = this.options.snap, // we are using this alot, better to cache it
                    newX = snap ? this.currentPage.pageX : this.x,
                    newY = snap ? this.currentPage.pageY : this.y,
                    now = utils.getTime(),
                    prevTime = this.keyTime || 0,
                    acceleration = 0.250,
                    pos;

                if (this.options.useTransition && this.isInTransition) {
                    pos = this.getComputedPosition();

                    this._translate(Math.round(pos.x), Math.round(pos.y));
                    this.isInTransition = false;
                }

                this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

                switch (e.keyCode) {
                    case this.options.keyBindings.pageUp:
                        if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                            newX += snap ? 1 : this.wrapperWidth;
                        } else {
                            newY += snap ? 1 : this.wrapperHeight;
                        }
                        break;
                    case this.options.keyBindings.pageDown:
                        if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                            newX -= snap ? 1 : this.wrapperWidth;
                        } else {
                            newY -= snap ? 1 : this.wrapperHeight;
                        }
                        break;
                    case this.options.keyBindings.end:
                        newX = snap ? this.pages.length - 1 : this.maxScrollX;
                        newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        newX = 0;
                        newY = 0;
                        break;
                    case this.options.keyBindings.left:
                        newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return;
                }

                if (snap) {
                    this.goToPage(newX, newY);
                    return;
                }

                if (newX > 0) {
                    newX = 0;
                    this.keyAcceleration = 0;
                } else if (newX < this.maxScrollX) {
                    newX = this.maxScrollX;
                    this.keyAcceleration = 0;
                }

                if (newY > 0) {
                    newY = 0;
                    this.keyAcceleration = 0;
                } else if (newY < this.maxScrollY) {
                    newY = this.maxScrollY;
                    this.keyAcceleration = 0;
                }

                this.scrollTo(newX, newY, 0);

                this.keyTime = now;
            },

            _animate: function(destX, destY, duration, easingFn) {
                var that = this,
                    startX = this.x,
                    startY = this.y,
                    startTime = utils.getTime(),
                    destTime = startTime + duration;

                function step() {
                    var now = utils.getTime(),
                        newX, newY,
                        easing;

                    if (now >= destTime) {
                        that.isAnimating = false;
                        that._translate(destX, destY);

                        if (!that.resetPosition(that.options.bounceTime)) {
                            that._execEvent('scrollEnd');
                        }

                        return;
                    }

                    now = (now - startTime) / duration;
                    easing = easingFn(now);
                    newX = (destX - startX) * easing + startX;
                    newY = (destY - startY) * easing + startY;
                    that._translate(newX, newY);

                    if (that.isAnimating) {
                        rAF(step);
                    }
                }

                this.isAnimating = true;
                step();
            },
            handleEvent: function(e) {
                switch (e.type) {
                    case 'touchstart':
                    case 'pointerdown':
                    case 'MSPointerDown':
                    case 'mousedown':
                        this._start(e);

                        if (this.options.zoom && e.touches && e.touches.length > 1) {
                            this._zoomStart(e);
                        }
                        break;
                    case 'touchmove':
                    case 'pointermove':
                    case 'MSPointerMove':
                    case 'mousemove':
                        if (this.options.zoom && e.touches && e.touches[1]) {
                            this._zoom(e);
                            return;
                        }
                        this._move(e);
                        break;
                    case 'touchend':
                    case 'pointerup':
                    case 'MSPointerUp':
                    case 'mouseup':
                    case 'touchcancel':
                    case 'pointercancel':
                    case 'MSPointerCancel':
                    case 'mousecancel':
                        if (this.scaled) {
                            this._zoomEnd(e);
                            return;
                        }
                        this._end(e);
                        break;
                    case 'orientationchange':
                    case 'resize':
                        this._resize();
                        break;
                    case 'transitionend':
                    case 'webkitTransitionEnd':
                    case 'oTransitionEnd':
                    case 'MSTransitionEnd':
                        this._transitionEnd(e);
                        break;
                    case 'wheel':
                    case 'DOMMouseScroll':
                    case 'mousewheel':
                        if (this.options.wheelAction == 'zoom') {
                            this._wheelZoom(e);
                            return;
                        }
                        this._wheel(e);
                        break;
                    case 'keydown':
                        this._key(e);
                        break;
                }
            }

        };

        function createDefaultScrollbar(direction, interactive, type) {
            var scrollbar = document.createElement('div'),
                indicator = document.createElement('div');

            if (type === true) {
                scrollbar.style.cssText = 'position:absolute;z-index:9999';
                indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
            }

            indicator.className = 'iScrollIndicator';

            if (direction == 'h') {
                if (type === true) {
                    scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
                    indicator.style.height = '100%';
                }
                scrollbar.className = 'iScrollHorizontalScrollbar';
            } else {
                if (type === true) {
                    scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
                    indicator.style.width = '100%';
                }
                scrollbar.className = 'iScrollVerticalScrollbar';
            }

            scrollbar.style.cssText += ';overflow:hidden';

            if (!interactive) {
                scrollbar.style.pointerEvents = 'none';
            }

            scrollbar.appendChild(indicator);

            return scrollbar;
        }

        function Indicator(scroller, options) {
            this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
            this.wrapperStyle = this.wrapper.style;
            this.indicator = this.wrapper.children[0];
            this.indicatorStyle = this.indicator.style;
            this.scroller = scroller;

            this.options = {
                listenX: true,
                listenY: true,
                interactive: false,
                resize: true,
                defaultScrollbars: false,
                shrink: false,
                fade: false,
                speedRatioX: 0,
                speedRatioY: 0
            };

            for (var i in options) {
                this.options[i] = options[i];
            }

            this.sizeRatioX = 1;
            this.sizeRatioY = 1;
            this.maxPosX = 0;
            this.maxPosY = 0;

            if (this.options.interactive) {
                if (!this.options.disableTouch) {
                    utils.addEvent(this.indicator, 'touchstart', this);
                    utils.addEvent(window, 'touchend', this);
                }
                if (!this.options.disablePointer) {
                    utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
                    utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
                }
                if (!this.options.disableMouse) {
                    utils.addEvent(this.indicator, 'mousedown', this);
                    utils.addEvent(window, 'mouseup', this);
                }
            }

            if (this.options.fade) {
                this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
                this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
                this.wrapperStyle.opacity = '0';
            }
        }

        Indicator.prototype = {
            handleEvent: function(e) {
                switch (e.type) {
                    case 'touchstart':
                    case 'pointerdown':
                    case 'MSPointerDown':
                    case 'mousedown':
                        this._start(e);
                        break;
                    case 'touchmove':
                    case 'pointermove':
                    case 'MSPointerMove':
                    case 'mousemove':
                        this._move(e);
                        break;
                    case 'touchend':
                    case 'pointerup':
                    case 'MSPointerUp':
                    case 'mouseup':
                    case 'touchcancel':
                    case 'pointercancel':
                    case 'MSPointerCancel':
                    case 'mousecancel':
                        this._end(e);
                        break;
                }
            },

            destroy: function() {
                if (this.options.interactive) {
                    utils.removeEvent(this.indicator, 'touchstart', this);
                    utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
                    utils.removeEvent(this.indicator, 'mousedown', this);

                    utils.removeEvent(window, 'touchmove', this);
                    utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
                    utils.removeEvent(window, 'mousemove', this);

                    utils.removeEvent(window, 'touchend', this);
                    utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
                    utils.removeEvent(window, 'mouseup', this);
                }

                if (this.options.defaultScrollbars) {
                    this.wrapper.parentNode.removeChild(this.wrapper);
                }
            },

            _start: function(e) {
                var point = e.touches ? e.touches[0] : e;

                e.preventDefault();
                e.stopPropagation();

                this.transitionTime();

                this.initiated = true;
                this.moved = false;
                this.lastPointX = point.pageX;
                this.lastPointY = point.pageY;

                this.startTime = utils.getTime();

                if (!this.options.disableTouch) {
                    utils.addEvent(window, 'touchmove', this);
                }
                if (!this.options.disablePointer) {
                    utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
                }
                if (!this.options.disableMouse) {
                    utils.addEvent(window, 'mousemove', this);
                }

                this.scroller._execEvent('beforeScrollStart');
            },

            _move: function(e) {
                var point = e.touches ? e.touches[0] : e,
                    deltaX, deltaY,
                    newX, newY,
                    timestamp = utils.getTime();

                if (!this.moved) {
                    this.scroller._execEvent('scrollStart');
                }

                this.moved = true;

                deltaX = point.pageX - this.lastPointX;
                this.lastPointX = point.pageX;

                deltaY = point.pageY - this.lastPointY;
                this.lastPointY = point.pageY;

                newX = this.x + deltaX;
                newY = this.y + deltaY;

                this._pos(newX, newY);

                // INSERT POINT: indicator._move

                e.preventDefault();
                e.stopPropagation();
            },

            _end: function(e) {
                if (!this.initiated) {
                    return;
                }

                this.initiated = false;

                e.preventDefault();
                e.stopPropagation();

                utils.removeEvent(window, 'touchmove', this);
                utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
                utils.removeEvent(window, 'mousemove', this);

                if (this.scroller.options.snap) {
                    var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

                    var time = this.options.snapSpeed || Math.max(
                        Math.max(
                            Math.min(Math.abs(this.scroller.x - snap.x), 1000),
                            Math.min(Math.abs(this.scroller.y - snap.y), 1000)
                        ), 300);

                    if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
                        this.scroller.directionX = 0;
                        this.scroller.directionY = 0;
                        this.scroller.currentPage = snap;
                        this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
                    }
                }

                if (this.moved) {
                    this.scroller._execEvent('scrollEnd');
                }
            },

            transitionTime: function(time) {
                time = time || 0;
                this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';

                if (!time && utils.isBadAndroid) {
                    this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
                }
            },

            transitionTimingFunction: function(easing) {
                this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
            },

            refresh: function() {
                this.transitionTime();

                if (this.options.listenX && !this.options.listenY) {
                    this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
                } else if (this.options.listenY && !this.options.listenX) {
                    this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
                } else {
                    this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
                }

                if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
                    utils.addClass(this.wrapper, 'iScrollBothScrollbars');
                    utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

                    if (this.options.defaultScrollbars && this.options.customStyle) {
                        if (this.options.listenX) {
                            this.wrapper.style.right = '8px';
                        } else {
                            this.wrapper.style.bottom = '8px';
                        }
                    }
                } else {
                    utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
                    utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

                    if (this.options.defaultScrollbars && this.options.customStyle) {
                        if (this.options.listenX) {
                            this.wrapper.style.right = '2px';
                        } else {
                            this.wrapper.style.bottom = '2px';
                        }
                    }
                }

                var r = this.wrapper.offsetHeight; // force refresh

                if (this.options.listenX) {
                    this.wrapperWidth = this.wrapper.clientWidth;
                    if (this.options.resize) {
                        this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                        this.indicatorStyle.width = this.indicatorWidth + 'px';
                    } else {
                        this.indicatorWidth = this.indicator.clientWidth;
                    }

                    this.maxPosX = this.wrapperWidth - this.indicatorWidth;

                    if (this.options.shrink == 'clip') {
                        this.minBoundaryX = -this.indicatorWidth + 8;
                        this.maxBoundaryX = this.wrapperWidth - 8;
                    } else {
                        this.minBoundaryX = 0;
                        this.maxBoundaryX = this.maxPosX;
                    }

                    this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
                }

                if (this.options.listenY) {
                    this.wrapperHeight = this.wrapper.clientHeight;
                    if (this.options.resize) {
                        this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                        this.indicatorStyle.height = this.indicatorHeight + 'px';
                    } else {
                        this.indicatorHeight = this.indicator.clientHeight;
                    }

                    this.maxPosY = this.wrapperHeight - this.indicatorHeight;

                    if (this.options.shrink == 'clip') {
                        this.minBoundaryY = -this.indicatorHeight + 8;
                        this.maxBoundaryY = this.wrapperHeight - 8;
                    } else {
                        this.minBoundaryY = 0;
                        this.maxBoundaryY = this.maxPosY;
                    }

                    this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                    this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
                }

                this.updatePosition();
            },

            updatePosition: function() {
                var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
                    y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

                if (!this.options.ignoreBoundaries) {
                    if (x < this.minBoundaryX) {
                        if (this.options.shrink == 'scale') {
                            this.width = Math.max(this.indicatorWidth + x, 8);
                            this.indicatorStyle.width = this.width + 'px';
                        }
                        x = this.minBoundaryX;
                    } else if (x > this.maxBoundaryX) {
                        if (this.options.shrink == 'scale') {
                            this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
                            this.indicatorStyle.width = this.width + 'px';
                            x = this.maxPosX + this.indicatorWidth - this.width;
                        } else {
                            x = this.maxBoundaryX;
                        }
                    } else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
                        this.width = this.indicatorWidth;
                        this.indicatorStyle.width = this.width + 'px';
                    }

                    if (y < this.minBoundaryY) {
                        if (this.options.shrink == 'scale') {
                            this.height = Math.max(this.indicatorHeight + y * 3, 8);
                            this.indicatorStyle.height = this.height + 'px';
                        }
                        y = this.minBoundaryY;
                    } else if (y > this.maxBoundaryY) {
                        if (this.options.shrink == 'scale') {
                            this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
                            this.indicatorStyle.height = this.height + 'px';
                            y = this.maxPosY + this.indicatorHeight - this.height;
                        } else {
                            y = this.maxBoundaryY;
                        }
                    } else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
                        this.height = this.indicatorHeight;
                        this.indicatorStyle.height = this.height + 'px';
                    }
                }

                this.x = x;
                this.y = y;

                if (this.scroller.options.useTransform) {
                    this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
                } else {
                    this.indicatorStyle.left = x + 'px';
                    this.indicatorStyle.top = y + 'px';
                }
            },

            _pos: function(x, y) {
                if (x < 0) {
                    x = 0;
                } else if (x > this.maxPosX) {
                    x = this.maxPosX;
                }

                if (y < 0) {
                    y = 0;
                } else if (y > this.maxPosY) {
                    y = this.maxPosY;
                }

                x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
                y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

                this.scroller.scrollTo(x, y);
            },

            fade: function(val, hold) {
                if (hold && !this.visible) {
                    return;
                }

                clearTimeout(this.fadeTimeout);
                this.fadeTimeout = null;

                var time = val ? 250 : 500,
                    delay = val ? 0 : 300;

                val = val ? '1' : '0';

                this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

                this.fadeTimeout = setTimeout((function(val) {
                    this.wrapperStyle.opacity = val;
                    this.visible = +val;
                }).bind(this, val), delay);
            }
        };

        IScroll.utils = utils;

        if (typeof module != 'undefined' && module.exports) {
            module.exports = IScroll;
        } else {
            window.IScroll = IScroll;
        }

        FLIPBOOK.IScroll = IScroll;

    })(window, document, Math);


}

{ /* screenfull.js */

    /*!
     * screenfull
     * v2.0.0 - 2014-12-22
     * (c) Sindre Sorhus; MIT License
     */
    ! function() {
        "use strict";
        var a = "undefined" != typeof module && module.exports,
            b = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
            c = function() {
                for (var a, b, c = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                    ], d = 0, e = c.length, f = {}; e > d; d++)
                    if (a = c[d], a && a[1] in document) {
                        for (d = 0, b = a.length; b > d; d++) f[c[0][d]] = a[d];
                        return f
                    }
                return !1
            }(),
            d = {
                request: function(a) {
                    var d = c.requestFullscreen;
                    a = a || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? a[d]() : a[d](b && Element.ALLOW_KEYBOARD_INPUT)
                },
                exit: function() {
                    document[c.exitFullscreen]()
                },
                toggle: function(a) {
                    this.isFullscreen ? this.exit() : this.request(a)
                },
                raw: c
            };
        return c ? (Object.defineProperties(d, {
            isFullscreen: {
                get: function() {
                    return !!document[c.fullscreenElement]
                }
            },
            element: {
                enumerable: !0,
                get: function() {
                    return document[c.fullscreenElement]
                }
            },
            enabled: {
                enumerable: !0,
                get: function() {
                    return !!document[c.fullscreenEnabled]
                }
            }
        }), void(a ? module.exports = d : window.screenfull = d)) : void(a ? module.exports = !1 : window.screenfull = !1)
    }();

}

{ /*jQuery.browser.mobile*/
    /**
     * jQuery.browser.mobile (http://detectmobilebrowser.com/)
     *
     * jQuery.browser.mobile will be true if the browser is a mobile device
     *
     **/
    (function(a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);
}


var TEXT_LAYER_RENDER_DELAY = 200; // ms

var MAX_TEXT_DIVS_TO_RENDER = 100000;

var NonWhitespaceRegexp = /\S/;

function isAllWhitespace(str) {
    return !NonWhitespaceRegexp.test(str);
}


/**
 * @typedef {Object} TextLayerBuilderOptions
 * @property {HTMLDivElement} textLayerDiv - The text layer container.
 * @property {number} pageIndex - The page index.
 * @property {PageViewport} viewport - The viewport of the text layer.
 * @property {PDFFindController} findController
 */

/**
 * TextLayerBuilder provides text-selection functionality for the PDF.
 * It does this by creating overlay divs over the PDF text. These divs
 * contain text that matches the PDF text they are overlaying. This object
 * also provides a way to highlight text that is being searched for.
 * @class
 */
var TextLayerBuilder = (function TextLayerBuilderClosure() {
    function TextLayerBuilder(options) {
        this.textLayerDiv = options.textLayerDiv;
        this.renderingDone = false;
        this.divContentDone = false;
        this.pageIdx = options.pageIndex;
        this.pageNumber = this.pageIdx + 1;
        this.matches = [];
        this.viewport = options.viewport;
        this.textDivs = [];
        this.findController = options.findController || null;
        this.textLayerRenderTask = null;
        this._bindMouse();
    }

    TextLayerBuilder.prototype = {
        _finishRendering: function TextLayerBuilder_finishRendering() {
            this.renderingDone = true;

            var endOfContent = document.createElement('div');
            endOfContent.className = 'endOfContent';
            this.textLayerDiv.appendChild(endOfContent);

            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('textlayerrendered', true, true, {
                pageNumber: this.pageNumber
            });
            this.textLayerDiv.dispatchEvent(event);
        },

        /**
         * Renders the text layer.
         * @param {number} timeout (optional) if specified, the rendering waits
         *   for specified amount of ms.
         */
        render: function TextLayerBuilder_render(timeout) {
            if (!this.divContentDone || this.renderingDone) {
                return;
            }

            if (this.textLayerRenderTask) {
                this.textLayerRenderTask.cancel();
                this.textLayerRenderTask = null;
            }

            this.textDivs = [];
            var textLayerFrag = document.createDocumentFragment();
            this.textLayerRenderTask = PDFJS.renderTextLayer({
                textContent: this.textContent,
                container: textLayerFrag,
                viewport: this.viewport,
                textDivs: this.textDivs,
                timeout: timeout
            });
            this.textLayerRenderTask.promise.then(function() {
                this.textLayerDiv.appendChild(textLayerFrag);
                this._finishRendering();
                this.updateMatches();
            }.bind(this), function(reason) {
                // canceled or failed to render text layer -- skipping errors
            });
        },

        setTextContent: function TextLayerBuilder_setTextContent(textContent) {
            if (this.textLayerRenderTask) {
                this.textLayerRenderTask.cancel();
                this.textLayerRenderTask = null;
            }
            this.textContent = textContent;
            this.divContentDone = true;
        },

        convertMatches: function TextLayerBuilder_convertMatches(matches) {
            var i = 0;
            var iIndex = 0;
            var bidiTexts = this.textContent.items;
            var end = bidiTexts.length - 1;
            var queryLen = (this.findController === null ?
                0 : this.findController.state.query.length);
            var ret = [];

            for (var m = 0, len = matches.length; m < len; m++) {
                // Calculate the start position.
                var matchIdx = matches[m];

                // Loop over the divIdxs.
                while (i !== end && matchIdx >= (iIndex + bidiTexts[i].str.length)) {
                    iIndex += bidiTexts[i].str.length;
                    i++;
                }

                if (i === bidiTexts.length) {
                    console.error('Could not find a matching mapping');
                }

                var match = {
                    begin: {
                        divIdx: i,
                        offset: matchIdx - iIndex
                    }
                };

                // Calculate the end position.
                matchIdx += queryLen;

                // Somewhat the same array as above, but use > instead of >= to get
                // the end position right.
                while (i !== end && matchIdx > (iIndex + bidiTexts[i].str.length)) {
                    iIndex += bidiTexts[i].str.length;
                    i++;
                }

                match.end = {
                    divIdx: i,
                    offset: matchIdx - iIndex
                };
                ret.push(match);
            }

            return ret;
        },

        renderMatches: function TextLayerBuilder_renderMatches(matches) {
            // Early exit if there is nothing to render.
            if (matches.length === 0) {
                return;
            }

            var bidiTexts = this.textContent.items;
            var textDivs = this.textDivs;
            var prevEnd = null;
            var pageIdx = this.pageIdx;
            var isSelectedPage = (this.findController === null ?
                false : (pageIdx === this.findController.selected.pageIdx));
            var selectedMatchIdx = (this.findController === null ?
                -1 : this.findController.selected.matchIdx);
            var highlightAll = (this.findController === null ?
                false : this.findController.state.highlightAll);
            var infinity = {
                divIdx: -1,
                offset: undefined
            };

            function beginText(begin, className) {
                var divIdx = begin.divIdx;
                textDivs[divIdx].textContent = '';
                appendTextToDiv(divIdx, 0, begin.offset, className);
            }

            function appendTextToDiv(divIdx, fromOffset, toOffset, className) {
                var div = textDivs[divIdx];
                var content = bidiTexts[divIdx].str.substring(fromOffset, toOffset);
                var node = document.createTextNode(content);
                if (className) {
                    var span = document.createElement('span');
                    span.className = className;
                    span.appendChild(node);
                    div.appendChild(span);
                    return;
                }
                div.appendChild(node);
            }

            var i0 = selectedMatchIdx,
                i1 = i0 + 1;
            if (highlightAll) {
                i0 = 0;
                i1 = matches.length;
            } else if (!isSelectedPage) {
                // Not highlighting all and this isn't the selected page, so do nothing.
                return;
            }

            for (var i = i0; i < i1; i++) {
                var match = matches[i];
                var begin = match.begin;
                var end = match.end;
                var isSelected = (isSelectedPage && i === selectedMatchIdx);
                var highlightSuffix = (isSelected ? ' selected' : '');

                if (this.findController) {
                    this.findController.updateMatchPosition(pageIdx, i, textDivs,
                        begin.divIdx, end.divIdx);
                }

                // Match inside new div.
                if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
                    // If there was a previous div, then add the text at the end.
                    if (prevEnd !== null) {
                        appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
                    }
                    // Clear the divs and set the content until the starting point.
                    beginText(begin);
                } else {
                    appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
                }

                if (begin.divIdx === end.divIdx) {
                    appendTextToDiv(begin.divIdx, begin.offset, end.offset,
                        'highlight' + highlightSuffix);
                } else {
                    appendTextToDiv(begin.divIdx, begin.offset, infinity.offset,
                        'highlight begin' + highlightSuffix);
                    for (var n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
                        textDivs[n0].className = 'highlight middle' + highlightSuffix;
                    }
                    beginText(end, 'highlight end' + highlightSuffix);
                }
                prevEnd = end;
            }

            if (prevEnd) {
                appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
            }
        },

        updateMatches: function TextLayerBuilder_updateMatches() {
            // Only show matches when all rendering is done.
            if (!this.renderingDone) {
                return;
            }

            // Clear all matches.
            var matches = this.matches;
            var textDivs = this.textDivs;
            var bidiTexts = this.textContent.items;
            var clearedUntilDivIdx = -1;

            // Clear all current matches.
            for (var i = 0, len = matches.length; i < len; i++) {
                var match = matches[i];
                var begin = Math.max(clearedUntilDivIdx, match.begin.divIdx);
                for (var n = begin, end = match.end.divIdx; n <= end; n++) {
                    var div = textDivs[n];
                    div.textContent = bidiTexts[n].str;
                    div.className = '';
                }
                clearedUntilDivIdx = match.end.divIdx + 1;
            }

            if (this.findController === null || !this.findController.active) {
                return;
            }

            // Convert the matches on the page controller into the match format
            // used for the textLayer.
            this.matches = this.convertMatches(this.findController === null ? [] : (this.findController.pageMatches[this.pageIdx] || []));
            this.renderMatches(this.matches);
        },

        /**
         * Fixes text selection: adds additional div where mouse was clicked.
         * This reduces flickering of the content if mouse slowly dragged down/up.
         * @private
         */
        _bindMouse: function TextLayerBuilder_bindMouse() {
            var div = this.textLayerDiv;
            div.addEventListener('mousedown', function(e) {
                var end = div.querySelector('.endOfContent');
                if (!end) {
                    return;
                }
                // On non-Firefox browsers, the selection will feel better if the height
                // of the endOfContent div will be adjusted to start at mouse click
                // location -- this will avoid flickering when selections moves up.
                // However it does not work when selection started on empty space.
                var adjustTop = e.target !== div;
                adjustTop = adjustTop && window.getComputedStyle(end).
                getPropertyValue('-moz-user-select') !== 'none';
                if (adjustTop) {
                    var divBounds = div.getBoundingClientRect();
                    var r = Math.max(0, (e.pageY - divBounds.top) / divBounds.height);
                    end.style.top = (r * 100).toFixed(2) + '%';
                }
                end.classList.add('active');
            });
            div.addEventListener('mouseup', function(e) {
                var end = div.querySelector('.endOfContent');
                if (!end) {
                    return;
                }
                end.style.top = '';
                end.classList.remove('active');
            });
        },
    };
    return TextLayerBuilder;
})();



/**
 * @typedef {Object} AnnotationLayerBuilderOptions
 * @property {HTMLDivElement} pageDiv
 * @property {PDFPage} pdfPage
 * @property {IPDFLinkService} linkService
 */

/**
 * @class
 */
var AnnotationLayerBuilder = (function AnnotationLayerBuilderClosure() {
    /**
     * @param {AnnotationLayerBuilderOptions} options
     * @constructs AnnotationLayerBuilder
     */
    function AnnotationLayerBuilder(options) {
        this.pageDiv = options.pageDiv;
        this.pdfPage = options.pdfPage;
        this.linkService = options.linkService;

        this.div = null;
    }

    AnnotationLayerBuilder.prototype =
        /** @lends AnnotationLayerBuilder.prototype */
        {

            /**
             * @param {PageViewport} viewport
             * @param {string} intent (default value is 'display')
             */
            render: function AnnotationLayerBuilder_render(viewport, intent) {
                var self = this;
                var parameters = {
                    intent: (intent === undefined ? 'display' : intent),
                };

                this.pdfPage.getAnnotations(parameters).then(function(annotations) {
                    viewport = viewport.clone({
                        dontFlip: true
                    });
                    parameters = {
                        viewport: viewport,
                        div: self.div,
                        annotations: annotations,
                        page: self.pdfPage,
                        linkService: self.linkService
                    };

                    if (self.div) {
                        // If an annotationLayer already exists, refresh its children's
                        // transformation matrices.
                        PDFJS.AnnotationLayer.update(parameters);
                    } else {
                        // Create an annotation layer div and render the annotations
                        // if there is at least one annotation.
                        if (annotations.length === 0) {
                            return;
                        }

                        self.div = document.createElement('div');
                        self.div.className = 'flipbook-annotationLayer';
                        self.pageDiv.appendChild(self.div);
                        parameters.div = self.div;

                        PDFJS.AnnotationLayer.render(parameters);
                        if (typeof mozL10n !== 'undefined') {
                            mozL10n.translate(self.div);
                        }
                    }
                });
            },

            hide: function AnnotationLayerBuilder_hide() {
                if (!this.div) {
                    return;
                }
                this.div.setAttribute('hidden', 'true');
            }
        };

    return AnnotationLayerBuilder;
})();



/**
 * Performs navigation functions inside PDF, such as opening specified page,
 * or destination.
 * @class
 * @implements {IPDFLinkService}
 */
var PDFLinkService = (function() {
    /**
     * @constructs PDFLinkService
     */
    function PDFLinkService() {
        this.baseUrl = null;
        this.pdfDocument = null;
        this.pdfViewer = null;
        this.pdfHistory = null;

        this._pagesRefCache = null;
    }

    PDFLinkService.prototype = {
        setDocument: function PDFLinkService_setDocument(pdfDocument, baseUrl) {
            this.baseUrl = baseUrl;
            this.pdfDocument = pdfDocument;
            this._pagesRefCache = Object.create(null);
        },

        setViewer: function PDFLinkService_setViewer(pdfViewer) {
            this.pdfViewer = pdfViewer;
        },

        setHistory: function PDFLinkService_setHistory(pdfHistory) {
            this.pdfHistory = pdfHistory;
        },

        /**
         * @returns {number}
         */
        get pagesCount() {
            return this.pdfDocument.numPages;
        },

        /**
         * @returns {number}
         */
        get page() {
            return this.pdfViewer.currentPageNumber;
        },

        /**
         * @param {number} value
         */
        set page(value) {
            this.pdfViewer.currentPageNumber = value;
        },

        /**
         * @param dest - The PDF destination object.
         */
        navigateTo: function PDFLinkService_navigateTo(dest) {
            var destString = '';
            var self = this;

            var goToDestination = function(destRef) {
                // dest array looks like that: <page-ref> </XYZ|FitXXX> <args..>
                var pageNumber = destRef instanceof Object ?
                    self._pagesRefCache[destRef.num + ' ' + destRef.gen + ' R'] :
                    (destRef + 1);
                if (pageNumber) {
                    if (pageNumber > self.pagesCount) {
                        pageNumber = self.pagesCount;
                    }
                    self.pdfViewer.scrollPageIntoView(pageNumber, dest);

                    if (self.pdfHistory) {
                        // Update the browsing history.
                        self.pdfHistory.push({
                            dest: dest,
                            hash: destString,
                            page: pageNumber
                        });
                    }
                } else {
                    self.pdfDocument.getPageIndex(destRef).then(function(pageIndex) {
                        var pageNum = pageIndex + 1;
                        var cacheKey = destRef.num + ' ' + destRef.gen + ' R';
                        self._pagesRefCache[cacheKey] = pageNum;
                        goToDestination(destRef);
                    });
                }
            };

            var destinationPromise;
            if (typeof dest === 'string') {
                destString = dest;
                destinationPromise = this.pdfDocument.getDestination(dest);
            } else {
                destinationPromise = Promise.resolve(dest);
            }
            destinationPromise.then(function(destination) {
                dest = destination;
                if (!(destination instanceof Array)) {
                    return; // invalid destination
                }
                goToDestination(destination[0]);
            });
        },

        /**
         * @param dest - The PDF destination object.
         * @returns {string} The hyperlink to the PDF object.
         */
        getDestinationHash: function PDFLinkService_getDestinationHash(dest) {
            if (typeof dest === 'string') {
                return this.getAnchorUrl('#' + escape(dest));
            }
            if (dest instanceof Array) {
                var destRef = dest[0]; // see navigateTo method for dest format
                var pageNumber = destRef instanceof Object ?
                    this._pagesRefCache[destRef.num + ' ' + destRef.gen + ' R'] :
                    (destRef + 1);
                if (pageNumber) {
                    var pdfOpenParams = this.getAnchorUrl('#page=' + pageNumber);
                    var destKind = dest[1];
                    if (typeof destKind === 'object' && 'name' in destKind &&
                        destKind.name === 'XYZ') {
                        var scale = (dest[4] || this.pdfViewer.currentScaleValue);
                        var scaleNumber = parseFloat(scale);
                        if (scaleNumber) {
                            scale = scaleNumber * 100;
                        }
                        pdfOpenParams += '&zoom=' + scale;
                        if (dest[2] || dest[3]) {
                            pdfOpenParams += ',' + (dest[2] || 0) + ',' + (dest[3] || 0);
                        }
                    }
                    return pdfOpenParams;
                }
            }
            return this.getAnchorUrl('');
        },

        /**
         * Prefix the full url on anchor links to make sure that links are resolved
         * relative to the current URL instead of the one defined in <base href>.
         * @param {String} anchor The anchor hash, including the #.
         * @returns {string} The hyperlink to the PDF object.
         */
        getAnchorUrl: function PDFLinkService_getAnchorUrl(anchor) {
            return (this.baseUrl || '') + anchor;
        },

        /**
         * @param {string} hash
         */
        setHash: function PDFLinkService_setHash(hash) {
            if (hash.indexOf('=') >= 0) {
                var params = parseQueryString(hash);
                // borrowing syntax from "Parameters for Opening PDF Files"
                if ('nameddest' in params) {
                    if (this.pdfHistory) {
                        this.pdfHistory.updateNextHashParam(params.nameddest);
                    }
                    this.navigateTo(params.nameddest);
                    return;
                }
                var pageNumber, dest;
                if ('page' in params) {
                    pageNumber = (params.page | 0) || 1;
                }
                if ('zoom' in params) {
                    // Build the destination array.
                    var zoomArgs = params.zoom.split(','); // scale,left,top
                    var zoomArg = zoomArgs[0];
                    var zoomArgNumber = parseFloat(zoomArg);

                    if (zoomArg.indexOf('Fit') === -1) {
                        // If the zoomArg is a number, it has to get divided by 100. If it's
                        // a string, it should stay as it is.
                        dest = [null, {
                                name: 'XYZ'
                            },
                            zoomArgs.length > 1 ? (zoomArgs[1] | 0) : null,
                            zoomArgs.length > 2 ? (zoomArgs[2] | 0) : null, (zoomArgNumber ? zoomArgNumber / 100 : zoomArg)
                        ];
                    } else {
                        if (zoomArg === 'Fit' || zoomArg === 'FitB') {
                            dest = [null, {
                                name: zoomArg
                            }];
                        } else if ((zoomArg === 'FitH' || zoomArg === 'FitBH') ||
                            (zoomArg === 'FitV' || zoomArg === 'FitBV')) {
                            dest = [null, {
                                    name: zoomArg
                                },
                                zoomArgs.length > 1 ? (zoomArgs[1] | 0) : null
                            ];
                        } else if (zoomArg === 'FitR') {
                            if (zoomArgs.length !== 5) {
                                console.error('PDFLinkService_setHash: ' +
                                    'Not enough parameters for \'FitR\'.');
                            } else {
                                dest = [null, {
                                    name: zoomArg
                                }, (zoomArgs[1] | 0), (zoomArgs[2] | 0), (zoomArgs[3] | 0), (zoomArgs[4] | 0)];
                            }
                        } else {
                            console.error('PDFLinkService_setHash: \'' + zoomArg +
                                '\' is not a valid zoom value.');
                        }
                    }
                }
                if (dest) {
                    this.pdfViewer.scrollPageIntoView(pageNumber || this.page, dest);
                } else if (pageNumber) {
                    this.page = pageNumber; // simple page
                }
                if ('pagemode' in params) {
                    var event = document.createEvent('CustomEvent');
                    event.initCustomEvent('pagemode', true, true, {
                        mode: params.pagemode,
                    });
                    this.pdfViewer.container.dispatchEvent(event);
                }
            } else if (/^\d+$/.test(hash)) { // page number
                this.page = hash;
            } else { // named destination
                if (this.pdfHistory) {
                    this.pdfHistory.updateNextHashParam(unescape(hash));
                }
                this.navigateTo(unescape(hash));
            }
        },

        /**
         * @param {string} action
         */
        executeNamedAction: function PDFLinkService_executeNamedAction(action) {
            // See PDF reference, table 8.45 - Named action
            switch (action) {
                case 'GoBack':
                    if (this.pdfHistory) {
                        this.pdfHistory.back();
                    }
                    break;

                case 'GoForward':
                    if (this.pdfHistory) {
                        this.pdfHistory.forward();
                    }
                    break;

                case 'NextPage':
                    this.page++;
                    break;

                case 'PrevPage':
                    this.page--;
                    break;

                case 'LastPage':
                    this.page = this.pagesCount;
                    break;

                case 'FirstPage':
                    this.page = 1;
                    break;

                default:
                    break; // No action according to spec
            }

            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('namedaction', true, true, {
                action: action
            });
            this.pdfViewer.container.dispatchEvent(event);
        },

        /**
         * @param {number} pageNum - page number.
         * @param {Object} pageRef - reference to the page.
         */
        cachePageRef: function PDFLinkService_cachePageRef(pageNum, pageRef) {
            var refStr = pageRef.num + ' ' + pageRef.gen + ' R';
            this._pagesRefCache[refStr] = pageNum;
        }
    };

    return PDFLinkService;
})();


/*
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.6
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(f) {
    var y = "1.6.9",
        p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        A = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        B = "tap",
        j = "doubletap",
        b = "longtap",
        z = "hold",
        E = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        C = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: true
    };
    f.fn.swipe = function(H) {
        var G = f(this),
            F = G.data(C);
        if (F && typeof H === "string") {
            if (F[H]) {
                return F[H].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + H + " does not exist on jQuery.swipe")
            }
        } else {
            if (!F && (typeof H === "object" || !H)) {
                return w.apply(this, arguments)
            }
        }
        return G
    };
    f.fn.swipe.version = y;
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipe.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: A
    };
    f.fn.swipe.pageScroll = {
        NONE: m,
        HORIZONTAL: E,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: i
    };

    function w(F) {
        if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) {
            F.allowPageScroll = m
        }
        if (F.click !== undefined && F.tap === undefined) {
            F.tap = F.click
        }
        if (!F) {
            F = {}
        }
        F = f.extend({}, f.fn.swipe.defaults, F);
        return this.each(function() {
            var H = f(this);
            var G = H.data(C);
            if (!G) {
                G = new D(this, F);
                H.data(C, G)
            }
        })
    }

    function D(a5, aw) {
        var aA = (a || d || !aw.fallbackToMouseEvents),
            K = aA ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            az = aA ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            V = aA ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            T = aA ? null : "mouseleave",
            aE = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ah = 0,
            aQ = null,
            ac = 0,
            a2 = 0,
            a0 = 0,
            H = 1,
            ar = 0,
            aK = 0,
            N = null;
        var aS = f(a5);
        var aa = "start";
        var X = 0;
        var aR = null;
        var U = 0,
            a3 = 0,
            a6 = 0,
            ae = 0,
            O = 0;
        var aX = null,
            ag = null;
        try {
            aS.bind(K, aO);
            aS.bind(aE, ba)
        } catch (al) {
            f.error("events not supported " + K + "," + aE + " on jQuery.swipe")
        }
        this.enable = function() {
            aS.bind(K, aO);
            aS.bind(aE, ba);
            return aS
        };
        this.disable = function() {
            aL();
            return aS
        };
        this.destroy = function() {
            aL();
            aS.data(C, null);
            aS = null
        };
        this.option = function(bd, bc) {
            if (aw[bd] !== undefined) {
                if (bc === undefined) {
                    return aw[bd]
                } else {
                    aw[bd] = bc
                }
            } else {
                f.error("Option " + bd + " does not exist on jQuery.swipe.options")
            }
            return null
        };

        function aO(be) {
            if (aC()) {
                return
            }
            if (f(be.target).closest(aw.excludedElements, aS).length > 0) {
                return
            }
            var bf = be.originalEvent ? be.originalEvent : be;
            var bd, bg = bf.touches,
                bc = bg ? bg[0] : bf;
            aa = g;
            if (bg) {
                X = bg.length
            } else {
                be.preventDefault()
            }
            ah = 0;
            aQ = null;
            aK = null;
            ac = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            ar = 0;
            aR = ak();
            N = ab();
            S();
            if (!bg || (X === aw.fingers || aw.fingers === i) || aY()) {
                aj(0, bc);
                U = au();
                if (X == 2) {
                    aj(1, bg[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                }
                if (aw.swipeStatus || aw.pinchStatus) {
                    bd = P(bf, aa)
                }
            } else {
                bd = false
            }
            if (bd === false) {
                aa = q;
                P(bf, aa);
                return bd
            } else {
                if (aw.hold) {
                    ag = setTimeout(f.proxy(function() {
                        aS.trigger("hold", [bf.target]);
                        if (aw.hold) {
                            bd = aw.hold.call(aS, bf, bf.target)
                        }
                    }, this), aw.longTapThreshold)
                }
                ap(true)
            }
            return null
        }

        function a4(bf) {
            var bi = bf.originalEvent ? bf.originalEvent : bf;
            if (aa === h || aa === q || an()) {
                return
            }
            var be, bj = bi.touches,
                bd = bj ? bj[0] : bi;
            var bg = aI(bd);
            a3 = au();
            if (bj) {
                X = bj.length
            }
            if (aw.hold) {
                clearTimeout(ag)
            }
            aa = k;
            if (X == 2) {
                if (a2 == 0) {
                    aj(1, bj[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                } else {
                    aI(bj[1]);
                    a0 = av(aR[0].end, aR[1].end);
                    aK = at(aR[0].end, aR[1].end)
                }
                H = a8(a2, a0);
                ar = Math.abs(a2 - a0)
            }
            if ((X === aw.fingers || aw.fingers === i) || !bj || aY()) {
                aQ = aM(bg.start, bg.end);
                am(bf, aQ);
                ah = aT(bg.start, bg.end);
                ac = aN();
                aJ(aQ, ah);
                if (aw.swipeStatus || aw.pinchStatus) {
                    be = P(bi, aa)
                }
                if (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave) {
                    var bc = true;
                    if (aw.triggerOnTouchLeave) {
                        var bh = aZ(this);
                        bc = F(bg.end, bh)
                    }
                    if (!aw.triggerOnTouchEnd && bc) {
                        aa = aD(k)
                    } else {
                        if (aw.triggerOnTouchLeave && !bc) {
                            aa = aD(h)
                        }
                    }
                    if (aa == q || aa == h) {
                        P(bi, aa)
                    }
                }
            } else {
                aa = q;
                P(bi, aa)
            }
            if (be === false) {
                aa = q;
                P(bi, aa)
            }
        }

        function M(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc,
                be = bd.touches;
            if (be) {
                if (be.length) {
                    G();
                    return true
                }
            }
            if (an()) {
                X = ae
            }
            a3 = au();
            ac = aN();
            if (bb() || !ao()) {
                aa = q;
                P(bd, aa)
            } else {
                if (aw.triggerOnTouchEnd || (aw.triggerOnTouchEnd == false && aa === k)) {
                    bc.preventDefault();
                    aa = h;
                    P(bd, aa)
                } else {
                    if (!aw.triggerOnTouchEnd && a7()) {
                        aa = h;
                        aG(bd, aa, B)
                    } else {
                        if (aa === k) {
                            aa = q;
                            P(bd, aa)
                        }
                    }
                }
            }
            ap(false);
            return null
        }

        function ba() {
            X = 0;
            a3 = 0;
            U = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            S();
            ap(false)
        }

        function L(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc;
            if (aw.triggerOnTouchLeave) {
                aa = aD(h);
                P(bd, aa)
            }
        }

        function aL() {
            aS.unbind(K, aO);
            aS.unbind(aE, ba);
            aS.unbind(az, a4);
            aS.unbind(V, M);
            if (T) {
                aS.unbind(T, L)
            }
            ap(false)
        }

        function aD(bg) {
            var bf = bg;
            var be = aB();
            var bd = ao();
            var bc = bb();
            if (!be || bc) {
                bf = q
            } else {
                if (bd && bg == k && (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave)) {
                    bf = h
                } else {
                    if (!bd && bg == h && aw.triggerOnTouchLeave) {
                        bf = q
                    }
                }
            }
            return bf
        }

        function P(be, bc) {
            var bd, bf = be.touches;
            if ((J() || W()) || (Q() || aY())) {
                if (J() || W()) {
                    bd = aG(be, bc, l)
                }
                if ((Q() || aY()) && bd !== false) {
                    bd = aG(be, bc, t)
                }
            } else {
                if (aH() && bd !== false) {
                    bd = aG(be, bc, j)
                } else {
                    if (aq() && bd !== false) {
                        bd = aG(be, bc, b)
                    } else {
                        if (ai() && bd !== false) {
                            bd = aG(be, bc, B)
                        }
                    }
                }
            }
            if (bc === q) {
                ba(be)
            }
            if (bc === h) {
                if (bf) {
                    if (!bf.length) {
                        ba(be)
                    }
                } else {
                    ba(be)
                }
            }
            return bd
        }

        function aG(bf, bc, be) {
            var bd;
            if (be == l) {
                aS.trigger("swipeStatus", [bc, aQ || null, ah || 0, ac || 0, X, aR]);
                if (aw.swipeStatus) {
                    bd = aw.swipeStatus.call(aS, bf, bc, aQ || null, ah || 0, ac || 0, X, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && aW()) {
                    aS.trigger("swipe", [aQ, ah, ac, X, aR]);
                    if (aw.swipe) {
                        bd = aw.swipe.call(aS, bf, aQ, ah, ac, X, aR);
                        if (bd === false) {
                            return false
                        }
                    }
                    switch (aQ) {
                        case p:
                            aS.trigger("swipeLeft", [aQ, ah, ac, X, aR]);
                            if (aw.swipeLeft) {
                                bd = aw.swipeLeft.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case o:
                            aS.trigger("swipeRight", [aQ, ah, ac, X, aR]);
                            if (aw.swipeRight) {
                                bd = aw.swipeRight.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case e:
                            aS.trigger("swipeUp", [aQ, ah, ac, X, aR]);
                            if (aw.swipeUp) {
                                bd = aw.swipeUp.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case x:
                            aS.trigger("swipeDown", [aQ, ah, ac, X, aR]);
                            if (aw.swipeDown) {
                                bd = aw.swipeDown.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break
                    }
                }
            }
            if (be == t) {
                aS.trigger("pinchStatus", [bc, aK || null, ar || 0, ac || 0, X, H, aR]);
                if (aw.pinchStatus) {
                    bd = aw.pinchStatus.call(aS, bf, bc, aK || null, ar || 0, ac || 0, X, H, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && a9()) {
                    switch (aK) {
                        case c:
                            aS.trigger("pinchIn", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchIn) {
                                bd = aw.pinchIn.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break;
                        case A:
                            aS.trigger("pinchOut", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchOut) {
                                bd = aw.pinchOut.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break
                    }
                }
            }
            if (be == B) {
                if (bc === q || bc === h) {
                    clearTimeout(aX);
                    clearTimeout(ag);
                    if (Z() && !I()) {
                        O = au();
                        aX = setTimeout(f.proxy(function() {
                            O = null;
                            aS.trigger("tap", [bf.target]);
                            if (aw.tap) {
                                bd = aw.tap.call(aS, bf, bf.target)
                            }
                        }, this), aw.doubleTapThreshold)
                    } else {
                        O = null;
                        aS.trigger("tap", [bf.target]);
                        if (aw.tap) {
                            bd = aw.tap.call(aS, bf, bf.target)
                        }
                    }
                }
            } else {
                if (be == j) {
                    if (bc === q || bc === h) {
                        clearTimeout(aX);
                        O = null;
                        aS.trigger("doubletap", [bf.target]);
                        if (aw.doubleTap) {
                            bd = aw.doubleTap.call(aS, bf, bf.target)
                        }
                    }
                } else {
                    if (be == b) {
                        if (bc === q || bc === h) {
                            clearTimeout(aX);
                            O = null;
                            aS.trigger("longtap", [bf.target]);
                            if (aw.longTap) {
                                bd = aw.longTap.call(aS, bf, bf.target)
                            }
                        }
                    }
                }
            }
            return bd
        }

        function ao() {
            var bc = true;
            if (aw.threshold !== null) {
                bc = ah >= aw.threshold
            }
            return bc
        }

        function bb() {
            var bc = false;
            if (aw.cancelThreshold !== null && aQ !== null) {
                bc = (aU(aQ) - ah) >= aw.cancelThreshold
            }
            return bc
        }

        function af() {
            if (aw.pinchThreshold !== null) {
                return ar >= aw.pinchThreshold
            }
            return true
        }

        function aB() {
            var bc;
            if (aw.maxTimeThreshold) {
                if (ac >= aw.maxTimeThreshold) {
                    bc = false
                } else {
                    bc = true
                }
            } else {
                bc = true
            }
            return bc
        }

        function am(bc, bd) {
            if (aw.preventDefaultEvents === false) {
                return
            }
            if (aw.allowPageScroll === m) {
                bc.preventDefault()
            } else {
                var be = aw.allowPageScroll === s;
                switch (bd) {
                    case p:
                        if ((aw.swipeLeft && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case o:
                        if ((aw.swipeRight && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case e:
                        if ((aw.swipeUp && be) || (!be && aw.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break;
                    case x:
                        if ((aw.swipeDown && be) || (!be && aw.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break
                }
            }
        }

        function a9() {
            var bd = aP();
            var bc = Y();
            var be = af();
            return bd && bc && be
        }

        function aY() {
            return !!(aw.pinchStatus || aw.pinchIn || aw.pinchOut)
        }

        function Q() {
            return !!(a9() && aY())
        }

        function aW() {
            var bf = aB();
            var bh = ao();
            var be = aP();
            var bc = Y();
            var bd = bb();
            var bg = !bd && bc && be && bh && bf;
            return bg
        }

        function W() {
            return !!(aw.swipe || aw.swipeStatus || aw.swipeLeft || aw.swipeRight || aw.swipeUp || aw.swipeDown)
        }

        function J() {
            return !!(aW() && W())
        }

        function aP() {
            return ((X === aw.fingers || aw.fingers === i) || !a)
        }

        function Y() {
            return aR[0].end.x !== 0
        }

        function a7() {
            return !!(aw.tap)
        }

        function Z() {
            return !!(aw.doubleTap)
        }

        function aV() {
            return !!(aw.longTap)
        }

        function R() {
            if (O == null) {
                return false
            }
            var bc = au();
            return (Z() && ((bc - O) <= aw.doubleTapThreshold))
        }

        function I() {
            return R()
        }

        function ay() {
            return ((X === 1 || !a) && (isNaN(ah) || ah < aw.threshold))
        }

        function a1() {
            return ((ac > aw.longTapThreshold) && (ah < r))
        }

        function ai() {
            return !!(ay() && a7())
        }

        function aH() {
            return !!(R() && Z())
        }

        function aq() {
            return !!(a1() && aV())
        }

        function G() {
            a6 = au();
            ae = event.touches.length + 1
        }

        function S() {
            a6 = 0;
            ae = 0
        }

        function an() {
            var bc = false;
            if (a6) {
                var bd = au() - a6;
                if (bd <= aw.fingerReleaseThreshold) {
                    bc = true
                }
            }
            return bc
        }

        function aC() {
            return !!(aS.data(C + "_intouch") === true)
        }

        function ap(bc) {
            if (bc === true) {
                aS.bind(az, a4);
                aS.bind(V, M);
                if (T) {
                    aS.bind(T, L)
                }
            } else {
                aS.unbind(az, a4, false);
                aS.unbind(V, M, false);
                if (T) {
                    aS.unbind(T, L, false)
                }
            }
            aS.data(C + "_intouch", bc === true)
        }

        function aj(bd, bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            aR[bd].identifier = be;
            aR[bd].start.x = aR[bd].end.x = bc.pageX || bc.clientX;
            aR[bd].start.y = aR[bd].end.y = bc.pageY || bc.clientY;
            return aR[bd]
        }

        function aI(bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            var bd = ad(be);
            bd.end.x = bc.pageX || bc.clientX;
            bd.end.y = bc.pageY || bc.clientY;
            return bd
        }

        function ad(bd) {
            for (var bc = 0; bc < aR.length; bc++) {
                if (aR[bc].identifier == bd) {
                    return aR[bc]
                }
            }
        }

        function ak() {
            var bc = [];
            for (var bd = 0; bd <= 5; bd++) {
                bc.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return bc
        }

        function aJ(bc, bd) {
            bd = Math.max(bd, aU(bc));
            N[bc].distance = bd
        }

        function aU(bc) {
            if (N[bc]) {
                return N[bc].distance
            }
            return undefined
        }

        function ab() {
            var bc = {};
            bc[p] = ax(p);
            bc[o] = ax(o);
            bc[e] = ax(e);
            bc[x] = ax(x);
            return bc
        }

        function ax(bc) {
            return {
                direction: bc,
                distance: 0
            }
        }

        function aN() {
            return a3 - U
        }

        function av(bf, be) {
            var bd = Math.abs(bf.x - be.x);
            var bc = Math.abs(bf.y - be.y);
            return Math.round(Math.sqrt(bd * bd + bc * bc))
        }

        function a8(bc, bd) {
            var be = (bd / bc) * 1;
            return be.toFixed(2)
        }

        function at() {
            if (H < 1) {
                return A
            } else {
                return c
            }
        }

        function aT(bd, bc) {
            return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)))
        }

        function aF(bf, bd) {
            var bc = bf.x - bd.x;
            var bh = bd.y - bf.y;
            var be = Math.atan2(bh, bc);
            var bg = Math.round(be * 180 / Math.PI);
            if (bg < 0) {
                bg = 360 - Math.abs(bg)
            }
            return bg
        }

        function aM(bd, bc) {
            var be = aF(bd, bc);
            if ((be <= 45) && (be >= 0)) {
                return p
            } else {
                if ((be <= 360) && (be >= 315)) {
                    return p
                } else {
                    if ((be >= 135) && (be <= 225)) {
                        return o
                    } else {
                        if ((be > 45) && (be < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }

        function au() {
            var bc = new Date();
            return bc.getTime()
        }

        function aZ(bc) {
            bc = f(bc);
            var be = bc.offset();
            var bd = {
                left: be.left,
                right: be.left + bc.outerWidth(),
                top: be.top,
                bottom: be.top + bc.outerHeight()
            };
            return bd
        }

        function F(bc, bd) {
            return (bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom)
        }
    }
}));

//share
! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Share = t()
    }
}(function() {
    var t;
    "classList" in document.documentElement || !Object.defineProperty || "undefined" == typeof HTMLElement || Object.defineProperty(HTMLElement.prototype, "classList", {
        get: function() {
            var t, e, o;
            return o = function(t) {
                return function(o) {
                    var n, i;
                    n = e.className.split(/\s+/), i = n.indexOf(o), t(n, i, o), e.className = n.join(" ")
                }
            }, e = this, t = {
                add: o(function(t, e, o) {
                    ~
                    e || t.push(o)
                }),
                remove: o(function(t, e) {
                    ~
                    e && t.splice(e, 1)
                }),
                toggle: o(function(t, e, o) {
                    ~
                    e ? t.splice(e, 1) : t.push(o)
                }),
                contains: function(t) {
                    return !!~e.className.split(/\s+/).indexOf(t)
                },
                item: function(t) {
                    return e.className.split(/\s+/)[t] || null
                }
            }, Object.defineProperty(t, "length", {
                get: function() {
                    return e.className.split(/\s+/).length
                }
            }), t
        }
    }), String.prototype.to_rfc3986 = function() {
        var t;
        return t = encodeURIComponent(this), t.replace(/[!'()*]/g, function(t) {
            return "%" + t.charCodeAt(0).toString(16)
        })
    }, t = function() {
        function t() {}
        return t.prototype.extend = function(t, e, o) {
            var n, i;
            for (i in e) n = void 0 !== t[i], n && "object" == typeof e[i] ? this.extend(t[i], e[i], o) : (o || !n) && (t[i] = e[i])
        }, t.prototype.hide = function(t) {
            return t.style.display = "none"
        }, t.prototype.show = function(t) {
            return t.style.display = "block"
        }, t.prototype.has_class = function(t, e) {
            return t.classList.contains(e)
        }, t.prototype.add_class = function(t, e) {
            return t.classList.add(e)
        }, t.prototype.remove_class = function(t, e) {
            return t.classList.remove(e)
        }, t.prototype.is_encoded = function(t) {
            return t = t.to_rfc3986(), decodeURIComponent(t) !== t
        }, t.prototype.encode = function(t) {
            return "undefined" == typeof t || this.is_encoded(t) ? t : t.to_rfc3986()
        }, t.prototype.popup = function(t, e) {
            var o, n, i, r;
            return null == e && (e = {}), n = {
                width: 500,
                height: 350
            }, n.top = screen.height / 2 - n.height / 2, n.left = screen.width / 2 - n.width / 2, i = function() {
                var t;
                t = [];
                for (o in e) r = e[o], t.push(o + "=" + this.encode(r));
                return t
            }.call(this).join("&"), i && (i = "?" + i), window.open(t + i, "targetWindow", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=" + n.left + ",top=" + n.top + ",width=" + n.width + ",height=" + n.height)
        }, t
    }();
    var e, o = function(t, e) {
            function o() {
                this.constructor = t
            }
            for (var i in e) n.call(e, i) && (t[i] = e[i]);
            return o.prototype = e.prototype, t.prototype = new o, t.__super__ = e.prototype, t
        },
        n = {}.hasOwnProperty;
    return e = function(t) {
        function e(t, e) {
            return this.element = t, this.el = {
                head: document.getElementsByTagName("head")[0],
                body: document.getElementsByTagName("body")[0]
            }, this.config = {
                enabled_networks: 0,
                protocol: -1 === ["http", "https"].indexOf(window.location.href.split(":")[0]) ? "https://" : "//",
                url: window.location.href,
                caption: null,
                title: this.default_title(),
                image: this.default_image(),
                description: this.default_description(),
                ui: {
                    flyout: "top center",
                    button_text: "Share",
                    button_font: !0,
                    icon_font: !0
                },
                networks: {
                    google_plus: {
                        enabled: !0,
                        url: null
                    },
                    twitter: {
                        enabled: !0,
                        url: null,
                        description: null
                    },
                    facebook: {
                        enabled: !0,
                        load_sdk: !0,
                        url: null,
                        app_id: null,
                        title: null,
                        caption: null,
                        description: null,
                        image: null
                    },
                    pinterest: {
                        enabled: !0,
                        url: null,
                        image: null,
                        description: null
                    },
                    email: {
                        enabled: !0,
                        title: null,
                        description: null
                    }
                }
            }, this.setup(this.element, e), this
        }
        return o(e, t), e.prototype.setup = function(t, e) {
            var o, n, i, r, s;
            for (r = [t], this.extend(this.config, e, !0), this.set_global_configuration(), this.normalize_network_configuration(), this.config.networks.facebook.enabled && this.config.networks.facebook.load_sdk && this.inject_facebook_sdk(), n = o = 0, s = r.length; s > o; n = ++o) i = r[n], this.setup_instance(t, n)
        }, e.prototype.setup_instance = function(t, e) {
            var o, n, i, r, s, l, c, a, p;
            for (r = t, this.add_class(r, "sharer-" + e), this.inject_html(r), document.getElementById("flipbook-share-facebook").style.display = this.config.networks.facebook.display, document.getElementById("flipbook-share-twitter").style.display = this.config.networks.twitter.display, document.getElementById("flipbook-share-pinterest").style.display = this.config.networks.pinterest.display, document.getElementById("flipbook-share-email").style.display = this.config.networks.email.display, document.getElementById("flipbook-share-google_plus").style.display = this.config.networks.google_plus.display, s = r.getElementsByTagName("label")[0], n = r.getElementsByClassName("social")[0], a = r.getElementsByTagName("li"), this.add_class(n, "networks-" + this.config.enabled_networks), r.addEventListener("click", function(t) {
                    return function() {
                        return t.event_toggle(n)
                    }
                }(this)), o = this, p = [], e = i = 0, l = a.length; l > i; e = ++i) c = a[e], p.push(c.addEventListener("click", function() {
                return o.event_network(r, this), o.event_close(n)
            }));
            return p
        }, e.prototype.event_toggle = function(t) {
            return this.has_class(t, "active") ? this.event_close(t) : this.event_open(t)
        }, e.prototype.event_open = function(t) {
            return this.has_class(t, "load") && this.remove_class(t, "load"), this.add_class(t, "active")
        }, e.prototype.event_close = function(t) {
            return this.remove_class(t, "active")
        }, e.prototype.event_network = function(t, e) {
            var o;
            return o = e.getAttribute("data-network"), this.hook("before", o, t), this["network_" + o](), this.hook("after", o, t)
        }, e.prototype.open = function() {
            return this["public"]("open")
        }, e.prototype.close = function() {
            return this["public"]("close")
        }, e.prototype.toggle = function() {
            return this["public"]("toggle")
        }, e.prototype["public"] = function(t) {
            var e, o, n, i, r, s, l;
            for (s = document.querySelectorAll(this.element), l = [], n = o = 0, r = s.length; r > o; n = ++o) i = s[n], e = i.getElementsByClassName("social")[0], l.push(this["event_" + t](e));
            return l
        }, e.prototype.network_facebook = function() {
            return this.config.networks.facebook.load_sdk ? window.FB ? FB.ui({
                method: "feed",
                name: this.config.networks.facebook.title,
                link: this.config.networks.facebook.url,
                picture: this.config.networks.facebook.image,
                caption: this.config.networks.facebook.caption,
                description: this.config.networks.facebook.description
            }) : console.error("The Facebook JS SDK hasn't loaded yet.") : this.popup("https://www.facebook.com/sharer/sharer.php", {
                u: this.config.networks.facebook.url
            })
        }, e.prototype.network_twitter = function() {
            return this.popup("https://twitter.com/intent/tweet", {
                text: this.config.networks.twitter.description,
                url: this.config.networks.twitter.url
            })
        }, e.prototype.network_google_plus = function() {
            return this.popup("https://plus.google.com/share", {
                url: this.config.networks.google_plus.url
            })
        }, e.prototype.network_pinterest = function() {
            return this.popup("https://www.pinterest.com/pin/create/button", {
                url: this.config.networks.pinterest.url,
                media: this.config.networks.pinterest.image,
                description: this.config.networks.pinterest.description
            })
        }, e.prototype.network_email = function() {
            return this.popup("mailto:", {
                subject: this.config.networks.email.title,
                body: this.config.networks.email.description + '%0D%0A' + this.config.url
            })
        }, e.prototype.inject_stylesheet = function(t) {
            var e;
            return this.el.head.querySelector('link[href="' + t + '"]') ? void 0 : (e = document.createElement("link"), e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), this.el.head.appendChild(e))
        }, e.prototype.inject_html = function(t) {
            return t.innerHTML = "<div class='social load " + this.config.ui.flyout + "'><ul><li id='flipbook-share-pinterest' class='fa fa-pinterest skin-color skin-color-bg' data-network='pinterest'></li><li id='flipbook-share-twitter' class='fa fa-twitter skin-color skin-color-bg' data-network='twitter'></li><li id='flipbook-share-facebook' class='fa fa-facebook skin-color skin-color-bg' data-network='facebook'></li><li id='flipbook-share-google_plus' class='fa fa-google-plus skin-color skin-color-bg' data-network='google_plus'></li><li id='flipbook-share-email' class='fa fa-send-o skin-color skin-color-bg' data-network='email'></li></ul></div>"
        }, e.prototype.inject_facebook_sdk = function() {
            var t, e;
            return window.FB || !this.config.networks.facebook.app_id || this.el.body.querySelector("#fb-root") ? void 0 : (e = document.createElement("script"), e.text = "window.fbAsyncInit=function(){FB.init({appId:'" + this.config.networks.facebook.app_id + "',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='" + this.config.protocol + "connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk')", t = document.createElement("div"), t.id = "fb-root", this.el.body.appendChild(t), this.el.body.appendChild(e))
        }, e.prototype.hook = function(t, e, o) {
            var n, i;
            n = this.config.networks[e][t], "function" == typeof n && (i = n.call(this.config.networks[e], o), void 0 !== i && (i = this.normalize_filter_config_updates(i), this.extend(this.config.networks[e], i, !0), this.normalize_network_configuration()))
        }, e.prototype.default_title = function() {
            var t;
            return (t = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) ? t.getAttribute("content") : (t = document.querySelector("title")) ? t.innerText : void 0
        }, e.prototype.default_image = function() {
            var t;
            return (t = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) ? t.getAttribute("content") : void 0
        }, e.prototype.default_description = function() {
            var t;
            return (t = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) ? t.getAttribute("content") : ""
        }, e.prototype.set_global_configuration = function() {
            var t, e, o, n, i, r;
            i = this.config.networks, r = [];
            for (e in i) {
                n = i[e];
                for (o in n) null == this.config.networks[e][o] && (this.config.networks[e][o] = this.config[o]);
                this.config.networks[e].enabled ? (t = "block", this.config.enabled_networks += 1) : t = "none", r.push(this.config.networks[e].display = t)
            }
            return r
        }, e.prototype.normalize_network_configuration = function() {
            return this.config.networks.facebook.app_id || (this.config.networks.facebook.load_sdk = !1), this.is_encoded(this.config.networks.twitter.description) || (this.config.networks.twitter.description = encodeURIComponent(this.config.networks.twitter.description)), "number" == typeof this.config.networks.facebook.app_id ? this.config.networks.facebook.app_id = this.config.networks.facebook.app_id.toString() : void 0
        }, e.prototype.normalize_filter_config_updates = function(t) {
            return this.config.networks.facebook.app_id !== t.app_id && (console.warn("You are unable to change the Facebook app_id after the button has been initialized. Please update your Facebook filters accordingly."), delete t.app_id), this.config.networks.facebook.load_sdk !== t.load_sdk && (console.warn("You are unable to change the Facebook load_sdk option after the button has been initialized. Please update your Facebook filters accordingly."), delete t.app_id), t
        }, e
    }(t)
});