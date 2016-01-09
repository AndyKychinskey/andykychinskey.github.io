//window.onload = function() {
	var button = document.getElementsByTagName("button")[0];
	button.addEventListener("click", 
		function() {
			alert("clicked");
		})

	function checkInput(id) {
		var element = document.getElementById(id);
		var value = element.value;
		var answer;
		switch(value) {
			case "Имя пользователя": answer = 1; break;
			case "Email пользователя": answer = 2; break;
			default: answer = 3; break;
		}

		switch(answer) {
			case 1: alert("Type on your name, please!"); break;
			case 2: alert("Type on e-mail, please!"); break;
			case 3: alert("Type on your message, please!"); break;
			default: ; break;
		}

	}
//}