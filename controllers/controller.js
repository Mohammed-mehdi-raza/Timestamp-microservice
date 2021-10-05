const { ENGINE_METHOD_PKEY_ASN1_METHS } = require("constants");
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
    if (typeof d == 'string') {
        if (/\d{5,}/.test(d)) {
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
        } else {
            let s = new Date(d);
            let m = s.getTimezoneOffset();
            let n = new Date(s.getTime() + Math.abs(m * 60000));
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
    } else {
        res.json({ "error": "Invalid Date" });
    }
}

module.exports = { index, api, date };