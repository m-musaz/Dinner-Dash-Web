import mongoose from "mongoose";
const mongo = mongoose;
import categoriesModel from "../models/Categories.js";
import itemModel from "../models/Items.js";
import ordersModel from "../models/Orders.js";
import usersModel from "../models/Users.js";

function init_db() {
  mongo
    .connect(
      "mongodb+srv://musaz:1234@hospital.lrmunjo.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Connection Failed", err);
    });

  const db = mongo.connection;

  db.once("open", () => {
    db.collection("orders").drop();
    db.collection("categories").drop();
    db.collection("items").drop();
    db.collection("users").drop();
  });

  const French = new categoriesModel({ name: "French" });
  const Chinese = new categoriesModel({ name: "Chinese" });
  const American = new categoriesModel({ name: "American" });
  const Indian = new categoriesModel({ name: "Indian" });

  const item1 = new itemModel({
    title: "Beef Wellington",
    description:
      "Indulge in the ultimate gourmet experience with Beef Wellington—a symphony of flavors and textures. Succulent beef tenderloin, seared to perfection, embraces a savory blend of mushrooms, shallots, and herbs, encased in layers of buttery puff pastry. Baked until golden, this iconic dish offers a culinary journey of exquisite taste and elegance—a true feast for the senses.",
    price: 50,
    categories: [French?._id],
    photoUrl:
      "https://res.cloudinary.com/dqzymo3ex/image/upload/v1707518550/Food%20Pics/French/Beef_Wellington_k1nb2j.jpg",
    pageUrl: "/beef-wellington",
  });

  const item2 = new itemModel({
    title: "Ratatouille",
    description:
      "Savor the rustic charm of Ratatouille, a vibrant Provencal vegetable stew bursting with the flavors of summer. Fresh tomatoes, zucchini, eggplant, and bell peppers simmered to tender perfection, harmonizing with fragrant herbs and garlic. This colorful medley is a celebration of seasonal produce, offering a hearty and wholesome dining experience. Ratatouille: A taste of the Mediterranean countryside, rich in flavor and tradition.",
    price: 30,
    categories: [French?._id],
    photoUrl:
      "https://res.cloudinary.com/dqzymo3ex/image/upload/v1707518550/Food%20Pics/French/Ratatouille_ln9ngx.jpg",
    pageUrl: "/ratatouille",
  });

  const item3 = new itemModel({
    title: "Tomohawk Steak",
    description:
      "Indulge in the ultimate carnivorous delight with our Tomahawk steak—a majestic, bone-in ribeye renowned for its exceptional tenderness and robust flavor. Generously marbled and expertly dry-aged, each succulent bite offers a symphony of rich, buttery textures and mouthwatering umami notes. Grilled to perfection and served with flair, this culinary masterpiece is sure to captivate your senses and elevate your dining experience.",
    price: 200,
    categories: [French?._id],
    photoUrl:
      "https://res.cloudinary.com/dqzymo3ex/image/upload/v1707518550/Food%20Pics/French/Steak_sqwv07.jpg",
    pageUrl: "/tomohawk-steak",
  });

  const item4 = new itemModel({
    title: "Chicken Soup",
    description:
      "Soothe your soul with our comforting Chicken Soup—a timeless classic brimming with warmth and nourishment. Tender chicken, aromatic vegetables, and fragrant herbs simmered to perfection in a savory broth. Each spoonful offers a taste of home and a reminder of the simple pleasures in life. Chicken Soup: A comforting embrace in a bowl.",
    price: 20,
    categories: [Chinese?._id],
    photoUrl:
      "https://res.cloudinary.com/dqzymo3ex/image/upload/v1707518549/Food%20Pics/Chinese/Chicken_Soup_kzqass.jpg",
    pageUrl: "/chicken-soup",
  });
  const item5 = new itemModel({
    title: "Dim Sum",
    description:
      "Embark on a culinary journey with our Dim Sum—a delightful array of bite-sized delicacies bursting with flavor. From steamed dumplings to savory buns, each bite offers a tantalizing fusion of textures and aromas. Experience the art of Chinese cuisine as you indulge in these exquisite small plates, perfect for sharing and savoring with loved ones. Dim Sum: A symphony of taste and tradition.",
    price: 20,
    categories: [Chinese?._id],
    photoUrl:
      "https://res.cloudinary.com/dqzymo3ex/image/upload/v1707518549/Food%20Pics/Chinese/Dim_Sum_t1e9au.jpg",
    pageUrl: "/dim-sum",
  });
  const item6 = new itemModel({
    title: "Steamed Pork Belly",
    description:
      "Indulge in a harmonious blend of flavors with our Steamed Pork Belly with Taro—succulent pork belly, delicately seasoned and steamed to perfection, paired with tender taro root for a delightful contrast in texture. Each bite offers a symphony of savory and sweet notes, creating a culinary experience that is both comforting and satisfying. Experience the culinary artistry of this traditional dish, beloved for its exquisite taste and cultural significance.",
    price: 80,
    categories: [Chinese?._id],
    photoUrl:
      "https://res.cloudinary.com/dqzymo3ex/image/upload/v1707518550/Food%20Pics/Chinese/Steamed_Pork_Belly_with_Taro_vsvn1b.jpg",
    pageUrl: "/steamed-pork-belly",
  });

  const item7 = new itemModel({
    title: "NY Hot Dog",
    description:
      "Savor the classic American favorite with our Hot Dog—juicy beef or pork sausage nestled in a soft, toasted bun, topped with your choice of condiments and relish. Whether enjoyed at a ball game or backyard barbecue, each bite delivers a burst of nostalgia and satisfaction. Indulge in this timeless comfort food, perfect for a quick and delicious meal on the go. Hot Dog: A taste of tradition in every bite.",
    price: 15,
    categories: [American?._id],
    photoUrl:
      "https://res.cloudinary.com/dqzymo3ex/image/upload/v1707518549/Food%20Pics/American/Hot_Dog_ozsv27.jpg",
    pageUrl: "/hot-dog",
  });
  const item8 = new itemModel({
    title: "Pancakes",
    description:
      "Start your day right with our fluffy Pancakes—golden discs of light, airy batter cooked to perfection on a hot griddle. Topped with a generous drizzle of maple syrup and a dollop of creamy butter, each bite is a decadent delight. Whether enjoyed for breakfast or brunch, our pancakes are a timeless classic that never fails to satisfy. Pancakes: A stack of happiness on your plate.",
    price: 25,
    categories: [American?._id],
    photoUrl:
      "https://res.cloudinary.com/dqzymo3ex/image/upload/v1707518549/Food%20Pics/American/Pancakes_fp8hey.jpg",
    pageUrl: "/pancakes",
  });
  const item9 = new itemModel({
    title: "Smash Burger",
    description:
      "Experience the ultimate flavor explosion with our Smash Burger—juicy beef patties, expertly smashed and seared to perfection, sandwiched between toasted buns. Topped with melted cheese, crisp lettuce, ripe tomatoes, and tangy pickles, each bite is a mouthwatering sensation. Indulge in this modern twist on a classic favorite, guaranteed to satisfy your burger cravings. Smash Burger: Where flavor meets perfection in every bite.",
    price: 25,
    categories: [American?._id],
    photoUrl:
      "https://res.cloudinary.com/dqzymo3ex/image/upload/v1707518549/Food%20Pics/American/Smash_Burger_nmnzxn.jpg",
    pageUrl: "/smash-burger",
  });

  const item10 = new itemModel({
    title: "Biryani",
    description:
      "Savor the aromatic allure of our Biryani—fragrant basmati rice cooked with tender marinated meat, aromatic spices, and caramelized onions. Each spoonful offers a burst of flavor and a journey through the rich culinary heritage of South Asia. Whether enjoyed on its own or paired with cooling yogurt raita, our Biryani is a celebration of tradition and taste. Biryani: A symphony of spices in every mouthful.",
    price: 25,
    categories: [Indian?._id],
    photoUrl:
      "https://res.cloudinary.com/dqzymo3ex/image/upload/v1707518550/Food%20Pics/Indian/Biryani_cnr88z.jpg",
    pageUrl: "/biryani",
  });

  const item11 = new itemModel({
    title: "Gulab Jamun",
    description:
      "Indulge in the divine sweetness of Gulab Jamun—soft, golden orbs of fried dough soaked in a fragrant sugar syrup infused with cardamom and rose water. Each bite melts in your mouth, releasing a burst of rich, syrupy flavor that is simply irresistible. Whether served warm or chilled, Gulab Jamun is a beloved Indian dessert that delights the senses and warms the soul. Gulab Jamun: A heavenly treat for your taste buds.",
    price: 25,
    categories: [Indian?._id],
    photoUrl:
      "https://res.cloudinary.com/dqzymo3ex/image/upload/v1707518550/Food%20Pics/Indian/Gulab_Jamun_ifbjd8.jpg",
    pageUrl: "/gulab-jamun",
  });
  const item12 = new itemModel({
    title: "Samosas",
    description:
      "Delight in the savory goodness of our Samosas—crispy pastry parcels filled with a delectable blend of spiced potatoes, peas, and aromatic herbs. Each bite offers a tantalizing medley of flavors, perfectly complemented by tangy tamarind or zesty mint chutney. Whether enjoyed as a snack or appetizer, our Samosas are a beloved favorite that never disappoints. Samosas: A taste of tradition wrapped in crispy perfection.",
    price: 15,
    categories: [Indian?._id],
    photoUrl:
      "https://res.cloudinary.com/dqzymo3ex/image/upload/v1707518550/Food%20Pics/Indian/Samosas_fk8nkf.jpg",
    pageUrl: "/biryani",
  });

  const Orders = new ordersModel({
    status: false,
    items: [{ itemId: item1._id, quantity: 5 }],
  });

  const Users = new usersModel({
    fullName: "Muhammad Musa Zulfiqar",
    email: "mz@hotmail.com",
    password: "creator@123",
  });

  async function getres() {
    const res1 = await French.save();
    const res2 = await Chinese.save();
    const res3 = await American.save();
    const res4 = await Indian.save();

    const res5 = await item1.save();
    const res6 = await item2.save();
    const res7 = await item3.save();
    const res8 = await item4.save();
    const res9 = await item5.save();
    const res10 = await item6.save();
    const res11 = await item7.save();
    const res12 = await item8.save();
    const res13 = await item9.save();
    const res14 = await item10.save();
    const res15 = await item11.save();
    const res16 = await item12.save();

    const res17 = await Orders.save();
    const res18 = await Users.save();

    console.log(res1);
    console.log(res2);
    console.log(res3);
    console.log(res4);
  }
  getres();
}

export { init_db };
