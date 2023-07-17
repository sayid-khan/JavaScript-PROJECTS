const textinput =document.querySelector('.inputs input')
checkbtn =document.querySelector('.inputs button')
infotext =document.querySelector('.info-text')

let textfilter




textinput.addEventListener('keyup',()=>{
    //for removing spaces and special charcters from the entered value
    textfilter =textinput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"")
    // console.log(textfilter)
    if(textfilter){
        return checkbtn.classList.add('active')
    }
    else{
        infotext.style.display='none'
        checkbtn.classList.remove('active')
    }
})

checkbtn.addEventListener('click',()=>{
    //split method splits the value makes it an array
    //reverse reverses the elements of an array
    //join is used to join the array back into a word
    let reversetext =textfilter.split("").reverse().join("")
    infotext.style.display='block'
    if(textfilter != reversetext){
        return infotext.innerHTML =`No,<span>'${textinput.value}'</span>,is a not Palindrome!`

    }
    else
    return infotext.innerHTML =`Yes,<span>'${textinput.value}'</span>,is a Palindrome!`

})
