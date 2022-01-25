import axios from "axios";

axios
  // query parameter로 currencylayer 고유 액세스 키 연결
  .get(
    "http://api.currencylayer.com/live?access_key=8c38ebcb39cff7ea5acf4ba6cb2da569",
  )
  .then(Response => {
    console.log(Response.data);
  })
  .catch(Error => {
    console.log(Error);
  });
