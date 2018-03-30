import { Snake,SnakeDirection } from "./Snake";

export class Game {

    canvasContext : CanvasRenderingContext2D;
    gridWidth : number;
    gridHeight : number;
    snake : Snake;

    constructor(public canvas : HTMLCanvasElement, public speed : number, public gridSize : number = 5) {
        this.gridWidth = canvas.width / gridSize;
        this.gridHeight = canvas.height / gridSize;
        this.canvasContext = canvas.getContext("2d");

        document.addEventListener('keydown', function(event){
            alert(event.keyCode)
        });
    }

    /**
     * Start game
     */
    start() {
        const coord_first_part=this.getGridMiddle();
        this.snake = new Snake(coord_first_part.x,coord_first_part.y,3)

        this.animate(); // Start animation
    }

    animate() {
        let fps = this.speed;
        let now;
        let then = Date.now();
        let interval = 1000/fps;
        let delta;

        let animationLoop = (function () {
            if (!this.isGameOver) {
                requestAnimationFrame(animationLoop);
            }

            now = Date.now();
            delta = now - then;

            if (delta > interval) {
                then = now - (delta % interval);
                this.update();
            }

        }).bind(this);

        animationLoop();
    }

    /**
     * Update status of game and view
     */
    update() {
        this.draw();
        console.log("update")
    }

    draw(){
        this.canvasContext.fillStyle = '#F0F0F0'; 
        this.canvasContext.fillRect(0, 0, this.gridSize*this.gridWidth, this.gridSize*this.gridHeight);
    
        this.snake.draw(this.canvasContext,this.gridSize);
      
        // var i:number;
        // var j:number;

        // for(i=0;i<this.gridWidth; i++){
        //     for(j=0;j<this.gridHeight;j++){
        //         this.canvasContext.beginPath();
        //         this.canvasContext.rect(i, j, this.gridSize*this.gridWidth, this.gridSize*this.gridHeight);
        //         this.canvasContext.stroke();
        //     }
        // }

    }

    getGridMiddle(){
        return {x:this.gridWidth/2,
                y:this.gridHeight/2};
    }

}