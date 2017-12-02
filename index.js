const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mean2810', { useMongoClient: true })
.then(() => console.log('Connected'))
.catch(err => console.log(err.message));

const productSchema = new mongoose.Schema({
    name: { type: String, require: true, unique: true, trim: true },
    price: { type: Number },
    description: { type: String, require: true },
    image: { type: String }
});

const Product = mongoose.model('Product', productSchema);

// Create new doc

    // const laptop = new Product({
    //     name: 'Acer 2017',
    //     price: 2000,
    //     description: 'abcd',
    //     image: '1.jpg'
    // });

    // laptop.save()
    // .then(x => console.log(x))
// .catch(x => console.log(x))

// SELECT - Find docs

    // Product.find({})
    // .then(products => console.log(products));

    // Product.find({ price: 2000 })
    // .then(products => console.log(products));

    // Product.find({ price: { $gte: 1000 } })
    // .then(products => console.log(products));

    // Product.findById('5a22928c8b76b9381f8b0398')
    // .then(product => console.log(product));

    // Product.findOne({ name: 'Mac 2017' })
// .then(product => console.log(product));

// UPDATE docs
    // Product.findByIdAndUpdate('5a22928c8b76b9381f8b0398', { price: 150 })
    // .then(product => console.log(product));

    // Product.findOneAndUpdate({ name: 'Mac 2017' }, { price: 200 })
    // .then(product => console.log(product));

    // Product.update({ name: 'Mac 2017' }, { price: 200 })
// .then(product => console.log(product));

// REMOVE docs

// Product.remove({ price: 0 })
// .then(result => console.log(result));

// Product.findOneAndRemove({ name: 'Lenovo 2017' })
// .then(product => console.log(product));

Product.findByIdAndRemove('5a229294857fc2382df89e48')
.then(product => console.log(product));
