function getTextFile() {
  // Text dosyasından veri alma
  // Dosyanın adresini yazıyoruz
  fetch("example.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
getTextFile();

function getJsonFile() {
  // Local bir json dosyasından veri alma
  // Dosyanın adresini yazıyoruz
  fetch("example.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
getJsonFile();

function getExternalApi() {
  // Globaldaki bir api'den veri alma
  // Dosyanın adresini yazıyoruz
  fetch("http://api.exchangeratesapi.io/latest")
    .then((response) => response.json())
    .then((data) => console.log(data.error.type))
    .catch((err) => console.log(err));
}
getExternalApi();
