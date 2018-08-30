// Revolution Slider
var RevSlider = function() {
    "use strict";
    // Revolution Slider 1
    var handleRevSliderLayout1 = function() {
        var tpj=jQuery,         
        revapi1;
        tpj(document).ready(function() {
            if(tpj("#rev-slider-1").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider-1");
            } else {
                revapi1 = tpj("#rev-slider-1").show().revolution({

                    jsFileLocation: "includes/rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"auto",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: false,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "custom-3",
                            enable: true,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: false,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 70,
                                v_offset: -28
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 111,
                                v_offset: -28
                            }
                        },
                        bullets: {
                            enable:false,
                            hide_onmobile:true,
                            style:"custom",
                            hide_onleave:false,
                            space:10,
                            tmp:'',
                            direction:"horizontal",
                            h_align:"center",
                            v_align:"bottom",
                            h_offset:20,
                            v_offset:31
                        },
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels: [1170,991,767,767],
                    visibilityLevels:[1170,991,767,767],
                    gridwidth: [1170,991,767,500],
                    gridheight: [780,780,500,500],
                    lazyType: "none",
                    parallax: {
                        type: "scroll",
                        origo: "enterpoint",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    // Revolution Slider 2
    var handleRevSliderLayout2 = function() {
        var tpj=jQuery,         
        revapi1;
        tpj(document).ready(function() {
            if(tpj("#rev-slider2").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider2");
            } else {
                revapi1 = tpj("#rev-slider2").show().revolution({

                    jsFileLocation: "includes/rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"auto",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: false,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "custom",
                            enable: true,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: false,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 38,
                                v_offset: -18
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 38,
                                v_offset: -18
                            }
                        },
                        bullets: {
                            enable:true,
                            hide_onmobile:true,
                            style:"custom",
                            hide_onleave:false,
                            space:10,
                            tmp:'',
                            direction:"horizontal",
                            h_align:"center",
                            v_align:"bottom",
                            h_offset:20,
                            v_offset:31
                        },
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels: [1240,1024,778,480],
                    gridwidth: [1240,1024,778,480],
                    gridheight: [898,898,750,550],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "enterpoint",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    // Revolution Slider 3
    var handleRevSliderLayout3 = function() {
        var tpj=jQuery,         
        revapi1;
        tpj(document).ready(function() {
            if(tpj("#rev-slider3").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider3");
            } else {
                revapi1 = tpj("#rev-slider3").show().revolution({

                    jsFileLocation: "includes/rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"auto",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: false,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "custom-3",
                            enable: true,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: false,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 68,
                                v_offset: -18
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 68,
                                v_offset: -18
                            }
                        },
                        bullets: {
                            enable:false,
                            hide_onmobile:true,
                            style:"custom",
                            hide_onleave:false,
                            space:10,
                            tmp:'',
                            direction:"horizontal",
                            h_align:"center",
                            v_align:"bottom",
                            h_offset:20,
                            v_offset:31
                        },
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels:[1170,991,767,480],
                    gridwidth: [1170,991,767,480],
                    gridheight: [721,721,700,500],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "enterpoint",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    // Revolution Slider 4
    var handleRevSliderLayout4 = function() {
        var tpj=jQuery,         
        revapi1;
        tpj(document).ready(function() {
            if(tpj("#rev-slider4").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider4");
            } else {
                revapi1 = tpj("#rev-slider4").show().revolution({

                    jsFileLocation: "includes/rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"auto",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: false,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "custom",
                            enable: true,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: false,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 38,
                                v_offset: -18
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 38,
                                v_offset: -18
                            }
                        },
                        bullets: {
                            enable:false,
                            hide_onmobile:true,
                            style:"custom",
                            hide_onleave:false,
                            space:10,
                            tmp:'',
                            direction:"horizontal",
                            h_align:"center",
                            v_align:"bottom",
                            h_offset:20,
                            v_offset:31
                        },
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels: [1240,1024,778,480],
                    gridwidth: [1240,1024,778,480],
                    gridheight: [823,823,700,500],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "enterpoint",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    return {
        init: function() {
            handleRevSliderLayout1(); // initial setup for revolution slider layout 1
            handleRevSliderLayout2(); // initial setup for revolution slider layout 2
            handleRevSliderLayout3(); // initial setup for revolution slider layout 3
            handleRevSliderLayout4(); // initial setup for revolution slider layout 4
        }
    }
}();

$(document).ready(function() {
    RevSlider.init();
});
