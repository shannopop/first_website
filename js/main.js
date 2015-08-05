$(function () {
	$(".hamBurgerToggle").click(function (event) {
		event.preventDefault();
		$("body").toggleClass("navOpen");
	});
});