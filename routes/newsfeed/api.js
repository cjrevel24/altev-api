const router = require("express").Router();
const { newsFeeds } = require("../../db");
const { v4: uuidv4 } = require("uuid");

//GET NEWSFEED LIST
router.get("/news-list", (req, res) => {
  if (!newsFeeds) {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied!",
        },
      ],
    });
  }

  return res.json(newsFeeds);
});

//VIEW SPECIFIC NEWSFEED
router.get("/view-news/:newsId", (req, res) => {
  const { newsId } = req.params;
  if (!newsId) {
    return res.status(404).json({
      errors: [
        {
          msg: "Please send accurate payload (newsId)!",
        },
      ],
    });
  } else {
    const viewSpecificNewsfeed = newsFeeds.find((findNewsId) => {
      return findNewsId.id === parseInt(newsId);
    });
    return res.json(viewSpecificNewsfeed);
  }
});

//EDIT SPECIFIC NEWSFEED
router.get("/edit-news/:editId", (req, res) => {
  const { editId } = req.params;
  if (!editId) {
    return res.status(404).json({
      errors: [
        {
          msg: "Please send accurate payload (newsId)!",
        },
      ],
    });
  } else {
    const editSpecificNewsfeed = newsFeeds.find((editNewsId) => {
      return editNewsId.id === parseInt(editId);
    });
    return res.json(editSpecificNewsfeed);
  }
});

//UPDATE SPECIFIC NEWSFEED
router.patch("/update-news/:updateId", (req, res) => {
  const { updateId } = req.params;
  const { post_title, post_description } = req.body;

  const updateNewsfeed = newsFeeds.find((findNewsId) => {
    return findNewsId.id === parseInt(updateId);
  });

  if (post_title) updateNewsfeed.post_title = post_title;
  if (post_description) updateNewsfeed.post_description = post_description;

  return res.send(
    `Newsfeed with the ID ${updateId} has been successfully updated!`
  );
});

//DELETE SELECTED POST
router.delete("/delete-news/:deleteId", (req, res) => {
  const { deleteId } = req.params;
  const deleteById = newsFeeds.filter((news) => {
    return news.id !== deleteId;
  });
  if (!deleteById) {
    return res.status(404).json({
      errors: [
        {
          msg: "Please send accurate payload (newsId)!",
        },
      ],
    });
  } else {
    return res
      .status(200)
      .json(`Newsfeed with the ID ${deleteId} has been successfully deleted!`);
  }
});

//ADD NEW MEWSFEED
router.post("/add-new-news", (req, res) => {
  const news = req.body;

  if (!news) {
    return res.status(404).json({
      errors: [
        {
          msg: "Please send accurate payload (post_title && post_description && post_date && post_user)!",
        },
      ],
    });
  } else {
    const newsId = uuidv4();
    const newNews = { ...news, id: newsId };
    newsFeeds.push(newNews);
    res.json("Newsfeed has been succefully created!");
  }
});

module.exports = router;
