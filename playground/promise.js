// var somePromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{

//     //resolve('hey, it worked');
//     reject('oww');
//     },2000)
// });

// somePromise.then((message)=>{
//     console.log('Sucess',message);
// },(errorMessage)=>{
//     console.log('Error: ',errorMessage);
// });

var add = (a, b)=> {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a == 'number' && typeof b == 'number')
            resolve(a+b);
            else
            {
                reject('numbers invalid');
            }
        }, 2000);
    })

}

add(3,'s').then((result)=>{
    console.log("Success: ",result);
    return add(result,40);
}).then((result)=>{
    console.log("Success: ",result);
    }).catch((errorMessage)=>{
        console.log(errorMessage);
    })


