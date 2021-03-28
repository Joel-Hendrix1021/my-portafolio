const $btnBars = document.getElementById("btn-menu");
const $nav = document.querySelector(".nav");
const $form = document.getElementById("form");
const $reset = document.getElementById("reset");
const $scrollTop = document.getElementById('scrollTop')

$btnBars.addEventListener("click", (e) => {
  e.preventDefault();
  $nav.classList.toggle("show");
});

ScrollReveal().reveal(".nav-menu");
ScrollReveal().reveal(".main", { delay: 500 });
ScrollReveal().reveal(".intro", { delay: 500 });
ScrollReveal().reveal(".about", { delay: 500 });
ScrollReveal().reveal(".skill", { delay: 500 });
ScrollReveal().reveal(".proyect", { delay: 500 });
ScrollReveal().reveal(".contact", { delay: 500 });

//formulario de contacto

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const rexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //
  if (rexEmail.test(email)) {
    fetch("https://formsubmit.co/ajax/joelpimentel1995@gmail.com", {
      method: "POST",
      body: new FormData(e.target)
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => console.log(json))
      .catch(err => console.log(err));
    
     
  } else {
    console.log("no es valido");
  }
  e.target.name.value = ''
  e.target.email.value = ''
  e.target.message.value = ''
  
});

document.addEventListener('scroll', (e)=>{
  console.log(window.scrollY)
  if(window.scrollY < 700){
      $scrollTop.classList.add('hidden')
  }else {
    $scrollTop.classList.remove('hidden')
  }
 
})


$scrollTop.addEventListener('click', ()=>{
    console.log('click')
    window.scrollTo({
      behavior: "smooth",
      top:0,
    })
})
