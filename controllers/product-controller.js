import Product from "../model/Product.js"; // Note the added .js extension

export const getAllProducts = async (req, res, next) => {
    let products;
    try {
        products = await Product.find();
    } catch (err) {
        console.log(err);
    }
    if (!products) {
        return res.status(404).json({ message: "no products found" });
    }
    return res.status(200).json({ products });
}

export const addProduct = async (req, res, next) => {
    const {
        productName,
        productDescription,
        productCategory,
        productPrice,
        newLaunch,
        productImage,
        productRating,
    } = req.body;

    let existingProduct;
    try {
        existingProduct = await Product.findOne({ productName })
        if (existingProduct) {
            return res.status(400).json({ message: "product already exists" })
        } else {
            const newProduct = new Product({
                productName,
                productDescription,
                productCategory,
                productPrice,
                newLaunch,
                productImage,
                productRating,
            })
            newProduct.save()
            return res.status(201).json({ newProduct })
        }
    }
    catch (err) {
        console.log(err)
    }
}