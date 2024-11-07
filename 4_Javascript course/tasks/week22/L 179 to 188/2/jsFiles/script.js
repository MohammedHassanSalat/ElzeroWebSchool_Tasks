async function getData() {
    try {
        let response = await fetch(
        "https://api.jsonbin.io/v3/b/66ee6e85e41b4d34e4343dd",
        {
            method: "GET",
            headers: {
                "X-Master-Key": "$2a$10$EVIqwmJ5Apsmrh/A.Dy1UetIuRdftwyPmnS3.EFmM8BByYnk7nyUS",
            },
        }
        );

        if(!response.ok){
            console.log("Error");
        }

        let data = await response.json();
        return data.record; // Return the actual data array
    } catch (error) {
        console.log("Error: " + error);
    }
}

getData().then((mainData) => {
    if (mainData) {
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
    }
});
