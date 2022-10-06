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
    priceProduct.innerText = `$${product.price}`;

    return goods;
}


async function update(){
    const goodsList = document.querySelector('.goods-list');
    const data = await Get_Data(`${Datalink}/category`);
    data.forEach(element => {
        const productElement = buildProductElement(element);
        goodsList.appendChild(productElement);
    });
    
}
update();