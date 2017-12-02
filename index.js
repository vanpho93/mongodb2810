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

const laptop = new Product({
    name: 'Surface 2017',
    price: 1000,
    description: 'abcd',
    image: '1.jpg'
});

// laptop.save()
// .then(x => console.log(x))
// .catch(x => console.log(x))
