window.onload = function() 
{ 
    var scrollUp = document.getElementById('footer-button');

	scrollUp.onmouseover = function() 
	{ 
		document.body.style.cursor = 
		scrollUp.style.opacity = 0.9;
		scrollUp.style.filter  = 'alpha(opacity=80)';
	};

	scrollUp.onmouseout = function() 
	{ 
		scrollUp.style.opacity = 0.6;
		scrollUp.style.filter  = 'alpha(opacity=60)';
	};

	scrollUp.onclick = function() 
	{ 
		window.scrollTo(0,0);
	};
};