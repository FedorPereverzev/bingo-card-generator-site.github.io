function getCard() {
  
  
   let numbersB = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
   let numbersI = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
   let numbersN = [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
   let numbersG = [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
   let numbersO = [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
  
 function shuffle(array) {
   
   if (array === 'B') array = numbersB;
   if (array === 'I') array = numbersI;
   if (array === 'N') array = numbersN;
   if (array === 'G') array = numbersG;
   if (array === 'O') array = numbersO;
   
  function compareRandom(a, b) {
  return Math.random() - 0.5;
}
  return array.sort(compareRandom);
}
 

 function cB(lettr) {
    this.name = lettr;
    this.number = shuffle(this.name).pop();
    this.res = this.name + this.number
  }
  
  let result = [];
  
  
    
  
  for(let i = 0; i <= 25; i += 1){
    var htmlB ;
    
    if ( i > 0 && i <= 5){
      htmlB = document.getElementById('B'+i);
      let B = new cB('B');
      result.push(B.res);
      numbersB.pop();
      htmlB.textContent = result.pop();
    }
    if ( i > 5 && i <= 10){
      htmlB = document.getElementById('I'+i);
      let I = new cB('I');
      result.push(I.res);
      numbersI.pop();
      htmlB.textContent = result.pop();
    }
    if ( i > 10 && i <= 14){
      htmlB = document.getElementById('N'+i);
      let N = new cB('N');
      result.push(N.res);
      numbersN.pop();
      htmlB.textContent = result.pop();
    }
    if ( i > 15 && i <= 20){
      htmlB = document.getElementById('G'+i);
      let G = new cB('G');
      result.push(G.res);
      numbersG.pop();
      htmlB.textContent = result.pop();
    }
    if ( i > 20 && i <= 25){
      htmlB = document.getElementById('O'+i);
      let O = new cB('O');
      result.push(O.res);
      numbersO.pop();
      htmlB.textContent = result.pop();
    }
  }
  
  return result;
}

  const gen = document.getElementById('generate');
    
    gen.onmousedown = function(event) {
       gen.style.backgroundColor="lightgray";
        getCard();
    };
    
    gen.onmouseup = function(event) {
       gen.style.backgroundColor="";  
    };