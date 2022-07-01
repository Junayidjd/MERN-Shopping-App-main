
/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));*/



const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/MERN_shoping_app");

const Product = mongoose.model("Products", {
  title: String,
  price: Number,
  description: String,
  
  image: String,
  category: String,
});

const kitty = new Product({
  title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  price: 56.99,
  description:
    "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
  category: "women's clothing",
  image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
});
kitty.save().then(() => console.log("Product Details Saved SuccessFully"));