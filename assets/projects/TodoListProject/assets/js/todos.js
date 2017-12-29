// Check off todos by clicking
$("ul").on("click", "li", function() {
  // if li is gray, turn it back to black
  $(this).toggleClass("completed");
});

// Click on X to delete the todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut("slow", function() {
    $(this).remove();
  });
  event.stopPropagation();

});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    // get the entered todo
    var enteredTodo = $(this).val();
    // clear the input text
    $(this).val("");
    // set the entered todo to
    $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + enteredTodo + "</li>");
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
