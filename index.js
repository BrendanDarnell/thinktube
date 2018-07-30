const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';

const API_KEY = 'AIzaSyD3nAYj0hHSAi8kbDfbNVGudRpQNF7Q2j4';

function getDataFromApi(searchterm,callback) {
  query = {
    part: 'snippet',
    key: API_KEY,
    q: searchterm,
  }

  $.getJSON(YOUTUBE_URL,query,callback)

}


function showThumbnail(url,id) {
  $('.thumbnail-container').append(
    `<div class="thumbnail">
      <a href="https://www.youtube.com/watch?v=${id}">
      <img src="${url}" alt="thumbnail">
      </a>
    </div>`
  )
}

function renderResults(data) {
  data.items.map(function(item,index){
    let url = item.snippet.thumbnails.medium.url;
    let id = item.id.videoId;
    console.log(id);
    showThumbnail(url,id);  
    
  })
}


function handleUserSearch(){
  $('button').on('click keypress', function(event){
    event.preventDefault();
    $('.thumbnail').remove();
    let searchterm = $('input').val();
    getDataFromApi(searchterm,renderResults);
    $('input').val(' ');
  })
}


$(handleUserSearch);


