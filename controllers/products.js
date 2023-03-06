const products = "../data/products";

const list = (req, res) => {
    res.json(products);
}

const show = (req, res) => {
  res.json(products.find((products) => products._id == req.params.id));
};

const create = (req, res) => {
  const record = {
    _id: products[products.length - 1].id + 1,
    ...req.body,
  };
  products.push(record);
  res.json(record);
};

module.exports = { list, show, create };

