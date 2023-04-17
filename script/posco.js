const sub = document.querySelectorAll('.sub')
const gnb = document.querySelectorAll('.gnb > li')
const bg = document.querySelector('.bg')
console.log(bg)
//모든 sub숨기기
for(let i of sub){
i.style.transition = 'height 0.3s'
i.style.overflow = 'hidden'
i.style.height = '0'
}
bg.style.transition = 'height 0.3s'
bg.style.overflow = 'hidden'
bg.style.height = '0'




for(let i of gnb){
    i.addEventListener('mouseover',()=>{
        for(let j of sub){j.style.height = '300px'}
        bg.style.height = '300px'
    })
    i.addEventListener('mouseout',()=>{
        for(let j of sub){j.style.height = '0'}
        bg.style.height = '0'
    })
}