const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

const experimentNumber = (rollno) => {
    let first = 1;
    let second = 2;
    let arr_exp = [];
    for (let i = 138; i <= 170; i++) {
        if (i !== 160 && i!=147) {
            if (rollno == i) {
                arr_exp.push(first, second);
            }
            first++;
            second++;
        }
        if (first === 8) first = 1;
        if (second === 8) second = 1;
    }
    return arr_exp;
};

app.post("/api/rollcheck", (req, res) => {
    const rollno = parseInt(req.body.rollno, 10);
    if (isNaN(rollno) || rollno < 138 || rollno > 170 || rollno === 160) {
        return res.status(400).json({ error: "Invalid roll number" });
    }
    const experiments = experimentNumber(rollno);
    res.json({
        first: experiments[0],
        second: experiments[1],
    });
});

module.exports = app;
