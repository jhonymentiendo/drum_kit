document.onkeydown = (e) => {
  switch (e.key) {
    case 'a'://65: //a
      document.querySelectorAll(".a")[0].click();
      break;
    case 'd'://68: //d
      document.querySelectorAll(".d")[0].click();
      break;
    case 'j'://74: //j
      document.querySelectorAll(".j")[0].click();
      break;
    case 'k'://75: //k
      document.querySelectorAll(".k")[0].click();
      break;
    case 'l'://76: //l
      document.querySelectorAll(".l")[0].click();
      break;
    case 's'://83: //s
      document.querySelectorAll(".s")[0].click();
      break;
    case 'w'://87: //w
      document.querySelectorAll(".w")[0].click();
      break;
    default:
      break;
  }
};

var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrumButtons; i++) {
  var botonporseparado = document.querySelectorAll(".drum")[i];
  var d = new drumObject(botonporseparado.innerHTML);
  botonporseparado.addEventListener("click", d.playSound);
}

function drumObject(id) {
  this.id = id;

  this.flashword = ()=>{
  document.querySelectorAll("."+id)[0].classList.add("pressed");
  setTimeout(function(){document.querySelectorAll("."+id)[0].classList.remove("pressed");},10);
  }

  this.playSound = () => {
    var audio = new Audio("sounds/keys/" + id + ".mp3");
    audio.play();
    this.flashword();
  };
}

