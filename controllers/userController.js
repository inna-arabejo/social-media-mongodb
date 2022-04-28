const { User, Thought } = require('../models');

const userController = {
  getAllUsers( req, res ){
    User.find()
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
    .select('-__v')
    .populate('friends')
    .populate('thoughts')
    .then((dbUserData) => {
      if (!DBUserData){
        return res.status(404).json({
          message: 'No user with this id.'
        })
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  },

  createUsers( req, res ){
    User.find({})
    .select('-__v')
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  },

}

// createUser
// updateUser
// deleteUser + deleteAssociatedThoughts
// addFriendToFriendList
// removeFriendFromFriendList

module.exports = userController;