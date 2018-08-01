module.exports=function ConnectMongoDB(){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://kollo:kollo123@ds139841.mlab.com:39841/kollo')
}

