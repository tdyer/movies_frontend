$(document).ready(function(){
  // Reference to the DOM Element for the ul
  // movie list.
  var $movieList = $('#movies');

  // URL of the file that contains a list of movies
  //   var movies_url = 'http://localhost:5000/movies.json';
  var movies_url = 'http://localhost:3000/movies';

  $('#movies_button').on('click', function(event){
    // Make a HTTP Request
    $.ajax({
      url: movies_url,
      dataType: 'json'
    })
    .done(function(movies){

      console.log(movies);

      movies.forEach(function(movie){
        // create a list item with the movie name and insert it
        // into the <ul> for the movies.
        $movieList.append('<li>' + movie.name + '</li>');
      });
    })
    .fail(function(){
      alert("Error: something went wrong!");
    })

  });
});
