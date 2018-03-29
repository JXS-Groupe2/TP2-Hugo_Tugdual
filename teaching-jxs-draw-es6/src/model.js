
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
}

class Forme {
	constructor(color, epaisseur) {
		this.color = color;
		this.epaisseur = epaisseur;
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
}
