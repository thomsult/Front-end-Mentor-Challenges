

var toggleUX = document.getElementById('toggleUX')

var togglenumber = document.querySelectorAll(".number",".toggle-a")
console.log(toggle)
var togglea = document.querySelectorAll(".toggle-a")
var toggle = Array.prototype.concat.call(...togglea , ...togglenumber )


var body = document.querySelector("body");

toggle.forEach(element => {
    element.addEventListener('click',(e)=> {
      if (element.id == "bt1"){
        toggleUX.className = "toggle";
        toggleUX.classList.add("state1");
        console.log('theme1')
        body.className = "theme1"
      }
      if (element.id == "bt2"){
        toggleUX.className = "toggle";
        toggleUX.classList.add("state2");
        console.log('theme2')
        body.className = "theme2"
      }
      if (element.id == "bt3"){
        toggleUX.className = "toggle";
        toggleUX.classList.add("state3");
        console.log('theme3')
        body.className = "theme3"
      }
})

})


var screenId = document.getElementById('screen')

var calcule = []
var indexofOperator = 0
var Number = document.querySelectorAll(".bt").forEach(element=>{
  element.addEventListener('click',()=>{
    var oper = element.firstChild.innerText
    var numb = parseInt(oper, 10)
    if(!isNaN(numb)){
      if(calcule.length < 15){
        calcule.push(numb)
        displayScreen(calcule)
      }
      
      
    }
    else{
      if(calcule.length < 15 &&  oper !== "," && oper !== "=" && oper !== "DEL" && oper !== "RESET" && indexofOperator == ""){        

        calcule.length == 0 ? calcule.push("0",oper) : calcule[calcule.length - 1] != oper?calcule.push(oper):null
        indexofOperator = oper
        console.log(calcule)
        displayScreen(calcule)
      }
      else if(oper ==","){
        calcule.length == 0 ? calcule.push("0",".") : calcule[calcule.length - 1] != "."?calcule.push("."):null

        
        displayScreen(calcule)
      }


      else if(oper == "RESET"){
        
        calcule = [];
        indexofOperator = ""
        displayScreen(calcule)
      }
      else if(oper == "DEL"){

        typeof(calcule[calcule.length - 1]) != "number"?indexofOperator = "":null

        calcule.pop()
        
        displayScreen(calcule)
      }

      else if(oper !="=" && calcule.includes(indexofOperator) && typeof(calcule[calcule.length]) != "number"){
        calcule.pop()
        calcule.push(oper)
        indexofOperator = oper
        displayScreen(calcule)
      }




      else if(oper !="=" && calcule.includes(indexofOperator)){




        console.log(calcule)
        console.log("ss")
        var result = 0
        var nb1 = parseFloat(calcule.join('').slice(0,calcule.indexOf(indexofOperator)))
        //console.log("sss:" + calcule.join('').slice(0,indexofOperator - 1))
        var nb2 = parseFloat(calcule.join('').slice((calcule.indexOf(indexofOperator)+1), calcule.length))
        console.log(nb1,indexofOperator,nb2)
        if(indexofOperator == "+"){
          result = nb1 + nb2
        }
        if(indexofOperator == "-"){
          result = nb1 - nb2
        }
        if(indexofOperator == "/"){
          result = nb1 / nb2
        }
        if(indexofOperator == "x"){
          result = nb1 * nb2
        }
        console.log("s")
        var rn = []
        var r = result.toString().split('') 
        r.forEach(element=>{
          if(element != "."){
            rn.push(parseInt(element, 10))
          }
          else{
            rn.push(".")
          }
          
        })
        
       
        
        calcule = [...rn,indexofOperator];
        console.log(calcule)
        displayScreen(calcule)
      }
      else if(oper == "=" && calcule.includes(indexofOperator)){
        calcule
        console.log(calcule)
        var result = 0
        var nb1 = parseFloat(calcule.join('').slice(0,calcule.indexOf(indexofOperator)))
        //console.log("sss:" + calcule.join('').slice(0,indexofOperator - 1))

        var nb2 = parseFloat(calcule.join('').slice((calcule.indexOf(indexofOperator)+1), calcule.length))
        console.log(nb1,indexofOperator,nb2)
        if(indexofOperator == "+"){
          result = nb1 + nb2
        }
        if(indexofOperator == "-"){
          result = nb1 - nb2
        }
        if(indexofOperator == "/"){
          result = nb1 / nb2
        }
        if(indexofOperator == "x"){
          result = nb1 * nb2
        }

        var rn = []
       
        
        
        var r = result.toString().includes('.')? result.toFixed(2).toString().split('') : result.toString().split('')
        


        console.log(r)
        r.forEach(element=>{
          
          typeof(element) == 'number'? rn.push(parseInt(element, 10)) : rn.push(element)
        })
        
        calcule = []
        
        calcule = [...rn];
        console.log(calcule)
        displayScreen(calcule)
        indexofOperator = ""

      }
      
    }
    
  })
})


function displayScreen(result){
  var display =""
  if(typeof(result) === "number"){
    //
    display = result
  }
  else if (typeof(result) != "string") {
    display = result.join('').replaceAll(".",",")
  }
  else if (typeof(result) === "string") {
    display = result.replaceAll(".",",")  
  }

  else{

    display = "";
  }


  screenId.innerText = display 
  
}
