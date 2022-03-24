const axios = require("axios");

module.exports.fetch_users = async (req, res, next) => {
  try {
    const result = await axios.get("https://randomuser.me/api/?results=50");
    res.status(200).json(result.data.results);
  } catch (error) {
    next(error);
  }
};
