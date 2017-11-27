fetch("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5")
.then(function(response) {
  return response.json();
  })
  .then(function(response) {
    showGifs(response.data)
  });

function showGifs(data){
  for (var i = 0; i < data.length; i++) {
    var img = document.createElement('img');
    img.src = data[i].images.original.url;
    document.body.appendChild(img);
  }
}
