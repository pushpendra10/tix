(function($){
   var TixmobileMenu = function(element, options)
   {
   var elem = $(element);
   var menu;
   var menuID;
   
   	var defaults = {
				direction:'left',
				buttonHTML:"<i class='fa fa-bars'></i>",
				closeButtonHTML:"<i class='fa fa-times'>&nbsp;Close</i>",
				threshold:500 //screen width smaller than this will trigger mobile menu
				
				
				
            };
     
// Extend our default options with those provided.
 options = $.extend(defaults, options);
 
 var tixmobilemenu_init=function(){
 if(elem.not(".horizontal-menu") || elem.not(".verticalmenu")){
 //return false;
 }
 
var rnd=Math.random(1);
menuID="mobilemenu_"+Math.ceil(rnd*100000);
elem.before("<a id='"+menuID+"' href='#' class='tix-mobile-menu hidden'>"+options.buttonHTML+"</a>");
elem.prepend("<a href='#' class='close-mobile-menu hidden'>"+options.closeButtonHTML+"</a>");
 }
 
 var tixmobilemenu_create=function(){
   elem.addClass("sidebar");elem.addClass('mobile-menu');
 elem.tixsidebar({direction:options.direction});
 menu=elem.data('tixsidebar');
 var id=elem.attr("data-id");
 $("#"+menuID).removeClass('hidden');
   if(elem.hasClass('horizontal-menu')){elem.find("li").css({'float':'none'});}
 
 $("#"+menuID).click(function(e){
e.preventDefault();
$(".close-mobile-menu").removeClass('hidden').show();
menu.tixsidebar_toggle();
});

elem.find(".close-mobile-menu").click(function(e){
e.preventDefault();
menu.tixsidebar_hide();
});
 
 }
 
 var tixmobilemenu_destroy=function(){
 if(elem.hasClass('sidebar')){
 elem.removeClass('sidebar').removeClass('mobile-menu');
  if(elem.hasClass('horizontal-menu')){elem.find("li").css({'float':'left'});}
  $("#"+menuID).remove();
 }
 }
 
 $(window).resize=function(){
 var w=$(window).width();

 if(w<=options.threshold){

 tixmobilemenu_create();
 }else{
 tixmobilemenu_destroy();
 }
 
 };
 
  tixmobilemenu_init();
 if($(window).width()<=options.threshold){

 tixmobilemenu_create();
 }

    };

      $.fn.tixmobilemenu = function(options)
   {
       return this.each(function()
       {
           var element = $(this);
          
           // Return early if this element already has a plugin instance
           if (element.data('tixmobilemenu')) return;

           // pass options to plugin constructor
           var tixmobilemenu = new TixmobileMenu(this, options);

           // Store plugin object in this element's data
           element.data('tixmobilemenu', tixmobilemenu);
       });
	  
   };
})(jQuery);	
