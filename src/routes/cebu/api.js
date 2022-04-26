const router = require("express").Router();
const checkAuth = require("../../middleware/checkAuth");
const { cebuTickets } = require("../../db");

//GET OLX CATEGORY LIST
router.get("/tickets", checkAuth, (req, res) => {
  const { dateFrom, dateTo, origin, destination } = req.body;

  if (!dateFrom || !dateTo || !origin || !destination) {
    return res.status(404).json({
      errors: [
        {
          msg: "Please provide the required payloads!",
        },
      ],
    });
  }

  const getSpecificTicket = cebuTickets
    .filter((ticket) => {
      return (
        ticket.dateFrom === dateFrom &&
        ticket.dateTo === dateTo &&
        ticket.origin === origin &&
        ticket.destination === destination
      );
    })
    .map((myticks) => {
      return myticks;
    });

  return res.json(getSpecificTicket);
});

router.get("/summary", checkAuth, (req, res) => {
  res.json({
    message: "Success ticket is reserved",
    success_icon:
      "https://image.similarpng.com/very-thumbnail/2021/06/Green-check-mark-icon-on-transparent-background-PNG.png",
    description:
      "Please wait while the staff is confirming your booked tickets!",
  });
});

module.exports = router;
