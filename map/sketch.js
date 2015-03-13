
// A wind direction vector
var wind;
// Circle position
var position;
var locationTable;

function setup() {
  createCanvas(720, 400);
  // Request the data from openweathermap
  mapImage = loadImage("map.png");
  // Circle starts in the middle
  //position = createVector(width/2, height/2);
  loadTable('locations.tsv', "tsv", gotTable);
  // wind starts as (0,0)
  wind = createVector();

}

function draw() {
  background(255);
  image(mapImage, 0, 0);

/*
  // This section draws an arrow pointing in the direction of wind
  push();
  translate(32, height - 32);
  // Rotate by the wind's angle
  rotate(wind.heading() + PI/2);
  noStroke();
  fill(255);
  ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();
  
  // Move in the wind's direction
  position.add(wind);
  
  stroke(0);
  fill(51);
  ellipse(position.x, position.y, 16, 16);

  if (position.x > width)  position.x = 0;
  if (position.x < 0)      position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0)      position.y = height;
*/

}

function gotTable(table){
  //console.log(table.rows[1].obj[0]);
  //console.log(table.get('date'));
  console.log(table.rows.length);
  locationTable = new p5.Table(table.rows.length);
  for(var i=0; i < table.rows.length; i++){
    locationTable.addRow(table.rows[i]);
  }
  console.log(locationTable.getRow(0).arr[0]);
}
