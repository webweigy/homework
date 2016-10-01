// JavaScript Document

myFocus.set({
	id:'focusbox'
	})
$(document).ready(function(e) {
	var wid_focus=840/5*4;
	$('.ad img').width(wid_focus/4);
	$("#focusbox").height($(".ad").height()-15);
	$("#focusbox img").width(wid_focus);
	$("#focusbox").width(wid_focus);
	$(".list").height($(".ad").height());
	$(".top").height($(".ulleft").height()+20);
});