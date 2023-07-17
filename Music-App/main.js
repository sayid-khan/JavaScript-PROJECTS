const music=document.querySelector('audio')
const img= document.querySelector('img')
const play=document.getElementById('play')
const artist=document.getElementById('artist')
const title=document.getElementById('title')
const prev=document.getElementById('prev')
const next=document.getElementById('next')


const songs=[
    {
    name:"music-1",
    artist:"gorkhali takma",
    title:"waliking firiri"
},
    {
    name:"music-2",
    artist:"Loyalist",
    title:"lotus lane"
},
    {
    name:"music-3",
    artist:"sapheerious",
    title:"aurora"
}
]

let isplaying = false
// for play fuctionality
const playmusic= ()=>{
    isplaying=true    
    music.play()
    play.classList.replace('fa-play','fa-pause')
    img.classList.add('anime')

}

//for pause fuctionality
const pausemusic= ()=>{
    isplaying=false
    music.pause()
    play.classList.replace('fa-pause','fa-play')
    img.classList.remove('anime')

}

play.addEventListener('click',()=>{
    // if(isplaying){
    //     pausemusic()
    // }
    // else{
    //     playmusic()
    // }
    isplaying?pausemusic():playmusic()
})


//changing the music 

const loadsong= (songs)=>{
    title.textContent=songs.title
    artist.textContent=songs.artist
    // music.scr="music/"+songs.name+".mp3"
    music.src=`music/${songs.name}.mp3`
    img.src=`pics/${songs.name}.jpg`
}


songsindex=0
const nextsong=()=>{
    // songsindex++
    songsindex=(songsindex+1)%songs.length
    loadsong(songs[songsindex])
    playmusic()
}

const prevsong=()=>{
    // songsindex++
    songsindex=(songsindex-1 + songs.length)%songs.length
    loadsong(songs[songsindex])
    playmusic()
}

next.addEventListener('click',nextsong)
prev.addEventListener('click',prevsong)
