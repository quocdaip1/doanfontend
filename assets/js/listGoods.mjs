import { Datalink } from "./utils.js";
import { Get_Data } from "./utils.js";


function buildProductElement(product) {
    const goodsTemplate = document.querySelector('#productTemplate');
    const fragment = goodsTemplate.content.cloneNode(true);
    const goods = fragment.querySelector('.card-wrapper');
    goods.style.padding = "0 1rem";

    const nameProduct = goods.querySelector('.title');
    nameProduct.innerText = product.nameGoods; 

    const imgProduct = goods.querySelector('.card-img > img');
    imgProduct.src = product.imgGoods;

    const quanlityBidders = goods.querySelector('.quanlityBidders');
    quanlityBidders.innerText = `${product.quanlityBidders} bids`;
    quanlityBidders.style.fontSize = "1.5rem"

    const category = goods.querySelector('.category');
    category.innerText = product.Category;
    category.style.fontSize = "1.5rem";

    const circle = goods.querySelector('.circle');
    const priceProduct = goods.querySelector('.price');
    circle.style.backgroundColor = "#f37121";
    circle.style.borderRadius = "50%";
    circle.style.width = "8rem"
    circle.style.height = "8rem"
    priceProduct.style.fontSize = '2rem';
    priceProduct.style.color = "white"
    priceProduct.style.fontWeight = "bolder"
    priceProduct.innerText = `$${product.price}`;

    const link = goods.querySelector('a');
    link.href = `./assets/pages/details.html?categoryId=${product.id}`;

    return goods;
}


async function update(){
    const goodsList = document.querySelector('.goods-list');
    const data = await Get_Data(`${Datalink}/category`);
    goodsList.innerText = "";
    data.forEach((element,index) => {
        if(index >= 8) return;
        const productElement = buildProductElement(element);
        goodsList.appendChild(productElement);
    });
}
update();