const vehicles = "../data/vehicles";

const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  res.json(vehicles.find((vehicles) => vehicles._id == req.params.id));
};

const create = (req, res) => {
  const record = {
    _id: vehicles[vehicles.length - 1]._id + 1,
    ...req.body,
  };
  vehicles.push(record);
  res.json(record);
};


module.exports = { list, show, create };
