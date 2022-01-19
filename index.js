const axios = require("axios").default;
// az axios intuitivabb mint egy sima fetch
// very nepszerul lib ;)

console.log("Hello HTTP");

// const nemzetiSport = async () => {
//   try {
//     const response = await axios.get(`http://nemzetisport.hu`);
//     console.log("status: ", response.status);
//     // console.log("data: ", response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// nemzetiSport();

// axios
//   .get(`http://nemzetisport.hu`)
//   .then(function (response) {
//     // handle success
//     console.log(response.headers);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log("nem megy teso");
//   })
//   .then(function () {
//     console.log("Axios is done.");
//   });

const response = axios.get(`http://nemzetisport.hu`);
