class Player{

    constructor(){
        this.name=null
        this.index=0
    }

    update(){
        var pi="players/player"+this.index
        database.ref(pi).set({name:this.name,index:this.index})
    }
}