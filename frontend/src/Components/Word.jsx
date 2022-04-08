import React from 'react'
//import WrongLetters from './WrongLetters'

/* For display word we need : 1.selected word   */
function Word({selectedWord, correctLetters}) {

  return (
    <div className="word">
      {selectedWord.split('').map( (letter, i) => {
           return(
           <span className="letter" key={i}>
               {correctLetters.includes(letter) ? letter : ''}    {/* check if correctLetters(we use correct letters which is passing as par) include  letters we mapping through selected word in each letter checking if it is inside correct letters in span and if it is show letter otherwise blank    */}
           </span>
           )
      })}
    </div>
  )
}

export default Word