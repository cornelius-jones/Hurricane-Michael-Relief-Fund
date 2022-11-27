$('.accordion').on('click','.accordion-control', function(e){
"use strict";
e.preventDefault();
	$(this)
	.next('.accordion-panel')
	.not(':animated')
	.slideToggle();
});