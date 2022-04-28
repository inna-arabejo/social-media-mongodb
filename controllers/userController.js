const { User, Thought } = require('../models');

const userController = {
  getAllUsers( req, res ){
    User.find()
    .populate({
      path: 'friends',
      select: '-__v'
    })
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
    .select('-__v')
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  },

  // getSingleUser by id
  getSingleUser( req, res ){
    User.findOne({_id: req.params.id})
    .populate({
      path: 'friends',
      select: '-__v'
    })
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
    .select('-__v')
    .then((dbUserData) => {
      if (!DBUserData){
        return res.status(404).json({
          message: 'No user with this id.'
        })
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  },

  createUsers({ body }, res ){
    User.create(body)
    .select('-__v')
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  },

  updateUser({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      body,
      { new: true, runValidators: true }
    )
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id'});
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  },

  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $push: { friends: params.friendId }},
      { new: true, runValidators: true }
    )
    .populate({ 
      path: 'friends', 
      select: ('-__v') 
    })
    .select('-__v')
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id'});
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  }


}

// deleteUser + deleteAssociatedThoughts
// addFriendToFriendList
// removeFriendFromFriendList

module.exports = userController;