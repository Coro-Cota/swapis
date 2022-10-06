let residentsButton = document.querySelector("button")

const buttonClicked = (event) => {
    event.preventDefault();
    axios.get("https://swapi.dev/api/planets/2/")
    .then((response => {
        const resArray = response.data.residents
        console.log(response.data);
        for (let i = 0; i < resArray.length; i++) {
            axios.get(resArray[i])
            .then((response => {
                let resName = document.createElement("h2");
                // this references the <h2>
                console.log(response.data.name);
                resName.textContent=response.data.name
                document.body.appendChild(resName)
            }))
        }
    }))  
}

residentsButton.addEventListener("click", buttonClicked)

