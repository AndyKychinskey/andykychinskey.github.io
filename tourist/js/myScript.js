	var paper = Raphael("mapArea", 800, 500),
        countryNames = {};
        var objects = [];

	var attr = {
		attr1: {
			stroke: "#74675C",
			"stroke-width": 1,
			fill: "#FC0"
		},
		attr2: {
			stroke: "#8B4513",
			"stroke-width": 1,
			fill: "#CD853F",
			'stroke-linejoin': 'round'
		}

	};

/*
	for (var i=1; i<39; i++) {
		area[0] = paper.path(paths["obj" + i]["path"]);
		area[0].scale(13,13, [-15], [0]);
		ev(area[0]);
		area[0].attr(attr["attr2"]);
		/*
		if(i===1) {
		area[0].attr(attr["attr1"]);
		} else {
		area[0].attr(attr["attr2"]);
		}
		*/
//	}

        function drawMap(scaleFactorX, scaleFactorY) {
                for( var country in paths) {
                var obj = paper.path(paths[country]["path"]);
                obj.scale(scaleFactorX,scaleFactorY, [0], [0]);
                obj.attr(attr["attr2"])
                countryNames[obj.id] = country;
                objects[obj.id] = obj;
                ev(obj);
                console.log(obj);
                }
        }

/*        function clearMap() {
                for( var i = 0; i<objects.length; i++) {
                    objects[i].remove();
                }
        }
*/

//Добавляем события к объектам

		function ev(o, event) {
			o[0].onmouseover = function () {
                var color = "#FCE588";
                o.animate({fill:color}, 250);
               // txt = paper.text(50,50, "First");

                var event = event || window.event;
                var point = []; point[0] = event.pageX; point[1] = event.pageY;

                o[0].style.cursor = "pointer";

                $('#mapArea').after($('<div />').addClass('point'));
                $('.point')
                .html(paths[countryNames[o.id]]["name"])
                .prepend($('<img />').attr('src', 'countryFlags/'+paths[countryNames[o.id]]["pathName"]+'.png'))
                .css({
                    position: "absolute",
                    fontFamily: "Lobster",
                    left: point[0]-110,
                    top: point[1]-330,
                    })
                .fadeIn();

            };

           o[0].onmouseout = function () {
                var color = "#CD853F";
                o.animate({fill: color}, 250);
                $('#mapArea').next('.point').remove();

            };
            o[0].onclick = function () {
                var color = "#F00";
                o.animate({fill: color}, 250);

                document.location.href = "EuropeFrance.html";
            };

	}

 /*       function calcScaleCoefficients() {
            var etalonHeight = 977;
            var etalonWidth = 1133;
            var etalonCoef = 13;
            var height = document.body.clientHeight;
            var width = document.body.clientWidth;
            var currentH = (height/977)*13;
            var currentW = (width/1133)*13;
            //var result = [currentH, currentW];
            var result; if(currentH>currentW) {
                result = currentW;
            } else {
                result = currentH;
            }
            return result;
        }
*/

    window.onload = function() {
        drawMap(13,13);
        carousel();
        menuController();
    }/*
    window.onresize = function() {
        clearMap();
        var coeffs = calcScaleCoefficients();
        //drawMap(coeffs[0], coeffs[1]);
        drawMap(coeffs, coeffs);
    }*/

    // Организация "карусели" на фронтальном листе
    function carousel() {
    var count = 0;
    var imgs =document.getElementsByClassName("picForRoll");
    var paragraphs =document.getElementsByClassName("pForRoll");
    var arrowLeft = document.getElementById("arrowLeft");    
    var arrowRight = document.getElementById("arrowRight");
    var pContainer = document.getElementById("pContainer");
    pContainer.style.overflow = "auto";
    arrowRight.addEventListener("click", function(){
       // this.style.boxShadow = "2px 3px 1px 1px #B5917C";
        if (count < imgs.length-1) {
            imgs[count].style.display = "none";
            imgs[count+1].style.display = "block";
            paragraphs[count].style.display = "none";
            paragraphs[count+1].style.display = "block";
            count +=1;
        } else {
            imgs[count].style.display = "none";
            paragraphs[count].style.display = "none";
            count = 0;
            imgs[count].style.display = "block";
            paragraphs[count].style.display = "block";
        }
   // this.style.boxShadow = "none";

    });
    arrowLeft.addEventListener("click", function(){
    //this.style.boxShadow = "-2px 3px 1px 1px #B5917C";
        if (count > 0 && count < imgs.length) {
            imgs[count].style.display = "none";
            imgs[count-1].style.display = "block";
            paragraphs[count].style.display = "none";
            paragraphs[count-1].style.display = "block";
            count -=1;
        } else {
            imgs[count].style.display = "none";
            paragraphs[count].style.display = "none";
            count = imgs.length-1;
            imgs[count].style.display = "block";
            paragraphs[count].style.display = "block";
        }
   // this.style.boxShadow = "none";

    });
    }

    function menuController() {
        var nav = document.getElementsByTagName("nav");
        var close = document.getElementById("delete");
        var menu = document.getElementById("menu");

        menu.addEventListener("click", function(){
            //menu.style.display = "none";
            nav[0].style.left = "0";
        });

        close.addEventListener("click", function(){
            //menu.style.display = "block";
            nav[0].style.left = "-60%";
        });
    }
   // carousel();
