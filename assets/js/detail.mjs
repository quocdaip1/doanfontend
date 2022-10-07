import { Datalink, Get_Data } from "./utils.js";
import { Post_Data, Delete_Data } from "./utils.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const categoryId = urlParams.get("categoryId");

function buildProductElement(product) {

  const imgItem = document.querySelectorAll(".carousel-item > img");
  imgItem.forEach(element =>{
    element.src = product.imgGoods;
  })
  
  const imgBackground = document.querySelector(".intro-section");
  imgBackground.style.backgroundImage = `url(${product.imgGoods})`;

  const price = document.querySelector(".price strong");
  price.style.fontSize = "1.5rem";
  price.innerText = `$${product.price}`;

  const imgOwner = document.querySelector('.box-bottom > img');
  imgOwner.src = product.imgOwner;
  const nameOwner = document.querySelector('.box-bottom > h4');
  nameOwner.innerText = product.nameOwner;

}

function bidders(product){

  const todobidders = document.querySelector('#todoBidders');
  const fragment = todobidders.content.cloneNode(true);
  const element = fragment.querySelector('li');  
  element.style.borderBottom = "0.2rem solid gray";
  element.style.fontSize = "1.5rem";
  element.style.whiteSpace = "nowrap";
  element.style.width = "auto";
  element.style.height = "auto";
  
  

  const idBidder = element.querySelector('.idBidder');
  const imgBidder = element.querySelector('img');
  imgBidder.style.borderRadius = "50%";
  imgBidder.style.width = "3rem";
  imgBidder.style.height = "3rem";

  imgBidder.src = product.imgBidders;

  const nameBidder = element.querySelector('.nameBidder');
  nameBidder.innerHTML = product.nameBidders;

  
  const priceBidder = element.querySelector('.priceBidder');
  priceBidder.innerText = `$${product.priceBidders}`;


  return element;
}

async function update() {
  const element = await Get_Data(`${Datalink}/category/${categoryId}`);
  buildProductElement(element);
  

  const listBidders = document.querySelector('.list-bidders');
  const productElement = await Get_Data(`${Datalink}/bidders`);

  let num = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
        if(productElement[i]['priceBidders'] < productElement[j]['priceBidders']) {
            num = productElement[i];
            productElement[i] = productElement[j];
            productElement[j] = num;
        }
    }
  }
  const max =  productElement[0]['priceBidders'];
  const Price = document.querySelector('.site-section .price strong');
  Price.innerText = `$${max}`;


  listBidders.innerText ="";
    productElement.forEach(element => {
       const e = bidders(element);
       listBidders.appendChild(e);
    })


  
}



update()