const contacts = "../data/contacts";


const list = (req, res) => {
  res.json(contacts);
};

const show = (req, res) => {
  res.json(contacts.find((contact) => contact._id == req.params.id));
};

const create = (req, res) => {
  const record = {
    _id: contacts[contacts.length - 1]._id + 1,
    ...req.body,
  };
  contacts.push(record);
  res.json(record);
};


module.exports = {list, show, create};