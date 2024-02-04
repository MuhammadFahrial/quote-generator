const btnGen = document.getElementById("btn-generate");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

async function quotesGenerator(random) {
  const res = await fetch(`https://dummyjson.com/quotes/${random}`);
  const data = await res.json();

  quote.innerHTML = '" ' + data.quote + ' "';
  author.innerHTML = '" ' + data.author + ' "';
}

btnGen.addEventListener("click", () => {
  quotesGenerator(Math.ceil(Math.random() * 1454) + 1);
});
