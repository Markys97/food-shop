import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.baner__swiper.swiper',{
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
})

// scrip header section


// show number of product in basket
let productItems= [...document.querySelectorAll('.product')];

let basketItem = document.querySelector('.main-menu__item--basket');
let header = document.querySelector('.header')
let numberProductInBasket= parseInt(basketItem.querySelector('.main-menu__icon').dataset.number)

const showNumberProductInBasket= ()=>{
  if(numberProductInBasket ===0){
    header.classList.add('basketEmpty')
  }else{
    header.classList.remove('basketEmpty')
  }
}
const setNumberProductInCard= number=>{
 if(typeof number === 'number'){
  basketItem.querySelector('.main-menu__icon').dataset.number= number
 }else{
  basketItem.querySelector('.main-menu__icon').dataset.number= parseInt(number)
 }
}
const updateNumberProductInCard = (number,node)=>{
  
  if(typeof number === 'number'){
    node.innerText= number
   }else{
    node.innerText= parseInt(number)
   }
}






// add product in basket
productItems.forEach(productItem =>{
  productItem.querySelector('.product__button').addEventListener('click',function(e){
    numberProductInBasket++;
    basketItem.querySelector('.main-menu__icon').dataset.number=numberProductInBasket
    if(numberProductInBasket !==0){
      this.classList.add('d-none')
      productItem.querySelector('.product__handlerNumber').classList.remove('d-none')
    }else{
      this.classList.remove('d-none')
      productItem.querySelector('.product__handlerNumber').classList.add('d-none')
    }

    showNumberProductInBasket()
    
  })

  // increase number in basket
  if(productItem.querySelector('.product__handlerNumber-button--add')){
    productItem.querySelector('.product__handlerNumber-button--add').addEventListener('click',function(e){
      let cardNumberValueElt= productItem.querySelector('.product__handlerNumber-value')
      let cardNumberValue= parseInt(cardNumberValueElt.innerText)
      cardNumberValue++;
      numberProductInBasket++
      setNumberProductInCard(numberProductInBasket)
      updateNumberProductInCard(cardNumberValue,cardNumberValueElt)
      showNumberProductInBasket()
    })
    productItem.querySelector('.product__handlerNumber-button--desc').addEventListener('click',function(e){
      let cardNumberValueElt= productItem.querySelector('.product__handlerNumber-value')
      let cardNumberValue= parseInt(cardNumberValueElt.innerText)
      cardNumberValue--;
      numberProductInBasket--
      setNumberProductInCard(numberProductInBasket)
      updateNumberProductInCard(cardNumberValue,cardNumberValueElt)
      showNumberProductInBasket()

      if(cardNumberValue ===0){

        productItem.querySelector('.product__handlerNumber').classList.add('d-none')
        productItem.querySelector('.product__button').classList.remove('d-none')
        cardNumberValue=1
        updateNumberProductInCard(cardNumberValue,cardNumberValueElt)
      }

    })
  }
})


ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });
}

