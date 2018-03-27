
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
class DnD {
    constructor(canvas, interactor) {
        this.canvas = canvas;
        this.interactor = interactor;

        // Définir ici les attributs de la classe
		this.x_init = 0;
		this.y_init = 0;
		this.x_final = 0;
		this.y_final = 0;

		this.isDown = 0;

		// Associer les évènements du canvas aux fonctions ci-dessous.
		this.canvas.addEventListener('mousedown', this.handleDown.bind(this), false);
		this.canvas.addEventListener('mousemove', this.handleMove.bind(this), false);
		this.canvas.addEventListener('mouseup', this.handleUp.bind(this), false);
    }

	// Developper les 3 fonctions gérant les événements
	handleDown(evt) {
		var pos = getMousePosition(this.canvas, evt);
		this.x_init = pos.x;
		this.y_init = pos.y;
		this.isDown = 1;
		this.interactor.onInteractionStart(this);
	}

	handleMove(evt) {
		if(this.isDown) {
			var pos = getMousePosition(this.canvas, evt);
			this.x_final = pos.x;
			this.y_final = pos.y;
			this.interactor.onInteractionUpdate(this);
		}
	}

	handleUp(evt) {
		if(this.isDown) {
			var pos = getMousePosition(this.canvas, evt);
			this.x_final = pos.x;
			this.y_final = pos.y;
			this.isDown = 0;
			this.interactor.onInteractionEnd(this);
		}
	}

}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}



