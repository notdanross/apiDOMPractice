const resp = fetch('https://randomuser.me/api/?results=10')

;

resp.then(
    function(x){
    return x.json();
    }
).then(
    function(y){
        console.log(y);
        for (let z = 0; z < y.results.length; z++){
        console.log(y["results"][z]["name"]["first"]);
        console.log(y["results"][z]["name"]["last"]);
        document.getElementById("fullName").innerHTML = 
        y["results"][z]["name"]["first"] + " " + y["results"][z]["name"]["last"]; 
        document.getElementById("photo").src = 
        y["results"]["0"]["picture"]["large"];
        };
    }
)


  