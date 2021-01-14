let typed = new Typed(".type", {
  strings: ["Ahmed Elshafei", "A Front-end DEVELOPER", "A FREELANCER"],
  typeSpeed: 60,
  backSpeed: 60,
  backdelay: 500,
  loop: true,

  smartBackspace: true, // Default value
});
function indexOffElement(element) {
  try {
    return Math.round($(`${element}`).offset().top);
  } catch {
    return 0;
  }
}
/**************nav event ***************** */
$("#btnUp").click(() => {
  $("html,body").animate({ scrollTop: "0" }, 1000);
});
$(".nav-link[href^='#']").click((e) => {
  let hrefVall = $(e.target).attr("href");
  let offset = indexOffElement(hrefVall);
  $("html,body").animate({ scrollTop: offset }, 1200);
});
/**************scroll event ***************** */
let flag = false; //to stop count after first time
$(window).scroll(() => {
  let scrollOffset = Math.round($(window).scrollTop());
  if (scrollOffset >= indexOffElement("#about") - 300) {
    $("#main-nav").css({
      backgroundColor: "rgba(0,0,0,.7)",
      padding: "0px 50px",
    });
    $("#btnUp").fadeIn(700);
  } else {
    $("#main-nav").css({ backgroundColor: "transparent", padding: "0px" });
    $("#btnUp").fadeOut(700);
  }
  if (scrollOffset >= indexOffElement("#work") - 300 && flag == false) {
    startCount();
    flag = true;
  }
});

/*********************color box ******************** */
for (let i = 0; i < $(".colorChange").length; i++) {
  $(".colorChange")
    .eq(i)
    .css(
      "backgroundColor",
      `rgb(${Math.round(Math.random() * 255)},
                           ${Math.round(Math.random() * 255)},
                           ${Math.round(Math.random() * 255)})`
    );
}
/********************icon boxColor event ****************** */
$("#colorIcon").click(() => {
  if ($("#colorContainer").css("left") >= "0px") {
    $("#colorContainer").animate(
      { left: `-${$(".colorBox").outerWidth()}` },
      1000
    );
  } else {
    $("#colorContainer").animate({ left: "0" }, 1000);
  }
});

/*************select color ***************************/
$(".colorChange").click((e) => {
  let bgColor = $(e.target).css("backgroundColor");
  console.log(bgColor);
  $("p,h3,a").css("color", `${bgColor}`);
});

/**************scroll event in counter ***************** */

function startCount() {
  setCounter(7, "#WORKS", 500);
  setCounter(70, "#Visted", 60);
  setCounter(80, "#clients", 50);
  setCounter(100, "#freelancing", 30);
}
function setCounter(speed, element, lmit) {
  let count = 0;
  let timeInterval = setInterval(() => {
    count++;
    if (count == lmit) clearInterval(timeInterval);
    $(element).text(count);
  }, speed);
}
