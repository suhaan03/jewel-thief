var form
var database
var playercount=0
var gamestate=0
var player
var img1
var cop1,cop2,cop3,cop4,cop5,cop6,mrx
var a,b,c,d,e,f

function setup() {
form=new Form()
form.display()
player=new Player()
database=firebase.database()
getPlayercount()
getGamestate()
  createCanvas(displayWidth,displayHeight)
}

function draw() {
  background(0);  
  if(playercount>=3&&gamestate==0){
    form.button1.show()
    form.button1.position(displayWidth-50,displayHeight/2)
  }
  if(gamestate==1){
    form.formDisplay()

  }
  if(gamestate==2){
 form.hide()
 imageMode(CENTER)
    image(img1,displayWidth/2,displayHeight/2)
  }

  if(gamestate==1&&mousePressedover(a)){
   updateGamestate(2)


  }
}



function preload(){
  img1=loadImage("Picture1.jpg")
  cop1=loadImage("images2/Picture1.png")
  cop2=loadImage("images2/Picture2.png")
  cop3=loadImage("images2/Picture3.png")
  cop4=loadImage("images2/Picture4.png")
  cop5=loadImage("images2/Picture5.png")
  mrx=loadImage("images2/Picture6.png")
}


