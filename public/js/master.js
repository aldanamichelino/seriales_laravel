window.onload = function(){

  //Hamburguesa

  let hamburguesa = document.getElementById("hamburguesa");
  hamburguesa.onclick = function(){
    let divLi = document.querySelectorAll("#nav li");
    for(var item of divLi){
      if (item.style.display == "block"){
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    }
}

  // Efecto logo nav

  let logoNav = document.querySelector('.logo');
  logoNav.onmouseover = function(){
    this.style.opacity = "0.5";
  }

  logoNav.onmouseout = function(){
    this.style.opacity = "1";
  }


}
