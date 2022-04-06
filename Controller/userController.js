const User = require('../service/databaseService');// interacting with the mongoose database here.
require('../Routes/userRoutes');

exports.postUser = async (request, response) => {
  console.log('inside post');
  const user = User.postUser(request.body); // not entire request, just body.
  console.log(user.userID);
  user.save()
    .then(() => {
      console.log('inside save');
      request.id = user.userID;
      response.redirect(`/users/${user.userID}`);
    })
    .catch((e) => {
      console.log('inside err');
      response.sendStatus(
        e.code === 11000
        || e.stack.includes('ValidationError')
        || (e.reason !== undefined && e.reason.code === 'ERR_ASSERTION')
          ? 400 : 500,
      );
    });
};

exports.getUser = async (request, response) => {
  try {
    console.log('inside getUser');
    console.log('inside getUser');
    const users = await User.getUser({}); // {} to search ALL. find specific one
    let result = null;
    Object.keys(users).forEach((key) => {
      JSON.parse(users[key].userID);
      const x = JSON.stringify(users[key].userID);
      if (x === request.params.postId) {
        result = users[key];
      }
    });
    if (result != null) {
      const { month } = result;
      const { day } = result;
      const { year } = result;
      response.render('C:\\Users\\Zack\\Desktop\\SP2\\SeniorProjectTwo\\src\\countdown.html', { month, day, year });
      /* response.send({
        month: result.month, day: result.day, year: result.year, currentTime,
      }); */
    } else {
      response.sendStatus(404);
    }
  } catch (e) {
    response.sendStatus(
      e.code === 11000
      || e.stack.includes('ValidationError')
      || (e.reason !== undefined && e.reason.code === 'ERR_ASSERTION')
        ? 400 : 500,
    );
  }
};
