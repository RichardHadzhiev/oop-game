class Player{
    constructor(){
        this.positionX = 50;
        this.positionY = 0;
        this.width = 10;
        this.heigth = 10;

        this.playerElm = document.getElementById("player")
        this.playerElm.style.left = this.positionX + "vw"
        this.playerElm.style.bottom = this.positionY + "vh"
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.heigth + "vh";


    }
    moveLeft(){
        this.positionX--;
        this.playerElm.style.left = this.positionX + "vw"


    }
    moveRight(){
        this.positionX++;
        this.playerElm.style.left = this.positionX + "vw";

    }  
}


class Obstacle{
    constructor(){
        this.positionX = 50;
        this.positionY = 85;
        this.width = 10;
        this.heigth = 10;
        this.obstacleElm = null;

        this.createDomElement();

    }
    createDomElement(){
        //creating a property
        this.obstacleElm = document.createElement("div");
        this.obstacleElm.className = "obstacle";
        this.obstacleElm.style.left = this.positionX + "vw";
        this.obstacleElm.style.bottom = this.positionY + "vh";
        this.obstacleElm.style.width = this.width + "vw"
        this.obstacleElm.style.height = this.heigth + "vh";

        
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


// move all obstacle
setInterval(() => {
    obstacleArr.forEach((obstacleInstance) => {
        obstacleInstance.moveDown();
    })
}, 30);

document.addEventListener("keydown",(e) => {
    if(e.code === "ArrowLeft"){
        player.moveLeft();

    }else if (e.code === "ArrowRight"){
        player.moveRight();

    }
})