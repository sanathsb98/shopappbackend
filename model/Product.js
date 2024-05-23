import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        maxlength: [100, 'Product name cannot exceed 100 characters']
    },
    productDescription: {
        type: String,
        trim: true,
        maxlength: [500, 'Product description cannot exceed 500 characters']
    },
    productCategory: {
        type: String,
        trim: true,
        maxlength: [50, 'Product category cannot exceed 50 characters']
    },
    productPrice: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Product price cannot be negative']
    },
    newLaunch: {
        type: Boolean,
        default: false
    },
    productImage: {
        type: String,
        trim: true
    },
    productRating: {
        type: Number,
        min: [0, 'Rating cannot be less than 0'],
        max: [5, 'Rating cannot be more than 5']
    },
}, {
    timestamps: true
});

export default mongoose.model('Product', productSchema);
