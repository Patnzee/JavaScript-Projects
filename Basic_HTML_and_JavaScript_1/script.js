fetch("https://play.google.com/log?format=json", {
    mode: "no-cors"
})
.then(response => console.log(response))
.catch(error => console.error("Fetch Error:", error));
