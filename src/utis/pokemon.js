const fs = require('fs');



module.exports.thereIsImage = (name) => {
    try {
        return fs.existsSync(`${__dirname}/../assets/${name}.png`);
    } catch (error) {
        console.log(error);
    }
}