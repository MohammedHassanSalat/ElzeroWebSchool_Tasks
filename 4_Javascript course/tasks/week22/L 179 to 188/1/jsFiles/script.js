function getData() {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        myRequest.open(
        "GET",
        "https://api.jsonbin.io/v3/b/66ee6e85e41b4d34e4343dde",
        true
        );
        myRequest.setRequestHeader(
        "X-Master-Key",
        "$2a$10$EVIqwmJ5Apsmrh/A.Dy1UetIuRdftwyPmnS3.EFmM8BByYnk7nyUS"
        );
        myRequest.send();

        myRequest.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                let response = JSON.parse(this.responseText);
                resolve(response.record); // Resolve with the actual data array
            } else {
                reject(new Error(this.response));
            }
        };
    });
}

getData().then(
    (mainData) => {
        mainData.length = 5;
        for (let i = 0; i < mainData.length; i++) {
            document.write(`
                <div id="data">
                    <div>
                        <h3>${mainData[i].title}</h3>
                        <p>${mainData[i].description}</p>
                    </div>
                </div>
            `);
        }
    },
    (error) => console.log(error)
);
