const btnEl =document.querySelector(".btn");

btnEl.addEventListener("mouseover",(event)=>{
    // const x= (event.pageX - btnEl.offsetLeft);
    // const y= (event.pageY - btnEl.offsetTop);
    const x= (event.offsetX);
    const y= (event.offsetY);

   console.log(btnEl.offsetLeft);
  // console.log(y);
    btnEl.style.setProperty("--xpos", x + "px");
    btnEl.style.setProperty("--ypos", y + "px");

})