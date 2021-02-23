//An array to store SUDOKO Matrix
var sudokoArray = new Array(9);

//Declaring an empty SUDOKO Matrix
for (i = 0; i < 9; i++) {
  sudokoArray[i] = new Array(9);
}

/* An array that stores all numbers genereated per row 
to check Uniqueness of new generated number */
var uniqueDigitCheck = new Array(9);

//Random number b/w 1-9
var randomOneToNine = 0;

//An iterator variable to increase index of uniqueDigitCheck Array
var uniqueIter = 0;

for (i = 0; i < 9; i++) {
  //Unique Digit array Initiation
  uniqueDigitCheck[0] = 0;
  for (j = 0; j < 9; j++) {

        //Generating first position digit of first column in each row
        if(uniqueDigitCheck[j] == 0){
            randomOneToNine = Math.floor(Math.random() * 9) + 1;
            uniqueDigitCheck[0] = randomOneToNine;
            uniqueIter++;
        }else{

            //Generating all other unique numbers
            for(n = 0; n < uniqueDigitCheck.length; n++){
                randomOneToNine = Math.floor(Math.random() * 9) + 1;
                if(uniqueDigitCheck[n] != randomOneToNine){
                    uniqueDigitCheck[uniqueIter] = randomOneToNine;
                    uniqueIter++;
                    break;
                }
            }
        }
        
        //Populating SUDOKO Matrix
        sudokoArray[i][j] = randomOneToNine;
        
  }
  //Making the variable ready for new number generation
  randomOneToNine = 0;
  uniqueIter = 0;
}

for(i=0;i<9;i++){
    var sos = '';
    for(j=0;j<9;j++){
        sos += sudokoArray[i][j].toString();
    }
    console.log(sos);
}