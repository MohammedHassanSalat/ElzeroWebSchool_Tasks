let myRequest = new XMLHttpRequest();
myRequest.open(
    "GET",
    "https://api.jsonbin.io/v3/b/66ed5b49ad19ca34f8a98558",
    true
);
myRequest.setRequestHeader(
    "X-Master-Key",
    "$2a$10$EVIqwmJ5Apsmrh/A.Dy1UetIuRdftwyPmnS3.EFmM8BByYnk7nyUS"
);
myRequest.send();

myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        let mainData = response.record;
        for (let i = 0; i < mainData.length; i++) {
            mainData[i].Category = "All";
        }
        console.log(mainData);            
        console.log("Data Loaded");
    }
};




// upload your json file on JSONBin.io and then use it
