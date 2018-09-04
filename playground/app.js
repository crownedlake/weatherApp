const yargs=require('yargs');
const geocode=require('./geocode/geocode');
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
    else console.log(results);
});
