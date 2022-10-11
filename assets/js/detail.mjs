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

function bidders(product, index){

  const todobidders = document.querySelector('#todoBidders');
  const fragment = todobidders.content.cloneNode(true);
  const element = fragment.querySelector('li');  
  element.style.borderBottom = "0.2rem solid gray";
  element.style.fontSize = "1.5rem";
  element.style.whiteSpace = "nowrap";
  element.style.width = "auto";
  element.style.height = "auto";
  
  

  const imgBidder = element.querySelector('img');
  imgBidder.style.borderRadius = "50%";
  imgBidder.style.width = "3rem";
  imgBidder.style.height = "3rem";

  imgBidder.src = product.imgBidders;

  const nameBidder = element.querySelector('.nameBidder');
  nameBidder.innerHTML = product.nameBidders;

  
  const priceBidder = element.querySelector('.priceBidder');
  priceBidder.innerText = `$${product.priceBidders}`;

  const serialBidder =  element.querySelector('.serialBidder'); 
  serialBidder.innerText = `${index + 1}.`;


  return element;
}

async function updateapi(){
  const inputName = document.querySelector('.inputName');
  const inputPrice = document.querySelector('.inputPrice');


  const newPost = {
    nameBidders: inputName.value,
    priceBidders: inputPrice.value
  }

  Post_Data(`${Datalink}/bidders`, newPost);

}

async function update() {

  const element = await Get_Data(`${Datalink}/category/${categoryId}`);
  buildProductElement(element);
  

  const listBidders = document.querySelector('.list-bidders');
  const productElement = await Get_Data(`${Datalink}/bidders`);
  const serialBidder =  document.querySelector('.serialBidder'); 


  let num = 0;
  for (let i = 0; i < productElement.length; i++) {
    for (let j = i + 1; j < productElement.length; j++) {
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
    productElement.forEach((element, index) => {  
      if (index >= 10) return;
      const e = bidders(element, index);
      listBidders.appendChild(e);
    })
  

  
}

const btnUpdate = document.querySelector('.btnUpdate');
btnUpdate.addEventListener('click', function (){
    // const loading = document.querySelector('.ok');
    // loading.style.display = "flex";
    updateapi()
});
update();


const container = document.querySelector('.site-section .container-bidder');
const contentPaddinng = document.querySelector('.site-section .container-bidder .row') 
let width = window.innerWidth;
if(width < 900) {
  container.classList.remove('container');
  container.classList.add('container-fluid');
  container.style.width = "85%";
  container.style.padding = "5rem 0";
  contentPaddinng.classList.remove('content-padding');    
}