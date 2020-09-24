const express = require("express");

const app = express();


app.get("/", (req, res) => {
    res.send("S.Coups");

});



app.listen(3000, () => {
    console.log("이 app는 3000번이라는 주소에서부터 시작되었으며..");
});