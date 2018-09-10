// const yargs=require('yargs');
// const geocode=require('./geocode/geocode');
// var argv= yargs
// .options({
//         a:{
//             demand:true,
//             alias: 'address',
//             describe: 'Address to show weather for',
//             string: true
//         }
// })
// .help()
// .alias('help','h')
// .argv;
// geocode.geocodeAddress(argv.a,(errorMessage,results)=>{
//     if(errorMessage) console.log(errorMessage);
//     else console.log(results);
// });

const request=require('request');
request({
    url: 'https://api.darksky.net/forecast/e25140abc8a68549335e197228baff0b/23.8447158,91.4284989',
    json: true
},(error,response,body)=>{
    if(!error && response.statusCode == 200) {
        var temp=body.currently.temperature;
        console.log((temp-32)*5/9);
    }
    else
    {
        console.log("Unable to fetch weather");
    }
}); 
//https://api.darksky.net/forecast/e25140abc8a68549335e197228baff0b/23.8447158,91.4284989
//23.8447158
//91.4284989
