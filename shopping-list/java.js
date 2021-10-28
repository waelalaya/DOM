//delete
var removeItemButtons = document.getElementsByClassName('delete')
for (let i = 0; i < removeItemButtons.length; i++) {
    var button = removeItemButtons[i]
    button.addEventListener('click', function (event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.remove()
        totalprice()

    })
}
//like
var likes1 = document.getElementById('like1')
likes1.addEventListener('click',function(){
    if (likes1.style.color == 'black'){
    likes1.style.color = 'red';}
    else{
    likes1.style.color = 'black';}


})
var likes2 = document.getElementById('like2')
likes2.addEventListener('click',function(){
    if (likes2.style.color == 'black'){
    likes2.style.color = 'red';}
    else{
    likes2.style.color = 'black';}


})
var likes3 = document.getElementById('like3')
likes3.addEventListener('click',function(){
    if (likes3.style.color == 'black'){
    likes3.style.color = 'red';}
    else{
    likes3.style.color = 'black';}


})
//plus111
var pluss1 = document.getElementById('plus1')
pluss1.addEventListener('click', function () {
var quan1 = document.getElementById('quant1')
quan1.value ++

totalprice()


})
var moinss1 = document.getElementById('moins1')
moinss1.addEventListener('click',function(){
    var quan1 = document.getElementById('quant1')
    quan1.value --
    
    totalprice()

})
//plus222
var pluss2 = document.getElementById('plus2')
pluss2.addEventListener('click', function () {
var quan2 = document.getElementById('quant2')
quan2.value ++
totalprice()


})
var moinss2 = document.getElementById('moins2')
moinss2.addEventListener('click',function(){
    var quan2 = document.getElementById('quant2')
    quan2.value --
   
    totalprice()

})
//plus333
var pluss3 = document.getElementById('plus3')
pluss3.addEventListener('click', function () {
var quan3 = document.getElementById('quant3')
quan3.value ++
totalprice()



})
var moinss3 = document.getElementById('moins3')
moinss3.addEventListener('click',function(){
    var quan3 = document.getElementById('quant3')
    quan3.value --
    totalprice()


})

// Total price 
var quant1=document.getElementById("quant1")
var price1=document.getElementById("price1")
var finalPrice=document.getElementById("finalPrice")
var quant2=document.getElementById("quant2")
var price2=document.getElementById("price2")
var finalPrice=document.getElementById("finalPrice")
var quant3=document.getElementById("quant3")
var price3=document.getElementById("price3")
var finalPrice=document.getElementById("finalPrice")

function totalprice (){
    var somme= (quant2.value*price2.innerHTML)+(quant1.value*price1.innerHTML)+(quant3.value*price3.innerHTML)

     finalPrice.value= somme
}



