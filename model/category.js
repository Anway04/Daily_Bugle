import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    }
});


const category = mongoose.model('category', CategorySchema);

export default category;
