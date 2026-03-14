let lang = "en"

async function loadNews(){

const container = document.getElementById("newsrow")
const ticker = document.getElementById("ticker")

try{

const res = await fetch("./articles.json")
const data = await res.json()

container.innerHTML = ""

let tickerText = "BREAKING • "

data.forEach(article => {

tickerText += article.title_en + " • "

const card = document.createElement("div")

card.innerHTML = `

<div style="background:#13284d;padding:16px;border-radius:10px;margin-bottom:20px">
<img src="${article.image}" style="width:100%;border-radius:8px">
<h3>${article.title_en}</h3>
<p>${article.summary_en}</p>
<a href="frontend/article.html?id=${article.id}" style="color:#4ea3ff">Read full article</a>
</div>
`container.appendChild(card)

})

ticker.innerText = tickerText

}catch(e){

container.innerHTML = "News failed to load"

}

}

loadNews()