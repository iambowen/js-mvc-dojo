function getUser(){
	return Q($.ajax({
		url:"https://api.github.com/user"+ "?access_token=" + localStorage.getItem("access_token"),
		method:'get'
	}));
}
function renderHeader(){
	getUser().then(function(user){
		$(".navbar.navbar-default").html(nunjucks.render("src/templates/header.html",user));
	});	
}

// renderHeader();

