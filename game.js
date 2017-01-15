
	var numberOfFaces = 5;
	
    var theLeftSide = document.getElementById("leftSide");
    
    var theRightSide = document.getElementById("rightSide");
    
    var theBody = document.getElementsByTagName("body")[0];

	function generateFaces() {
			
			while(numberOfFaces > 0) {

			var my_top = Math.floor(Math.random()*400);
	
    		var my_left = Math.floor(Math.random()*400);
	
    		var face = document.createElement('img');

				face.src ="http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
		
        		face.style.top = my_top + "px";
		
        		face.style.left = my_left + "px";

				theLeftSide.appendChild(face);

            var my_clone = leftSide.lastChild.cloneNode(true);
    
            theRightSide.appendChild(my_clone);                    

			numberOfFaces--;

		}
        theRightSide.removeChild(theRightSide.lastChild);

	     numberOfFaces = 5;

        theLeftSide.lastChild.onclick = function nextLevel(event){

            event.stopPropagation();

            theLeftSide.removeChild(theLeftSide.lastChild);
            
            while(theLeftSide.firstChild) {
                
                theLeftSide.removeChild(theLeftSide.lastChild);
                
                theRightSide.removeChild(theRightSide.lastChild);

                numberOfFaces++;
            }


            generateFaces();


    };

    theBody.onclick = function gameOver() {

        alert("Game Over!");

        theBody.onclick = null;

        theLeftSide.lastChild.onclick = null;


    }; 

}
