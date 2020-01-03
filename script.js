// <h1 class='monthly dollar'>  &dollar;19.99</h1>
// <h1 class='annual dollar'>  &dollar;199.99</h1>

const app=(()=>{

  let toggle = document.querySelector('.toggle')
  let monthly= document.querySelectorAll('.monthly')
  let annual= document.querySelectorAll('.annual')


  const key=()=>{
    // document.addEventListener("keydown", function(event) {
      console.log(event.keyCode);
      if(event.keyCode==13||event.keyCode==32){
        startEvent()

       }

    // })

  }


  const startEvent=()=>{

    toggle.firstElementChild.classList.toggle('right');
      if(toggle.firstElementChild.classList.contains('right')){
          check(monthly,annual)
        }
        else{

          check(annual,monthly)
          }


  }

const start=()=>{
  toggle.addEventListener('click',(startEvent))
   document.addEventListener('keydown',(key))

}

  const check=(show,hide)=>{
    for(let i=0;i<show.length;i++){
    show[i].style.display='block'
    hide[i].style.display='none'

    }




  }

return{
  init:()=>{

    start()
  }
}



})()

app.init()
