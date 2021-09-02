var mobileNavigation = $(".navigation__mobile-navigation");
var hamburger = mobileNavigation.find(".navigation__hamburger");

hamburger.on("click", function() {
	mobileNavigation.toggleClass("navigation__mobile-navigation--open");
});
