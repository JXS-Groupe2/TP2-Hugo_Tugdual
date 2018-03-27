const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width=800;
canvas.height=600;

// Code temporaire pour tester le DnD
// new DnD(canvas);

// Code temporaire pour tester l'affiche de la vue
// var dessin = new Dessin();
// dessin.paint(ctx);
// var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
// rec.paint(ctx);
// var line = new Line(10, 20, 50, 100, 5, '#DDDD');
// line.paint(ctx);

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

