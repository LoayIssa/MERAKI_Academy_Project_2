$('.slaider').hide()
$('.page2').hide()
$('.ooo').hide()


$("#hom").on("click", () => {
    $(".page2").show()
    $('.ooo').show()

    cardCar()
});


const carName = ["chaverolit" , "gms" , "jep", "ford" , "kya" ,"marcids"]
const carDate = ["2015" , "2016" ,"2017" , "2010"]
const carClore=["red" , "gren" ,"black" ,"red"]
const image = ["./2015-Dodge-Charger-Vancouver-Hellcat" ,"2015-Dodge-Charger-Vancouver-Hellcat" , "2015-Dodge-Charger-Vancouver-Hellcat" , "2015-Dodge-Charger-Vancouver-Hellcat" ]

const cardCar = () => {
    $(".page2").show()
    $(".page2").html("")

    for(let i=0 ; i<carName.length ; i++){
        $('.page2').append(`<div class="ch" id =chcard${i} ></div>`)
        $(`#chcard${i}`).append(`<img src='${image[i]}' alt='${image[i]} photo'>`)
        $(`#chcard${i}`).append(`<div class=movieDivCH2 id='infoCar${i}' ></div>`)
        $(`#infoCar${i}`).append(`<h1>${carName[i]}</h1>`)
        $(`#infoCar${i}`).append(`<p>${carDate[i]}</p>`)
        $(`#infoCar${i}`).append(`<p>${carClore[i]}</p>`)

    }

}

