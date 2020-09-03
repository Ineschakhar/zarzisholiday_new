 window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "https:\/\/zarzis-holiday.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.3.3" } };
 ! function(e, a, t) {
     var r, n, o, i, p = a.createElement("canvas"),
         s = p.getContext && p.getContext("2d");

     function c(e, t) {
         var a = String.fromCharCode;
         s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, e), 0, 0);
         var r = p.toDataURL();
         return s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, t), 0, 0), r === p.toDataURL()
     }

     function l(e) {
         if (!s || !s.fillText) return !1;
         switch (s.textBaseline = "top", s.font = "600 32px Arial", e) {
             case "flag":
                 return !c([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) && (!c([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !c([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]));
             case "emoji":
                 return !c([55357, 56424, 55356, 57342, 8205, 55358, 56605, 8205, 55357, 56424, 55356, 57340], [55357, 56424, 55356, 57342, 8203, 55358, 56605, 8203, 55357, 56424, 55356, 57340])
         }
         return !1
     }

     function d(e) {
         var t = a.createElement("script");
         t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t)
     }
     for (i = Array("flag", "emoji"), t.supports = { everything: !0, everythingExceptFlag: !0 }, o = 0; o < i.length; o++) t.supports[i[o]] = l(i[o]), t.supports.everything = t.supports.everything && t.supports[i[o]], "flag" !== i[o] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[i[o]]);
     t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function() { t.DOMReady = !0 }, t.supports.everything || (n = function() { t.readyCallback() }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function() { "complete" === a.readyState && t.readyCallback() })), (r = t.source || {}).concatemoji ? d(r.concatemoji) : r.wpemoji && r.twemoji && (d(r.twemoji), d(r.wpemoji)))
 }(window, document, window._wpemojiSettings);



 /* <![CDATA[ */
 var envira_lazy_load = "true";
 var envira_lazy_load_initial = "false";
 var envira_lazy_load_delay = "500";
 var envira_lazy_load = "true";
 var envira_lazy_load_initial = "false";
 var envira_lazy_load_delay = "500";
 var envira_lazy_load = "true";
 var envira_lazy_load_initial = "false";
 var envira_lazy_load_delay = "500";
 /* ]]> */


 function setREVStartSize(t) {
     try {
         var h, e = document.getElementById(t.c).parentNode.offsetWidth;
         if (e = 0 === e || isNaN(e) ? window.innerWidth : e, t.tabw = void 0 === t.tabw ? 0 : parseInt(t.tabw), t.thumbw = void 0 === t.thumbw ? 0 : parseInt(t.thumbw), t.tabh = void 0 === t.tabh ? 0 : parseInt(t.tabh), t.thumbh = void 0 === t.thumbh ? 0 : parseInt(t.thumbh), t.tabhide = void 0 === t.tabhide ? 0 : parseInt(t.tabhide), t.thumbhide = void 0 === t.thumbhide ? 0 : parseInt(t.thumbhide), t.mh = void 0 === t.mh || "" == t.mh || "auto" === t.mh ? 0 : parseInt(t.mh, 0), "fullscreen" === t.layout || "fullscreen" === t.l) h = Math.max(t.mh, window.innerHeight);
         else {
             for (var i in t.gw = Array.isArray(t.gw) ? t.gw : [t.gw], t.rl) void 0 !== t.gw[i] && 0 !== t.gw[i] || (t.gw[i] = t.gw[i - 1]);
             for (var i in t.gh = void 0 === t.el || "" === t.el || Array.isArray(t.el) && 0 == t.el.length ? t.gh : t.el, t.gh = Array.isArray(t.gh) ? t.gh : [t.gh], t.rl) void 0 !== t.gh[i] && 0 !== t.gh[i] || (t.gh[i] = t.gh[i - 1]);
             var r, a = new Array(t.rl.length),
                 n = 0;
             for (var i in t.tabw = t.tabhide >= e ? 0 : t.tabw, t.thumbw = t.thumbhide >= e ? 0 : t.thumbw, t.tabh = t.tabhide >= e ? 0 : t.tabh, t.thumbh = t.thumbhide >= e ? 0 : t.thumbh, t.rl) a[i] = t.rl[i] < window.innerWidth ? 0 : t.rl[i];
             for (var i in r = a[0], a) r > a[i] && 0 < a[i] && (r = a[i], n = i);
             var d = e > t.gw[n] + t.tabw + t.thumbw ? 1 : (e - (t.tabw + t.thumbw)) / t.gw[n];
             h = t.gh[n] * d + (t.tabh + t.thumbh)
         }
         void 0 === window.rs_init_css && (window.rs_init_css = document.head.appendChild(document.createElement("style"))), document.getElementById(t.c).height = h, window.rs_init_css.innerHTML += "#" + t.c + "_wrapper { height: " + h + "px }"
     } catch (t) { console.log("Failure at Presize of Slider:" + t) }


     jQuery(document).ready(function() {

         //START
         jQuery(function($) {

             //OPEN sidebar content ( navigation 4 )
             $('.nd_options_open_navigation_4_sidebar_content,.nd_options_open_navigation_3_sidebar_content,.nd_options_open_navigation_4_sidebar_content,.nd_options_open_navigation_5_sidebar_content').on("click", function(event) {
                 $('.nd_options_navigation_4_sidebar_content,.nd_options_navigation_3_sidebar_content,.nd_options_navigation_4_sidebar_content,.nd_options_navigation_5_sidebar_content').css({
                     'right': '0px',
                 });
             });
             //CLOSE	sidebar content ( navigation 4 )
             $('.nd_options_close_navigation_4_sidebar_content,.nd_options_close_navigation_3_sidebar_content,.nd_options_close_navigation_4_sidebar_content,.nd_options_close_navigation_5_sidebar_content').on("click", function(event) {
                 $('.nd_options_navigation_4_sidebar_content,.nd_options_navigation_3_sidebar_content,.nd_options_navigation_4_sidebar_content,.nd_options_navigation_5_sidebar_content').css({
                     'right': '-300px'
                 });
             });
             ///////////


         });
         //END

     });

     //]]>

     //<![CDATA[

     jQuery(document).ready(function() {

         //typed
         jQuery(".nd_options_typed_17").typed({
             stringsElement: jQuery(".nd_options_typed_strings_17"),
             typeSpeed: 100,
             backDelay: 500,
             loop: true,
             contentType: "html",
             loopCount: false
         });

     });

     //]]&gt; 
     //<![CDATA[

     jQuery(document).ready(function() {

         //typed
         jQuery(".nd_options_typed_74").typed({
             stringsElement: jQuery(".nd_options_typed_strings_74"),
             typeSpeed: 100,
             backDelay: 500,
             loop: true,
             contentType: "html",
             loopCount: false
         });

     });

     //]]&gt;

     setREVStartSize({ c: 'rev_slider_2_1', rl: [1240, 1024, 778, 480], el: [800], gw: [1240], gh: [800], layout: 'fullwidth', mh: "0" });
     var revapi2,
         tpj;
     jQuery(function() {
         tpj = jQuery;
         if (tpj("#rev_slider_2_1").revolution == undefined) {
             revslider_showDoubleJqueryError("#rev_slider_2_1");
         } else {
             revapi2 = tpj("#rev_slider_2_1").show().revolution({
                 jsFileLocation: "//zarzis-holiday.com/wp-content/plugins/revslider/public/assets/js/",
                 sliderLayout: "fullwidth",
                 visibilityLevels: "1240,1024,778,480",
                 gridwidth: 1240,
                 gridheight: 800,
                 minHeight: "",
                 spinner: "spinner2",
                 editorheight: "800,768,960,200",
                 responsiveLevels: "1240,1024,778,480",
                 disableProgressBar: "on",
                 navigation: {
                     keyboardNavigation: true,
                     mouseScrollNavigation: false,
                     onHoverStop: false,
                     touch: {
                         touchenabled: true
                     },
                     arrows: {
                         enable: true,
                         style: "uranus",
                         hide_onmobile: true,
                         hide_under: 480,
                         left: {

                         },
                         right: {

                         }
                     }
                 },
                 parallax: {
                     levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                     type: "mouse"
                 },
                 fallbacks: {
                     allowHTML5AutoPlayOnAndroid: true
                 },
             });
         }

     });
     var htmlDivCss = unescape("%23nd_options_typewriter_42%20strong%2C%0A%23nd_options_typewriter_43%20strong%7B%0A%20%20%20%20font-weight%3Alighter%20%21important%3B%20%0A%09letter-spacing%3A3px%3B%20%20%0A%20%20%20%20%0A%7D%0A%23nd_options_typewriter_42%20p%2C%0A%23nd_options_typewriter_43%20p%7B%0A%20%20%20font-weight%3Alighter%20%21important%3B%20%0A%20%20%20letter-spacing%3A3px%3B%20%0A%7D%0A%0A%0A%23nd_options_typewriter_42%20span.nd_options_padding_botttom_5%2C%0A%23nd_options_typewriter_43%20span.nd_options_padding_botttom_5%7B%0A%09border-bottom-width%3A1px%20%21important%3B%0A%7D");
     var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
     if (htmlDiv) {
         htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
     } else {
         var htmlDiv = document.createElement('div');
         htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
         document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
     }
     var htmlDivCss = ' #rev_slider_2_1_wrapper rs-loader.spinner2{ background-color: #1c1c1c !important; } '
     var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
     if (htmlDiv) {
         htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
     } else {
         var htmlDiv = document.createElement('div');
         htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
         document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
     }
     var htmlDivCss = unescape("%23rev_slider_2_1_wrapper%20.uranus.tparrows%20%7B%0A%20%20width%3A50px%3B%0A%20%20height%3A50px%3B%0A%20%20background%3Argba%28255%2C255%2C255%2C0%29%3B%0A%20%7D%0A%20%23rev_slider_2_1_wrapper%20.uranus.tparrows%3Abefore%20%7B%0A%20width%3A50px%3B%0A%20height%3A50px%3B%0A%20line-height%3A50px%3B%0A%20font-size%3A40px%3B%0A%20transition%3Aall%200.3s%3B%0A-webkit-transition%3Aall%200.3s%3B%0A%20%7D%0A%20%0A%20%20%23rev_slider_2_1_wrapper%20.uranus.tparrows%3Ahover%3Abefore%20%7B%0A%20%20%20%20opacity%3A0.75%3B%0A%20%20%7D%0A");
     var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
     if (htmlDiv) {
         htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
     } else {
         var htmlDiv = document.createElement('div');
         htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
         document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
     }
     var htmlDivCss = unescape("%0A%0A");
     var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
     if (htmlDiv) {
         htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
     } else {
         var htmlDiv = document.createElement('div');
         htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
         document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
     }
     //<![CDATA[

     jQuery(document).ready(function() {

         //START masonry
         jQuery(function($) {

             //Masonry
             var $nd_options_masonry_content = $(".nd_options_masonry_content").imagesLoaded(function() {
                 // init Masonry after all images have loaded
                 $nd_options_masonry_content.masonry({
                     itemSelector: ".nd_options_masonry_item"
                 });
             });


         });
         //END masonry

     });

     //]]&gt;

     //<![CDATA[
     jQuery(document).ready(function() {

         jQuery(function($) {

             $("#nd_booking_archive_form_date_range_from").datepicker({
                 defaultDate: "+1w",
                 minDate: 0,
                 altField: "#nd_booking_date_month_from",
                 altFormat: "M",
                 firstDay: 0,
                 dateFormat: "mm/dd/yy",
                 monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                 monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                 dayNamesMin: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
                 nextText: "NEXT",
                 prevText: "PREV",
                 changeMonth: false,
                 numberOfMonths: 1,
                 onClose: function() {
                     var minDate = $(this).datepicker("getDate");
                     var newMin = new Date(minDate.setDate(minDate.getDate() + 1));
                     $("#nd_booking_archive_form_date_range_to").datepicker("option", "minDate", newMin);

                     var nd_booking_input_date_from = $("#nd_booking_archive_form_date_range_from").val();
                     var nd_booking_date_number_from = nd_booking_input_date_from.substring(3, 5);
                     $("#nd_booking_date_number_from").val(nd_booking_date_number_from);
                     var nd_booking_input_date_to = $("#nd_booking_archive_form_date_range_to").val();
                     var nd_booking_date_number_to = nd_booking_input_date_to.substring(3, 5);
                     $("#nd_booking_date_number_to").val(nd_booking_date_number_to);

                     $("#nd_booking_date_number_from_front").text(nd_booking_date_number_from);
                     var nd_booking_date_month_from = $("#nd_booking_date_month_from").val();
                     $("#nd_booking_date_month_from_front").text(nd_booking_date_month_from);

                     $("#nd_booking_date_number_to_front").text(nd_booking_date_number_to);
                     var nd_booking_date_month_to = $("#nd_booking_date_month_to").val();
                     $("#nd_booking_date_month_to_front").text(nd_booking_date_month_to);

                 }
             });


             $("#nd_booking_archive_form_date_range_to").datepicker({
                 defaultDate: "+1w",
                 altField: "#nd_booking_date_month_to",
                 altFormat: "M",
                 minDate: "+1d",
                 monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                 monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                 dayNamesMin: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
                 nextText: "NEXT",
                 prevText: "PREV",
                 changeMonth: false,
                 firstDay: 0,
                 dateFormat: "mm/dd/yy",
                 numberOfMonths: 1,
                 onClose: function() {

                     var nd_booking_input_date_from = $("#nd_booking_archive_form_date_range_from").val();
                     var nd_booking_date_number_from = nd_booking_input_date_from.substring(3, 5);
                     $("#nd_booking_date_number_from").val(nd_booking_date_number_from);
                     var nd_booking_input_date_to = $("#nd_booking_archive_form_date_range_to").val();
                     var nd_booking_date_number_to = nd_booking_input_date_to.substring(3, 5);
                     $("#nd_booking_date_number_to").val(nd_booking_date_number_to);

                     $("#nd_booking_date_number_from_front").text(nd_booking_date_number_from);
                     var nd_booking_date_month_from = $("#nd_booking_date_month_from").val();
                     $("#nd_booking_date_month_from_front").text(nd_booking_date_month_from);

                     $("#nd_booking_date_number_to_front").text(nd_booking_date_number_to);
                     var nd_booking_date_month_to = $("#nd_booking_date_month_to").val();
                     $("#nd_booking_date_month_to_front").text(nd_booking_date_month_to);

                 }
             });

             $("#nd_booking_archive_form_date_range_from").datepicker("setDate", "+0");
             $("#nd_booking_archive_form_date_range_to").datepicker("setDate", "+1");

             function nd_booking_get_nights() {
                 var nd_booking_archive_form_date_range_from = $("#nd_booking_archive_form_date_range_from").val();
                 var nd_booking_archive_form_date_range_to = $("#nd_booking_archive_form_date_range_to").val();
                 var nd_booking_start = new Date(nd_booking_archive_form_date_range_from);
                 var nd_booking_end = new Date(nd_booking_archive_form_date_range_to);
                 var nd_booking_nights_number = (nd_booking_end - nd_booking_start) / 1000 / 60 / 60 / 24;
                 $(".nd_booking_nights_number").text(nd_booking_nights_number);
             }

             $("#nd_booking_open_calendar_from").click(function() {
                 $("#nd_booking_archive_form_date_range_from").datepicker("show");
             });
             $("#nd_booking_open_calendar_to").click(function() {
                 $("#nd_booking_archive_form_date_range_to").datepicker("show");
             });

         });

     });
     //]]&gt;


     //<![CDATA[
     jQuery(document).ready(function() {

         jQuery(function($) {

             $(".nd_booking_guests_increase").click(function() {
                 var value = $(".nd_booking_guests_number").text();
                 value++;
                 $(".nd_booking_guests_number").text(value);
                 $("#nd_booking_archive_form_guests").val(value);
             });

             $(".nd_booking_guests_decrease").click(function() {
                 var value = $(".nd_booking_guests_number").text();

                 if (value > 1) {
                     value--;
                     $(".nd_booking_guests_number").text(value);
                     $("#nd_booking_archive_form_guests").val(value);
                 }

             });

         });

     });
     //]]&gt; 
     //<![CDATA[

     jQuery(document).ready(function() {

         //START masonry
         jQuery(function($) {

             //Masonry
             var $nd_booking_masonry_content = $(".nd_booking_masonry_content").imagesLoaded(function() {
                 // init Masonry after all images have loaded
                 $nd_booking_masonry_content.masonry({
                     itemSelector: ".nd_booking_masonry_item"
                 });
             });

         });
         //END masonry

     });

     //]]&gt; 
     //<![CDATA[

     jQuery(document).ready(function() {

         //START counter
         jQuery(function($) {

             // start all the timers
             $(".nd_options_counter").each(count);

             function count(options) {
                 var $this = $(this);
                 options = $.extend({}, options || {}, $this.data("countToOptions") || {});
                 $this.countTo(options);
             }

         });
         //END counter

     });

     //]]&gt; 
     //<![CDATA[

     jQuery(document).ready(function() {

         //START counter
         jQuery(function($) {

             // start all the timers
             $(".nd_options_counter").each(count);

             function count(options) {
                 var $this = $(this);
                 options = $.extend({}, options || {}, $this.data("countToOptions") || {});
                 $this.countTo(options);
             }

         });
         //END counter

     });

     //]]&gt; 
     //<![CDATA[

     jQuery(document).ready(function() {

         //START counter
         jQuery(function($) {

             // start all the timers
             $(".nd_options_counter").each(count);

             function count(options) {
                 var $this = $(this);
                 options = $.extend({}, options || {}, $this.data("countToOptions") || {});
                 $this.countTo(options);
             }

         });
         //END counter

     });

     //]]&gt; 
     //<![CDATA[

     jQuery(document).ready(function() {

         //START counter
         jQuery(function($) {

             // start all the timers
             $(".nd_options_counter").each(count);

             function count(options) {
                 var $this = $(this);
                 options = $.extend({}, options || {}, $this.data("countToOptions") || {});
                 $this.countTo(options);
             }

         });
         //END counter

     });

     //]]&gt; 
     //<![CDATA[

     jQuery(document).ready(function() {

         //START masonry
         jQuery(function($) {

             //Masonry
             var $nd_options_masonry_content = $(".nd_options_masonry_content").imagesLoaded(function() {
                 // init Masonry after all images have loaded
                 $nd_options_masonry_content.masonry({
                     itemSelector: ".nd_options_masonry_item"
                 });
             });


         });
         //END masonry

     });

     //]]&gt; 
     if (typeof revslider_showDoubleJqueryError === "undefined") {
         function revslider_showDoubleJqueryError(sliderID) {
             var err = "<div class='rs_error_message_box'>";
             err += "<div class='rs_error_message_oops'>Oops...</div>";
             err += "<div class='rs_error_message_content'>";
             err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
             err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
             err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
             err += "</div>";
             err += "</div>";
             jQuery(sliderID).show().html(err);
         }
         var ns = (navigator.appName.indexOf("Netscape") != -1);
         var d = document;
         var px = document.layers ? "" : "px";

         function JSFX_FloatDiv(id, sx, sy) {
             var el = d.getElementById ? d.getElementById(id) : d.all ? d.all[id] : d.layers[id];
             window[id + "_obj"] = el;
             if (d.layers) el.style = el;
             el.cx = el.sx = sx;
             el.cy = el.sy = sy;
             el.sP = function(x, y) {
                 this.style.left = x + px;
                 this.style.top = y + px;
             };
             el.flt = function() {
                 var pX, pY;
                 pX = (this.sx >= 0) ? 0 : ns ? innerWidth :
                     document.documentElement && document.documentElement.clientWidth ?
                     document.documentElement.clientWidth : document.body.clientWidth;
                 pY = ns ? pageYOffset : document.documentElement && document.documentElement.scrollTop ?
                     document.documentElement.scrollTop : document.body.scrollTop;
                 if (this.sy < 0)
                     pY += ns ? innerHeight : document.documentElement && document.documentElement.clientHeight ?
                     document.documentElement.clientHeight : document.body.clientHeight;
                 this.cx += (pX + this.sx - this.cx) / 8;
                 this.cy += (pY + this.sy - this.cy) / 8;
                 this.sP(this.cx, this.cy);
                 setTimeout(this.id + "_obj.flt()", 40);
             }
             return el;
         }
         jQuery(document).ready(function() {
             JSFX_FloatDiv("divBottomRight", -170, -60).flt();
         });
         var envira_galleries = [],
             envira_gallery_images = [],
             envira_isotopes = [],
             envira_isotopes_config = [];
         jQuery(document).ready(function($) {
             var envira_container_5130 = '';

             function envira_album_lazy_load_image($id) { responsivelyLazy.run('#envira-gallery-' + $id); }
             envira_isotopes_config['5130'] = { itemSelector: '.envira-gallery-item', masonry: { columnWidth: '.envira-gallery-item' } };
             envira_isotopes['5130'] = envira_container_5130 = $('#envira-gallery-5130').enviratope(envira_isotopes_config['5130']);
             $('#envira-gallery-5130').on('layoutComplete', function(event, laidOutItems) {
                 envira_album_lazy_load_image(5130);
                 $(window).scroll(function(event) { envira_album_lazy_load_image(5130); });
             });
             $(document).on("envira_pagination_ajax_load_completed", function() {
                 $('#envira-gallery-5130').on('layoutComplete', function(event, laidOutItems) {
                     envira_album_lazy_load_image(5130);
                     $(window).scroll(function(event) { envira_album_lazy_load_image(5130); });
                 });
             });
             envira_isotopes['5130'].enviraImagesLoaded().done(function() { envira_isotopes['5130'].enviratope('layout'); }).progress(function() { envira_isotopes['5130'].enviratope('layout'); });
             envira_container_5130 = $('#envira-gallery-5130').enviraImagesLoaded(function() { $('.envira-gallery-item img').fadeTo('slow', 1); });
             envira_gallery_options = {
                 padding: 15,
                 cyclic: true,
                 titlePosition: 'float',
                 margin: 60,
                 arrows: 1,
                 aspectRatio: 1,
                 loop: 1,
                 mouseWheel: 1,
                 preload: 1,
                 openEffect: 'fade',
                 closeEffect: 'fade',
                 nextEffect: 'fade',
                 prevEffect: 'fade',
                 tpl: { wrap: '<div class="envirabox-wrap" tabIndex="-1"><div class="envirabox-skin envirabox-theme-base"><div class="envirabox-outer"><div class="envirabox-inner"><div class="envirabox-position-overlay envira-gallery-top-left"></div><div class="envirabox-position-overlay envira-gallery-top-right"></div><div class="envirabox-position-overlay envira-gallery-bottom-left"></div><div class="envirabox-position-overlay envira-gallery-bottom-right"></div></div></div></div></div>', image: '<img class="envirabox-image" src="{href}" alt="" data-envira-title="" data-envira-caption="" data-envira-index="" data-envira-data="" />', iframe: '<iframe id="envirabox-frame{rnd}" name="envirabox-frame{rnd}" class="envirabox-iframe" frameborder="0" vspace="0" hspace="0" allowtransparency="true" wekitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', error: '<p class="envirabox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="envirabox-item envirabox-close" href="#"></a>', next: '<a title="Next" class="envirabox-nav envirabox-next envirabox-arrows-inside" href="#"><span></span></a>', prev: '<a title="Previous" class="envirabox-nav envirabox-prev envirabox-arrows-inside" href="#"><span></span></a>' },
                 helpers: { title: { type: 'float' }, },
                 beforeLoad: function() { this.title = $(this.element).attr('data-envira-caption'); },
                 afterLoad: function() { $('envirabox-overlay-fixed').on({ 'touchmove': function(e) { e.preventDefault(); } }); },
                 beforeShow: function() {
                     $(window).on({ 'resize.envirabox': function() { $.envirabox.update(); } });
                     if (typeof this.element === 'undefined') { var gallery_id = this.group[this.index].gallery_id; var gallery_item_id = this.group[this.index].id; var alt = this.group[this.index].alt; var title = this.group[this.index].title; var caption = this.group[this.index].caption; var index = this.index; } else { var gallery_id = this.element.find('img').data('envira-gallery-id'); var gallery_item_id = this.element.find('img').data('envira-item-id'); var alt = this.element.find('img').attr('alt'); var title = this.element.find('img').parent().attr('title'); var caption = this.element.find('img').parent().data('envira-caption'); var retina_image = this.element.find('img').parent().data('envira-retina'); var index = this.element.find('img').data('envira-index'); }
                     this.inner.find('img').attr('alt', alt).attr('data-envira-gallery-id', gallery_id).attr('data-envira-item-id', gallery_item_id).attr('data-envira-title', title).attr('data-envira-caption', caption).attr('data-envira-index', index);
                     if (typeof retina_image !== 'undefined' && retina_image !== '') { this.inner.find('img').attr('srcset', retina_image + ' 2x'); }
                 },
                 onStart: function() { $('#envirabox-wrap, #envirabox-wrap #envirabox-left, #envirabox-wrap #envirabox-right').swipe({ excludedElements: "label, button, input, select, textarea, .noSwipe", swipe: function(event, direction, distance, duration, fingerCount, fingerData) { if (direction === 'left') { $.envirabox.next(direction); } else if (direction === 'right') { $.envirabox.prev(direction); } else if (direction === 'up') { $.envirabox.close(); } } }); },
                 beforeClose: function() {},
                 afterClose: function() { $(window).off('resize.envirabox'); },
                 onUpdate: function() {},
                 onCancel: function() {},
                 onPlayStart: function() {},
                 onPlayEnd: function() {}
             };
             envira_galleries['5130'] = $('.envira-gallery-5130').envirabox(envira_gallery_options);
             var envira_container_5143 = '';

             function envira_album_lazy_load_image($id) { responsivelyLazy.run('#envira-gallery-' + $id); }
             envira_isotopes_config['5143'] = { itemSelector: '.envira-gallery-item', masonry: { columnWidth: '.envira-gallery-item' } };
             envira_isotopes['5143'] = envira_container_5143 = $('#envira-gallery-5143').enviratope(envira_isotopes_config['5143']);
             $('#envira-gallery-5143').on('layoutComplete', function(event, laidOutItems) {
                 envira_album_lazy_load_image(5143);
                 $(window).scroll(function(event) { envira_album_lazy_load_image(5143); });
             });
             $(document).on("envira_pagination_ajax_load_completed", function() {
                 $('#envira-gallery-5143').on('layoutComplete', function(event, laidOutItems) {
                     envira_album_lazy_load_image(5143);
                     $(window).scroll(function(event) { envira_album_lazy_load_image(5143); });
                 });
             });
             envira_isotopes['5143'].enviraImagesLoaded().done(function() { envira_isotopes['5143'].enviratope('layout'); }).progress(function() { envira_isotopes['5143'].enviratope('layout'); });
             envira_container_5143 = $('#envira-gallery-5143').enviraImagesLoaded(function() { $('.envira-gallery-item img').fadeTo('slow', 1); });
             envira_gallery_options = {
                 padding: 15,
                 cyclic: true,
                 titlePosition: 'float',
                 margin: 60,
                 arrows: 1,
                 aspectRatio: 1,
                 loop: 1,
                 mouseWheel: 1,
                 preload: 1,
                 openEffect: 'fade',
                 closeEffect: 'fade',
                 nextEffect: 'fade',
                 prevEffect: 'fade',
                 tpl: { wrap: '<div class="envirabox-wrap" tabIndex="-1"><div class="envirabox-skin envirabox-theme-base"><div class="envirabox-outer"><div class="envirabox-inner"><div class="envirabox-position-overlay envira-gallery-top-left"></div><div class="envirabox-position-overlay envira-gallery-top-right"></div><div class="envirabox-position-overlay envira-gallery-bottom-left"></div><div class="envirabox-position-overlay envira-gallery-bottom-right"></div></div></div></div></div>', image: '<img class="envirabox-image" src="{href}" alt="" data-envira-title="" data-envira-caption="" data-envira-index="" data-envira-data="" />', iframe: '<iframe id="envirabox-frame{rnd}" name="envirabox-frame{rnd}" class="envirabox-iframe" frameborder="0" vspace="0" hspace="0" allowtransparency="true" wekitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', error: '<p class="envirabox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="envirabox-item envirabox-close" href="#"></a>', next: '<a title="Next" class="envirabox-nav envirabox-next envirabox-arrows-inside" href="#"><span></span></a>', prev: '<a title="Previous" class="envirabox-nav envirabox-prev envirabox-arrows-inside" href="#"><span></span></a>' },
                 helpers: { title: { type: 'float' }, },
                 beforeLoad: function() { this.title = $(this.element).attr('data-envira-caption'); },
                 afterLoad: function() { $('envirabox-overlay-fixed').on({ 'touchmove': function(e) { e.preventDefault(); } }); },
                 beforeShow: function() {
                     $(window).on({ 'resize.envirabox': function() { $.envirabox.update(); } });
                     if (typeof this.element === 'undefined') { var gallery_id = this.group[this.index].gallery_id; var gallery_item_id = this.group[this.index].id; var alt = this.group[this.index].alt; var title = this.group[this.index].title; var caption = this.group[this.index].caption; var index = this.index; } else { var gallery_id = this.element.find('img').data('envira-gallery-id'); var gallery_item_id = this.element.find('img').data('envira-item-id'); var alt = this.element.find('img').attr('alt'); var title = this.element.find('img').parent().attr('title'); var caption = this.element.find('img').parent().data('envira-caption'); var retina_image = this.element.find('img').parent().data('envira-retina'); var index = this.element.find('img').data('envira-index'); }
                     this.inner.find('img').attr('alt', alt).attr('data-envira-gallery-id', gallery_id).attr('data-envira-item-id', gallery_item_id).attr('data-envira-title', title).attr('data-envira-caption', caption).attr('data-envira-index', index);
                     if (typeof retina_image !== 'undefined' && retina_image !== '') { this.inner.find('img').attr('srcset', retina_image + ' 2x'); }
                 },
                 onStart: function() { $('#envirabox-wrap, #envirabox-wrap #envirabox-left, #envirabox-wrap #envirabox-right').swipe({ excludedElements: "label, button, input, select, textarea, .noSwipe", swipe: function(event, direction, distance, duration, fingerCount, fingerData) { if (direction === 'left') { $.envirabox.next(direction); } else if (direction === 'right') { $.envirabox.prev(direction); } else if (direction === 'up') { $.envirabox.close(); } } }); },
                 beforeClose: function() {},
                 afterClose: function() { $(window).off('resize.envirabox'); },
                 onUpdate: function() {},
                 onCancel: function() {},
                 onPlayStart: function() {},
                 onPlayEnd: function() {}
             };
             envira_galleries['5143'] = $('.envira-gallery-5143').envirabox(envira_gallery_options);
             var envira_container_5109 = '';

             function envira_album_lazy_load_image($id) { responsivelyLazy.run('#envira-gallery-' + $id); }
             $('#envira-gallery-5109').enviraJustifiedGallery({ rowHeight: 150, maxRowHeight: -1, waitThumbnailsLoad: true, selector: '> div > div', lastRow: 'nojustify', border: 0, margins: 3, });
             $('#envira-gallery-5109').justifiedGallery().on('jg.complete', function(e) {
                 envira_album_lazy_load_image(5109);
                 $(window).scroll(function(event) { envira_album_lazy_load_image(5109); });
             });
             $(document).on("envira_pagination_ajax_load_completed", function() {
                 $('#envira-gallery-5109').justifiedGallery().on('jg.complete', function(e) {
                     envira_album_lazy_load_image(5109);
                     $(window).scroll(function(event) { envira_album_lazy_load_image(5109); });
                 });
             });
             $('#envira-gallery-5109').css('opacity', '1');
             envira_container_5109 = $('#envira-gallery-5109').enviraImagesLoaded(function() { $('.envira-gallery-item img').fadeTo('slow', 1); });
             envira_gallery_options = {
                 padding: 15,
                 cyclic: true,
                 titlePosition: 'float',
                 margin: 60,
                 arrows: 1,
                 aspectRatio: 1,
                 loop: 1,
                 mouseWheel: 1,
                 preload: 1,
                 openEffect: 'fade',
                 closeEffect: 'fade',
                 nextEffect: 'fade',
                 prevEffect: 'fade',
                 tpl: { wrap: '<div class="envirabox-wrap" tabIndex="-1"><div class="envirabox-skin envirabox-theme-base"><div class="envirabox-outer"><div class="envirabox-inner"><div class="envirabox-position-overlay envira-gallery-top-left"></div><div class="envirabox-position-overlay envira-gallery-top-right"></div><div class="envirabox-position-overlay envira-gallery-bottom-left"></div><div class="envirabox-position-overlay envira-gallery-bottom-right"></div></div></div></div></div>', image: '<img class="envirabox-image" src="{href}" alt="" data-envira-title="" data-envira-caption="" data-envira-index="" data-envira-data="" />', iframe: '<iframe id="envirabox-frame{rnd}" name="envirabox-frame{rnd}" class="envirabox-iframe" frameborder="0" vspace="0" hspace="0" allowtransparency="true" wekitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', error: '<p class="envirabox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="envirabox-item envirabox-close" href="#"></a>', next: '<a title="Next" class="envirabox-nav envirabox-next envirabox-arrows-inside" href="#"><span></span></a>', prev: '<a title="Previous" class="envirabox-nav envirabox-prev envirabox-arrows-inside" href="#"><span></span></a>' },
                 helpers: { title: { type: 'float' }, },
                 beforeLoad: function() { this.title = $(this.element).attr('data-envira-caption'); },
                 afterLoad: function() { $('envirabox-overlay-fixed').on({ 'touchmove': function(e) { e.preventDefault(); } }); },
                 beforeShow: function() {
                     $(window).on({ 'resize.envirabox': function() { $.envirabox.update(); } });
                     if (typeof this.element === 'undefined') { var gallery_id = this.group[this.index].gallery_id; var gallery_item_id = this.group[this.index].id; var alt = this.group[this.index].alt; var title = this.group[this.index].title; var caption = this.group[this.index].caption; var index = this.index; } else { var gallery_id = this.element.find('img').data('envira-gallery-id'); var gallery_item_id = this.element.find('img').data('envira-item-id'); var alt = this.element.find('img').attr('alt'); var title = this.element.find('img').parent().attr('title'); var caption = this.element.find('img').parent().data('envira-caption'); var retina_image = this.element.find('img').parent().data('envira-retina'); var index = this.element.find('img').data('envira-index'); }
                     this.inner.find('img').attr('alt', alt).attr('data-envira-gallery-id', gallery_id).attr('data-envira-item-id', gallery_item_id).attr('data-envira-title', title).attr('data-envira-caption', caption).attr('data-envira-index', index);
                     if (typeof retina_image !== 'undefined' && retina_image !== '') { this.inner.find('img').attr('srcset', retina_image + ' 2x'); }
                 },
                 onStart: function() { $('#envirabox-wrap, #envirabox-wrap #envirabox-left, #envirabox-wrap #envirabox-right').swipe({ excludedElements: "label, button, input, select, textarea, .noSwipe", swipe: function(event, direction, distance, duration, fingerCount, fingerData) { if (direction === 'left') { $.envirabox.next(direction); } else if (direction === 'right') { $.envirabox.prev(direction); } else if (direction === 'up') { $.envirabox.close(); } } }); },
                 beforeClose: function() {},
                 afterClose: function() { $(window).off('resize.envirabox'); },
                 onUpdate: function() {},
                 onCancel: function() {},
                 onPlayStart: function() {},
                 onPlayEnd: function() {}
             };
             envira_galleries['5109'] = $('.envira-gallery-5109').envirabox(envira_gallery_options);
         });
     }
 }