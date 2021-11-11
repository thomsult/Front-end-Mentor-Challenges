var TestimonialsImage = document.getElementById('TestimonialsImage').children;
var TestimonialsText = document.getElementById('TestimonialsText').children;


var objTanya = 
[

    TestimonialsText[0],
    TestimonialsText[2].children[0],
    TestimonialsText[2].children[1],

]
var objJohn = 
[

    TestimonialsText[1],
    TestimonialsText[2].children[2],
    TestimonialsText[2].children[3],
]
objJohn.forEach(e=>{e.style.display = "none"})

var obj = false

function PrevBtn(){
    opa(obj = !obj)
}


function NextBtn(){
    opa(obj = !obj)
    
}

function opa(bool){

    if(bool){
        TestimonialsImage[1].style.opacity = 0
        objJohn.forEach(e=>{e.style.display = "block"})
        objTanya.forEach(e=>{e.style.display = "none"})
    }
    else{

        TestimonialsImage[1].style.opacity = 1
        objJohn.forEach(e=>{e.style.display = "none"})
        objTanya.forEach(e=>{e.style.display = "block"})
    }
}