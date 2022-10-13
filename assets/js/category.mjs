import { Get_Data, Datalink } from "./utils.js";

function buildCategorys(product) {
    const TemplateListCar = document.querySelector('#template-listcar');
    const fragment = TemplateListCar.content.cloneNode(true);
    const element = fragment.querySelector('.link');

    const cars = element.querySelector('.carCompany');
    cars.innerText = product.category;
    

    const quanlityCar = element.querySelector('.quanlityCar');
    quanlityCar.innerText = product.quanlityCar;

    return element;
}

async function update() {
    const listCar = document.querySelector(".list-car")
    const productElements = await Get_Data(`${Datalink}/category`)
    productElements.forEach(element => {
        const productElement =  buildCategorys(element);
        listCar.appendChild(productElement);
    });
}

update()