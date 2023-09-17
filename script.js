
getthiData = (number)=>{

    const apiUrl = "https://api-thirukkural.vercel.app/api";

    const Full_Url = `${Url}?num=${number}`;

    const thiPromise = fetch(Full_Url);

    console.log(Full_Url)

    return thiPromise.then((response)=>{
        return response.json()
    })

}
function searchNumber(){
    const number =  document.getElementById("num-input").value;

    getthiData(number)

    .then((response) =>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}