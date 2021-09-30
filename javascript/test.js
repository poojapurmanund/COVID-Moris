function getData(){
    const API_ENDPOINT = "https://pomber.github.io/covid19/timeseries.json";

    fetch (API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => processData(data))
    .catch((err) => errorHandling(err));
}

function processData(data){
    // console.table(data);
    getMauritiusData(data);
}

function errorHandling(){
    console.log("An error occurred");
}

function extract(data){
    var MUData = data["Mauritius"].slice(-1);
    

}

function getMauritiusData(data){

    var MUData = data["Mauritius"].slice(-1);
    var Mudata1 = MUData[0];

    var confirmed = document.getElementById('confirmed');
    confirmed.innerHTML="Confirmed: "+Mudata1['confirmed'];
    var deaths = document.getElementById('deaths');
    deaths.innerHTML="Deaths: "+Mudata1['deaths'];
    var recovered = document.getElementById('recovered');
    recovered.innerHTML="Recovered: "+Mudata1['recovered'];

    console.log(MUData);

}
getData();