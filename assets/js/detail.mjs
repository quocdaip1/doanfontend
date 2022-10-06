import { Datalink, Get_Data } from "./utils.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const categoryId = urlParams.get("categoryId");

function buildProductElement(product) {

  const img = document.querySelectorAll(".carousel-item > img");
  img.forEach(element =>{
    element.src = product.imgGoods;
  })  
  const price = document.querySelector(".price strong");
  price.innerText = `$${product.price}`;

}

async function update() {
  const element = await Get_Data(`${Datalink}/category/${categoryId}`);
  console.log(element)
  buildProductElement(element);
}


setTimeout(update, 1000)