import { Entry } from "./entry";
import './styles.css';

$(document).ready(function() {
  $('form#entry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var textBody = $("#textBody").val();
    var newEntry = new Entry(title, textBody);
    var newEntryLength = newEntry.wordNumber;
    var vowelNumber = newEntry.vowels();
    var consonantNumber = newEntry.consonants();
    var teaser = newEntry.getTeaser();
    $('#results').append("<li>" + newEntryLength + "</li>" + "<li>" + vowelNumber + "</li>" + "<li>" + consonantNumber + "</li>" + "<li>" + teaser + "</li>");
  });
});
