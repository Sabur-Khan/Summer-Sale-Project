let itemOne = document.getElementById('item-one')
itemOne.addEventListener('click', function(){
    let itemOneItemName = document.getElementById('item-name');
    let itemOneItemNameValue = itemOneItemName.innerText

    let itemOneCreateElement = document.createElement('li');
    itemOneCreateElement.style.listStyleType = 'number';
    itemOneCreateElement.style.color = 'black'
    
    let itemOneList = document.getElementById('list-item');

    let itemOneListStore = itemOneList.appendChild(itemOneCreateElement);
    itemOneListStore.innerText = itemOneItemNameValue;

    let itemOnePrice = document.getElementById('item-price');
    let itemOnePriceValue = itemOnePrice.innerText;
    let itemOnePriceConvert = parseFloat(itemOnePriceValue);

    let itemOneTotalPrice = document.getElementById('total-price');
    let itemOneTotalPriceValue = itemOneTotalPrice.innerText;
    let itemOneTotalPriceConvert = parseFloat(itemOneTotalPriceValue);

    let itemOneTotal = itemOneTotalPriceConvert + itemOnePriceConvert;
    itemOneTotalPrice.innerText = itemOneTotal;



    if (itemOneTotal >= 200) {
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';

        document.getElementById("cupon-btn").removeAttribute("disabled");
        document.getElementById("cupon-btn").style.backgroundColor = 'blue';
    }else if(itemOneTotal >= 0){
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';
    }


})


let anotherlistItem = document.getElementById('list-item');
let itemTwo = document.getElementById('item-two');
itemTwo.addEventListener('click', function(){
    let itemNameOne = document.getElementById('item-name-one');
    let itemNameOneValue = itemNameOne.innerText;
    
    let itemElement = document.createElement('li');
    let aItemElement = itemElement;
    aItemElement.style.listStyleType = 'number';
    aItemElement.style.color = 'black';

    let secondItemAdd = anotherlistItem.appendChild(aItemElement);

    secondItemAdd.innerText = itemNameOneValue;

    let anotherTotal = document.getElementById('total-price');
    let anotherTotalValue = anotherTotal.innerText;
    let anotherTotalConvert = parseFloat(anotherTotalValue);

    let anotherItemPrice = document.getElementById('item-price-two');
    let anotherItemPriceValue = anotherItemPrice.innerText
    let anotherItemPriceConvert = parseFloat(anotherItemPriceValue);

    let a = anotherItemPriceConvert + anotherTotalConvert;
    anotherTotal.innerText = a;

    if (a >= 200) {
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';

        document.getElementById("cupon-btn").removeAttribute("disabled");
        document.getElementById("cupon-btn").style.backgroundColor = 'blue';
    }else if(a >= 0){
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';
    }
    
})



let anotherlistItemTwo = document.getElementById('list-item');
let itemThre = document.getElementById('item-thre');
itemThre.addEventListener('click', function(){
    let itemNameTwo = document.getElementById('item-name-two')
    let itemNameTwoValue = itemNameTwo.innerText;

    let itemNameCreatElement = document.createElement('li');
    let addItemName = itemNameCreatElement;
    addItemName.style.listStyleType = 'number';
    addItemName.style.color = 'black';

    let c = anotherlistItemTwo.appendChild(addItemName);
    c.innerText = itemNameTwoValue;



    let h = document.getElementById('item-price-three');
    let i = h.innerText;
    let j = parseFloat(i);

    let l = document.getElementById('total-price');
    let o = l.innerText;
    let m = parseFloat(o);
   
    let p = m + j;
    l.innerText = p;

    if (p >= 200) {
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';

        document.getElementById("cupon-btn").removeAttribute("disabled");
        document.getElementById("cupon-btn").style.backgroundColor = 'blue';
    }else if(p >= 0){
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';
    }
})

let itemFour = document.getElementById('item-four');
itemFour.addEventListener('click', function(){
    let itemNameThree = document.getElementById('item-name-three');
    let itemNameThreeValue = itemNameThree.innerText;

    let itemNameStore = document.getElementById('list-item');

    let itemNameCreat = document.createElement('li');
    itemNameCreat.style.listStyleType = 'number';
    itemNameCreat.style.color = 'black';

    let storeItemNameLi = itemNameStore.appendChild(itemNameCreat);
    storeItemNameLi.innerText = itemNameThreeValue;

    let s = document.getElementById('total-price');
    let y = s.innerText;
    let yConverted = parseFloat(y);

    let totalItemPrice = document.getElementById('item-price-four');
    let totalItemPriceConert = totalItemPrice.innerText;
    let totalItemPriceConertValue = parseFloat(totalItemPriceConert)

    let totalAmount = totalItemPriceConertValue + yConverted;
    s.innerText = totalAmount;

    if (totalAmount >= 200) {
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';

        document.getElementById("cupon-btn").removeAttribute("disabled");
        document.getElementById("cupon-btn").style.backgroundColor = 'blue';
    }else if(totalAmount >= 0){
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';
    }

})

let itemFive = document.getElementById('item-five');
itemFive.addEventListener('click', function(){
    let itemNameFour = document.getElementById('item-name-four');
    let itemNameFourVlue = itemNameFour.innerText

    let itemFiveCreatElement = document.createElement('li');
    itemFiveCreatElement.style.listStyleType = 'number';
    itemFiveCreatElement.style.color = 'black';

    let listItemFive = document.getElementById('list-item');

    let itemFiveStore = listItemFive.appendChild(itemFiveCreatElement);
    itemFiveStore.innerText = itemNameFourVlue;

    let itemFiveTotalPrice = document.getElementById('total-price');
    let itemFiveTotalPriceValue = itemFiveTotalPrice.innerText;
    let itemFiveTotalPriceConvert = parseFloat(itemFiveTotalPriceValue);
    
    let itemPriceFive = document.getElementById('item-price-five');
    let itemPriceFiveValue = itemPriceFive.innerText;
    let itemPriceFiveConvert = parseFloat(itemPriceFiveValue);

    let itemPriceFiveValueTotal = itemPriceFiveConvert + itemFiveTotalPriceConvert;

    itemFiveTotalPrice.innerText = itemPriceFiveValueTotal;

    if (itemPriceFiveValueTotal >= 200) {
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';

        document.getElementById("cupon-btn").removeAttribute("disabled");
        document.getElementById("cupon-btn").style.backgroundColor = 'blue';
    }else if(itemPriceFiveValueTotal >= 0){
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';
    }


})

let itemSix = document.getElementById('item-six');
itemSix.addEventListener('click', function(){

    let itemNameFive = document.getElementById('item-name-five');
    let itemNameFiveValue = itemNameFive.innerText;
    
    let itemNameFiveCreatElement = document.createElement('li');
    itemNameFiveCreatElement.style.listStyleType = 'number';
    itemNameFiveCreatElement.style.color = 'black';

    let sixListItem = document.getElementById('list-item');
    sixListItem.appendChild(itemNameFiveCreatElement).innerText = itemNameFiveValue;

    let itemPriceSix = document.getElementById('item-price-six');
    let itemPriceSixValue = itemPriceSix.innerText;
    let itemPriceSixConvert = parseFloat(itemPriceSixValue);
    
    let sixItemTotalPrice = document.getElementById('total-price');
    let sixItemTotalPriceValue = sixItemTotalPrice.innerText;
    let sixItemTotalPriceConvert = parseFloat(sixItemTotalPriceValue);
    
    let sixItemTottalValue = itemPriceSixConvert + sixItemTotalPriceConvert;
    sixItemTotalPrice.innerText = sixItemTottalValue;

    if (sixItemTottalValue >= 200) {
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';

        document.getElementById("cupon-btn").removeAttribute("disabled");
        document.getElementById("cupon-btn").style.backgroundColor = 'blue';
    }else if(sixItemTottalValue >= 0){
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';
    }
    
})

let itemSeven = document.getElementById('item-seven');
itemSeven.addEventListener('click', function(){
    let itemNameSix = document.getElementById('item-name-six');
    let itemNameSixValue = itemNameSix.innerText;
    
    let iteSevenCreatElement = document.createElement('li');
    iteSevenCreatElement.style.listStyleType = 'number';
    iteSevenCreatElement.style.color = 'black';
    

    let itemSevenlist = document.getElementById('list-item');
    let itemNameSixStore = itemSevenlist.appendChild(iteSevenCreatElement);
    itemNameSixStore.innerText = itemNameSixValue;

    let itemPriceSeven = document.getElementById('item-price-seven');
    let itemPriceSevenValue = itemPriceSeven.innerText;
    let itemPriceSevenConvert = parseFloat(itemPriceSevenValue);

    let itemSevenTotalPrice = document.getElementById('total-price');
    let itemSevenTotalPriceValue = itemSevenTotalPrice.innerText;
    let itemSevenTotalPriceConvert = parseFloat(itemSevenTotalPriceValue);

    let itemSevenTotalStore = itemSevenTotalPriceConvert + itemPriceSevenConvert;
    itemSevenTotalPrice.innerText = itemSevenTotalStore;

    if (itemSevenTotalStore >= 200) {
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';

        document.getElementById("cupon-btn").removeAttribute("disabled");
        document.getElementById("cupon-btn").style.backgroundColor = 'blue';
    }else if(itemSevenTotalStore >= 0){
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';
    }


})

let itemEight = document.getElementById('item-eight');
itemEight.addEventListener('click', function(){
    let itemNameSeven = document.getElementById('item-name-seven');
    let itemNameSevenValue = itemNameSeven.innerText;

    let itemEightCreatElement = document.createElement('li');
    itemEightCreatElement.style.listStyleType = 'number';
    itemEightCreatElement.style.color = 'black';

    let itemEightListItem = document.getElementById('list-item');
    let itemEightListItemAppend = itemEightListItem.appendChild(itemEightCreatElement);
    itemEightListItemAppend.innerText = itemNameSevenValue;

    let itemPriceEight = document.getElementById('item-price-eight');
    let itemPriceEightValue = itemPriceEight.innerText;
    let itemPriceEightconvert = parseFloat(itemPriceEightValue);

    let itemEightTotalPrice = document.getElementById('total-price');
    let itemEightTotalPriceValue = itemEightTotalPrice.innerText;
    let itemEightTotalPriceValueConvert = parseFloat(itemEightTotalPriceValue);

    let itemEghtTotal = itemEightTotalPriceValueConvert + itemPriceEightconvert;
    itemEightTotalPrice.innerText = itemEghtTotal;

    if (itemEghtTotal >= 200) {
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';

        document.getElementById("cupon-btn").removeAttribute("disabled");
        document.getElementById("cupon-btn").style.backgroundColor = 'blue';
    }else if(itemEghtTotal >= 0){
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';
    }


})

let itemNine = document.getElementById('item-nine');
itemNine.addEventListener('click', function(){
    let itemNameEight = document.getElementById('item-name-eight');
    let itemNameEightValue = itemNameEight.innerText;
    
    let itemNineCreatElement = document.createElement('li');
    itemNineCreatElement.style.listStyleType = 'number';
    itemNineCreatElement.style.color = 'black';

    let itemNineListItem = document.getElementById('list-item');

    let itemNineListItemAppend = itemNineListItem.appendChild(itemNineCreatElement);
    itemNineListItemAppend.innerText = itemNameEightValue;

    let itemPriceNine = document.getElementById('item-price-nine');
    let itemPriceNineValue = itemPriceNine.innerText;
    let itemPriceNineConvert = parseFloat(itemPriceNineValue);

    let itemNineTotalPrice = document.getElementById('total-price');
    let itemNineTotalPriceValue = itemNineTotalPrice.innerText;
    let itemNineTotalPriceConvert = parseFloat(itemNineTotalPriceValue);

    let itemNineTotalAmount = itemNineTotalPriceConvert + itemPriceNineConvert;
    itemNineTotalPrice.innerText = itemNineTotalAmount;

    if (itemNineTotalAmount >= 200){
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';

        document.getElementById("cupon-btn").removeAttribute("disabled");
        document.getElementById("cupon-btn").style.backgroundColor = 'blue';
    }else if(itemNineTotalAmount >= 0){
        document.getElementById("purchase-btn").removeAttribute("disabled");
        document.getElementById("purchase-btn").style.backgroundColor = 'blue';
    }
    
})

let cuponBtn = document.getElementById('cupon-btn');
cuponBtn.addEventListener('click', function(){
    let cuponInput = document.getElementById('cupon-input');
    if (cuponInput.value == '') {
        let ErrBtn = document.getElementById('Error');
        ErrBtn.innerText = 'Empty';
        
    }else if(cuponInput.value === 'SELL200'){
        let itemConvert = document.getElementById('total-price');
        let itemConvertValue = itemConvert.innerText;
        let itemConvertCon = parseFloat(itemConvertValue);

        let itemAllDisc = itemConvertCon * 20 / 100;

        let discountElement = document.getElementById('discount');
        let discountElementValue =discountElement.innerText
        let discountElementConvert = parseFloat(discountElementValue)
        discountElement.innerHTML = itemAllDisc;

        let discountElementSubTotal = itemConvertCon - itemAllDisc;

        let total = document.getElementById('total');
        let totalValus = total.innerText;
        let totalConvert = parseFloat(totalValus);
        total.innerText = discountElementSubTotal;
        

        let ErrBtn = document.getElementById('Error');

        ErrBtn.innerText = '';
    }
})



let clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', function(){
    let totalPrice = document.getElementById('total-price');
    totalPrice.innerText = '00'

    let discount = document.getElementById('discount');
    discount.innerText = '00'

    let total = document.getElementById('total');
    total.innerText = '00'

    let listItem = document.getElementById('list-item');
    listItem.innerHTML = ''

    let cuponInputs = document.getElementById('cupon-input');
    cuponInputs.value = '';
    
    let cuponBtnss = document.getElementById('cupon-btn');
    cuponBtnss.setAttribute("disabled", "disabled")
    document.getElementById("cupon-btn").style.backgroundColor = '';

    let purchaseBtns = document.getElementById('purchase-btn');
    purchaseBtns.setAttribute("disabled", "disabled");
    document.getElementById("purchase-btn").style.backgroundColor = '';
})



function CopyText(){
    let cuponValue = document.getElementById('cupon-value');
    cuponValue.innerText;

}

  // cursor pointer


let cursorDot = document.querySelector("[data-cursor-dot]");
let cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener('mousemove', function(e){
    let posX = e.clientX
    let posY = e.clientY
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    },{duration:300, fill:"forwards" });
})
