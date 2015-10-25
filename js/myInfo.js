$(function () { // event when onload function
	buttonReaction();
});

$(window).resize(function() { // event when window resized
	buttonReaction();
})

function buttonReaction() {
		var buttons, length, i, previousContent, currentContent, clickedButton;
		buttons = $("ul li");
		length = buttons.length;
		if($("#content").css("display") === "block") {

		clickedButton = $(buttons[0]);
		clickedButton.attr("class", "clicked");
		for(i=0; i<length; i++) {
			$(buttons[i]).click(function(){
			
			clickedButton.attr("class", "unclicked");
			//previousContent = "#content" + clickedButton.eq(0).html();
			previousContent = "#content" + clickedButton.find("p").first().html();
			$(previousContent).attr("class", "hide");

			$(this).attr("class", "clicked"); // заливаем кнопку на которую нажали
			currentContent = "#content" + $(this).find("p").first().html();
			$(currentContent).attr("class", "show");
			//$("content" + $(this).html()).attr("class", "show");
			clickedButton = $(this);
			// меняем стиль дива с соотв айди
			// все остальные объекты перекрашиваем в нормальный, меняем класс на невидимый
			// полезно написать так, чтобы отслеживать объект и изменять лишь его класс и цвет

        	});
		}
	} else {
		console.log("bobik!");
	}
}