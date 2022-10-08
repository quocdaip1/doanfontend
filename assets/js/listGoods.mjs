import { Datalink } from "./utils.js";
import { Get_Data } from "./utils.js";


function buildProductElement(product) {
    const goodsTemplate = document.querySelector('#productTemplate');
    const fragment = goodsTemplate.content.cloneNode(true);
    const goods = fragment.querySelector('.card-wrapper');

    const nameProduct = goods.querySelector('.title');
    nameProduct.innerText = product.nameGoods; 

    const imgProduct = goods.querySelector('.card-img > img');
    imgProduct.src = product.imgGoods;

    const priceProduct = goods.querySelector('.price');
    priceProduct.style.fontSize = '1.5rem';
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