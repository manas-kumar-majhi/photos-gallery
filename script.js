var imgBox = document.getElementById("imgBox");
    var fullImg = document.getElementById("fullImg");

    function openFullImg(pic){
      imgBox.style.display = "flex";
      fullImg.src = pic;
    }

    function closeFullImg(){
      imgBox.style.display = "none";
    }

    var tl = gsap.timeline()

    tl.from("h3",{
        x: -100,
        durration: 2,
        delay: 1,
        opacity: 0
    })

    tl.from("h4",{
      y: 50,
      delay:0.5
      
      
    })