exports.location = function (location){ 
var latitude;
var longitude;
const successCallback = (position) => {
console.log(position);
latitude = position.coords.latitude
longitude = position.coords.longitude
};

const errorCallback = (error) => {
console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

}

