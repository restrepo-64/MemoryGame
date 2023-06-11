document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
       //need two of each card, to match
       
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create board

    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
         const card = document.createElement('img')
         card.setAttribute('src', 'images/blank.png')

         //going to set data id to be a random number between 0 and 11 
         //because there are 
         //12 cards to choose from
         card.setAttribute('data-id', i)

          //add a listener to see if a card has been clicked on
          //and use flipcard function, to be implemented
         card.addEventListener('click', flipCard)

          grid.appendChild(card)
        }

    }

    //check for match
    function checkForMatch() {
      //copies card images to this array
      const cards = document.querySelectorAll('img')

      //temp holder to change card img later
       const optionOneId = cardsChosenId[0]
       const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('You have clicked the same image!')
        }
         else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }
         else {
             cards[optionOneId].setAttribute('src', 'images/blank.png')
             cards[optionTwoId].setAttribute('src', 'images/blank.png')
              alert('Sorry, try again')
        }
            //clears the cardschosen and cardschosenid arrays to be used again
            cardsChosen = []
            cardsChosenId = []

            //card score is 1 point per cards matched
            resultDisplay.textContent = cardsWon.length

          //check if all cards are won, all matches found
          if (cardsWon.length === cardArray.length/2) {
             resultDisplay.textContent = 'Congrats, you found all the matches!'
         }

    }


    //flip a card
    function flipCard() {

     //grabbing data id from createBoard
     let cardId = this.getAttribute('data-id')

     //card chosen will link up with card id in that original array to grab
     //correct card and image
     cardsChosen.push(cardArray[cardId].name)
     cardsChosenId.push(cardId)

     //for picked card, set the image from the original array
      this.setAttribute('src', cardArray[cardId].img)

      //only 2 cards in cardschosen array
      if (cardsChosen.length === 2) {
           //timeout is to give some time between click/animation before function calls
           setTimeout(checkForMatch, 500)
         }

    }

createBoard()
    
//to do before production.
// change images [ ]
// play sounds for matches and no matches and victory [ ]
// add animation for flip? [ ]
// 


})