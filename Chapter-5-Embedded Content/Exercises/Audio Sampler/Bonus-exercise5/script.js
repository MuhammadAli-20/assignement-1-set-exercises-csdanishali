const sounds = ['ah ha', 'back of the net', 'bang out of order', 'dan', 'email of the evening', 
'hello partridge', 'i ate a scotch egg', 'im confused']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').
    appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById
        (sound)
        
        song.pause()
        song.currentTime = 0;
    })
}