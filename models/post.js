const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    company_id: {
        type: String,
        required: true
    },
    student_id: {
        type: Array,
        required: false
    },
    // JOB or PRACTICE
    // jp - true : job
    // jp - false: practice
    jp: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

module.exports = Item = mongoose.model('post', PostSchema);
