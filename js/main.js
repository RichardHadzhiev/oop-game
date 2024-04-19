class Player{
    constructor(){
        this.width = 10;
        this.height = 10;
        this.positionX = 50 - this.width / 2;
        this.positionY = 0;

        this.playerElm = document.getElementById("player")
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.height + "vh";
        this.playerElm.style.left = this.positionX + "vw"
        this.playerElm.style.bottom = this.positionY + "vh"


    }
    moveLeft(){
        if(this.positionX > 0){
            this.positionX--;
            this.playerElm.style.left = this.positionX + "vw"
        }
        


    }
    moveRight(){
        if(this.positionX < 100 - this.width){
            this.positionX++;
            this.playerElm.style.left = this.positionX + "vw";
        }

    }  
}


class Obstacle{
    constructor(){
        this.width = 10;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = 100;
        this.obstacleElm = null;

        this.createDomElement();

    }
    createDomElement(){
        //creating a property
        this.obstacleElm = document.createElement("div");
        this.obstacleElm.className = "obstacle";
        this.obstacleElm.style.width = this.width + "vw"
        this.obstacleElm.style.height = this.height + "vh";
        this.obstacleElm.style.left = this.positionX + "vw";
        this.obstacleElm.style.bottom = this.positionY + "vh";

        
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.obstacleElm);
    }
    moveDown(){
        this.positionY--;
        this.obstacleElm.style.bottom = this.positionY + "vh";
    }
}

const player = new Player()
const obstacleArr = []; //instanced of class Obstacle
//create new obstacles
setInterval(() => {
    const newObstacle = new Obstacle();
    obstacleArr.push(newObstacle)
}, 2000);


// update game
setInterval(() => {
    obstacleArr.forEach((obstacleInstance) => {
        //move all obstacle
        obstacleInstance.moveDown();

        //detect collision
        if( player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY)
            {   console.log("collision")
                location.href = "gameover.html";
            }
    })
}, 30);

document.addEventListener("keydown",(e) => {
    if(e.code === "ArrowLeft"){
        player.moveLeft();

    }else if (e.code === "ArrowRight"){
        player.moveRight();

    }
})