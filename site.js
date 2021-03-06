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


    // $('.homeplate-bg').fitVids(); 
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



    // $('.homeplate-logo').addClass('filterGlitch');
    // $('.footer').addClass('filterGlitch');





});



 
  
   

 

var SITE = { 

    _VAR:''
    
    ,init: function() {

        // console.log('SITE.init()');

        // PT.monitorFPS();
        
        // PT.addRandomClass('.homeplate', ['bg-r1', 'bg-r2', 'bg-r3']);




        SITE.buildFlickr();



        SITE.buildGlitch($('.homeplate-logo'));

        if( $('html').hasClass('no-touchevents') ){
        // if( Modernizr.touchevents ){
            console.log('NO TOUCH EVENTS !!');
            SITE.buildGlitch($('.my-svg'));    
        }

 
        // SITE.buildLogo();
        
        SITE.buildLogo2();






        //  FOLLOW CURSOR :
  
        var mySVG = $('.my-svg');  
        // TweenMax.set(mySVG, {transformOrigin:"-50% -50%" });

        $('.homeplate').on('mousemove', function(e){
            // TweenMax.to($("#my-svg"), 0, {x: e.pageX, y:e.pageY });
            TweenMax.to(mySVG, 0.5, {
              x: e.pageX-mySVG.width()/2
              ,y:e.pageY-mySVG.height()/2
              ,ease:Power4.easeOut
            });
        });






    }


  

 
    ,newFunction: function() { }



 


    ,buildLogo2: function() { 

        var HP = $('.homeplate');
        var LOGO = $('.homeplate-logo');

        // LOGO.addClass('beFixedBottom');


        //  LOGO RESIZER :
        $(window).resize(function(){
            LOGO.width( $(window).width() );

            
            // console.log($(window).width() );
            // HP.height( $(window).height() ).width( $(window).width() );

            // $('.my-svg').attr("viewBox", "0 0 "+$(window).width()+" "+$(window).height())
            // $('.my-svg circle').attr("r", $(window).width()/2)
            // <svg class="my-svg" viewBox="0 0 1000 1000" >
            // <circle cx="500" cy="500" r="500" />


        });

        // RESIZE HOMEPLATE :
        // HP.height( $(window).height() );


LOGO.addClass('bgGradientToBottom');


        var SM_SCENE1 = new ScrollMagic.Scene({
            triggerElement: $('.main')
            ,triggerHook: 'onEnter'
            // ,offset: - LOGO.height() + 1
        })
        // .duration( $('.main').height() )
        .duration( $('.main').height() + LOGO.height() )
        // .addIndicators()
        .addTo(PT.SM_CTRL);

        SM_SCENE1.on('start enter leave end ', function(event) {
            // console.log(event.type + ' - '+ event.state + ' - ' + event.scrollDirection );
            // TweenMax.to('.homeplate-logo', 1, {opacity:0.2, ease:Power1.easeInOut})
        
            switch(event.type){
                case "start" :
                    if(event.scrollDirection === "FORWARD"){
                        console.log('start - FORWARD');
                    }else if(event.scrollDirection === "REVERSE"){
                        console.log('start - REVERSE');
LOGO.removeClass('bgGradientToBottom');
                    }
                break; 

                case "end" :
                    if(event.scrollDirection === "FORWARD"){
                        console.log('end - FORWARD');
                        TweenMax.to(LOGO, 0, {position:'absolute', top:$('.main').height() + HP.height(), bottom:'initial'})
LOGO.removeClass('bgGradientToBottom');
LOGO.addClass('white');

                    }else if(event.scrollDirection === "REVERSE"){
                        console.log('end - REVERSE');
                        TweenMax.to(LOGO, 0, {position:'fixed', top:'initial', bottom:0})
LOGO.addClass('bgGradientToBottom');
LOGO.removeClass('white');
                    }
                break; 
            }

        });


//~~
        var SM_SCENE2 = new ScrollMagic.Scene({
            // triggerElement: $('.hp-logo-trigger')
            triggerElement: $('.hp-logo-trigger')
            ,triggerHook: 'onLeave'
            // ,offset: - $('.homeplate-logo').height()
        })
        // .addIndicators()
        .on("enter", function (event) {
            // LOGO.addClass('beFixedTop')
            // LOGO.addClass('white');
            TweenMax.to(LOGO, 0, {position:'fixed', top:0, bottom:'initial'})
// LOGO.addClass('bgGradientToTop');
        })        
        .on("leave", function (event) {
            // LOGO.removeClass('beFixedTop')
            // LOGO.removeClass('white');
            TweenMax.to(LOGO, 0, {position:'absolute', top:LOGO.offset().top, bottom:'initial'})
// LOGO.removeClass('bgGradientToTop');
        })        
        .addTo(PT.SM_CTRL);






/*
        var SM_SCENE3 = new ScrollMagic.Scene({
            triggerElement: $('.bg-red')
            ,triggerHook: 'onEnter'
            // ,offset: - LOGO.height() + 1
        })
        .duration( $('.bg-red').height())
        // .setClassToggle('#BRANDONHAUN', "blue")
        // .setTween( TweenMax.to('#BRANDON', 1, {fill:'blue'}))
        .addIndicators()
        .addTo(PT.SM_CTRL);


*/






/*        
        //  FOLLOW CURSOR :
  
        var mySVG = $('.my-svg');  
        // TweenMax.set(mySVG, {transformOrigin:"-50% -50%" });

        HP.on('mousemove', function(e){
            // TweenMax.to($("#my-svg"), 0, {x: e.pageX, y:e.pageY });
            TweenMax.to(mySVG, 0.5, {
              x: e.pageX-mySVG.width()/2
              ,y:e.pageY-mySVG.height()/2
              ,ease:Power4.easeOut
            });
        });


*/
    
    }






    ,buildLogo: function() { 
        PT.log('buildLogo(){', 'green');


        //  LOGO RESIZER :
        $(window).resize(function(){
            $('.homeplate-logo').width( $(window).width() );

        });



        //  FOLLOW CURSOR :
        var mySVG = $('.my-svg');  
        TweenMax.set(mySVG, {transformOrigin:"-50% -50%" });

        $(".homeplate").on('mousemove', function(e){
            // TweenMax.to($("#my-svg"), 0, {x: e.pageX, y:e.pageY });
            TweenMax.to(mySVG, 0.5, {
              x: e.pageX-mySVG.width()/2
              ,y:e.pageY-mySVG.height()/2
              ,ease:Power4.easeOut
            });
        });








        HP.height( $(window).height() ).width( $(window).width() );
        // $('.homeplate').height( $(window).height() + 20 );
        // $('.homeplate').height( $(window).height() - $('.homeplate-logo').height() );



// THIS IS REEEAAAALLLL  NIICE !
        var scene1 = new ScrollMagic.Scene({
            triggerElement: $('.main')
            ,triggerHook: 'onEnter'
            // ,offset: - $('.homeplate-logo').height()
        })
        .setPin($('.homeplate-logo'), {pushFollowers: false})
        .duration( $('.main').height() + $('.homeplate-logo').height())
        // .setTween( TweenMax.to('.homeplate-logo', 1, {yPercent:'-100'}) )
        .addIndicators()
        .addTo(PT.SM_CTRL);


//~~
        var scene2 = new ScrollMagic.Scene({
            // triggerElement: $('.hp-logo-trigger')
            triggerElement: $('.hp-logo-trigger')
            ,triggerHook: 'onLeave'
            // ,offset: - $('.homeplate-logo').height()
        })
        .addIndicators()
        .on("enter", function (event) {
            $('.homeplate-logo').addClass('beFixedTop')
        //     TweenMax.to('.homeplate-logo', 0.2, {yPercent:'0'})
            // scene1.enabled(false)
        })        
        .on("leave", function (event) {
            $('.homeplate-logo').removeClass('beFixedTop')
        //     TweenMax.to('.homeplate-logo', 0.2, {yPercent:'-100'})
        //     scene1.enabled(true)
        })        
        .addTo(PT.SM_CTRL);






/*
//  EVENTS :
        scene1.on('start enter leave end ', function(event) {
            console.log(event.type + ' - '+ event.state + ' - ' + event.scrollDirection );
            // TweenMax.to('.homeplate-logo', 1, {opacity:0.2, ease:Power1.easeInOut})
        })
*/



/*


        TweenMax.fromTo('.homeplate-logo', 5, 
             {yPercent:'0', opacity:0}
            ,{yPercent:'-100', opacity:1, ease:Power1.easeOut, delay:1 });

        var scene1 = new ScrollMagic.Scene({
            triggerElement: $('.main')
            ,triggerHook: 'onEnter'
            ,offset: - $('.homeplate-logo').height()
        })
        .setPin($('.homeplate-logo'), {pushFollowers: false})
        .duration( $('.main').height() )
        .addIndicators()
        .on('end', function(event) {
            TweenMax.to('.homeplate-logo', 1, {yPercent:0, ease:Power1.easeInOut})
        })
        .addTo(PT.SM_CTRL);


        var scene2 = new ScrollMagic.Scene({
            triggerElement: $('.hp-logo-trigger')
            ,triggerHook: 'onLeave'
            ,offset: - $('.homeplate-logo').height()
        })
        .addIndicators()
        .on("enter", function (event) {
            $('.homeplate-logo').addClass('beFixedTop')
            scene1.enabled(false)
        })        
        .on("leave", function (event) {
            $('.homeplate-logo').removeClass('beFixedTop')
            scene1.enabled(true)
        })        
        .addTo(PT.SM_CTRL);

*/



    }









 
    ,buildGlitch: function(_this_) {
        PT.log('buildGlitch(){', 'green');

        // var _target = $('.viewport');
        // var _target = $('.homeplate-logo');
        var _target = _this_;


        var btn = $('body');

        var turbVal = { val: 0.00000 };
        var turb = $('filter feTurbulence')[0];

        var filterGlitch = $('filter#filterGlitch');

        var tl_GLITCH = new TimelineMax({ 
            paused: true,
            // repeat: 5,
            // yoyo: true,
            // repeatDelay: 3,
            onStart: function(){
                _target.addClass('filterGlitch');
            },
            onComplete: function() {
                // TweenMax.delayedCall(2, playStatic)
                _target.removeClass('filterGlitch');
                resetTimer();
            }, 
            onUpdate: function() {
                    // turb.setAttribute('baseFrequency', '0.05 ' + turbVal.val);
                    turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
                } 
            });


            tl_GLITCH.to(turbVal, 0.3, { val: 0.4, opacity:0.8,
                                 ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 2, points: 2, taper: "none", randomize: true, clamp: false})
                                 });
            // tl_GLITCH.to(turbVal, 0.2, { val: 0.000001,
            //                      ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 2, points: 2, taper: "none", randomize: true, clamp: false})
            //                      });
            tl_GLITCH.to(turbVal, 0.2, { val: 0.000001, opacity:1,
                                 ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 2, points: 2, taper: "none", randomize: true, clamp: false})
                                 });



            // btn.on('click', function() {

                // $('.viewport').addClass('filterGlitch');
                // tl_GLITCH.restart();
            // });

            // TweenMax.delayedCall(2, playStatic);
            //My instructions...



            function resetTimer(){
                TweenMax.delayedCall( Math.floor(Math.random() * 10) , playGlitch);
            }

            function playGlitch(){
                console.log('playGlitch()');
                tl_GLITCH.restart();                
            }

            playGlitch();

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
                   fPic.attr("src", data.items[num].media.m.replace('_m', '_c'))
                   console.log('sm');
                break;

                case "md":
                   fPic.attr("src", data.items[num].media.m.replace('_m', '_b'))
                   console.log('md');
                break;

                case "lg":
                   fPic.attr("src", data.items[num].media.m.replace('_m', '_b'))
                   // fPic.attr("src", data.items[num].media.m.replace('_m', '_o'))
                   console.log('lg');
                break;

                // case "xl":
                //    fPic.attr("src", data.items[num].media.m.replace('_m', '_h'))
                //    console.log('xl');
                // break;

                default:
                   // fPic.attr("src", data.items[num].media.m.replace('_m', '_z'))
                   fPic.attr("src", data.items[num].media.m.replace('_m', '_b'))

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



























