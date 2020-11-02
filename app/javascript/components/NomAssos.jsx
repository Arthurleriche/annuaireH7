import React from 'react'

export default function NomAssos({letter, tab, assoChoix, selectCategory}) {
    
    // let tableau = tab.filter(name => name.Nom[0] === letter)
    // const tri =  tableau.map((data) => {
    //     return (
    //     <div className="li-inter">
    //     <li className={data.Nom.replace(/ /g, "")} onClick={() => assoChoix(data)} key={data.Nom}>{data.Nom}</li>
    //     </div>
    //     )
    // })

    function triAsso() {
        if(selectCategory === "Tous les secteurs"){
            let tableau = tab.filter(name => name.Nom[0] === letter)        
            const tri =  tableau.map((data) => {
                return (
                <div className="li-inter">
                <li className={data.Nom.replace(/ /g, "")} onClick={() => assoChoix(data)} key={data.Nom}>{data.Nom}</li>
                </div>
                )
            })
            
            return tri
    } else {       
        let tableau2 = tab.filter(secteur => secteur.Secteur === selectCategory)
        let tableau = tableau2.filter(name => name.Nom[0] === letter)
        const tri =  tableau.map((data) => {
            return (
            <div className="li-inter">
            <li className={data.Nom.replace(/ /g, "")} onClick={() => assoChoix(data)} key={data.Nom}>{data.Nom}</li>
            </div>
            )
        })
        return tri
    }

}

    return (
        <div>
            <ul>
            {triAsso()}

            </ul>
        </div>
    )
}

// {tab.filter(name => name.Nom[0] === "A").map(filteredAsso => (
// <p>{filteredAsso}</p>
// ))}