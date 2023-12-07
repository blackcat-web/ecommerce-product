const NumOfAddedItem = document.getElementById("numOfItem");
const AddCartBtn = document.getElementById("btn");
const AddItem = document.getElementById("addItem");

const product = document.getElementById("product");
const overlay = document.getElementsByClassName("overlayBox");

const LightBoxProduct = document.getElementById('lightboxproduct');

const url = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg" 
]


const Cart = document.getElementById("cart");
const ItemSection = document.getElementById("itemSec");

const CartEmpty = document.getElementById("CartEmpt");
const CartLogo = document.getElementById("cartLogo");

const closenav = document.getElementById('closeMenu');
const burger = document.getElementById('burger');

const checkEmptyBox = () =>{
    if(AddItem.innerText <= 0){
        CartEmpty.innerHTML = '<p  style =" height:120px; display:flex; justify-content:center; align-items: center; color: grey; "><span>Your cart is empty</span></p>';
    }
    else{
        CartEmpty.innerHTML = `
        <div class="added_item">
          <img src="./images/image-product-1-thumbnail.jpg" alt="product image">
          <p>Fall Limited Edition sneakers $125.00 x <span id="noproduct">0</span> <span id="totalP">$00.00</span>
          </p>
          <img src="./images/icon-delete.svg" alt="icon-delete" class="iconDelete" id="drop" onclick="dropItem()">
        </div>
        <button class="btn-sn">checkout</button>`;
    }
}
checkEmptyBox();

let num = 0;
const  Increase = () => { AddItem.innerText = num += 1; }

const Decrease = () => {
    if (num > 0) {
        AddItem.innerText = num -= 1;
    }
    else
        AddItem.innerText = 0;
}

let temp;
const Addtocart = () => {
    checkEmptyBox();
    if (num > 0) {
        NumOfAddedItem.innerText = num;
        temp = num;
        NumOfAddedItem.style.padding = "2px";
        document.getElementById("noproduct").innerText = num;
        document.getElementById("totalP").innerText =`$${125 * num}.00`;
    }
    else {
        NumOfAddedItem.innerText = '';
        NumOfAddedItem.style.padding = "0px";
        CartEmpty.innerHTML = '<p  style =" height:120px; display:flex; justify-content:center; align-items: center; color: grey; "><span>Your cart is empty</span></p>';
        
    }

}
AddCartBtn.addEventListener("click", Addtocart);

const showAddedItem = () => {
    ItemSection.style = " display: block !important;";
}
Cart.addEventListener("click", showAddedItem);

const dropItem = () => {
    if (temp > 0) {
        document.getElementById("numOfItem").innerText = --temp;
        document.getElementById('noproduct').innerText = temp;
        document.getElementById("totalP").innerText = `$${125 * temp}.00`;
        if (NumOfAddedItem.innerText == 0) {
            NumOfAddedItem.innerText = '';
            NumOfAddedItem.style = "padding: 0px ;";
        }
        Decrease();
    }
}

const ChangeImg = (image, num) => {
    product.setAttribute("src", url[image]);
    for (let i = 0; i < overlay.length; i++) {
        if (i != num) {
            overlay[i].classList.remove("overlay");
        } else {
            overlay[i].classList.add("overlay");
        }
    }
}
ChangeImg(0, 0);

let indexnum = 0;
const nextImage = () => {
    indexnum++;
    if (indexnum < 4) {
        console.log(indexnum);
        LightBoxProduct.setAttribute('src', url[indexnum]);
    }
    else if (indexnum < 5) {
        indexnum = 3;
    }
}

const preImage = () => {
    indexnum--;
    if (indexnum >= 0) {
        console.log(indexnum);
        LightBoxProduct.setAttribute('src', url[indexnum])
    }
    else if (indexnum == -1) {
        indexnum = 0;
    }

}

const Menu = () => {  document.getElementById('navlist').style = "left: 0px"; }

const closeMenu = () => { document.getElementById('navlist').style = "left: -500px !important ;"; }

burger.addEventListener('click',Menu);
closenav.addEventListener('click', closeMenu);