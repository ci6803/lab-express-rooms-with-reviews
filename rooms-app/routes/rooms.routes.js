const express = require("express");
const Room = require("../models/Room.model");
const router = express.Router();

router.get("/rooms", (req, res) => {
  Room.find({})
    .then((allRooms) => res.render("rooms/list", { allRooms }))
    .catch((error) => `Error while fetching all rooms: ${error}`);
});

router.get("/rooms/create", (req, res) => {
  // Add a new room
  res.render("rooms/create-form");
});

router.post("/rooms/create", (req, res) => {
  // Add a new room
  const { name, description, imgUrl } = req.body;

  Room.create({ name, description, imgUrl })
    .then(() => res.redirect("/rooms"))
    .catch((error) => `Error while creating a new Room: ${error}`);
});

router.get("/rooms/:id/edit", (req, res) => {
  // Update the Room
  const { id } = req.params;

  Room.findById(id)
    .then((RoomEdit) => {
      res.render("rooms/update-form", RoomEdit);
    })
    .catch((error) => `Error while getting a Room to edit: ${error}`);
});

router.post("/rooms/:id/edit", (req, res, next) => {
  //Update the Room
  const { id } = req.params;
  const { name, description, imgUrl } = req.body;

  Room.findByIdAndUpdate(id, { name, description, imgUrl })
    .then(() => res.redirect("/rooms"))
    .catch((error) => console.log(`Error while updating a room: ${error}`));
});

router.post("/rooms/:id/delete", (req, res) => {
  // Delete the Room
  const { id } = req.params;

  Room.findByIdAndDelete(id)
    .then(() => res.redirect("/rooms"))
    .catch((error) => console.log(`Error while deleting a room: ${error}`));
});

module.exports = router;
