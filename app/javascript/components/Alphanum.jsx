import React from 'react'

export default function Alphanum({selectAlplha}) {
    
const tableau = ["#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


const list = tableau.map((data) => {

    return <p key={data.Nom} class="letter-alpha" id={data === "#" ? `alpha-numall` : `alpha-num${data}`} onClick={() => selectAlplha(data)}>{data}</p>

})
    return (
        <div className="alphanum"><h4 className="titre-alphanum">Recherche <br/> alpha-numérique</h4>
        <div id="alphanum">
            {list}
        </div>
        </div>
    )
}
