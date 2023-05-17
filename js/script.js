const allWowClass=document.querySelectorAll('.wow');
const wowClassArr=Array.from(allWowClass);
console.log(wowClassArr);
window.addEventListener('scroll',function(){
    wowClassArr.map(wowClasses => {
        const wowInnerClasses=wowClasses.classList;
        const wowInnerClassesArr=Array.from(wowInnerClasses);
        wowInnerClassesArr.map(wowClass =>{
            const classes=wowClass.split('-')[1]
            if(classes){
                if(classes.length == 2 && classes[1] == 'left'){
                    
                }
            }
        })
        

        
    })
})
