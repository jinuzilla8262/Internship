var markMa; 
var markHe; 
var johnMa; 
var johnHe; 
var BMIm; 
var BMIj;
markMa = prompt('Enter Mark\'s Mass:' );
markHe = prompt('Enter Mark\'s Height:' );
johnMa = prompt('Enter John\'s Mass:' );
johnHe = prompt('Enter John\'s Height:' );

BMIm = markMa / (markHe * markHe);
BMIj = johnMa / (johnHe * johnHe);

var BMI   = BMIm > BMIj;

console.log(BMIm, BMIj);

if(BMIm > BMIj){
  console.log('Mark\'s BMI is bigger than John\'s');
}
else {
  console.log('John\'s BMI is bigger than Mark\'s');
}