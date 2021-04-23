const mongoose = require('mongoose')
const Schema   = mongoose.Schema
const ObjectId = Schema.ObjectId

const empSchema = new Schema({

    empId:{

        type:ObjectId,

    },

    empName:{

        type:String,
        required: true

    },

    empEmail:{

        type:String,
        required:true

    },

    empMobile:{

        type:String,
        required:true

    },

})

module.exports = mongoose.model('Emp', empSchema)