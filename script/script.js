(function () {
    let intro = document.querySelector(".intro");
    let menuButton = document.querySelector(".mainNav__menuButton");

   function moveBackground(e) {
       intro.style.backgroundPositionX = e.pageX/100+'px';
   }

    function menuButtonActivate() {
        let x = document.querySelector(".mainNav");
        if (x.className === "mainNav") {
            x.className += " mainNav_mobile";
        } else {
            x.className = "mainNav";
        }
    }

document.addEventListener('mousemove', moveBackground);
menuButton.addEventListener('click', menuButtonActivate)
})();
