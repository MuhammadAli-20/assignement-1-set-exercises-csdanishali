const sounds = ['Ah Ha', 'Back of the net', 'Bang out of order', 'Dan', 'Email of the evening', 
    'Hello Partridge', 'I ate a scotch egg', 'Im confused', 'Jurassic Park'];
    
    sounds.forEach(sound => {
        const btn = document.createElement('button');
        btn.classList.add('btn');
    
        btn.innerText = sound;
    
        btn.addEventListener('click', () => {
            stopSongs();
            document.getElementById(sound).play()
        });
    
        document.getElementById('buttons').appendChild(btn);
    });
    
    function stopSongs() {
        sounds.forEach(sound => {
            const song = document.getElementById(sound);
            
            song.pause()
            song.currentTime = 0;
        });
    }
  
    function textToAudio() {
        let msg = document.getElementById("text-to-speech").value;
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        speech.text = msg;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech)
    }