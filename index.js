function replaceVerticalScrollByHorizontal( event ) {
    if ( event.deltaY !== 0 ) {
    window.scroll(window.scrollX + event.deltaY * 2, window.scrollY );
    event.preventDefault();
    }
    }
    
    const mediaQuery = window.matchMedia( `(min-width: 770px)` );
    
    if ( mediaQuery.matches ) {
    window.addEventListener( 'wheel', replaceVerticalScrollByHorizontal );
    }

    
   ///


const contact = document.getElementById("contact")
const about = document.getElementById("about")

const modalShow = document.getElementById("modalShow")
const closebtn = document.getElementById("closebtn").addEventListener("click", closing)

contact.addEventListener("click", openContact)
about.addEventListener("click", openAbout)

function openContact(){
  modalShow.style.display = "block"
  const content =  document.getElementById("content")
  content.innerHTML=
  `<h1>Contact</h1>
  <p>Hit a message and follow me on:</p>
  `
modalShow.appendChild(content);
}
function openAbout(){
  modalShow.style.display = "block"
  const content =  document.getElementById("content")
  content.innerHTML=
  `<h1>About</h1>
  <p>Blusheddeny is an artist that loves drawing pretty girls.</p>
  `
modalShow.appendChild(content);
}
function closing(){
  modalShow.style.display = "none"
  
}
   ///
   
    

    //addEventListener('click', alert("hola"))




    /*document.getElementById('open-modal-about').addEventListener('click', showModal)
    document.getElementById('open-modal-contact').addEventListener('click', showModal)
    document.getElementById('close-button').addEventListener('click', hideModal)
    
    function showModal(){
        document.getElementById('modal-about').style.display = "block"   
    }
    function hideModal(){
        document.getElementById('modal-about').style.display = "none"
    }*/
  
    /*click the category
    let buttons = document.querySelector('[btn]')
    let closeButton = document.querySelector('[delete-button]')

    function showModal(){
        document.querySelector('[modal-card]').style.display = "block"   
    }*/
    
    //show category div modal
    //close modal

    /*let openButton = document.querySelectorAll('#open-modal')
    console.log(openButton)
    function modals(){
        openButton[0].addEventListener('click', function showModal (){
            document.getElementById('about').style.display = "block"
        })
        openButton[1].addEventListener('click', function showModal (){
            document.getElementById('contact').style.display = "block"
        })
       
    }*/
   /* function openModal(openButton){
        for(i=0; i<2; i++){
            if(openButton === openButton[0]){
                document.getElementById('contact').style.display = "block"
            }
            return document.getElementById('about').style.display = "block"
            
        }
    }*/
    /*openButton.addEventListener('click', chooseModal)
    function chooseModal(openButton,l){
        //grab index of button
        alert(openButton)
    }
    let openButton = document.querySelectorAll('#open-modal')
    let l = openButton.length
    if (chooseModal(openButton, l))
        document.getElementById('about').style.display = "block"
        else
        document.getElementById('contact').style.display = "block"*/

   /* const openAbout = document.getElementById('about')
    const openContact = document.getElementById('contact')
     
    const btnOpen = document.querySelector('[button-open]').addEventListener('mouseover', alert("hola"))
    const btnClose = document.querySelector('[button-close]').addEventListener('mouseover', alert("hola2"))*/


  
    


    
   /* function openContact(){
        document.getElementById('contact').style.display="block"
    }*/


    
   /* const arr=[openAbout, openContact]
    let indexes =Object.keys(arr)
    function openModal(){
        arr.forEach(element => {
            element.style.display = "block"
            
        });
    }
    function closeModal(){

        arr.forEach(element => {
            element.style.display = "none"
            
        });
    }*/

