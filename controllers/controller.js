const path = require("path");

const index = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
};

const api = (req, res) => {
    let date = new Date()
    let utc = date.toUTCString();
    let unix = Date.now();
    res.json({
        "unix": unix,
        "utc": utc
    });
};

const date = (req, res) => {
    let d = req.params.date;
    if (d.indexOf('-') >= 0) {
        let n = new Date(d);
        if (n == "Invalid Date") {
            res.json({ "error": "Invalid Date" })
        } else {
            let utc = n.toUTCString();
            let unix = n.valueOf();
            res.json({
                "unix": unix,
                "utc": utc
            });
        }
    } else {
        let n = new Date(parseInt(d, 10));
        if (n == "Invalid Date") {
            res.json({ "error": "Invalid Date" })
        } else {
            let utc = n.toUTCString();
            let unix = n.valueOf();
            res.json({
                "unix": unix,
                "utc": utc
            });
        }
    }
}

module.exports = { index, api, date };