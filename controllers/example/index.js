const Post = require('../../models/Post');

const getExample = (req, res) => {
  res.json({ example: true });
};

const getDetailExample = (req, res) => {
  const { param } = req.params;
  res.json({ example: true, param });
};

const createExample = async (req, res) => {
  try {
    const post = new Post({
      title: 'okok',
      body: 'okok',
    });

    await post.save();

    return res.json({ post });
  } catch (error) {
    return res.json({ error });
  }
};

const editExample = (req, res) => {
  const { param } = req.params;
  res.json({ example: true, param });
};

const deleteExample = (req, res) => {
  const { param } = req.params;
  res.json({ example: true, param });
};

module.exports = { getExample, getDetailExample, createExample, editExample, deleteExample };
