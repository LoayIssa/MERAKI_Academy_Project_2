$('.slaider').hide()
$('.page2').hide()
$('.ooo').show()
$('.select').hide()


 $("#information").on("click", () => {
    $(".page2").show()
    $('.ooo').show()
    $('body').css("background-image","none" )
    $('.select').show()


    cardCar()
}); 

$("select").on("change", () => {
    if($("#car").val() === "car1"){
        cardCar1()
   }

   if($("#car").val() === "car2"){
    cardCar2()
}
}); 


const carName = ["chaverolit" , "gms" , "jep"]
const carDate = ["2015" , "2016" ,"2017" , "2010"]
const carClore=["red" , "gren" ,"black" ,"red"]
const image = ["./imag/2015-Dodge-Charger-Vancouver-Hellcat.jpg" , "./imag/51859.jpg" , "./imag/de0f4bf6e8075312a6eb20ad7044571a.jpg" ]

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



/* ______________________ */

const carName1= ["chaverolit" , "gms" , "jep"]
const carDate1 = ["2015" , "2016" ,"2017" , "2010"]
const carClore1=["red" , "gren" ,"black" ,"red"]
const image1 = ["./imag/2015-Dodge-Charger-Vancouver-Hellcat.jpg"   ]

const cardCar1 = () => {
    $(".page2").show()
    $(".page2").html("")

    for(let i=0 ; i<carName1.length ; i++){
        $('.page2').append(`<div class="ch" id =chcard${i} ></div>`)
        $(`#chcard${i}`).append(`<img src='${image1[i]}' alt='${image1[i]} photo'>`)
        
        $(`#chcard${i}`).append(`<div class=info id='infoCar${i}' ></div>`)
        $(`#infoCar${i}`).append(`<h1>${carName[i]}</h1>`)
        $(`#infoCar${i}`).append(`<p>${carDate[i]}</p>`)
        $(`#infoCar${i}`).append(`<p>${carClore[i]}</p>`)
        

    }

}
/* ______________ */

const carName2= ["chaverolit" , "gms" , "jep"]
const carDate2 = ["2015" , "2016" ,"2017" , "2010"]
const carClore3=["red" , "gren" ,"black" ,"red"]
const image3 = ["" ,"./imag/2015-Dodge-Charger-Vancouver-Hellcat.jpg"  ]

const cardCar2 = () => {
    $(".page2").show()
    $(".page2").html("")

    for(let i=0 ; i<carName2.length ; i++){
        $('.page2').append(`<div class="ch" id =chcard${i} ></div>`)
        $(`#chcard${i}`).append(`<img src='${image2[i]}' alt='${image2[i]} photo'>`)
        
        $(`#chcard${i}`).append(`<div class=info id='infoCar${i}' ></div>`)
        $(`#infoCar${i}`).append(`<h1>${carName[i]}</h1>`)
        $(`#infoCar${i}`).append(`<p>${carDate[i]}</p>`)
        $(`#infoCar${i}`).append(`<p>${carClore[i]}</p>`)
        

    }


}
