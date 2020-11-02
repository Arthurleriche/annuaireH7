import React, {useState, useEffect} from 'react'
import NomAssos from './NomAssos'

export default function Annuaire({tab, assoChoix, selectCategory}) {
    const tableau = ["#","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    // const [scroll, setScroll] = useState(false)
    // const [index, setIndex] = useState(1)
    
    
    const test = (event) => {
        // if(scroll){
            //     const coucou = document.querySelector(".annnuaire")
            //     const a = document.querySelector(`#annnuaire${tableau[index]}`)
            //     document.querySelector(`#alpha-num${tableau[index]}`).classList.add("alpha-num-active")
            //     console.log(a.offsetTop - 100)
            //     if(a.offsetTop < coucou.scrollTop + 100){
                //         setIndex(index + 1)
                //         document.querySelector(`#alpha-num${tableau[index]}`).classList.remove("alpha-num-active")
                //         document.querySelector(`#alpha-num${tableau[index+1]}`).classList.add("alpha-num-active")
                //         document.querySelector(`#annnuaire${tableau[index + 1]}`).classList.add('annuaire-active')
                //     }
                //     if(a.offsetTop > coucou.scrollTop + 100 && index > 1){
                    //         setIndex(index - 1)
                    //         document.querySelector(`#alpha-num${tableau[index + 1]}`).classList.remove("alpha-num-active")
                    //         document.querySelector(`#annnuaire${tableau[index + 1]}`).classList.remove('annuaire-active')
                    //         document.querySelector(`#alpha-num${tableau[index]}`).classList.add("alpha-num-active")
                    
                    //     }
                    // }
                }  
    const test2 = () => {
        // setScroll(true)
        // console.log("je suis dessus ")
    }
    const test3 = () => {
        // setScroll(false)
        // console.log("je suis dehors ")
    }
    

    
    const list = () => {
        let tri = tableau.map((data) => {
            // let tableauAsso = tab.filter(name => name.Nom[0] === data)

            return (
                <div className="annuaire-asso" id={data}>
                <p key={data.Nom} className="letter-annuaire" id={data === "#" ? `annnuaireall` : `annnuaire${data}`} >{data}</p>
                <NomAssos key={data.Nom} letter={data} tab={tab} assoChoix={assoChoix} selectCategory={selectCategory}/>  
                </div>
            )
        })
        return tri
    }
    useEffect(() => {
    }, [])
    
    return (
        <div className="annnuaire" onScroll={test} onMouseMove={test2}  onMouseOut={test3}>
            {list()}
        </div>
    )
}


