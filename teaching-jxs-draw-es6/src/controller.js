
const editingMode = { rect: 0, line: 1 };

class Pencil {
	constructor(ctx, drawing, canvas) {
        this.currEditingMode = editingMode.line;
        this.currLineWidth = 5;
        this.currColour = '#000000';
        this.currentShape = 1;
		new DnD(canvas, this);

        // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
		document.getElementById("butRect").addEventListener("click", this.changeShape.bind(this, 0)); 
		document.getElementById("butLine").addEventListener("click", this.changeShape.bind(this, 1));
	}
	
	changeShape(shape) {
		this.currentShape = shape;
	}

	changeColour(colour) {
		
	}

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	onInteractionStart(dnd) {
		if(this.currentShape == 0 ) {
			drawing.formes.push(new Rectangle(dnd.x_init, dnd.y_init, 0, 0, document.getElementById("spinnerWidth").value, document.getElementById("colour").value));
		} else {
			drawing.formes.push(new Line(dnd.x_init, dnd.y_init, dnd.x_init, dnd.y_init, document.getElementById("spinnerWidth").value, document.getElementById("colour").value));
		}
		drawing.redraw(ctx, canvas);
	}

	onInteractionUpdate(dnd) {
		drawing.formes[drawing.formes.length-1].update(dnd.x_final, dnd.y_final);
		drawing.redraw(ctx, canvas);
	}

	onInteractionEnd(dnd) {
		drawing.formes[drawing.formes.length-1].update(dnd.x_final, dnd.y_final);
		drawing.redraw(ctx, canvas);
	}
}


