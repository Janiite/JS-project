
export function showNotification(setter){    //put in hiere setter function

        setter(true);
        setTimeout(() => {
            setter(false);
        }, 2000)


}

export function checkWin(correct, wrong, word) {
/* we're either going to get we won we faven't won or lost or we lost  */
let status = 'win';

//check for win
word.split('').forEach(letter => {    // if our correct letters does not include a letter from  our word then taht means we didn''t win but it also does nor mean we lose
if(!correct.includes(letter)){
    status = "";
}
});

 // check for lose
 if(wrong.length === 6 ) status = 'lose';  // 6 this comes from Figure part 
 
  return status;
}