const yargs=require('yargs');
const axios=require('axios');
var argv= yargs
.options({
        a:{
            demand:true,
            alias: 'address',
            describe: 'Address to show weather for',
            string: true
        }
})
.help()
.alias('help','h')
.argv;

var key = 'AIzaSyBtbuvF1Er6lQ3ZZeufT5jCTv87jV0GZ04';
var address = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;

axios.get(geocodeUrl).then((response)=>{
    if(response.data.status=='ZERO_RESULTS')
    {
        throw new Error('Unable to find the address');
    }
    var lat= response.data.results[0].geometry.location.lat;
    var long = response.data.results[0].geometry.location.lng;
    var fAdd = response.data.results[0].formatted_address;
    console.log(fAdd);
    var key= 'e25140abc8a68549335e197228baff0b';
    var weatherUrl = `https://api.darksky.net/forecast/${key}/${lat},${long}`;
    // console.log(response.data);

    return axios.get(weatherUrl);
    
}).then((response)=>{
    console.log(response.data.currently.temperature);
}).catch((error)=>{
    if(error.code=='ENOTFOUND'){
        console.log('Not able to connect to the servers');
    }
    else{
        console.log(error.message);
    }
})