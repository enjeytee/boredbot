// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(response => response.json())
//     .then(data => console.log(data))

document.getElementById("get-activity-button").addEventListener(
    "click",() => {
        fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("activity").textContent = data.activity
            document.getElementById("title").textContent = "🦾 HappyBot🦿"
            document.body.classList.add("fun")
        })
    }
)