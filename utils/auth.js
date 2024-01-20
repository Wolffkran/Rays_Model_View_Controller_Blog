const withAuth = (req, res, next) => {
  if (!req.session.user) {
    req.session.returnTo = req.originalUrl;
    req.flash('error', 'Please log in to access this page');
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
