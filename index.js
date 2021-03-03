
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Seguda tentativa.
/*//Seção De Slide Manual
var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;
var tempoTroca=0;

nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}

function next(direction){

  if(direction=="next"){
     index++;
      if(index==totalSlides){
       index=0;
      }
  } 
  else{
          if(index==0){
           index=totalSlides-1;
          }
          else{
           index--;
          }
   }

 for(i=0;i<slides.length;i++){
         slides[i].classList.remove("active");
 }
 slides[index].classList.add("active");     

}*/


// Primeira tentativa.
// não funcionou com a variavel "let"?!
 /*  // Seção  Slider

   let img=[];
   let slider;
   let imgAtual;
   let maxImg;
   let tmp;
   let tempoTroca;

   function preCarregamento(){
       let s=1;
       for(let i=0;i<5;i++){
             img[i]=new Image();
             img[i].src="imgs/s"+s+".jpg";
             s++
        }    

   }

   function carregarImg(img){
       slider.style.backgroundImage="url('"+imgs[img].src+"')"
   }

   function inicia(){
       preCarregamento();
       imgAtual=1;
       maxImg=img.length;
       slider=document.getElementById("dvslider");
       carregarImg(imgAtual);
       tmp=setInterval(troca,tempoTroca);

   }

   function troca(){
       imgAtual++;
       if(imgAtual>maxImg){
           imgAtual=0;
       }
       carregarImg(imgAtual);

   }    

   window.addEventListener("load",inicia);*/



//Aqui vai a validação do formulário de encomendas.



//Botão topo 

 window.onscroll = function() {
      scroll();
      };
       function scroll() {
          let btn = document.getElementById("bt-top");
          if (document.documentElement.scrollTop > 50) {
              btn.style.display = "block";
          } else {
              btn.style.display = "none";
        }
      }
      function backToTop() {
          document.documentElement.scrollTop = 0;
      }
    