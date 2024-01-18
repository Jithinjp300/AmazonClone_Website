function opensidebar(){
    document.getElementById("sidebar").style.marginLeft="0px";
    document.getElementById("xmark").style.display="block";
    document.getElementById("black").style.width="100%";
  document.body.classList.add("stop-scroll")

}
function closesidebar(){
    document.getElementById("sidebar").style.marginLeft="-400px";
    document.getElementById("xmark").style.display="none";
    document.getElementById("black").style.width="0%";
    document.body.classList.remove("stop-scroll")

}

const backtop = document.querySelector(".backto-top")
backtop.addEventListener("click",()=>{
  window.scrollTo({
    top:0,
    behaviors: "smooth"
  });
})