console.log("script runs")
document.addEventListener("submit", async () => {
    try{
    const cur = document.getElementById("cur")
    const amount = document.getElementById("amount")
    const body = await fetch(`https://v6.exchangerate-api.com/v6/bfadb49445370093e697b599/latest/${cur.value}`).then((response) => response.json())
    const form = document.getElementsByTagName("form")[0]
    const pElement = document.createElement("p")
    console.log(body["conversion_rates"]["USD"])
    for (let key in body.conversion_rates){
        if (cur.value != String(key))
            pElement.innerHTML = pElement.innerHTML+ `${key}: ${body["conversion_rates"][key]*amount.value} <br>`
    }
    form.insertAdjacentElement("afterend", pElement)
    } catch(err)
    {
        console.error("Error fetching data from source", err)
    }

})
