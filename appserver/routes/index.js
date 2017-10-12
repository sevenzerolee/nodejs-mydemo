var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // if (req.session.views) {
  //   console.log(req.session.views++);
  // }
  // else {
  //   req.session.views = 2;
  // }

  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', {
      title: 'Log In' 
    });
});

router.get("/reg", function(req, res, next) {
  res.render("reg", {
    title: "reg"
  });
});

router.get("/logout", function(req, res, next) {
  res.render("logout", {
    title: "Thanks"
  });
});

module.exports = router;
