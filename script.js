let progress = document.getElementById('progress')
let song = document.getElementById('song')
let ctrlIcon = document.getElementById('ctrlIcon')

song.onloadedmetadata = function () {
  progress.max = song.duration
  progress.value = song.currentTime
}

function playPause() {
  if (ctrlIcon.classList.contains('fa-pause')) {
    song.pause()
    ctrlIcon.classList.remove('fa-pause')
    ctrlIcon.classList.add('fa-play')
  } else if (ctrlIcon.classList.contains('fa-play')) {
    song.play()
    ctrlIcon.classList.remove('fa-play')
    ctrlIcon.classList.add('fa-pause')
    
    // Atualiza o progresso enquanto a música está tocando
    setInterval(() => {
      progress.value = song.currentTime
    }, 500)
  }
}

// Quando o progresso for alterado manualmente
progress.onchange = function () {
  song.currentTime = progress.value
  song.play()
  ctrlIcon.classList.remove('fa-play')
  ctrlIcon.classList.add('fa-pause')
}
