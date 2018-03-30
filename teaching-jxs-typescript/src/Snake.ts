import { SnakePart } from "./SnakePart";

export enum SnakeDirection {
    UP,
    DOWN,
    RIGHT,
    LEFT 
}

export class Snake{

    snakeParts : SnakePart[];

    constructor(x_first:number, y_first:number,numberSnakeParts:number){
        this.snakeParts = new Array();
        for(let i=0;i<numberSnakeParts;i++){
            this.snakeParts.push(new SnakePart(x_first,y_first+i));
        }
    }

    draw(ctx:CanvasRenderingContext2D,gridSize:number){
        this.snakeParts.forEach(function(element){
            element.draw(ctx,gridSize);
        });
    }
}