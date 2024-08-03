let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;


function contact(event) {
    event.preventDefault();


    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += (" modal__overlay--visible");
    emailjs
      .sendForm(
        "service_9dd0im8",
        "template_aovybpf",
        event.target,
        "_ZkxiKYqp_oG_f2st"
      )
       .then(()=> {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    })
       .catch (()=> {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at tas57atx@gmail.com"
        );
    });
}


function toggleModal() {
    if (isModalOpen) {
       isModalOpen = false;
       return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

function openMenu() {
    document.body.classList += " menu--open"
  }
  
  function closeMenu() {
    document.body.classList.remove('menu--open')
  }