class TicTacToe{
    constructor(){
        this.box1 = this.querySelector(".box-1")
        this.box2 = this.querySelector(".box-2")
        this.box3 = this.querySelector(".box-3")
        this.box4 = this.querySelector(".box-4")
        this.box5 = this.querySelector(".box-5")
        this.box6 = this.querySelector(".box-6")
        this.box7 = this.querySelector(".box-7")
        this.box8 = this.querySelector(".box-8")
        this.box9 = this.querySelector(".box-9")

        this.box1Obj = this.initializeObjects(1)
        this.box2Obj = this.initializeObjects(2)
        this.box3Obj = this.initializeObjects(3)
        this.box4Obj = this.initializeObjects(4)
        this.box5Obj = this.initializeObjects(5)
        this.box6Obj = this.initializeObjects(6)
        this.box7Obj = this.initializeObjects(7)
        this.box8Obj = this.initializeObjects(8)
        this.box9Obj = this.initializeObjects(9)

        this.fimDeJogo = false

        setInterval(this.verifica, 200)

        this.closeEndPage()

        this.jogada(this.box1, this.box1Obj)
        this.jogada(this.box2, this.box2Obj)
        this.jogada(this.box3, this.box3Obj)
        this.jogada(this.box4, this.box4Obj)
        this.jogada(this.box5, this.box5Obj)
        this.jogada(this.box6, this.box6Obj)
        this.jogada(this.box7, this.box7Obj)
        this.jogada(this.box8, this.box8Obj)
        this.jogada(this.box9, this.box9Obj)

        this.i = 0

        this.restartGame()

    }

    querySelector(identifier){
        return document.querySelector(`${identifier}`)
    }


    initializeObjects(boxID){
        return {
            status: undefined,
            ID: `${boxID}`
        }
    }

    verifica(){

        if(!tictactoe.fimDeJogo){
    
        const vencedoras = [
            [tictactoe.box1Obj.status,tictactoe.box2Obj.status,tictactoe.box3Obj.status],
            [tictactoe.box4Obj.status,tictactoe.box5Obj.status,tictactoe.box6Obj.status],
            [tictactoe.box7Obj.status,tictactoe.box8Obj.status,tictactoe.box9Obj.status],
            [tictactoe.box1Obj.status,tictactoe.box5Obj.status,tictactoe.box9Obj.status],
            [tictactoe.box3Obj.status,tictactoe.box5Obj.status,tictactoe.box7Obj.status],
            [tictactoe.box1Obj.status,tictactoe.box4Obj.status,tictactoe.box7Obj.status],
            [tictactoe.box2Obj.status,tictactoe.box5Obj.status,tictactoe.box8Obj.status],
            [tictactoe.box3Obj.status,tictactoe.box6Obj.status,tictactoe.box9Obj.status]
        ]
    
        const endPage = document.querySelector(".end-page")
    
        vencedoras.forEach(combinacao => {
    
            if(combinacao[0] != undefined){
    
                if(combinacao[0] == combinacao[1]){
    
                    if(combinacao[0] == combinacao[2]){
    
                        console.log("match")
                        
                        tictactoe.i = undefined
    
                        endPage.style.display = "flex"
                    }
                }
    
            }
        }
        )
        }
    
    }


    closeEndPage(){
        const closeIcon = document.querySelector(".close-end-page")
        closeIcon.addEventListener("click", e => {
            const endPage = document.querySelector(".end-page")
            endPage.style.display = "none"
        
            tictactoe.fimDeJogo = true

            tictactoe.showRestartPage()
        })
    }

    showRestartPage(){
        const section = document.querySelector(".restartSection")
        section.style.display = "flex"
    }

    restartGame(){
        const button = document.querySelector(".restartButton")
        button.addEventListener("click", e => {
            const section = document.querySelector(".restartSection")
            section.style.display = "none"

            tictactoe.resetGame()
        })
    }

    resetObjects(object){
        object.status = undefined
    }

    resetBoxesImages(box){
        box.style.background = "initial"
    }

    resetBoxClasslist(box){
        box.classList.remove("animate")
    }

    resetGame(){
        tictactoe.resetObjects(this.box1Obj)
        tictactoe.resetObjects(this.box2Obj)
        tictactoe.resetObjects(this.box3Obj)
        tictactoe.resetObjects(this.box4Obj)
        tictactoe.resetObjects(this.box5Obj)
        tictactoe.resetObjects(this.box6Obj)
        tictactoe.resetObjects(this.box7Obj)
        tictactoe.resetObjects(this.box8Obj)
        tictactoe.resetObjects(this.box9Obj)

        this.fimDeJogo = false
        this.i = 0

        tictactoe.resetBoxesImages(this.box1)
        tictactoe.resetBoxesImages(this.box2)
        tictactoe.resetBoxesImages(this.box3)
        tictactoe.resetBoxesImages(this.box4)
        tictactoe.resetBoxesImages(this.box5)
        tictactoe.resetBoxesImages(this.box6)
        tictactoe.resetBoxesImages(this.box7)
        tictactoe.resetBoxesImages(this.box8)
        tictactoe.resetBoxesImages(this.box9)

        tictactoe.resetBoxClasslist(this.box1)
        tictactoe.resetBoxClasslist(this.box2)
        tictactoe.resetBoxClasslist(this.box3)
        tictactoe.resetBoxClasslist(this.box4)
        tictactoe.resetBoxClasslist(this.box5)
        tictactoe.resetBoxClasslist(this.box6)
        tictactoe.resetBoxClasslist(this.box7)
        tictactoe.resetBoxClasslist(this.box8)
        tictactoe.resetBoxClasslist(this.box9)

        tictactoe.jogada(this.box1, this.box1Obj)
        tictactoe.jogada(this.box2, this.box2Obj)
        tictactoe.jogada(this.box3, this.box3Obj)
        tictactoe.jogada(this.box4, this.box4Obj)
        tictactoe.jogada(this.box5, this.box5Obj)
        tictactoe.jogada(this.box6, this.box6Obj)
        tictactoe.jogada(this.box7, this.box7Obj)
        tictactoe.jogada(this.box8, this.box8Obj)
        tictactoe.jogada(this.box9, this.box9Obj)
    }
    
    
   jogada(box, boxObject){
        box.addEventListener("click", e => {

            if(!tictactoe.bloqueiaMudarJogada(box)){

                if(tictactoe.i % 2 == 1){
                    box.style.background = "url('../src/images/circle.svg')"
                    box.style.backgroundSize = "100px"
                    box.style.backgroundRepeat = "no-repeat"
                    box.style.backgroundPosition ="center"
            
                    box.classList.add("animate")
            
                    tictactoe.i += 1
                    boxObject.status = "circle"
                    console.log(`box status = ${boxObject.status}`)
                }
            
                else if(tictactoe.i % 2 == 0){
                    box.style.background = "url('../src/images/cross.svg')"
                    box.style.backgroundSize = "100px"
                    box.style.backgroundRepeat = "no-repeat"
                    box.style.backgroundPosition ="center"
            
                    box.classList.add("animate")
            
                    tictactoe.i += 1
                    boxObject.status = "cross"
                    console.log(`box status = ${boxObject.status}`)
                }
            }
        })
    }

    bloqueiaMudarJogada(box){
        return box.classList.contains("animate")
    }

}

const tictactoe = new TicTacToe()

// TO DO:
    // () CREATE RESET BUTTON THAT RESETS CLASSES ADDED, VARIABLES USED IN-GAME, ETC