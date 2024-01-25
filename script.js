function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;

  fetch(url)
    .then((response) => response.json())
    .then((result) => console.log(result));
}

requestApi("m")
