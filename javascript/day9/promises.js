function fetchData(){
    return new Promise(function(resolve,reject){
            setTimeout(() => {
                let success = true
                if(success){
                    resolve("THE DATA IS FETCHED SUCCESSFULLY.....")
                }
                else{
                    reject("ERROR IN FETCHING DATA....")
                }
            }, 2000);
    })
}

// console.log(fetchData());
// fetchData()
// .then((data) => {
//     console.log(data);
// })

// .catch((erro)=>{
//     console.log(erro);
// })


fetchData()
.then((data) => {
    console.log(data);
    return `success`
})
.then((SUCCESSFULLY)=>{
    console.log(SUCCESSFULLY);
})
.catch((erro)=>{
    console.log(erro);
    throw `ERROR AGAIN`
})
.catch((SUCCESSFULLY) => {
    console.log(SUCCESSFULLY);
})

