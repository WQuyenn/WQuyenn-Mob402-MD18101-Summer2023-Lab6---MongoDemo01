const mongoose = require('mongoose');

const SinhVienSchema = mongoose.Schema({
    name: {
        type: 'String',
        required: true,
    },
    age: {
        type: 'Number',
        required: true,

    },
    country: {
        type: 'String',
    },
    point: {
        type: 'Number',
        required: true,
    }

});
const SinhVienModel = new mongoose.model('students', SinhVienSchema);
module.exports = SinhVienModel;
