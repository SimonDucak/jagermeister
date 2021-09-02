$(".accordion__header").on("click", function() {
	var accordion = $(this).parent();
	console.log(accordion);
	accordion.toggleClass("accordion--closed");
	accordion.find(".accordion__content").slideToggle(200);
});
