function geol()
{
if (navigator.geolocation) {
    var location_timeout = setTimeout("geolocFail()", 10000);

    navigator.geolocation.getCurrentPosition(function(position) {
        clearTimeout(location_timeout);

        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        alert("Широта:"+ lat + " , Долгота:" + lng);

    }, function(error) {
        clearTimeout(location_timeout);
        geolocFail();
    },
        {
            maximumAge:Infinity,
            timeout:Infinity,
            enableHighAccuracy:false
        });
} else {
    geolocFail();
}
}
function geolocFail(){
    alert("Произошла ошибка! Браузер не поддерживает геолокацию либо отсутствует подключение к Интернету.");
}