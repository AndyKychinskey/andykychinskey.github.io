    function popUpController() {
    var difVariables = {
        currentPic : "big1",
        lastPicIndex : 0
    };

    function popUp() {
    	var divOuter = document.createElement("div");
    	divOuter.id = "wrap";
    	document.body.appendChild(divOuter);
    	var divInner = document.createElement("div");
    	divInner.id = "window";
    	document.body.appendChild(divInner);
    }

    function show(state){
		document.getElementById("window").style.display = state;			
		document.getElementById("wrap").style.display = state;
	}

     function draftPopUp() {
            popUp();
            var container = document.getElementById("window"),
                slideImg = document.createElement("img"),
                next = document.createElement("img"),
                previous = document.createElement("img"),
                close = document.createElement("img"),
                title = document.createElement("div"),
                text = document.createTextNode("");

            slideImg.id = "slideImg";
            next.id = "next";
            previous.id = "previous";
            close.id = "close";
            title.id = "title";
            text.id = "text";

            close.src = "img/content/icons/delete.png";
            next.src = "img/content/icons/next.png";
            previous.src = "img/content/icons/previous.png";

            title.appendChild(text);
            container.appendChild(slideImg);
            container.appendChild(close);
            container.appendChild(next);
            container.appendChild(previous);
            container.appendChild(title);

            close.addEventListener("click", function() {show("none");});

            AEL();

       }

function AEL() {
        var imgs = document.getElementById("picsForSlideshow").getElementsByTagName("img");
        var spans = document.getElementById("picsForSlideshow").getElementsByTagName("span");

        difVariables.lastPicIndex = imgs.length;

            next.addEventListener("click", function() {
            picChanger (true);
            });

            previous.addEventListener("click", function(event) {
            picChanger (false);
            });

            function picChanger (flag) {
                //Немного работы со строкой для получения номера текущей картинки
                var currentPicNumber = parseInt(difVariables.currentPic.substr(3, difVariables.currentPic.length));

                if (flag) {
                    if(currentPicNumber === difVariables.lastPicIndex) {
                        currentPicNumber = 1;
                    } else {
                        currentPicNumber += 1;
                    }
                } else {
                   if(currentPicNumber === 1) {
                        currentPicNumber = difVariables.lastPicIndex;
                    } else {
                        currentPicNumber -= 1;
                    }
                }
                slideImg.src = "img/content/Europe/France/big" + currentPicNumber  +".jpg";
                title.innerHTML = (spans[currentPicNumber-1].innerHTML).toUpperCase();
                difVariables.currentPic = "big" + currentPicNumber;       
            }
          
        for(var i=0; i<difVariables.lastPicIndex; i++) {
            imgs[i].addEventListener("click", function(event) {    
            slideImg.src = "img/content/Europe/France/" + event.srcElement.alt +".jpg";
            title.innerHTML = event.srcElement.nextElementSibling.innerHTML.toUpperCase();
            difVariables.currentPic = event.srcElement.alt;
            show("block");});
    }
}
draftPopUp();
}

//window.onload = function() {
    popUpController();
//}