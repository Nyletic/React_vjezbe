$(function () {
  $("#input").change(function () {
    let input = $(this).val();
    $("ul").append(`<li>${input} <i class="fa-solid fa-check"></i> 
    <i class="fa-solid fa-trash"></i></li>`);
    $(this).val("");
  });
});

$("ul").on("click", ".fa-trash", function () {
  $(this).parent("li").fadeOut(300);
});

$(".fa-check").click(function () {
  $(this).parent("li").toggleClass("checked");
});
