if (/Android|BlackBerry|IEMobile|iPad|iPhone|iPod/i.test(navigator.userAgent))
{
	window.scrollTo(0,1);
	window.scrollTo(0,0);
	if (window.addEventListener)
	{
		window.addEventListener("load",function() {
			setTimeout(function() {
				window.scrollTo(0,1);
				window.scrollTo(0,0);
			},0);
		});
	}
}

jQuery(function($) {
	var html_element = $("html");
	var navigation_toggle_element = $("#navigation-toggle");
	if (navigation_toggle_element.length > 0)
	{
		navigation_toggle_element.click(function() {
			html_element.toggleClass("show-menu");
			return false;
		});
	}
});
