// JQUERY Document
$(document).ready(function() {
	"use strict";
	//on method attaches an event handler click to the function
  $(".box").on({
    click: function() {
    $(this).addClass('selected').siblings().removeClass('selected');
		$("[name=mybox]").val($(this).text());
    }
  });
});

