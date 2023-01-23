console.log("Let's get this party started!");

const $searchB = $(`#searchB`);
$searchB.on(`click`, function(e){
    e.preventDefault();

    let $search = $(`#search`)
    searchGIF($search.val());
})

async function searchGIF(value) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    const data = (res.data.data);
    const randomURL = (data[Math.floor(Math.random()*data.length)].images.original.url);
    appendGIF(randomURL);
}

function appendGIF(link){
    const $results = $(`#results`);
    $(`<img>`, {src: link}).appendTo($results);
}

const $removeB = $(`#removeB`);
$removeB.on(`click`, function(e){
    e.preventDefault();

    $(`#results`).empty()
})