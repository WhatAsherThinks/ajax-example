var input = document.querySelector('#user-gif-search');
var searchBtn = document.querySelector('#submit-gif-search');
var gifContainer = document.querySelector('#gif-result-container');


function findGifs(userInput){
fetch("https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=dc6zaTOxFJmzC&limit=5")
.then(function(response) {
  return response.json();
  })
  .then(function(response) {
    showGifs(response.data);
  });
}


function showGifs(data){
  gifContainer.innerHTML = '';
  for (var i = 0; i < data.length; i++) {
    var img = document.createElement('img');
    img.src = data[i].images.original.url;
    gifContainer.appendChild(img);
  }
}

if (input && searchBtn && gifContainer) {
  searchBtn.addEventListener('click', function(){
    var userInput = input.value;
    if(userInput !==''){
      findGifs(userInput);
    }

  })
}
