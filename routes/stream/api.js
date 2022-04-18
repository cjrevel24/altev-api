const router = require("express").Router();
const { streamingVideos } = require("../../db");

//GET STREAM VIDEO LIST
router.get("/video-list", (req, res) => {
  if (!streamingVideos) {
    return res.status(404).json({
      errors: [
        {
          msg: "No videos to display!",
        },
      ],
    });
  }

  return res.json(streamingVideos);
});

//VIEW SELECTED VIDEO
router.get("/video/:videoId", (req, res) => {
  const { videoId } = req.params;
  if (!videoId) {
    return res.status(404).json({
      errors: [
        {
          msg: "Please send accurate payload (videoId)!",
        },
      ],
    });
  } else {
    const viewSpecificVideo = streamingVideos.find((findVideoId) => {
      return findVideoId.id === parseInt(videoId);
    });
    return res.json(viewSpecificVideo);
  }
});

//GET VIDEO BY CATEGORY
router.get("/search-video/:category", (req, res) => {
  const categoryVideos = streamingVideos
    .filter(
      (videoCategory) => videoCategory.video_genre === req.params.category
    )
    .map((getVideos) => {
      return getVideos;
    });

  if (!categoryVideos) {
    return res
      .status(404)
      .json("The book with the given category was not found!.");
  }

  return res.json(categoryVideos);
});

module.exports = router;
