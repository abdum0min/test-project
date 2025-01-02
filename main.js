let mini_img = document.querySelectorAll('.mini-img')
let big_img = document.querySelector('.big-img')
let parent = document.querySelector('.exchang-imgs')

parent.addEventListener('click',(event)=>{
    t = event.target
    if(t && t.classList.contains('mini-img')){
        mini_img.forEach((item,idx)=>{
            if(t == item){
                big_img.src = mini_img[idx].src
            }
        })
    }
})

