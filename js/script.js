const allWowClass=document.querySelectorAll('.wow');
const wowClassArr=Array.from(allWowClass);
console.log(wowClassArr)

window.addEventListener('scroll',function(){
    wowClassArr.map(wowClasses => {
        console.log(wowClasses)
    })
})
