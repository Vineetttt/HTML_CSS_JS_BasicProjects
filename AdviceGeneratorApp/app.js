/*fetching advice ID and Content from the API and displaying it using DOM*/
const adviceFetch = async () => {
    const temp = await fetch("https://api.adviceslip.com/advice")
    const dataFetched = await temp.json()

    document.getElementById("number").innerHTML = "Advice #" + dataFetched.slip.id
    document.getElementById("content").innerHTML = '" ' + dataFetched.slip.advice + ' "'
}
adviceFetch()
