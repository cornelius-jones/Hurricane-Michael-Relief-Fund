// JavaScript Document
//The myMap function initializes and displays the map


function initMap() {
	//The center property specifies where to center the map
	var myCenter = new google.maps.LatLng(33.952301, -84.549049);
	var mapCanvas = document.getElementById("googleMap");

	//The zoom property specifies the zoom level for the map
	var mapOptions = {
		center: myCenter,
		zoom: 12
	};

	//new google.maps.Map() creates a new Google Maps object
	var map = new google.maps.Map(mapCanvas, mapOptions);

	//using an animated marker (BOUNCE or DROP)
	/*
	var marker = new google.maps.Marker({
		position: myCenter,
		icon: "pin.png",
		draggable: true,
		animation: google.maps.Animation.DROP
	});
	marker.setMap(map);
*/
}
