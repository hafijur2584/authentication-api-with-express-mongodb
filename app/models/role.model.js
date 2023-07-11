const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

roleSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

roleSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('Role', roleSchema);