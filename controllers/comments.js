const comments = "../data/comments";

const list = (req, res) => {
    res.json(comments);
}

const show = (req, res) => {
  res.json(comments.find((comments) => comments._id == req.params.id));
};

const create = (req, res) => {
  const record = {
    _id: comments[comments.length - 1].id + 1,
    ...req.body,
  };
  comments.push(record);
  res.json(record);
};


module.exports = { list, show, create };


