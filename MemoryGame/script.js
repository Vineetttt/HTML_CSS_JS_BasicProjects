document.addEventListener('DOMContentLoaded', () => {
    //storing the card names and respective images in an array.
    // one card needs to be repeated twice as we need to make a pair 
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png',
        },
        {
            name: 'pizza',
            img: 'images/pizza.png',
        },
        {
            name: 'fries',
            img: 'images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png',
        },
        {
            name: 'pizza',
            img: 'images/pizza.png',
        },
    ]

    //sorting the entire array in a random array using inbuilt functions 
    cardArray.sort(() => 0.5 - Math.random())

    //    creating the grid

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('.result')
    let cardChosen = []
    let cardChosenId = [] // collects the choosen cards ID 
    let cardWon = []  // collects the matches found 

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkMatch() {
        const card = document.querySelectorAll('img')
        const optionZeroId = cardChosenId[0]
        const optionOneId = cardChosenId[1]

        if (optionZeroId == optionOneId) {
            optionZeroId = [];
            optionOneId = [];
            card[optionZeroId].setAttribute('src', 'images/blank.png')
            card[optionOneId].setAttribute('src', 'images/blank.png')
            alert('Oops, you clicked the same image twice!!')
        }
        else if (cardChosen[0] === cardChosen[1]) {
            alert('Yeayy ,you found a match !!')
            // after we find a match suppose card A and card B then the images of both the cards will turn into white.png
            card[optionZeroId].setAttribute('src', 'images/white.png')
            card[optionOneId].setAttribute('src', 'images/white.png')

            // after the match is found we do not want to click the matched cards again 
            card[cardChosenId[0]].removeEventListener('click', flipCard)  // removes the ability to click on a card 
            card[cardChosenId[0]].removeEventListener('click', flipCard)

            cardWon.push(cardChosen)
        }
        // if the two cards selected do not match then we change the clicked image to blank again
        else {
            card[optionZeroId].setAttribute('src', 'images/blank.png')
            card[optionOneId].setAttribute('src', 'images/blank.png')
            alert('Sorry, not a match Try again !!')
        }
        // after the statements are executed the cardChosen array and the cardChosenId is again set to an empty array so the if statement can be executed again
        cardChosen = []
        cardChosenId = []

        // after every execution we display the score i.e. the length of items appended in the cardWon array
        resultDisplay.textContent = cardWon.length

        // when we find all the matched i.e. the cardWon length is equal to 6 (6 is the number of pairs) 
        if (cardWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratualtions you found them all !!'
        }

    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)   //storing the names associated with clicked card and appending in the empty array
        cardChosenId.push(cardId)                 //storing the card ID after click
        this.setAttribute('src', cardArray[cardId].img)  //will return the image associated with the cardId from the randomly sorted array
        if (cardChosen.length == 2) {
            setTimeout(checkMatch, 500)
        }
    }
    createBoard()
})