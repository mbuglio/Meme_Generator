const form = document.querySelector('#memegenerator');
const results = document.getElementById('results');
let memeCounter = 0;


form.addEventListener('submit', function(e){
    e.preventDefault();

    const topTextInput = document.querySelector('input[name="toptext"]');
    const bottomTextInput = document.querySelector('input[name="bottomtext"]');
    const imageInput = document.querySelector('input[name="image"]');
    
    
    const meme = document.createElement('img');
    meme.src = imageInput.value;
    
    const memeTopWords = document.createElement('h2');
    memeTopWords.innerText = topTextInput.value;
    memeTopWords.classList.add('top');

    const memeBottomWords = document.createElement('h2');
    memeBottomWords.innerText = bottomTextInput.value;
    memeBottomWords.classList.add('bottom');

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removebtn');
    removeBtn.innerText = 'X';
    removeBtn.addEventListener('click', function(e){
        e.target.parentElement.remove();
    })
     
    let newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    newDiv.setAttribute('id','meme'+ memeCounter);
    
    newDiv.appendChild(memeTopWords);
    newDiv.appendChild(memeBottomWords);
    newDiv.appendChild(meme);
    newDiv.appendChild(removeBtn);
    results.appendChild(newDiv);
    
    form.reset();
    memeCounter++;

})