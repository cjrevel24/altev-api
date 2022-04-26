"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var router = require("express").Router();

var _require = require("../../db"),
    newsFeeds = _require.newsFeeds;

var _require2 = require("uuid"),
    uuidv4 = _require2.v4; //GET NEWSFEED LIST


router.get("/news-list", function (req, res) {
  if (!newsFeeds) {
    return res.status(404).json({
      errors: [{
        msg: "Access denied!"
      }]
    });
  }

  return res.json(newsFeeds);
}); //VIEW SPECIFIC NEWSFEED

router.get("/view-news/:newsId", function (req, res) {
  var newsId = req.params.newsId;

  if (!newsId) {
    return res.status(404).json({
      errors: [{
        msg: "Please send accurate payload (newsId)!"
      }]
    });
  } else {
    var viewSpecificNewsfeed = newsFeeds.find(function (findNewsId) {
      return findNewsId.id === parseInt(newsId);
    });
    return res.json(viewSpecificNewsfeed);
  }
}); //EDIT SPECIFIC NEWSFEED

router.get("/edit-news/:editId", function (req, res) {
  var editId = req.params.editId;

  if (!editId) {
    return res.status(404).json({
      errors: [{
        msg: "Please send accurate payload (newsId)!"
      }]
    });
  } else {
    var editSpecificNewsfeed = newsFeeds.find(function (editNewsId) {
      return editNewsId.id === parseInt(editId);
    });
    return res.json(editSpecificNewsfeed);
  }
}); //UPDATE SPECIFIC NEWSFEED

router.patch("/update-news/:updateId", function (req, res) {
  var updateId = req.params.updateId;
  var _req$body = req.body,
      post_title = _req$body.post_title,
      post_description = _req$body.post_description;
  var updateNewsfeed = newsFeeds.find(function (findNewsId) {
    return findNewsId.id === parseInt(updateId);
  });
  if (post_title) updateNewsfeed.post_title = post_title;
  if (post_description) updateNewsfeed.post_description = post_description;
  return res.send("Newsfeed with the ID ".concat(updateId, " has been successfully updated!"));
}); //DELETE SELECTED POST

router["delete"]("/delete-news/:deleteId", function (req, res) {
  var deleteId = req.params.deleteId;
  var deleteById = newsFeeds.filter(function (news) {
    return news.id !== deleteId;
  });

  if (!deleteById) {
    return res.status(404).json({
      errors: [{
        msg: "Please send accurate payload (newsId)!"
      }]
    });
  } else {
    return res.status(200).json("Newsfeed with the ID ".concat(deleteId, " has been successfully deleted!"));
  }
}); //ADD NEW MEWSFEED

router.post("/add-new-news", function (req, res) {
  var news = req.body;

  if (!news) {
    return res.status(404).json({
      errors: [{
        msg: "Please send accurate payload (post_title && post_description && post_date && post_user)!"
      }]
    });
  } else {
    var newsId = uuidv4();

    var newNews = _objectSpread(_objectSpread({}, news), {}, {
      id: newsId
    });

    newsFeeds.push(newNews);
    res.json("Newsfeed has been succefully created!");
  }
});
module.exports = router;
//# sourceMappingURL=api.js.map