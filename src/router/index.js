const fs = require('fs');
const path = require('path');

function router(app) {
    let dirpath = path.resolve(__dirname);
    fs.readdir(dirpath,(err, files) => {
        files.forEach((item) => {
            if (item != 'index.js') {
                let data = fs.readFileSync(path.resolve(__dirname, item), 'utf-8' , 'r');
                eval(data)(app);
            }
        });
    });
}

module.exports = router;