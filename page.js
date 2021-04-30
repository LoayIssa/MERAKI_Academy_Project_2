$('.page2').hide()
$('.ooo').hide()
$('.select').hide()


 $("#carShow").on("click", () => {
     $(".imaSla").hide()
     $(".buton").hide()
    $(".page2").show()
    $('body').css("background-image","none" )
    $('.select').show()
    $('.slaider').hide()

    cardCar()
}); 
/* chinge card car and filter */

$("select").on("change", () => {

    if($("#all").val() === "all"){
        cardCar() 
    }


    if($("#car").val() === "car1"){
        cardCar1()
   }

   if($("#car").val() === "car2"){
    cardCar2()
}
}); 
/* end */

/* start slider */
(function autoSlider(){
  $('.slaider .active').each(function (){
     if(!$(this).is(':last-child')){
      $(this).delay(3000).fadeOut(1000, function(){
          $(this).removeClass('active').next().addClass('active').fadeIn()
           autoSlider()
         }); 

      } else {

         $(this).delay(3000).fadeOut(1000 , function(){
             $(this).removeClass('active')
             $('.slaider div').eq(0).addClass('active').fadeIn()
             autoSlider()

         })

      }
  })   

}());

/* end slider */ 




/* start show all car  */ 

const carName = ["chaverolit" , "gms" , "jep" , "chaverolit" , "gms" , "jep"]
const carDate = ["2015" , "2016" ,"2017" , "2010"]
const carClore=["red" , "gren" ,"black" ,"red" ,  "gren" ,"black" ]
const image = ["./imag/2015-Dodge-Charger-Vancouver-Hellcat.jpg" , "./imag/51859.jpg" , "./imag/de0f4bf6e8075312a6eb20ad7044571a.jpg" , "./imag/2015-Dodge-Charger-Vancouver-Hellcat.jpg" , "./imag/51859.jpg" , "./imag/de0f4bf6e8075312a6eb20ad7044571a.jpg" ]

const cardCar = () => {
    $(".page2").show()
    $(".page2").html("")

    for(let i=0 ; i<carName.length ; i++){
        $('.page2').append(`<div class="ch" id =chcard${i} ></div>`)
        $(`#chcard${i}`).append(`<img src='${image[i]}' alt='${image[i]} photo'>`)
        $(`#chcard${i}`).append(`<div class=info id='infoCar${i}' ></div>`)
        $(`#infoCar${i}`).append(`<h1>${carName[i]}</h1>`)
        $(`#infoCar${i}`).append(`<p>${carDate[i]}</p>`)
        $(`#infoCar${i}`).append(`<p>${carClore[i]}</p>`)
    
    }
}

/* __________end____________ */


/* start function card marsedes  */

const carName1= ["S-Class" , "C-Class" , "E-Class"]
const carDate1 = ["2019" , "2020" ,"2017" ]
const carClore1=["black" , "gray" ,"red" ]
const image1 = ["./imag/مرسيدس بنز اس - كلاس 2019.jpg" , "./imag/c-class.jpg" , "./imag/مرسيدس بنز اي - كلاس 2019.jpg"   ]

const cardCar1 = () => {
    $(".page2").show()
    $(".page2").html("")

    for(let i=0 ; i<carName1.length ; i++){
        $('.page2').append(`<div class="ch" id =chcard${i} ></div>`)
        $(`#chcard${i}`).append(`<img src='${image1[i]}' alt='${image1[i]} photo'>`)
        
        $(`#chcard${i}`).append(`<div class=info id='infoCar${i}' ></div>`)
        $(`#infoCar${i}`).append(`<h1>${carName1[i]}</h1>`)
        $(`#infoCar${i}`).append(`<p>${carDate1[i]}</p>`)
        $(`#infoCar${i}`).append(`<p>${carClore1[i]}</p>`)
        

    }

}
/* ______end________ */
/* start car bmw  */ 

const carName2= [" BMW X3" , "BMW X4" , "BMW X6"]
const carDate2 = ["2021" , "2020" ,"2017" ]
const carClore2=["black" , "white" ,"red"]
const image2 = ["./imag/bmw x3.jpg" ,"./imag/bmw x4.jpg" , "./imag/bmw x6.jpg"  ]

const cardCar2 = () => {
    $(".page2").show()
    $(".page2").html("")

    for(let i=0 ; i<carName2.length ; i++){
        $('.page2').append(`<div class="ch" id =chcard${i} ></div>`)
        $(`#chcard${i}`).append(`<img src='${image2[i]}' alt='${image2[i]} photo'>`)
        
        $(`#chcard${i}`).append(`<div class=info id='infoCar${i}' ></div>`)
        $(`#infoCar${i}`).append(`<h1>${carName2[i]}</h1>`)
        $(`#infoCar${i}`).append(`<p>${carDate2[i]}</p>`)
        $(`#infoCar${i}`).append(`<p>${carClore2[i]}</p>`)
        

    }


}
/*_____end_______ */
