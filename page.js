$('.page2').hide()
$('.slider-outer').hide()
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

$('#home').on("click" , ()=>{
    location.reload()

})


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
    $('.select').show()
    $(".page2").html("")

    for(let i=0 ; i<carName.length ; i++){
        $('.page2').append(`<div class="ch" id =chcard${i} ></div>`)
        $(`#chcard${i}`).append(`<img src='${image[i]}' alt='${image[i]} photo'>`)
        $(`#chcard${i}`).append(`<div class=info id='infoCar${i}' ></div>`)
        $(`#infoCar${i}`).append(`<h1>${carName[i]}</h1>`)
        $(`#infoCar${i}`).append(`<p>${carDate[i]}</p>`)
        $(`#infoCar${i}`).append(`<p>${carClore[i]}</p>`)
        $(`#infoCar${i}`).append(`<button onclick='ViewShowImage()' class=viewImag >View images</button>`)
       


    
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
        $(`#infoCar${i}`).append(`<button  class=viewImag >View images</button>`)

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
        $(`#infoCar${i}`).append(`<button class=viewImag>View images</button>`)
    }


}
/*_____end_______ */


/* start slider imag  */
$('.next').on('click', function(){
    let currentImg = $('.active');
    let nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active')
      nextImg.addClass('active')
    }
  });

  $('.prev').on('click', function(){
    let currentImg = $('.active');
    let prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active')
      prevImg.addClass('active')
    }
  });

/* end slider imag  */

/* show viwe imag */

const ViewShowImage= () => {
    $('.imaSla').hide()
    $(".page2").hide()
    $(".select").hide()

    $('.buton').show()
    $('.slider-outer').show()

  
}


/* start create page 3 login */ 
const register = () => {

 $('.page3').append('<div class="contact"></div>') 
$('.contact').append('<h1> Car Showroom </h1>')
$('.contact').append('<p> The exhibition was established in 2000. We specialize in the best offers and the lowest prices for selling cars  </p>')
$('.contact').append('<p>Email:Car-Showroom@gmail.com <br> phone number: 962788850001   </p>')
$('.page3').append('<div class="register"></div>')
$('.register').append('<label for="email"><b>Email</b></label>') 
$('.register').append('<input type="text" placeholder="Enter Email" name="email" id="email" >') 
$('.register').append('<label for="psw"><b>Password</b></label>') 
$('.register').append('<input type="password" placeholder="Enter Password" name="psw" id="psw" >') 
$('.register').append('<label for="psw-repeat"><b>Repeat Password</b></label>') 
$('.register').append('<input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" >') 
$('.register').append('<button type="submit" class="registerbtn">Register</button>') 
$('.register').append('<button id="login" type="submit" class="registerbtn">Login </button>') 
$('.page3').append('<div class="Login "></div>')
$('.login').append('<label for="uname"><b>Username</b></label>') 
$('.login').append('<input type="text" placeholder="Enter Username" name="uname" >') 
$('.login').append('<label for="psw"><b>Password</b></label>') 
$('.login').append('<type="password" placeholder="Enter Password" name="psw" >') 
$('.login').append('<button  type="submit" class="registerbtn">Login </button>') 

}
register()

$('.page3').hide()

$("#contact").on("click", () => {
    $(".imaSla").hide()
    $(".buton").hide()
    $(".page2").hide()
    $('.select').hide()
    $('.slaider').hide()
    $(".page4").hide()
    $('.page3').show()

}); 

/* end  create page 3 login */ 

/* start create page 4 addCar */ 

$("#addCar").on("click", () => {
    $(".page2").hide()
    $('.select').hide()
    $('.page4').append('<div class="addCar"></div>') 
    $('.addCar').append('<label for="car-Name"><b class="label" >car Name</b></label>') 
    $('.addCar').append('<input type="text" placeholder="carName" id="add1" >') 
    $('.addCar').append('<label for="car-date"><b class="label" >car date</b></label>') 
    $('.addCar').append('<input type="text" placeholder="cardate" id="add2" >') 
    $('.addCar').append('<label for="car-color"><b class="label">car color</b></label>') 
    $('.addCar').append('<input type="text" placeholder="carcolor" id="add3" >')
    $('.addCar').append('<label for="imag"><b class="label">imag</b></label>')  
    $('.addCar').append('<input type="text" placeholder="imag" id="add4" >') 
    $('.addCar').append('<button  class="AddInfo" onclick = "AddCar()" >add car information </button>') 

   }); 

const AddCar = ()=> {
    carName.push($('#add1').val())
    carDate.push($('#add2').val())
    carClore.push($('#add3').val())
    image.push($('#add4').val())
    $('.addCar').remove()
    cardCar()

    
}



/* end create page 3 page 4 addCar */ 


  /* end fun */


