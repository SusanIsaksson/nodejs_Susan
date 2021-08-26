//Vi vill göra ett anrop när vi trycker(onclick) på texten:
async function collectText() {
    //console.log("TEST") //kollar om funktionen fungerar
    const textToDisplay = await makeRequest("http://localhost:3000/api", "GET") //ingen body
    //printa ut texten på skärmen
    const header = document.getElementsByTagName("h3") [0]
    header.innerText = textToDisplay
}

//Vi vill spara nytt input "POST"
async function saveNew() {
    //console.log("TEST") //kollar om funktionen fungerar /{} = object
    const status = await makeRequest("http://localhost:3000/api", "POST", {brand: "audi"}) //ingen body
    console.log(status)
}


// HÄmta med fetch - gör anrop och sparar i response
// async + await - lägg till try + catch
async function makeRequest(url, method, body) {
    try {
        const response = await fetch(url, {
            headers: {"Content-Type": "application/json"},
            method,
            body: JSON.stringify(body)  //för att komma förbi undefined
        })
        console.log(response)
        const result = await response.json()

        return result

    }   catch(err) {
        console.log(err)
    }
}