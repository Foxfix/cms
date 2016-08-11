$(document).ready(function(){
	//build dropdown
	$("<select />").appendTo("nav#main_menu div");
	
	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Please choose page"
	}).appendTo("nav#main_menu select");	
	
	// Populate dropdowns with the first menu items
	$("nav#main_menu li a").each(function() {
	 	var el = $(this);
	 	$("<option />", {
	     	"value"   : el.attr("href"),
	    	"text"    : el.text()
	 	}).appendTo("nav#main_menu select");
	});
	
	//make responsive dropdown menu actually work			
  	$("nav#main_menu select").change(function() {
    	window.location = $(this).find("option:selected").val();
  	});
	
	//Iframe transparent
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
			
	//Twitter Setup
	$('.tweet_module').tweet({
		modpath: 'twitter/',
		count: 2,
		username : 'your_mane'
	 });
	
	//PrettyPhoto
	$("a[rel^='prettyPhoto']").prettyPhoto();
	
	//Image hover
	$(".post_prev, .proj_block, .post_img, .post").live('mouseover',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:0.38},400);
			$(".preloader").css({'background':'none'});
		}
	);
	$(".post_prev, .proj_block, .post_img, .post").live('mouseout',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:1},400);
			$(".preloader").css({'background':'none'});
		}
	);
	
	
	//h2 first word
	$('h2.title').each(function() { 
        var h = $(this).html(); 
        var index = h.indexOf(' '); 
        if(index == -1) { 
            index = h.length; 
        } 
        $(this).html('<span>' + h.substring(0, index) + '</span>' + h.substring(index, h.length)); 
    });
	
	

});




