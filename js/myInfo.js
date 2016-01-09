$(function () {
	var buttons, length, i, previousContent, currentContent, clickedButton;
	buttons = $("ul li");
	length = buttons.length;
	clickedButton = $(buttons[0]);
	clickedButton.attr("class", "clicked");

$(function () { // event when onload function
	buttonReaction();
});

$(window).resize(function() { // event when window resized
	buttonReaction();
})

function buttonReaction() {

	if($("#content").css("display") === "block") {

		for(i=0; i<length; i++) {
			$(buttons[i]).click(function(){
				clickedButton.attr("class", "unclicked");
				previousContent = "#content" + clickedButton.find("p").first().html();
				$(previousContent).attr("class", "hide");
				$(this).attr("class", "clicked");
				currentContent = "#content" + $(this).find("p").first().html();
				$(currentContent).attr("class", "show");
				clickedButton = $(this);
        	});
		}
	} else {
		console.log("bobik!");
	}
}
});
