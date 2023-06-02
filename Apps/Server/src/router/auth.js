    const express = require("express");
    const router = express.Router();
    const passport = require("passport");

    const authController = require("../controllers/authController");
    const { authenticateToken, isLoggedIn } = require("../middleware/auth");
    const productCtrl = require("../controllers/product");
    require("../middleware/auth");
    // POST
    router.post("/register", authController.register);
    router.post("/login", authController.login);
    router.post("/order");
/* 
    router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
    );

    router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: "/auth/protected",
        failureRedirect: "/auth/failure",
    })
    );

    router.get('/auth/protected',isLoggedIn, (req, res)=>{
        console.log(isLoggedIn)
        res.redirect("http://localhost:5173/products");
    });

    router.get("/auth/failure", isLoggedIn, (req, res) => {
    res.redirect("http://localhost:5173/login");
    }); */




    module.exports = router;
