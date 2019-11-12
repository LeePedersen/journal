import { entry } from "./entry";

$(document).ready(function() {
  $('#entry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var textBody = $("#textBody").val();
    var output = entry(title, textBody);
    $('#results').append("<li>" + output + "</li>");
  });
});
