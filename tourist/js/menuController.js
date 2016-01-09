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

   window.onload = function() {
        menuController();
    }