const yargs=require('yargs');
const geocode=require('./geocode/geocode');
const weather=require('./weather/weather');
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
geocode.geocodeAddress(argv.a,(errorMessage,results)=>{
    if(errorMessage) console.log(errorMessage);
    else
    {
        weather.getWeather(results.latitude,results.longitude,(errorMessage,temp)=>{
            if(errorMessage) console.log(errorMessage);
            else console.log(temp);
        });
    } 
});


//https://api.darksky.net/forecast/e25140abc8a68549335e197228baff0b/23.8447158,91.4284989
//23.8447158
//91.4284989
