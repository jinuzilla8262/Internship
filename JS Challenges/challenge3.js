var befT = [124, 48, 268]; var amoT = []; var finA = []; 

function tipCalculator(billA)
{
  var prc;
  if ( billA <= 50) {
      prc = .2;  }
  else if (50 < billA <= 200) {
          prc = .15;
    }
  else {
          prc = .1;
    }
    return prc *  billA
  }

for (i = 0; i< befT.length; i++)
{
  amoT[i] = tipCalculator(befT[i]);
  finA[i] = befT[i] + amoT[i];
  console.log([i] + '. total tip: ' + amoT[i]);
}

console.log('\n\nBills before tips: ' + befT.toString());
console.log('Final Amounts: ' + finA.toString());