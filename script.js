let lang = "en"

function toggleLang(){
lang = lang === "en" ? "hi" : "en"
loadNews()
}

async function loadNews(){

const row = document.getElementById("newsrow")
row.innerHTML = ""

const res = await fetch("articles.json")
const data = await res.json()

data.forEach(article => {

const title = lang === "en" ? article.title_en : article.title_hi
const summary = lang === "en" ? article.summary_en : article.summary_hi

const card = document.createElement("div")
card.className = "card"

card.innerHTML = `
<a href="frontend/article.html?id=${article.id}">
<img src="${article.image}">
<h3>${title}</h3>
<p>${summary}</p>
</a>
`

row.appendChild(card)

})

}

loadNews()