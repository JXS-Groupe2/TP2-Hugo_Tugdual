
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
class Drawing {
	constructor() {
		this.formes = new Array();
	}

	redraw(ctx, canvas) {
		this.paint(ctx, canvas);
		this.formes.forEach(function(elem) {
			elem.paint(ctx);
		});
	}

	add(forme) {
		this.formes.push(forme);
	}

	update(end_x, end_y) {
		this.formes[this.formes.length-1].update(end_x, end_y);
	}

	delete(id) {
		delete this.formes[id];
	}

	getLastForme() {
		return this.formes[this.formes.length-1];
	}

	getNbFormes() {
		return this.formes.length;
	}
}

class Forme {
	constructor(color, epaisseur) {
		this.color = color;
		this.epaisseur = epaisseur;
	}

	getAsString() {
		return this.color + "; " + this.epaisseur + ";";
	}

	getColor() {
		return this.color;
	}
}

class Rectangle extends Forme {
	constructor(base_x, base_y, largeur, hauteur, epaisseur, color) {
		super(color, epaisseur);
		this.base_x = base_x;
		this.base_y = base_y;
		this.largeur = largeur;
		this.hauteur = hauteur;
	}

	update(end_x, end_y) {
		this.largeur = end_x-this.base_x;
		this.hauteur = end_y-this.base_y;
	}

	getAsString() {
		const forme = Object.getPrototypeOf(this.__proto__).getAsString.call(this);
		return "Rectangle: [" + this.base_x + ", " + this.base_y + "]; [" + this.largeur + "x" + this.hauteur + "]; " + forme;
	}
}

class Line extends Forme {
	constructor(start_x, start_y, end_x, end_y, epaisseur, color) {
		super(color, epaisseur);
		this.start_x = start_x;
		this.start_y = start_y;
		this.end_x = end_x;
		this.end_y = end_y;
	}

	update(end_x, end_y) {
		this.end_x = end_x;
		this.end_y = end_y;
	}

	getAsString() {
		const forme = Object.getPrototypeOf(this.__proto__).getAsString.call(this);
		return "Line: [" + this.start_x + ", " + this.start_y + "] --> [" + this.end_x + ", " + this.end_y + "]; " + forme;
	}
}
