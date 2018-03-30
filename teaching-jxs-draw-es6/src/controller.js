
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
		document.getElementById("spinnerWidth").addEventListener("change", this.changeLineWidth.bind(this));
		document.getElementById("colour").addEventListener("change", this.changeColour.bind(this));
	}
	
	changeShape(shape) {
		this.currentShape = shape;
	}

	changeColour() {
		this.currColour = document.getElementById("colour").value;
	}

	changeLineWidth() {
		this.currLineWidth = document.getElementById("spinnerWidth").value;
	}

	deleteShape(id) {
		const shape = document.getElementById("shape" + id).parentNode;
		shape.parentNode.removeChild(shape);
		drawing.delete(id);
		drawing.redraw(ctx);
	}

	addShapeToList() {
		const forme = drawing.getLastForme();
		const list = document.getElementById("shapeList");
		const btn = document.createElement("BUTTON");
		const shape_id = "shape" + (drawing.getNbFormes() - 1);
		btn.id = shape_id;
		btn.appendChild(document.createTextNode("Delete"));
		btn.classList.add("delete-btn");
		const shape = document.createElement("SPAN");
		shape.style.color = forme.getColor();
		shape.appendChild(btn);
		shape.appendChild(document.createTextNode(forme.getAsString()));
		shape.appendChild(document.createElement("br"));
		list.appendChild(shape);
		document.getElementById(shape_id).addEventListener("click", this.deleteShape.bind(this, (drawing.getNbFormes() - 1)));
	}

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	onInteractionStart(dnd) {
		if(this.currentShape == 0 ) {
			drawing.add(new Rectangle(dnd.x_init, dnd.y_init, 0, 0, this.currLineWidth, this.currColour));
		} else {
			drawing.add(new Line(dnd.x_init, dnd.y_init, dnd.x_init, dnd.y_init, this.currLineWidth, this.currColour));
		}
		drawing.redraw(ctx, canvas);
	}

	onInteractionUpdate(dnd) {
		drawing.update(dnd.x_final, dnd.y_final);
		drawing.redraw(ctx, canvas);
	}

	onInteractionEnd(dnd) {
		drawing.update(dnd.x_final, dnd.y_final);
		this.addShapeToList();
		drawing.redraw(ctx, canvas);
	}
}


