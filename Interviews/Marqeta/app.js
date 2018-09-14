let parent = document.querySelector('.div-one')

parent.addEventListener('click',(e)=>{
  alert(e.target.childNodes[0].textContent)
})

//https://stackoverflow.com/questions/4742409/javascript-cant-get-textcontent-of-object-text