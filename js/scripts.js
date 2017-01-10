$(document).ready(function() {
  $("button#cat-button").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#dog-button").click(function() {
    $("ul#dog").prepend("<li>Growl!</li>");
    $("ul#cat").prepend("<li>Hiss!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("img#cat-pic").click(function() {
    $(this).after("<img src='img/meow.jpg' alt='A picture of a cat meowing'>");
    $(".cat-view").children("img").last().click(function() {
      $(this).remove();
    });
  });

  $("img#dog-pic").click(function() {
    $(this).after("<img src='img/bark.jpg' alt='A picture of a dog barking'>");
    $(".dog-view").children("img").last().click(function() {
      $(this).remove();
    });
  });
});
