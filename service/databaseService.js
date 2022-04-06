const User = require('../modules/user');
// interacting with the mongoose database here.
exports.postUser = (request) => {
  try {
    return new User(request);
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating Users');
  }
};
exports.getUser = async (request) => {
  try {
    console.log(request); // previous is {} and it works. prints blank.
    return await User.find(request);
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating Users');
  }
};
