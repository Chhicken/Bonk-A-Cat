
var cursor = document.querySelector('.cursor')
var holes = document.querySelectorAll('.hole')
var scoreEL = document.querySelector('.score span')
var score = 0
// sounds from mixkit
var sound = new Audio("audio/cat.wav")
var sound2 = new Audio("audio/cat2.wav")
var sound3 = new Audio("audio/cat3.wav")
var sounds = [sound, sound2, sound3]

function run (){
    if (score == 1000) {
        alert('You did it! Resetting score.')
        score = 0
    }

/* credit to Angle Brace on youtube  */
    var i = Math.floor(Math.random()*holes.length)
    var  hole = holes[i]
    var img = document.createElement('img')
    img.classList.add('cat')
    img.src = 'imgs/cat.png'

    // when hitting the cat img it changes it to the second image, adds score, as well as adds sound.
    var randSound = Math.floor((Math.random()*sounds.length))
    img.addEventListener('click', () => {
        score += 100
        sounds[randSound].play()
        scoreEL.textContent = score

        // second image appearing/removing and how long it stays on screen
        img.src = 'imgs/cat-whacked.png'
        timer = setTimeout(() => {
            hole.removeChild(img)
        }, 1500)
    })

    // how fast the cat goes from hole to hole, as well as the image appearing/remvoing
    hole.appendChild(img)
    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1500)
}
run()

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})

window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})

window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})