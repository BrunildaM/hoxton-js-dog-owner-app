console.log(data);


function mainLi(dog){
    let topLi = document.querySelector('.dogs-list')

    let topLiElement = document.createElement('li')

    topLiElement.className = 'dogs-list__button'

    topLiElement.textContent = dog.name

    topLiElement.addEventListener('click', ()=>displayDog(dog))


    topLi.append(topLiElement)
}
for (let dog of data) {
        mainLi(dog)
    }


function displayDog(dog){
    
    let headerElement = document.createElement('h2')
    headerElement.textContent = dog.name
    let dogImage = document.createElement('img')
    dogImage.src = dog.image

    let mainSectionElement = document.createElement('div')
    mainSectionElement.className = 'main__dog-section__desc'
    let dogBioHeader = document.createElement('h3')
    dogBioHeader.textContent = dog.bio
    let textElement = document.createElement('p')
    textElement.textContent = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,  minima voluptates libero cumque rerum consequatur optio aliquid sint eum maxime illo laborum omnis quo ab rem cupiditate nulla perspiciatis ipsum! '

    let secondSectionElement = document.createElement('div')
    secondSectionElement.className = 'main__dog-section__btn'
    let secondText = document.createElement('p')
    dog.isGoodDog === true ? 
    secondText.textContent = 'Is naughty? Yes!' : 
    secondText.textContent = 'Is naughty? No!'
   
    

    let displayButton = document.createElement('button')
    dog.isGoodDog === true ?
        displayButton.textContent = 'Bad Dog' :
        displayButton.textContent = 'Good Dog'
    

    displayButton.addEventListener('click', function (){
        if(dog.isGoodDog === true){
            dog.isGoodDog = false
            secondText.textContent = 'Is naughty?No!'
            displayButton.textContent = 'Good Dog'
        }
        else {
            dog.isGoodDog = true
            secondText.textContent = 'Is naughty?Yes!'
            displayButton.textContent = 'Bad Dog'
        }
    })

    
    

    let theDogCard = document.querySelector('.main__dog-section')
    theDogCard.textContent = ''
    theDogCard.append(headerElement, dogImage, mainSectionElement, dogBioHeader, textElement, secondSectionElement, secondText, displayButton)
      
}


