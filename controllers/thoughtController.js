const { User, Thought } = require('../models');

const thoughtController = {
  getThoughts( req, res ){
    Thought.find()
    .sort({
      createdAt: -1
    })
    .then((dbThoughtData) => {
      res.json(dbThoughtData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  },

  // getSingleThought by id
  getSingleThought( req, res ){
    Thought.findOne({_id: req.params.id})
    .sort({
      createdAt: -1
    })
    .then((dbThoughtData) => {
      res.json(dbThoughtData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  },

}

// createThought
// updateThought
// deleteThought
// addReactionToAThought
// removeReactionFromAThought

module.exports = thoughtController;