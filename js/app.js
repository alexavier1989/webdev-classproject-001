//JavaScript

function changeBackgroundByAuthor(){
    // TODO: Change de background image by quote author
}

function callFunctionByTime(apiUrl, time) {

    async function fetchData() {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`Error in the response: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            let quote = document.querySelector(".quote");
            let author = document.querySelector(".author");

            quote.innerHTML = data[0].quote;
            author.innerHTML = data[0].author;
            changeBackgroundByAuthor();

        } catch (error) {
            console.error('API error: ', error);
        }
    }

    fetchData();
    setInterval(fetchData, time);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("La página se ha cargado completamente");
    const apiUrl = "https://api.breakingbadquotes.xyz/v1/quotes";
    callFunctionByTime(apiUrl, 6000);
})

