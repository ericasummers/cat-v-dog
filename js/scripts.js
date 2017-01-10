$(document).ready(function() {
  $("button#cat-button").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");
  });

  $("button#dog-button").click(function() {
    $("ul#dog").prepend("<li>Growl!</li>");
    $("ul#cat").prepend("<li>Hiss!</li>");
  });
});
