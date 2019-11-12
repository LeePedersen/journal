import { entry } from "./entry";

$(document).ready(function() {
  $('#entry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var textBody = $("#textBody").val();
    var newEntry = Entry(title, textBody);
    var vowelNumber = newEntry.vowels();
    var consonantNumber = newEntry.consonants();
    var teaser = newEntry.getTeaser();
    $('#results').append("<li>" + newEntry + "</li>" + "<li>" + vowelNumber + "</li>" + "<li>" + consonantNumber + "</li>" + "<li>" + teaser + "</li>");
  });
});
