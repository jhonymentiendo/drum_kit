document.onkeydown = (e) => {
//alert(e.key);

  switch (e.key) {
    case 'ñ'://59: //ñ
      //document.querySelectorAll(".w")[0].click();
      break;
    case 'a'://65: //a
      document.querySelectorAll(".a")[0].click();
      break;
    case 'd'://68: //d
      document.querySelectorAll(".d")[0].click();
      break;
    case 'f'://70: //f
      //document.querySelectorAll(".drum")[3].click();
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
      //document.querySelectorAll(".drum")[1].click();
      break;
  }
};

var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrumButtons; i++) {
  var botonporseparado = document.querySelectorAll(".drum")[i];
  var d = new drumObject(botonporseparado.innerHTML);
  botonporseparado.addEventListener("click", d.play);
}

function drumObject(id) {
  this.id = id;
  //this.sound = sound

  this.play = () => {
    var audio = new Audio("sounds/keys/" + id + ".mp3");
    audio.play();
  };
}
