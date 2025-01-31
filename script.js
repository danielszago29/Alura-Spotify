
const searchInput = document.getElementById('search-input');

const resultsArtists = document.getElementById('result-artists');

const resultsPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
    .then((response)=> response.json())
    //.then((result)=> displayResults(result))
}

document.addEventListener("input",function(){
    const searchTerm = searchInput.ariaValueMax.toLocaleLowerCase();
    if(searchTerm === ''){
        resultsPlaylist.classList.add('hidden');
        resultsArtists.classList.remove('hidden');

        return;
    }
    requestApi(searchTerm);
} );