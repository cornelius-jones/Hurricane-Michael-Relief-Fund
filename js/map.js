// JavaScript Document
//The myMap function initializes adnd displays the map


function initMap() {
	//The center property specifies where to center the map
	var myCenter = new google.maps.LatLng(29.943130, -85.411079);
	var mapCanvas = document.getElementById("googleMap");

	//The zoom property specifies the zoom level for the map
	var mapOptions = {
		center:myCenter,
		zoom:9
	};

	//new google.maps.Map() creates a new Google Maps object
	var map = new google.maps.Map(mapCanvas, mapOptions);

	//using an animated marker (BOUNCE or DROP)
	
	var marker = new google.maps.Marker({
		position: myCenter,
		icon: "img/logo_map.png",
		draggable: true,
		animation: google.maps.Animation.DROP
	});
	marker.setMap(map);

}
