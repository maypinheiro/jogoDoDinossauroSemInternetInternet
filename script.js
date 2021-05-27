const dino = document.querySelector('.dino');
const background=document.querySelector('.background');
let isJumping= false;

function handleKeyUp(event){
     if(event.keyCode === 32 || 38 || 104){
        if(!isJumping){
            jump();
        }else {

        }
       
     }

}

function jump(){
    let position=0;
    isJumping=true;

    let upInterval = setInterval(()=>{
        if(position >=150){
            clearInterval(upInterval);
            //Descendo
            let dowInterval =setInterval(()=>{
                if(position<=0){
                    clearInterval(dowInterval);
                    isJumping=false;
                }else{
                    position-=20;
                     dino.style.bottom= position + 'px';
                
                }
                   
            },30);

        } else {
            //Subida
            position+=20;
            dino.style.bottom= position + 'px';
        }
        
    },20)
}
function createCactus(){
    const cactus =document.createElement('div');
    let cactusPosition=1000;
    cactus.classList.add('cactus');
    cactus.style.left=1000+'px'
    background.appendChild(cactus);

    let leftInterval =setInterval(()=> {
        cactusPosition-=10;
        cactus.style.left =cactusPosition + 'px';
        if(cactusPosition <-60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }
    },20)
}
createCactus()
document.addEventListener('keyup',handleKeyUp);