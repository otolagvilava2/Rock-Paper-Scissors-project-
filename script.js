let rock=document.getElementById('rock')
let paper=document.getElementById('paper')
let scissor=document.getElementById('scissor')
let mymain=document.getElementById('mymain')
let container=document.getElementById('container')

let yourScore = 0
let aiScore = 0

rock.addEventListener('click',()=>{
    let title=document.createElement('h1')
    let you=document.createElement('h4')
    let ai=document.createElement('h4')
    let youIcon=document.createElement('img')
    let aiIcon=document.createElement('img')
    let scoreLine=document.createElement('h3')
    let playAgainBtn=document.createElement('button')
    let div1=document.createElement('div')
    let div2=document.createElement('div')
    let div3=document.createElement('div')
    let random=Math.floor(Math.random()*3)+1

    scoreLine.className='scoreline'
    playAgainBtn.className='playAgainBtn'
    youIcon.className='result-icon youicon'
    aiIcon.className='result-icon aiicon'

    div1.className='div1'
    div2.className='div2'
    div3.className='div3'
    title.className='title'

    div3.appendChild(title)
    div3.appendChild(scoreLine)
    div3.appendChild(playAgainBtn)
    div1.appendChild(you)
    div1.appendChild(youIcon)
    div2.appendChild(ai)
    div2.appendChild(aiIcon)

    mymain.appendChild(div1)
    mymain.appendChild(div3)
    mymain.appendChild(div2)
    container.style.display = 'none'

    you.textContent = 'You'
    ai.textContent = 'AI'
    playAgainBtn.textContent = 'Play again'

    youIcon.src = '/rock/icon-rock.svg'

    if(random===1){
        aiIcon.src = '/rock/icon-paper.svg'
        title.textContent='You lose'
        aiScore++
    }
    else if(random===2){
        aiIcon.src = '/rock/icon-rock.svg'
        title.textContent='it`s a tie'
    }
    else if(random===3){
        aiIcon.src = '/rock/icon-scissors.svg'
        title.textContent='You win'
        yourScore++
    }

    scoreLine.textContent = yourScore + ' : ' + aiScore

    playAgainBtn.addEventListener('click',()=>{
        mymain.innerHTML = ''
        container.style.display = 'flex'
    })
})


paper.addEventListener('click',()=>{
    let title=document.createElement('h1')
    let you=document.createElement('h4')
    let ai=document.createElement('h4')
    let youIcon=document.createElement('img')
    let aiIcon=document.createElement('img')
    let scoreLine=document.createElement('h3')
    let playAgainBtn=document.createElement('button')
    let div1=document.createElement('div')
    let div2=document.createElement('div')
    let div3=document.createElement('div')
    let random=Math.floor(Math.random()*3)+1

    scoreLine.className='scoreline'
    playAgainBtn.className='playAgainBtn'
    youIcon.className='result-icon youicon'
    aiIcon.className='result-icon aiicon'

    div1.className='div1'
    div2.className='div2'
    div3.className='div3'
    title.className='title'

    div3.appendChild(title)
    div3.appendChild(scoreLine)
    div3.appendChild(playAgainBtn)
    div1.appendChild(you)
    div1.appendChild(youIcon)
    div2.appendChild(ai)
    div2.appendChild(aiIcon)

    mymain.appendChild(div1)
    mymain.appendChild(div3)
    mymain.appendChild(div2)
    container.style.display = 'none'

    you.textContent = 'You'
    ai.textContent = 'AI'
    playAgainBtn.textContent = 'Play again'

    youIcon.src = '/rock/icon-rock.svg'

    if(random===1){
        aiIcon.src = '/rock/icon-paper.svg'
        title.textContent='You lose'
        aiScore++
    }
    else if(random===2){
        aiIcon.src = '/rock/icon-rock.svg'
        title.textContent='it`s a tie'
    }
    else if(random===3){
        aiIcon.src = '/rock/icon-scissors.svg'
        title.textContent='You win'
        yourScore++
    }

    scoreLine.textContent = yourScore + ' : ' + aiScore

    playAgainBtn.addEventListener('click',()=>{
        mymain.innerHTML = '' 
        container.style.display = 'flex'
    })
})
scissor.addEventListener('click',()=>{
        let title=document.createElement('h1')
    let you=document.createElement('h4')
    let ai=document.createElement('h4')
    let youIcon=document.createElement('img')
    let aiIcon=document.createElement('img')
    let scoreLine=document.createElement('h3')
    let playAgainBtn=document.createElement('button')
    let div1=document.createElement('div')
    let div2=document.createElement('div')
    let div3=document.createElement('div')
    let random=Math.floor(Math.random()*3)+1

    scoreLine.className='scoreline'
    playAgainBtn.className='playAgainBtn'
    youIcon.className='result-icon youicon'
    aiIcon.className='result-icon aiicon'

    div1.className='div1'
    div2.className='div2'
    div3.className='div3'
    title.className='title'

    div3.appendChild(title)
    div3.appendChild(scoreLine)
    div3.appendChild(playAgainBtn)
    div1.appendChild(you)
    div1.appendChild(youIcon)
    div2.appendChild(ai)
    div2.appendChild(aiIcon)

    mymain.appendChild(div1)
    mymain.appendChild(div3)
    mymain.appendChild(div2)
    container.style.display = 'none'

    you.textContent = 'You'
    ai.textContent = 'AI'
    playAgainBtn.textContent = 'Play again'

    youIcon.src = '/rock/icon-rock.svg'

    if(random===1){
        aiIcon.src = '/rock/icon-paper.svg'
        title.textContent='You lose'
        aiScore++
    }
    else if(random===2){
        aiIcon.src = '/rock/icon-rock.svg'
        title.textContent='it`s a tie'
    }
    else if(random===3){
        aiIcon.src = '/rock/icon-scissors.svg'
        title.textContent='You win'
        yourScore++
    }

    scoreLine.textContent = yourScore + ' : ' + aiScore

    playAgainBtn.addEventListener('click',()=>{
        mymain.innerHTML = ''
        container.style.display = 'flex'
    })
    
})