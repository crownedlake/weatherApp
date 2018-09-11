const request=require('request');

var getWeather = (lat,long,callback) =>
{
    var key= 'e25140abc8a68549335e197228baff0b';
    request({
        url: `https://api.darksky.net/forecast/${key}/${lat},${long}`,
        json: true
    },(error,response,body)=>{
        if(!error && response.statusCode == 200) {
            var temp=body.currently.temperature;
            callback(undefined,temp);
        }
        else
        {
            callback("Unable to fetch weather");
        }
    }); 
}

module.exports = {
    getWeather
}