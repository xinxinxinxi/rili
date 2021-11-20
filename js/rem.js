function refreshRem(){
  if (parseInt(document.documentElement.clientWidth) > 720) {
    document.documentElement.style.fontSize = 720 / 7.5 + "px";
  } else {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px";
  }
}
window.onresize=function(){
  refreshRem()
}