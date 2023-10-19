let tabBut= document.querySelectorAll("button")

console.log(tabBut)
let tabFaces=["medias/face1.png","medias/face2.png","medias/face3.png","medias/face4.png","medias/face5.svg","medias/face6.svg"]

let score1=0
let score2=0
let valeur1
let i=1
let textVainqueur=document.querySelector(".main__winner__text")
let vainqueur=document.querySelector(".main__winner")

function check(){
    // let count=1
    // let intervalID = setInterval(function RolleDice(){
    //     randomFace = Math.floor(Math.random()*6 + 1)
    //     document.querySelector(".main__dice__img").setAttribute("src",tabFaces[randomFace-1])
    //     if(count==6){
    //         clearInterval(intervalID)
    //     }
    //     count++
    // },170)
    if(this.className=="main__blocPlayer__btn main__blocPlayer__btn1" && i%2==1){
        let random = Math.floor(Math.random()*6 + 1)
        if(this.className=="main__blocPlayer__btn main__blocPlayer__btn1"){
            valeur1 = random
        }
        else if(this.className=="main__blocPlayer__btn main__blocPlayer__btn2"){
            if(valeur1<random){
                score2+=1
                document.querySelector(".main__blocPlayer__score1").innerHTML=score1
                document.querySelector(".main__blocPlayer__score2").innerHTML=score2
            }
            else if(valeur1>random){
                score1+=1
                document.querySelector(".main__blocPlayer__score1").innerHTML=score1
                document.querySelector(".main__blocPlayer__score2").innerHTML=score2
            }
            else{
                document.querySelector(".main__blocPlayer__score1").innerHTML=score1
                document.querySelector(".main__blocPlayer__score2").innerHTML=score2
            }
        }
        document.querySelector(".main__dice__img").animate(
        [
            {
            // from
            transform: "rotate(0deg)", easing : "linear"
            },
            {
            // to
            transform: "rotate(180deg)", easing : "linear"
            },
        ],
        {
            duration : 200,
            fill : "forwards"
        }
        ,
        );
        document.querySelector(".main__dice__img").setAttribute("src",tabFaces[random-1])
        i++
    }
    else if(this.className=="main__blocPlayer__btn main__blocPlayer__btn2" && i%2==0){
        let random = Math.floor(Math.random()*6 + 1)
        if(this.className=="main__blocPlayer__btn main__blocPlayer__btn1"){
            valeur1 = random
        }
        else if(this.className=="main__blocPlayer__btn main__blocPlayer__btn2"){
            if(valeur1<random){
                score2+=1
                document.querySelector(".main__blocPlayer__score1").innerHTML=score1
                document.querySelector(".main__blocPlayer__score2").innerHTML=score2
            }
            else if(valeur1>random){
                score1+=1 
                document.querySelector(".main__blocPlayer__score1").innerHTML=score1
                document.querySelector(".main__blocPlayer__score2").innerHTML=score2
            }
            else{
                document.querySelector(".main__blocPlayer__score1").innerHTML=score1
                document.querySelector(".main__blocPlayer__score2").innerHTML=score2
            }
        }
        document.querySelector(".main__dice__img").animate(
        [
            {
            // from
            transform: "rotate(0deg)", easing : "linear"
            },
            {
            // to
            transform: "rotate(180deg)", easing : "linear"
            },
        ],
        {
            duration : 200,
            fill : "forwards"
        },
        );
        document.querySelector(".main__dice__img").setAttribute("src",tabFaces[random-1])
        i++
        setTimeout(()=>{
            if(score1==3){
                textVainqueur.innerHTML="player1 a gagné"
                vainqueur.style.display="flex"
            }
            else if(score2==3){
                textVainqueur.innerHTML="player2 a gagné"
                vainqueur.style.display="flex"
            } 
        },500)     
    }
}

for(let but of tabBut){
    but.addEventListener("click", check)
    // but.addEventListener("click",()=>{
    //     document.querySelector(".main__dice__img").style.animation = "Rolle 1s"
    // })
}

document.querySelector(".main__winner__btn").addEventListener("click", function(){
    score1=0
    score2=0
    document.querySelector(".main__blocPlayer__score1").innerHTML="0"
    document.querySelector(".main__blocPlayer__score2").innerHTML="0"
    document.querySelector(".main__dice__img").setAttribute("src",tabFaces[0])
    vainqueur.style.display="none"
})
