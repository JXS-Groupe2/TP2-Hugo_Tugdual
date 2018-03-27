
const editingMode = { rect: 0, line: 1 };

class Pencil {
	constructor(ctx, drawing, canvas) {
        this.currEditingMode = editingMode.line;
        this.currLineWidth = 5;
        this.currColour = '#000000';
        this.currentShape = 1;
		new DnD(canvas, this);

        // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	
	}
	
	redraw() {
		drawing.paint(ctx, canvas);
		drawing.formes.forEach(function(elem) {
			elem.paint(ctx);
		});
	}


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	onInteractionStart(dnd) {
		if(document.getElementById("butRect").checked) {
			drawing.formes.push(new Rectangle(dnd.x_init, dnd.y_init, 0, 0, document.getElementById("spinnerWidth").value, document.getElementById("colour").value));
		} else {
			drawing.formes.push(new Line(dnd.x_init, dnd.y_init, dnd.x_init, dnd.y_init, document.getElementById("spinnerWidth").value, document.getElementById("colour").value));
		}
		this.redraw();
	}

	onInteractionUpdate(dnd) {
		drawing.formes[drawing.formes.length-1].update(dnd.x_final, dnd.y_final);
		this.redraw();
	}

	onInteractionEnd(dnd) {
		drawing.formes[drawing.formes.length-1].update(dnd.x_final, dnd.y_final);
		this.redraw();
	}
}


