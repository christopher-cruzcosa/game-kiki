const fetch = require("fetch");

let baseSearchUrl = "https://api.rawg.io/api/games?key=";
let apiKey = "72506a506521467da93378cfb7fc9829";
let searchString;
// const searchQueryURL = baseSearchUrl + apiKey + "&search=" + searchString + "&ordering=-rating&exclude_additions=true";

let baseGameDetailsUrl = "https://api.rawg.io/api/games/";
let gameId;
const gameDetailsURL = baseGameDetailsUrl + gameId + "?key=" + apiKey;


function getGameSearchResults(searchText) {
  let baseSearchUrl = "https://api.rawg.io/api/games?key=";
  let apiKey = "72506a506521467da93378cfb7fc9829";
  const searchQueryURL = baseSearchUrl + apiKey + "&search=" + searchText + "&ordering=-rating&exclude_additions=true";
  console.log(searchQueryURL);

  // $.ajax({
  //   url: searchQueryURL,
  //   method: "GET",
  // }).then( (data) => {
  //   return data.results
  // })
  //   .catch((err) => {
  //     console.log(error)
  //   })

  fetch.fetchUrl(
    searchQueryURL,
    {
    method: "GET",
    headers: {
      Accept: 'application/json',
    },
  }, (data) => {
    console.log(data);
    // return data;
  })
  // .then(function (data) {
  //   return data.results
  // })
  // .catch((err) => {
  //   console.log(error)
  // })
};

function getGameDetails(gameId) {
  gameId = gameId;

  $.ajax({
    url: gameDetailsURL,
    method: "GET",
  }).then(function (data) {
    return data
  })
    .catch((err) => {
      console.log(error)
    })
};

exports.getGameSearchResults = getGameSearchResults;
exports.getGameDetails = getGameDetails;