console.log("Let's get this party started!");
const $searchKey = $("#search");
const $searchBtn = $("#searchBtn");
const $deleteBtn = $("#deleteBtn");
const $gifCell = $("#gifCell");

// using Ajax to add the gif
function addGif(res) {
    let gifNumber = res.data.length;
    if (gifNumber) {
        let randomIndx = Math.floor(Math.random() * gifNumber);
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", {
            src: res.data[randomIndx].images.original.url,
            class: "w-100"
        });
        $newCol.append($newGif);
        $gifCell.append($newCol);
        console.log('gif added');
    }
}

// click handle for submit 
$("form").on('submit', async function (evt) {
    evt.preventDefault();

    let searchValue = $searchKey.val();
    $searchKey.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchValue,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);
});

// delete gif
$("#deleteBtn").on("click", function () {
    $gifCell.empty();
    console.log('gifs gone')
})




