export class SnakePart {

    x : number;
    y : number;

    constructor(x_coord: number, y_coord:number){
        this.x=x_coord;
        this.y=y_coord;
    }

    draw(ctx:CanvasRenderingContext2D,gridSize:number){
        ctx.fillStyle="#000000";
        ctx.strokeStyle="#FFFFFF"
        ctx.lineWidth=1;
        ctx.beginPath();
        ctx.rect(this.x*gridSize, this.y*gridSize, gridSize, gridSize);
        ctx.fill();
        ctx.stroke();
    }

}