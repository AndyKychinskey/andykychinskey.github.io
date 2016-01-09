    var currentPicPoint = 0;
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

     window.onload = function draftPopUp() {
            popUp();
            var container = document.getElementById("window");
            var slideImg = document.createElement("img");
            var next = document.createElement("img");
            var previous = document.createElement("img");
            var close = document.createElement("img");
            var title = document.createElement("div");
            var text = document.createTextNode("");

            slideImg.id = "slideImg";
            next.id = "next";
            previous.id = "previous";
            close.id = "close";
            title.id = "title";
            text.id = "text";

            close.src = "img/content/icons/delete.png";
            next.src = "img/content/icons/next.png";
            previous.src = "img/content/icons/previous.png";

            close.style.position = "absolute";
            close.style.width = "8%";
            close.style.height = "10%";
            close.style.right = "0.5%";
            close.style.top = "2%";
            close.addEventListener("click", function() {show("none");});

            next.style.position = "absolute";
            next.style.width = "10%";
            next.style.height = "15%";
            next.style.right = "0.5%";
            next.style.top = "40%";

            previous.style.position = "absolute";
            previous.style.width = "10%";
            previous.style.height = "15%";
            previous.style.left = "0.5%";
            previous.style.top = "40%";

            slideImg.style.position = "absolute";
            slideImg.style.left = "11.5%";
            slideImg.style.width = "75%";
            slideImg.style.height = "75%";
            slideImg.src = "img/content/Europe/France/big1.jpg";

            title.style.position = "absolute";
            title.style.width = "75%";
            title.style.bottom = "5%";
            title.style.left = "11.5%";  
            title.appendChild(text);

            container.appendChild(slideImg);
            //container.appendChild(close);
            container.appendChild(next);
            container.appendChild(previous);
            container.appendChild(title);

            AEL();

       }

function AEL() {
        var imgs = document.getElementsByTagName("img");
        var spans = document.getElementsByTagName("span");
        var title = document.getElementById("title");
        var next = document.getElementById("next");
        var previous = document.getElementById("previous");
        var lastPicIndex = imgs.length;

            next.addEventListener("click", function(event) {
            
            var lastPicIndex = imgs.length;

            //var currentPic = event.srcElement.alt;
            console.log(currentPicPoint);
            var currentPic = currentPicPoint;
            console.log(currentPic);

            //Немного работы со строкой для получения номера текущей картинки
            var number = parseInt(currentPic.substr(3, currentPic.length));

                if(number === (lastPicIndex - 5) ) {
                    number = 1;
                    slideImg.src = "img/content/Europe/France/big" + number  +".jpg";
                    title.innerHTML = (spans[number-1].innerHTML).toUpperCase();
                    currentPicPoint = "big" + number;
                } else {
                    number +=1;
                    slideImg.src = "img/content/Europe/France/big" + number  +".jpg";
                    currentPicPoint = "big" + number;
                    title.innerHTML = (spans[number-1].innerHTML).toUpperCase();
                }
            });

            previous.addEventListener("click", function(event) {
            
            var lastPicIndex = imgs.length;

            //var currentPic = event.srcElement.alt;
            var currentPic = currentPicPoint;
            //Немного работы со строкой для получения номера текущей картинки
            var number = parseInt(currentPic.substr(3, currentPic.length));

                if(number === 1 ) {
                    number = lastPicIndex - 5;
                    slideImg.src = "img/content/Europe/France/big" + number  +".jpg";
                    title.innerHTML = (spans[number-1].innerHTML).toUpperCase();
                    currentPicPoint = "big" + number;
                } else {
                    number -=1;
                    slideImg.src = "img/content/Europe/France/big" + number  +".jpg";
                    currentPicPoint = "big" + number;
                    title.innerHTML = (spans[number-1].innerHTML).toUpperCase();
                }
            });
            
        for(var i=1; i<lastPicIndex - 4; i++) {
        imgs[i].addEventListener("click", function(event) {
            var slideImg = document.getElementById("slideImg");
            var title = document.getElementById("title");
            
            slideImg.src = "img/content/Europe/France/" + event.srcElement.alt +".jpg";
            title.innerHTML = event.srcElement.nextElementSibling.innerHTML.toUpperCase();


            currentPicPoint = event.srcElement.alt;


            show("block");});
    }


}



/*
    window.onload = function() {
        var imgs = document.getElementsByTagName("img");
        imgs[2].addEventListener("click", show("block"));
    }
*/

/*
    window.onload = function () {
        var imgs = document.getElementsByTagName("img");
        for (var i=1; i<imgs.length; i++) {   // Начинаем считать с 1го, чтобы исключить хедер
                       imgs[i].addEventListener("click", popUpCreate);
        }

    }

            function popUpCreate(event){
           // console.log(event.nextSibling);  // Для получения текста, который можно вставить под картинку
            console.log(event.srcElement.nextElementSibling);
            
            popUp();
            
            var container = document.getElementById("window");

            var slideImg = document.createElement("img");
            var next = document.createElement("img");
            var previous = document.createElement("img");
            var close = document.createElement("img");
            var title = document.createElement("div");
            var text = document.createTextNode(event.srcElement.nextElementSibling.innerHTML.toUpperCase());

            close.src = "img/content/icons/delete.png";
            next.src = "img/content/icons/next.png";
            previous.src = "img/content/icons/previous.png";

            close.style.position = "absolute";
            close.style.width = "8%";
            close.style.height = "10%";
            close.style.right = "0.5%";
            close.style.top = "2%";
            close.addEventListener("click", function() {show("none");});

            next.style.position = "absolute";
            next.style.width = "10%";
            next.style.height = "15%";
            next.style.right = "0.5%";
            next.style.top = "40%";
            close.addEventListener("click", function() {
                slideImg.src = "img/content/Europe/France/" + imgs[i+1].alt +".jpg";
            });

            previous.style.position = "absolute";
            previous.style.width = "10%";
            previous.style.height = "15%";
            previous.style.left = "0.5%";
            previous.style.top = "40%";

            slideImg.style.position = "absolute";
            slideImg.style.left = "11.5%";
            slideImg.style.width = "75%";
            slideImg.style.height = "75%";
            slideImg.src = "img/content/Europe/France/" + event.srcElement.alt +".jpg";

            title.style.position = "absolute";
            title.style.width = "75%";
            title.style.bottom = "5%";
            title.style.left = "11.5%";  
            title.appendChild(text);

            container.appendChild(slideImg);
            container.appendChild(close);
            container.appendChild(next);
            container.appendChild(previous);
            container.appendChild(title);
            
            show("block");
       }


       */

