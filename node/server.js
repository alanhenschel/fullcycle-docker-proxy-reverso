const express = require('express');
const app = express()
const db = require("./db");

app.get('/', async (req, res) => {
    console.log('SELECT * FROM PEOPLE');
    const people = await db.selectPeople();
    var s = "nomes: "
    Object.keys(people).forEach(function(key) {
        var result = people[key];      
        console.log(result.FName);
        s = s.concat(`${result.FName},`);
    });
    res.send('<h1>Full Cycle Rocks!</h1>' + s)
})

app.listen(5000, function() {
    console.log('Web application is listening on port 5000');
});