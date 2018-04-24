import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`).then(function(response) {
      $('.showHumidity').append("<img src=" + `${response.data.images.source.url}` + ">");
    }).fail(function(error){
      $('#errors').text("There was an error processing your request. Please try again.");
    });
  });
});
