const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
const experimentNumber = (rollno) => {
    let first = 1;
    let second = 2;
    let arr_exp = [];
    for(let i = 138; i <= 170; i++) {
        if (i != 160) {
            if (rollno == i){
                console.log(`24CSEAIML${i} : ${first}, ${second}`);
                arr_exp.push(first,second);
            }
            first ++;
            second++;
        }
        
        if (first == 8) {
            first = 1;
        }else if (second == 8) {
            second = 1;
        }
    }

    return arr_exp;

}

app.post("/api/rollcheck", (req, res) => {
    const rollno = req.body.rollno;
    const experiments = experimentNumber(rollno);

    res.json({
        first: experiments[0],
        second: experiments[1]
    })
})

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../index.html"));
// })

app.use((err, req, res, next) => {
    res.send("INVALID INPUT");
});


module.exports = app;
