import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
    $.get(`https://api.giphy.com/v1/gifs/7QRtWZrfoDiFy?api_key=${process.env.API_KEY}`).then(function(response) {
      console.log(response);
      $('#picture').append("<img src=" + `${response.data.images.original_still.url}` + ">");
    }).fail(function(error){
      $('#errors').text("There was an error processing your request. Please try again.");
    });

});
