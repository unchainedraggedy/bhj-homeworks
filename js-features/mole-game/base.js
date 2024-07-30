(() => {
    activeHole = 1;

    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 );

  next();
})();

/*
function startGame(){
  let activateHole = 1;
  
  function getHole(index){
    document.getElementById(`hole${index}`)
  }
  function deactivateHole(index){
    getHole(index).className = 'hole';
  }
  function activateHole(index){
    getHole(index).className = 'hole hole_has-mole';
  }
  function next(){
    setTimeout(() => {
      deactivateHole(activeHole);
      activeHole = Math.floor(1 + Math.random() * 9);
      activeHole(activeHole);
      next();
    }, 800);
  }
  next();
}

startGame()
*/
