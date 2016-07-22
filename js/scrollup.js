window.onload = function() 
{ 
	var scrollUp = document.getElementById('scrollup'); 

	scrollUp.onmouseover = function() 
	{ 
		scrollUp.style.opacity=0.9;
		scrollUp.style.filter  = 'alpha(opacity=80)';
	};

	scrollUp.onmouseout = function() 
	{ 
		scrollUp.style.opacity = 0.7;
		scrollUp.style.filter  = 'alpha(opacity=60)';
	};

	scrollUp.onclick = function() 
	{ 
		window.scrollTo(0,0);
	};
	window.onscroll = function () 
	{ 
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
			if ( window.pageYOffset > 250 ) 
			{
				scrollUp.style.display = 'block';
			} 
			else 
			{
				scrollUp.style.display = 'none';
			}
			
			<!--Функция для смены фонового рисунка в зависимости от скроллинга-->
		if (scrolled < 2100)
		{
			document.body.style.backgroundImage = "url('Background.jpg')";
		}	
		if (scrolled > 2100)
		{
			document.body.style.backgroundImage = "url('Background10.jpg')";
		}	
	};
};