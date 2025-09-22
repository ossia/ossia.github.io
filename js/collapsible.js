var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {

		var content = this.nextElementSibling;
		let show = content.style.display != "block";
		
		var coll = document.getElementsByClassName("collapsible");
		var j;
		for (j = 0; j < coll.length; j++) {
			coll[j].classList.remove("active");
			coll[j].nextElementSibling.style.display = "none";
		}
		
		if (show)
		{
		this.classList.toggle("active");
		content.style.display = "block";
		}
	});
	}
