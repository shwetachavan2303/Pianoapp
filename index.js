const pianokeys=document.querySelectorAll('.key')

function playSound(newUrl){


    new Audio(newUrl).play()
}

pianokeys.forEach((pianokeys,i)=>{
    const newUrl='24/key' + (i+1) + '.mp3'
    pianokeys.addEventListener('click',()=> playSound(newUrl))
})