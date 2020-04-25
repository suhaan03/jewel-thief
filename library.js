function  getPlayercount(){
    database.ref('playerCount').on("value",(data)=>{
        playercount=data.val()
    })
}

function updatePlayerCount(a){
database.ref('/').update({playerCount:a})
}

function getGamestate(){
    database.ref('gamestate').on("value",(data)=> {
        gamestate=data.val()
    })
}

function updateGamestate(b){
    database.ref('/').update({gamestate:b})
}

function mousePressedover(spritex){
  spritex.mouseActive=true
  if(mouseIsPressed&&spritex.mouseIsOver){
      return true
  }
  return false
}