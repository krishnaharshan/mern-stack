function getFetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // let user = { name: "youtube", url: "https://www.youtube.com/" };
      // resolve(user)
      resolve({ name: "youtube", url: "https://www.youtube.com/" });
    }, 2000);
  });
}

// let data = getFetchData().then()
// let data = getFetchData()
// .then((data) => {
//     return data;
// })
// .then((d)=>{
//     console.log();
// })
// console.log(data);

async function fetch() {
  try {
    console.log("Fetching Dhe Data....");
    let data = await getFetchData();
    console.log("Fetched Data SUCCESSFULLY.");
  } catch (error) {
    console.log("ERROR In Fetching Data.....");
  }
}

fetch()