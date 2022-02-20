module.exports = {
  port: process.env.PORT || 5000,
  mongo_uri: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/instagramclone",
  secret: process.env.SECRET || "CodingIsCool",
};
