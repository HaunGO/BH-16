    /*
global 
PT:true, SITE:true, 

ScrollMagic:true, 
TimelineMax:true, TweenMax:true, TweenLite:true, SplitText:true, 
Linear:true, Elastic:true, Power1:true, Power2:true, Power3:true, Power4:true, Bounce:true, 

FastClick:true, enquire:true, Justice:true, 
Modernizr:true, jQuery:true, ssm:true

*/
    


// @codekit-prepend "js/pt-base-v12.js"  
 
     
 

PT._isDevMode = true;

$(function() { 
    // console.log('site specific js file');


    SITE.init();


    $('.homeplate-bg').fitVids(); 
    $('.homeplate-headline > h1').fitText(1.5);


    // $('.photos').flickrPhotoStream({ id: '12345', setId: '67890' });


    // $('.photos').flickrPhotoStream({
    //     id: '35900389@N07',             // Flickr Id
    //     setId: '72157647726977717',          // Flick "Set" Id
    //     container: '<div />',    // wrap the image
    //     cssClass: 'photos-item'  // applied to the image's link
    // }).done(function () {
    //     console.log('hey flicker is done ')
    // });


// $(window).on("resize", function () {
//     $("img#flickrVid").attr('width', $(window).width() );
// }).resize();







});



 
  
   

 

var SITE = { 

    _VAR:''
    
    ,init: function() {

        // console.log('SITE.init()');

        // PT.monitorFPS();
        
        // PT.addRandomClass('.homeplate', ['bg-r1', 'bg-r2', 'bg-r3']);





        SITE.buildGlitch();


        SITE.buildFlickr();

        SITE.buildLogo();

    }


 

 
    ,newFunction: function() { }






    ,buildLogo: function() { 
        // PT.log('buildLogo(){', 'green');

        // var scene1 = new ScrollMagic.Scene({
        //     triggerElement: $('.hp-logo-trigger')
        //     // ,triggerHook: 'onLeave'
        // })
        // .setPin($('.homeplate-logo'), {pushFollowers: false})
        // .duration( $('.main').height() )
        // // .setClassToggle($('.homeplate-logo'), "beReg")
        // .addIndicators()
        // // .addTo(PT.SM_CTRL);


    }







 





 
    ,buildGlitch: function() {
        PT.log('buildGlitch(){', 'green');

        var btn = $('body');

        var turbVal = { val: 0.00000 };
        var turb = $('filter feTurbulence')[0];

        var filterGlitch = $('filter#filterGlitch');

        var btnTL = new TimelineMax({ 
            paused: true,
            // repeat: 5,
            // yoyo: true,
            // repeatDelay: 3,
            onComplete: function() {
                // TweenMax.delayedCall(2, playStatic)
                $('.viewport').removeClass('filterGlitch');
            }, 
            onUpdate: function() {
                    // turb.setAttribute('baseFrequency', '0.05 ' + turbVal.val);
                    turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
                } 
            });


            btnTL.to(turbVal, 0.3, { val: 0.4,
                                 ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 2, points: 2, taper: "none", randomize: true, clamp: false})
                                 });
            btnTL.to(turbVal, 0.2, { val: 0.000001,
                                 ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 2, points: 2, taper: "none", randomize: true, clamp: false})
                                 });



            btn.on('click', function() {

                $('.viewport').addClass('filterGlitch');
                btnTL.restart();
            });

            // TweenMax.delayedCall(2, playStatic);
            //My instructions...

            function playStatic(){
              btnTL.restart();                
            }



    }



























 
    ,buildFlickr: function() {

        var fPic = $('#flickrPic');

            var url = [
                'http://api.flickr.com/services/feeds/photoset.gne?nsid=',
               '35900389@N07',
                '&set=',
                // '72157647726977717',//Wild Kingdom
                // '72157648005849649',//B-Roll videos
                '72157667133200554',//  BH-BG Album specifically for this website :)
                '&format=json&jsoncallback=?'
            ].join('');

            return $.getJSON(url).done(function (data) {
                
            // $.each(data.items, function (index, item) {
                // var link = item.media.m.replace('_m', '_z');
                // $("<img />")
                //     .attr("src", item.media.m)
                //     .appendTo($('.photos'));
            // });

            // console.log(url);
            console.log(data);


            // s   small square 75x75
            // q   large square 150x150
            // t   thumbnail, 100 on longest side
            // m   small, 240 on longest side
            // n   small, 320 on longest side
            // -   medium, 500 on longest side
            // z   medium 640, 640 on longest side
            // c   medium 800, 800 on longest side
            // b   large, 1024 on longest side
            // h   large 1600, 1600 on longest side
            // k   large 2048, 2048 on longest side
            // o    original image, either a jpg, gif or png, depending on source format

            // var link = data.items[0].media.m.replace('_m', '_z');


            var num = Math.floor( Math.random() * data.items.length );
            console.log(num);


                    // $("<img class='img-responsive-max' />")
                    //     // .attr("src", data.items[0].media.m)
                    //     .attr("src", data.items[num].media.m.replace('_m', '_b'))
                    //     .appendTo($('.photos'));
                    

                    
                       // $("#flickrPic").attr("src", data.items[num].media.m.replace('_m', '_s'))


            switch(PT.getSize()){

                case "sm":
                   fPic.attr("src", data.items[num].media.m.replace('_m', '_z'))
                   console.log('sm');
                break;

                case "md":
                   fPic.attr("src", data.items[num].media.m.replace('_m', '_c'))
                   console.log('md');
                break;

                case "lg":
                   fPic.attr("src", data.items[num].media.m.replace('_m', '_b'))
                   console.log('lg');
                break;

                case "xl":
                   fPic.attr("src", data.items[num].media.m.replace('_m', '_h'))
                   console.log('xl');
                break;

                default:
                   fPic.attr("src", data.items[num].media.m.replace('_m', '_z'))

            }

        
            PT.imgSwap(fPic, $('.homeplate-bg'));
            
            // console.log(PT.getSize());

        });

    }







};
 

// 99fdc0212ba1fb620cb989b6054214a8

// 0e467fa09d3b1e59

/*!
 * William DURAND <william.durand1@gmail.com>
 * MIT Licensed
 *
 * GistID: 5705453
 *
 * Usage:
 *
 *     $('.photos').flickrPhotoStream({ id: '12345', setId: '67890' });
 *
 *     $('.photos').flickrPhotoStream({
 *         id: '12345',             // Flickr Id
 *         setId: '67890',          // Flick "Set" Id
 *         container: '<div />',    // wrap the image
 *         cssClass: 'photos-item'  // applied to the image's link
 *     }).done(function () {});
 *
 */
/*(function (document, $) {
    "use strict";

    var flickrPhotoStream = function ($el, options) {
        var url = [
            'http://api.flickr.com/services/feeds/photoset.gne?nsid=',
            options.id,
            '&set=',
            options.setId,
            '&format=json&jsoncallback=?'
        ].join('');

        return $.getJSON(url).done(function (data) {
            $.each(data.items, function (index, item) {
                var link = item.media.m.replace('_m', '_z');

                $("<img />")
                    .attr("src", item.media.m)
                    .appendTo($el)
                    .wrap(options.container || '')
                    .wrap([
                        '<a href="',
                        link,
                        options.cssClass ? '" class="' + options.cssClass : '',
                        '" title="',
                        item.title,
                        '"></a>'
                    ].join(''));
            });
        });
    };

    $.fn.flickrPhotoStream = function (options) {
        return flickrPhotoStream($(this).get(), options || {});
    };
})(document, jQuery);


*/



























