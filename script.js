function repeateStr(){
  const Str = document.getElementById('first').value;
  const Num = document.getElementById('second').value;
  let repeatedStr = "";
  for (let i=Num; i>0 ;i--){
    repeatedStr +=Str+"\xa0\xa0\xa0\xa0\xa0\xa0";
  }
document.getElementById('result').innerHTML =`The String is repeated for ${Num} times:    ${repeatedStr}`;
}
