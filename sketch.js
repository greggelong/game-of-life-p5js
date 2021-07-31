let cellmat = [];   // cell matrix will be 2 dim
let generation = 0; // in game of life you keep track of generations of applied rules
let cellsize = 75; // number of cells in row and column of matrix
let sbutton;
let active = false  // a booling that checks if the continuous generations should keep running
let stepbutton;
let backbutton;  // dom buttons for continuous running and stepping forward and back.
let gendisplay; // dom html for generation display

/* here we can see that drawing the cells with only width size does perserve the squareness but it does not fit all the cells on the screen
 if the screen is not not square all the cells wont fit
 you also must change the display of the cells in the cell class to  rect(this.x, this.y, width / cellsize, width /cellsize);
*/
function setup() {
   // below is a little bit of code tat keeps the matrix square on different screen sizes smallest side length makes the square 
  let scrnszX = windowWidth          
  let scrnszY = windowHeight
  if (scrnszX <= scrnszY) {
    createCanvas(scrnszX-50, scrnszX-50);
    // subtracting 50 to give room on the screen for buttons here x is the smallest
  } else {
    createCanvas(scrnszY-50, scrnszY-50);
    // y is the smallest

  }

  frameRate(25);
  // button stuff
  sbutton = createButton("generate");
  stepbutton = createButton("step forward");
  backbutton = createButton("step back");
  sbutton.mousePressed(toggleGenerate);
  sbutton.position(width / 2, height);
  stepbutton.mousePressed(stepgen);
  backbutton.mousePressed(backgen);  // on mouse press sends them to functions 
  stepbutton.position(width - width / 4, height);
  backbutton.position(width/4,height);
  gendisplay = createElement('h2',str(generation));
  gendisplay.position(20,height-20);
  createP();
  createP(); // put some space between button and link
  createA('https://github.com/greggelong/cfg-chinese', 'link to this  repo');
  
  
  background(70);

  // instantiate the cell objects in a nested array with xy and a randomly assigned state of zero or one

  for (let i = 0; i < cellsize; i++) {
    cellmat[i] = []; // need to init the nested array unlike python
    for (let j = 0; j < cellsize; j++) {

      let state = int(random(0, 2));

      cellmat[i][j] = new Cell(i * width / cellsize, j * width / cellsize, state);
      // console.log(i, j, state);
    }
  }
}



function draw() {

  // display console.log(generation, cellmat[30][30].statelist)

  for (let i = 0; i < cellsize; i++) {
    for (let j = 0; j < cellsize; j++) {

      

    if (cellmat[i][j].statelist[generation-1]!=cellmat[i][j].state){
     // only display if the state has changed .state differnet from last state saved statelist array
      cellmat[i][j].display();
      // display generation
      gendisplay.html(str(generation));
    }

    }
  }
  // if active is true generate new and increace generation
  if (active) {
    generate();
    generation++
  }

}

function toggleGenerate() {
  // toggeles if the booling active is on or off
  if (!active) {
    active = true;
    sbutton.html("pause");
  } else {
    active = false;
    sbutton.html("generate");

  }
}

function stepgen() {
  // steps forward one generation
  generate();
  generation++
}


function backgen() {
  // steps backward uses valuse stored in the cell objects values .statelist
  // works differently from forward as values just need to be recalled not generated
  if (generation >0){
  generation--
  // subtract a generation
  for (let i = 1; i < cellsize - 1; i++) {
    for (let j = 1; j < cellsize - 1; j++) {

      cellmat[i][j].statelist.pop();
      cellmat[i][j].state = cellmat[i][j].statelist[generation];
      cellmat[i][j].newstate = cellmat[i][j].state;
      cellmat[i][j].display();
      // pop the last one off this list list gets shorter by one
      // set the now state to the previous state
      // set the newstate to to the now state
      // then directly display* do not generate just display
    }
  }
  }
}

function generate() {
  // get the neighbors for each cell and call the rules from the cell function
  // increace  generation  in step and draw functions not here

  for (let i = 1; i < cellsize - 1; i++) {
    for (let j = 1; j < cellsize - 1; j++) {

      let neighbors = cellmat[i - 1][j - 1].state + cellmat[i][j - 1].state + cellmat[i + 1][j - 1].state + cellmat[i - 1][j].state + cellmat[i + 1][j].state + cellmat[i - 1][j + 1].state + cellmat[i][j + 1].state + cellmat[i + 1][j + 1].state;

      cellmat[i][j].generate(neighbors);
      // generate all the neighbors then swap state


    }

  }
  for (let i = 1; i < cellsize - 1; i++) {
    for (let j = 1; j < cellsize - 1; j++) {

      cellmat[i][j].swapstate();
    }
  }



}
