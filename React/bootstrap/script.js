/* $(function () {
  $("#btn1").hide();
  $("#btn2").hide(2200).show(1000);
  $("#btn3").slideUp(1000).slideDown(500);
}); */

/* $(function () {
  $(".col-sm-4:first-child").css({
    color: "yellow",
    fontWeight: "bold",
  });
});

$(function () {
  $("#btn1").html("gumbić 1");
}); */

/* $("#btn1").on("click", function () {
  $(".red").slideToggle(300);
});

$("#btn2").on("mouseover", function () {
  $(".blue").slideToggle(300);
}); */

$(".panel-button").on("click", function () {
  const panelID = $(this).attr("data-panel-class");
  $("." + panelID).slideToggle(300);
});
