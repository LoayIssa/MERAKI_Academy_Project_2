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

const carName = ["Hyundai Sonata" , "hyundai ioniq" , " kia optima " , "S-Class" , "marcides s500" , "BMW X6"]

const carDate = [" model :2020" , "model :2017" ,"model :2019" , "model:2019" , "model:2016" , "model:2017"]
const carClore=["color: Silver" , "color: white" ,"color: white " ,"color: white " ,  "color: black " ," color: black" ]
const image = ["./imag/hyundai.jpg" , "./imag/hyundai ioniq.jpg" , "./imag/2020 kia optima.webp" , "./imag/marcides S-Class.jpg" , "./imag/marcides s500.jpg" , "./imag/bmw x6.jpg" ]

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

const carName1= ["S-Class" , "marcides s500" , "marcides s500"]
const carDate1 = ["model:2019" , "model:2021" ,"model:2016" ]
const carClore1=["color: white" , "color: black" ,"color: black " ]
const image1 = ["./imag/marcides S-Class.jpg" , "./imag/s500-2020.jpg" , "./imag/marcides s500.jpg"   ]

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
const carDate2 = ["model :2017" , "model :2019" ,"model :2020" ]
const carClore2=["color: black" , "color:white" ,"color: black"]
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
