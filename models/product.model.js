require (mongoose)


let productschema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    category: {
        type: String
    }
  })


  mongoose.model('Data', productschema);