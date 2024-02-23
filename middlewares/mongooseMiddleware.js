const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connecteion successfull"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mongoMiddleware");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("Pre Middleware");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const delCust = async () => {
  let data = await Customer.findByIdAndDelete("65d850f5b9401b905100e3fe");
  console.log(data);
};

delCust();

addCustomerWithOrder = async (req, res) => {
  let newCust = new Customer({
    name: "Rahul",
  });

  let newOrder1 = new Order({
    item: "Pizza",
    price: 250,
  });
  let newOrder2 = new Order({
    item: "Burger",
    price: 300,
  });

  newCust.orders.push(newOrder1, newOrder2);

  await newOrder1.save();
  await newOrder2.save();
  await newCust.save();
};
// addCustomerWithOrder();
