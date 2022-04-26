"use strict";

var router = require("express").Router();

var _require = require("../../db"),
    streamingVideos = _require.streamingVideos; //GET STREAM VIDEO LIST


router.get("/video-list", function (req, res) {
  if (!streamingVideos) {
    return res.status(404).json({
      errors: [{
        msg: "No videos to display!"
      }]
    });
  }

  return res.json(streamingVideos);
}); //VIEW SELECTED VIDEO

router.get("/video/:videoId", function (req, res) {
  var videoId = req.params.videoId;

  if (!videoId) {
    return res.status(404).json({
      errors: [{
        msg: "Please send accurate payload (videoId)!"
      }]
    });
  } else {
    var viewSpecificVideo = streamingVideos.find(function (findVideoId) {
      return findVideoId.id === parseInt(videoId);
    });
    return res.json(viewSpecificVideo);
  }
}); //GET VIDEO BY CATEGORY

router.get("/search-video/:category", function (req, res) {
  var categoryVideos = streamingVideos.filter(function (videoCategory) {
    return videoCategory.video_genre === req.params.category;
  }).map(function (getVideos) {
    return getVideos;
  });

  if (!categoryVideos) {
    return res.status(404).json("The book with the given category was not found!.");
  }

  return res.json(categoryVideos);
});
module.exports = router;
//# sourceMappingURL=api.js.map