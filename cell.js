class Cell {
  constructor(x, y, state) {
    this.x = x;
    this.y = y;
    this.state= state;
    this.newstate = state;
    this.statelist = [];
    this.statelist[generation]= state;
    // the new state equals the current state at the start then holds the state of the cell at the next generation
    

  }
  display() {
    // display black square with green stroke for 1 and white with red stroke for 0
    if (this.state == 1) {
      strokeWeight(1);
      stroke(0,255,0);
      fill(0);
      rect(this.x, this.y, width / cellsize, width/ cellsize);
    } else {
      strokeWeight(1);
      stroke(255,0,0);
      fill(255);
      rect(this.x, this.y, width / cellsize, width /cellsize);
    }
  }
  
  
  generate(neighbors){
    // apply the GOL rules and set newstate for next generaton note: this way use object vaue instead of a second array
    if (this.state == 1 && neighbors <2){
    this.newstate = 0; // die
    } 
    if (this.state == 1 && neighbors >3) {
      this.newstate = 0; //die
    }
    
    if (this.state == 0 && neighbors ==3){
      this.newstate = 1; // live from reproduction
    }
    
    
    
  }
  
  swapstate(){
    // swap the state this is so this new generation is and add the new state to the statelist
    this.state = this.newstate;
    this.statelist[generation+1] = this.newstate
    
  }   
}
