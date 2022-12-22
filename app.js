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
