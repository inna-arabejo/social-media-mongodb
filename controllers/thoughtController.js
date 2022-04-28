const { User, Thought } = require('../models');

const thoughtController = {
  getThoughts(req, res) {
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
  getSingleThought(req, res) {
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

  createThought({ params, body }, res) {
    Thought.create(body)
    .then(thought => {
      User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { thoughts: thought._id } },
        { new: true },
      )
      .then(dbThoughtData => {
        if (!dbThoughtData){
          res.status(404).json({ message: 'No thought found with this id'});
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        res.json(err)
      })
    });
  },

  updateThought({ params, body }, res) {
    Thought.findByIdAndUpdate(
      { _id: params.thoughtId },
      body,
      { runValidators: true, new: true }
    )
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought with this id'});
        return;
      }
      res.json(dbThoughtData)
    })
    .catch((err) => {
      res.json(err)
    });
  },


}

// deleteThought
// addReactionToAThought
// removeReactionFromAThought

module.exports = thoughtController;