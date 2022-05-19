import express from "express";
import passport from "passport";
const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/login/success", (req, res, next) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
    });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000");
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/",
  })
);

export default router;
