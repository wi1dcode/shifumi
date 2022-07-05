// jQuery.easing['easeOutCirc'] = function (x, t, b, c, d) {
//     return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
// }
// $(function() {
// var option = {
//     speed: 6,
//     duration: 3,
//     stopImageNumber: 4
// };

// $(".go").click(function() {
// $('.go').prop('disabled', true);
// option.stopImageNumber = Math.random() * 11|0;
// $(".roulette_inner img").removeClass("active");
// $({
//     left: 0
// }).animate({
//     left: 844 * option.speed + 75 * (option.stopImageNumber + 6)
// }, {
//     duration: option.duration * 1000,
//     easing: "easeOutCirc",
//     step: function(a) {
//         $(".roulette_inner").css("transform", "translateX(-" + a % 500 + "px)");
//     },
//     complete: function() {
//         $(".roulette_inner  img").eq(option.stopImageNumber + (option.stopImageNumber < 6) * 11).addClass("active");
//         $('.go').prop('disabled', false);
//     }
// });
// })
// });


let content = document.querySelector('.choose')
let user_choice = document.querySelector(".user_roulette")
let ai_choice = document.querySelector(".roulette")
let vs = document.getElementById("vs")
let show = document.getElementById("start_display")
let roulette_i = document.querySelector(".roulette_inner")

content.addEventListener("click", () => {
    if (show.style.display != "none" && vs.style.display != "none") {   
        show.style.display = "none"
        vs.style.display = "block"
        user_choice.style.display = "block"  
        ai_choice.style.display = "block"  
    } 
})  

// USER

// (function($){var Roulette=function(options){var defaultSettings={maxPlayCount:null,speed:10,stopImageNumber:null,rollCount:3,duration:3,stopCallback:function(){},startCallback:function(){},slowDownCallback:function(){}};var defaultProperty={playCount:0,$rouletteTarget:null,imageCount:null,$images:null,originalStopImageNumber:null,totalHeight:null,topPosition:0,maxDistance:null,slowDownStartDistance:null,isRunUp:true,isSlowdown:false,isStop:false,distance:0,runUpDistance:null,isIE:navigator.userAgent.toLowerCase().indexOf("msie")>-1};var p=$.extend({},defaultSettings,options,defaultProperty);var reset=function(){p.maxDistance=defaultProperty.maxDistance;p.slowDownStartDistance=defaultProperty.slowDownStartDistance;p.distance=defaultProperty.distance;p.isRunUp=defaultProperty.isRunUp;p.isSlowdown=defaultProperty.isSlowdown;p.isStop=defaultProperty.isStop;p.topPosition=defaultProperty.topPosition};var slowDownSetup=function(){if(p.isSlowdown){return}p.slowDownCallback();p.isSlowdown=true;p.slowDownStartDistance=p.distance;p.maxDistance=p.distance+2*p.totalHeight;p.maxDistance+=p.imageHeight-p.topPosition%p.imageHeight;if(p.stopImageNumber!=null){p.maxDistance+=(p.totalHeight-p.maxDistance%p.totalHeight+p.stopImageNumber*p.imageHeight)%p.totalHeight}};var roll=function(){var speed_=p.speed;if(p.isRunUp){if(p.distance<=p.runUpDistance){var rate_=~~(p.distance/p.runUpDistance*p.speed);speed_=rate_+1}else{p.isRunUp=false}}else if(p.isSlowdown){var rate_=~~((p.maxDistance-p.distance)/(p.maxDistance-p.slowDownStartDistance)*p.speed);speed_=rate_+1}if(p.maxDistance&&p.distance>=p.maxDistance){p.isStop=true;reset();p.stopCallback(p.$rouletteTarget.find("img").eq(p.stopImageNumber));return}p.distance+=speed_;p.topPosition+=speed_;if(p.topPosition>=p.totalHeight){p.topPosition=p.topPosition-p.totalHeight}if(p.isIE){p.$rouletteTarget.css("top","-"+p.topPosition+"px")}else{p.$rouletteTarget.css("transform","translate(0px, -"+p.topPosition+"px)")}setTimeout(roll,1)};var init=function($roulette){$roulette.css({overflow:"hidden"});defaultProperty.originalStopImageNumber=p.stopImageNumber;if(!p.$images){p.$images=$roulette.find("img").remove();p.imageCount=p.$images.length;p.$images.eq(0).bind("load",function(){p.imageHeight=$(this).height();$roulette.css({height:p.imageHeight+"px"});p.totalHeight=p.imageCount*p.imageHeight;p.runUpDistance=2*p.imageHeight}).each(function(){if(this.complete||this.complete===undefined){var src=this.src;this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";this.src=src}})}$roulette.find("div").remove();p.$images.css({display:"block"});p.$rouletteTarget=$("<div>").css({position:"relative",top:"0"}).attr("class","roulette-inner");$roulette.append(p.$rouletteTarget);p.$rouletteTarget.append(p.$images);p.$rouletteTarget.append(p.$images.eq(0).clone());$roulette.show()};var start=function(){p.playCount++;if(p.maxPlayCount&&p.playCount>p.maxPlayCount){return}p.stopImageNumber=$.isNumeric(defaultProperty.originalStopImageNumber)&&Number(defaultProperty.originalStopImageNumber)>=0?Number(defaultProperty.originalStopImageNumber):Math.floor(Math.random()*p.imageCount);p.startCallback();roll();setTimeout(function(){slowDownSetup()},p.duration*1e3)};var stop=function(option){if(!p.isSlowdown){if(option){var stopImageNumber=Number(option.stopImageNumber);if(0<=stopImageNumber&&stopImageNumber<=p.imageCount-1){p.stopImageNumber=option.stopImageNumber}}slowDownSetup()}};var option=function(options){p=$.extend(p,options);p.speed=Number(p.speed);p.duration=Number(p.duration);p.duration=p.duration>1?p.duration-1:1;defaultProperty.originalStopImageNumber=options.stopImageNumber};var ret={start:start,stop:stop,init:init,option:option};return ret};var pluginName="roulette";$.fn[pluginName]=function(method,options){return this.each(function(){var self=$(this);var roulette=self.data("plugin_"+pluginName);if(roulette){if(roulette[method]){roulette[method](options)}else{console&&console.error("Method "+method+" does not exist on jQuery.roulette")}}else{roulette=new Roulette(method);roulette.init(self,method);$(this).data("plugin_"+pluginName,roulette)}})}})(jQuery);


// var option = {
//     speed : 10,
// 	duration : 2,
// 	stopImageNumber : 0
// }

// var count = $('div.roulette').children().length

// $('div.roulette').roulette(option);

// $('.go').click(function() { 
//     option.stopImageNumber = (Math.random() * count) >> 0; 
//     $('#config').text(JSON.stringify(option))
//     $('div.roulette')
//     .roulette('option', option)
//     .roulette('start');  
// })
