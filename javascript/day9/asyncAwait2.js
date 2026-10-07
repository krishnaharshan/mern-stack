function uploadData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("UPLOADING DATA IS COMPLETED");
        }, 3000);
    })
}

function isMatched(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let content = false;
            if(content){
                resolve("THE CONTENT MATCHES THE REQUREIMNETS")
            }
            else{
                reject("THE CONTENT ->(NOT)<- MATCHES THE REQUREIMNETS");
            }
        }, 2000);
    })
}

async function result() {
    try {
        console.log("UPLOADING THE DATA.....");
        // let upload = await uploadData();
        // let matchcase = await isMatched();

       const [upload, matchcase] = await Promise.all([uploadData(),isMatched()])
        console.log(upload);
        console.log(matchcase);
        console.log("PROCESS IS SUCCESSFULLY COMPLETED.")
    } catch (error) {
        console.log(error);
        console.log("!!!!! Please try again !!!!!.")
    }
}

result()