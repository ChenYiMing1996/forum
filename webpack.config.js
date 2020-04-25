const path = require('path');
module.exports = {
    entry: './index.js',
    output:{
        filename:'index.bundl.js',
        path: path.resolve(__dirname,'./'),
    }    
};