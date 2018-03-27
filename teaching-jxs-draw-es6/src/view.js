// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Drawing.prototype.paint = function(ctx) {
	ctx.fillStyle = '#F0F0F0'; // set canvas' background color
	ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
}

Forme.prototype.paint = function(ctx) {
	ctx.strokeStyle = this.color;
	ctx.lineWidth = this.epaisseur;
}

Rectangle.prototype.paint = function(ctx) {
	Object.getPrototypeOf(this.__proto__).paint.call(this, ctx);
	ctx.beginPath();
	ctx.rect(this.base_x, this.base_y, this.largeur, this.hauteur);
	ctx.stroke();
}

Line.prototype.paint = function(ctx) {
	Object.getPrototypeOf(this.__proto__).paint.call(this, ctx);
	ctx.beginPath();
	ctx.moveTo(this.start_x, this.start_y);
	ctx.lineTo(this.end_x, this.end_y);
	ctx.stroke();
}
