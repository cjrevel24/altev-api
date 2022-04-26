"use strict";

var router = require("express").Router();

var checkAuth = require("../../middleware/checkAuth");

var _require = require("../../db"),
    cebuTickets = _require.cebuTickets; //GET OLX CATEGORY LIST


router.get("/tickets", checkAuth, function (req, res) {
  var _req$body = req.body,
      dateFrom = _req$body.dateFrom,
      dateTo = _req$body.dateTo,
      origin = _req$body.origin,
      destination = _req$body.destination;

  if (!dateFrom || !dateTo || !origin || !destination) {
    return res.status(404).json({
      errors: [{
        msg: "Please provide the required payloads!"
      }]
    });
  }

  var getSpecificTicket = cebuTickets.filter(function (ticket) {
    return ticket.dateFrom === dateFrom && ticket.dateTo === dateTo && ticket.origin === origin && ticket.destination === destination;
  }).map(function (myticks) {
    return myticks;
  });
  return res.json(getSpecificTicket);
});
router.get("/summary", checkAuth, function (req, res) {
  res.json({
    message: "Success ticket is reserved",
    success_icon: "https://image.similarpng.com/very-thumbnail/2021/06/Green-check-mark-icon-on-transparent-background-PNG.png",
    description: "Please wait while the staff is confirming your booked tickets!"
  });
});
module.exports = router;
//# sourceMappingURL=api.js.map