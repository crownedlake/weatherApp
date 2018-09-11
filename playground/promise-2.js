const request=require('request');
var geocodeAddress = (add)=>{
    return new Promise((resolve,reject)=>{
        var key = 'AIzaSyBtbuvF1Er6lQ3ZZeufT5jCTv87jV0GZ04';
        var address = encodeURIComponent(add);
        // https://maps.googleapis.com/maps/api/geocode/json?address=Noida&key=AIzaSyBtbuvF1Er6lQ3ZZeufT5jCTv87jV0GZ04
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`,
            json: true
        },(error,response,body)=>{
            if(error){
                reject("Unable to connect to google servers");
            }
            else if(body.status === 'ZERO_RESULTS')
            {
                reject('Unable to find that address');
            }
            else if (body.status === 'OK')
            {
                resolve(
                    {
                        latitude:body.results[0].geometry.location.lat,
                        longitude:body.results[0].geometry.location.lng
                    }
                );
            }
         })
    })
}

geocodeAddress('201301').then((result)=>{
    console.log(result);
},(errorMessage)=>{
    console.log(errorMessage);
});