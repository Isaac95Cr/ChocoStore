var myLatLng1 = {lat: 9.933830, lng: -84.076717};
var myLatLng2 = {lat: 10.016059, lng: -84.213657};
var myLatLng3 = {lat: 10.072491, lng: -84.312197};
var myLatLng4 = {lat: 9.998896, lng: -84.117049};
var myLatLng5 = {lat: 9.863838, lng: -83.920757};
var map;

function init(){
    myMap();
    setMap();
}

function myMap() {

    var mapOptions = {
        center: new google.maps.LatLng(myLatLng1),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.roadmap
    }
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng1,
        map: map,
        title: 'Chocolate Factory'
      });

    var marker = new google.maps.Marker({
        position: myLatLng2,
        map: map,
        title: 'Chocolate Factory'
      });

    var marker = new google.maps.Marker({
        position: myLatLng3,
        map: map,
        title: 'Chocolate Factory'
      });

    var marker = new google.maps.Marker({
        position: myLatLng4,
        map: map,
        title: 'Chocolate Factory'
      });

    var marker = new google.maps.Marker({
        position: myLatLng5,
        map: map,
        title: 'Chocolate Factory'
      });

}

function newLocation(latLong)
{
	map.setCenter(
		new google.maps.LatLng(latLong)
    );
}

function setMap(){
    
    var dir1 = "San Jose";
    var dir2 = "Alajuela";
    var dir3 = "Grecia";
    var dir4 = "Heredia";
    var dir5 = "Cartago";
    
    var tel1 = "2232-9874";
    var tel2 = "2442-3658";
    var tel3 = "2440-5693";
    var tel4 = "2263-6895";
    var tel5 = "2459-9863";

    var correo1 = "chocolatefactsanjose@chocolatefact.com";
    var correo2 = "chocolatefactalajuela@chocolatefact.com";
    var correo3 = "chocolatefactgrecia@chocolatefact.com";
    var correo4 = "chocolatefactheredia@chocolatefact.com";
    var correo5 = "chocolatefactcartgo@chocolatefact.com";

    var e = document.getElementById("ddlViewBy");
    
    switch(e.selectedIndex){
        case 0:
            document.getElementById("d_ubicacion").innerHTML = dir1;
            document.getElementById("d_telefono").innerHTML = tel1;
            document.getElementById("d_correo").innerHTML = correo1;
            newLocation(myLatLng1);
            break;
        case 1:
            document.getElementById("d_ubicacion").innerHTML = dir2;
            document.getElementById("d_telefono").innerHTML = tel2;
            document.getElementById("d_correo").innerHTML = correo2;
            newLocation(myLatLng2);
            break;
        case 2:
            document.getElementById("d_ubicacion").innerHTML = dir3;
            document.getElementById("d_telefono").innerHTML = tel3;
            document.getElementById("d_correo").innerHTML = correo3;
            newLocation(myLatLng3);
            break;
        case 3:
            document.getElementById("d_ubicacion").innerHTML = dir4;
            document.getElementById("d_telefono").innerHTML = tel4;
            document.getElementById("d_correo").innerHTML = correo4;
            newLocation(myLatLng4);
            break;
        case 4:
            document.getElementById("d_ubicacion").innerHTML = dir5;
            document.getElementById("d_telefono").innerHTML = tel5;
            document.getElementById("d_correo").innerHTML = correo5;
            newLocation(myLatLng5);
            break;
    }

    
}