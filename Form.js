 class Form{

    constructor(){
        this.name=createInput("")
        this.button=createButton('Enter')
        this.button1=createButton('Start')
        this.button2=createButton('reset')

    }

    display(){
        this.name.position(displayWidth/2,displayHeight/2)
        this.button.position(displayWidth/2,displayHeight/2+50)
        this.button2.position(displayWidth-50,50)

        this.button.mousePressed(()=>{
            playercount=playercount+1
            player.index=playercount
            player.name=this.name.value()
            player.update()
            updatePlayerCount(playercount)
            this.name.hide()
            this.button.hide()
        })

       this.button1.hide()
       this.button2.mousePressed(()=>{
           updatePlayerCount(0)
           database.ref('players').remove()
updateGamestate(0)
       })

       this.button1.mousePressed(()=>{
           updateGamestate(1)
       })
    }

    hide(){
        this.name.hide()
        this.button.hide()
        this.button1.hide()
    }

    formDisplay(){
     a = createSprite(displayWidth/7,displayHeight/2)
       a.addImage(cop1)
       a.scale=0.3
     b = createSprite(2*displayWidth/7,displayHeight/2)
       b.addImage(cop2)
       b.scale=0.3
     c = createSprite(3*displayWidth/7,displayHeight/2)
       c.addImage(cop3)
       c.scale=0.3
     d = createSprite(4*displayWidth/7,displayHeight/2)
       d.addImage(cop4)
       d.scale=0.3
     e = createSprite(5*displayWidth/7,displayHeight/2)
       e.addImage(cop5)
       e.scale=0.3
     f = createSprite(6*displayWidth/7,displayHeight/2)
       f.addImage(mrx)
       f.scale=0.3
       
       drawSprites()  
    }



 }



