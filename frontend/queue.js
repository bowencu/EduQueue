//Loader animation code
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  //loader without delay
  //loader.classList.add("loader-hidden");
  setTimeout(() => loader.classList.add("loader-hidden"), 1000);

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
})





// accordion for now serving entry
const accordion0 = document.getElementsByClassName('entryServed');

for (i = 0; i < accordion0.length; i++){
  accordion0[i].addEventListener('click', function(){
    this.classList.toggle('active');
  })
}


// accordion for other entry
const accordion1 = document.getElementsByClassName('entry');

for (i = 0; i < accordion1.length; i++){
  accordion1[i].addEventListener('click', function(){
    this.classList.toggle('active');
  })
}