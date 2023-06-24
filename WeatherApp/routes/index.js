var express = require('express');
var router = express.Router();
var axios = require("axios");
const { response } = require('express');

const apiKey = "5844c4d3753574996de19c630934e89f"

var weatherData;
var fiveDayWeather;
var weatherDataimperial
var fiveDayWeatherimperial
var aqiData;
var cityname;
var icityname;
var lat;
var lon;
var ilat
var ilon
// var currentLatitude = res.body.latitude
// var currentLongitude = res.body.longitude

router.get('/',function(req, res, next) {
  res.render('index')
  
});

router.post('/getweather', async function(req,res){
   cityname = req.body.citydetail
   icityname = cityname
  await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apiKey}`)
 .then(response => {
   weatherData = response.data
   if(weatherData.coord === undefined){
    res.send("Invalid Parameters Recieved")
    setTimeout(()=>{
      res.redirect('/')
    },"2000")
   }
   else{
    lat = weatherData.coord.lat
    lon = weatherData.coord.lon
   }
 })
 await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
.then(response=>{
  fiveDayWeather = response.data
  // console.log(fiveDayWeather.list[23].main.temp)
})
.catch(err => {
  // console.log(err)
  res.redirect('/')
 }, "2000");
//  console.log(weatherData.wind.deg)
 res.redirect('/getweather')
})

router.get('/getweather',async function(req,res){
  if(weatherData === undefined){
    res.redirect('/')
  }
  else{
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${icityname}&units=metric&appid=${apiKey}`)
    .then(response =>{
      weatherData = response.data
      lat = weatherData.coord.lat
      lon = weatherData.coord.lon
    })
    await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
.then(response=>{
  fiveDayWeather = response.data
  // console.log(fiveDayWeather.list[23].main.temp)
})
    res.render('getweather',{weatherData:weatherData,fiveDayWeather:fiveDayWeather})
  }
})

router.post('/getweather/imperial', async function(req,res){
  cityname = req.body.citydetail
  icityname = cityname
  await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=${apiKey}`)
.then(response =>{
  weatherDataimperial = response.data
  ilat = weatherDataimperial.coord.lat
  ilon = weatherDataimperial.coord.lon
  console.log(weatherDataimperial)
})
await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${ilat}&lon=${ilon}&appid=${apiKey}&units=imperial`)
.then(response =>{
  fiveDayWeatherimperial = response.data
})
res.redirect('/getweather/imperial')
})

router.get('/getweather/imperial',async function(req,res){
  if(cityname === undefined,lat === undefined,lon === undefined){
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=${apiKey}`)
    .then(response =>{
      icityname = cityname
      weatherDataimperial = response.data
      ilat = weatherDataimperial.coord.lat
      ilon = weatherDataimperial.coord.lon
      console.log(weatherDataimperial)
    })
    await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
    .then(response =>{
      fiveDayWeatherimperial = response.data
    })
      res.render('imperial',{weatherDataimperial:weatherDataimperial,fiveDayWeatherimperial:fiveDayWeatherimperial})
  }
  else{
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=${apiKey}`)
    .then(response =>{
      icityname = cityname
      weatherDataimperial = response.data
      ilat = weatherDataimperial.coord.lat
      ilon = weatherDataimperial.coord.lon
      console.log(weatherDataimperial)
    })
    await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
    .then(response =>{
      fiveDayWeatherimperial = response.data
    })
    res.render('imperial',{weatherDataimperial:weatherDataimperial,fiveDayWeatherimperial:fiveDayWeatherimperial})
  }

})

// router.get('/aqi', async function(req,res){
//   await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=23.2599&lon=77.4126&appid=${apiKey}`)
//   .then(response =>{
//     aqiData = response.data.list[0].main.aqi
//     // console.log(response.data.list)
//   })
//   res.render('aqi',{aqiData:aqiData})
// })


module.exports = router;
