import React, {useEffect} from 'react'

export default function Asso({clickAsso}) {
    const fondateur2 = () => {if(clickAsso.Fondateur2 !== ""){
        return <p>><span id="asso-space">{clickAsso.Fondateur2}</span></p>
    }}
    const fondateur3 = () => {if(clickAsso.Fondateur3 !== ""){
        return <p>><span id="asso-space">{clickAsso.Fondateur3}</span></p>
    }}
    const fondateur4 = () => {if(clickAsso.Fondateur4 !== ""){
        return <p>><span id="asso-space" >{clickAsso.Fondateur4}</span></p>
    }}

    const equipe = () => {
        if(clickAsso.Nombredecollaborateurs !== ""){
        return(
            <div className="asso-associe">
            <p id="asso-fondateur">Equipe</p>
                <p>{clickAsso.Nombredecollaborateurs} associé-e-s</p>
            </div>
        )
        }
    }
        
    const effetIn = () => {
        document.querySelector('.asso').classList.remove("example-leave-active")
        document.querySelector('.asso').classList.add("move-right")
        document.querySelector('.asso').classList.add("example-enter")
        setTimeout(() => {
            document.querySelector('.asso').classList.add("example-enter-active")
            document.querySelector('.asso').classList.add("example-leave")
        }, 100)
        setTimeout(() => {
            document.querySelector('.asso').classList.remove("example-enter")
            document.querySelector('.asso').classList.remove("example-enter-active")
            document.querySelector('.asso').classList.remove("move-right")
            
        }, 500)    
    }

    const effetOut = () => {
        setTimeout(() => {
            document.querySelector('.asso').classList.remove("example-leave")
            document.querySelector('.asso').classList.add("example-leave-active")
        }, 1000)
    }
    useEffect(() => {
        effetIn()
        return () => {
            document.querySelector('.asso').classList.remove("example-leave")
            document.querySelector('.asso').classList.add("example-leave-active")
        }
        
    }, [clickAsso])

    return (
        
        <div class="asso example-enter">
            <div className="asso-bg">
                <div className="container-asso">
                    <div className="asso-top">
                        <p className="asso-secteur">Secteur: <span id="asso-secteur">{clickAsso.Secteur}</span></p>
                        <h2 className="asso-nom">{clickAsso.Nom}</h2>
                        <div className="asso-div-pitch">
                        <p className="asso-baseline">{clickAsso.Baseline}</p>                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-asso" id="asso-part2">
                <div className="asso-logo">
                    <img id="asso-logo" src={clickAsso.log} alt=""/>
                </div>
                <div className="asso-pitch">
                    <p>{clickAsso.Pitch}</p>
                </div>
                <div className="asso-equipe">
                    <div className="asso-fondateur">
                        <p id="asso-fondateur">Fondateurs</p>
                        <p>><span id="asso-space">{clickAsso.Fondateur1}</span> </p>
                        {fondateur2()}
                        {fondateur3()}
                        {fondateur4()}
                    </div>

                        {equipe()}

                </div>
                <div className="asso-contact">
                    <p id="asso-contact">Contact</p>
                    <div className="asso-contact-mail">
                        <div className="asso-mail">
                        <p className="typo3">Email: </p>
                        <p>Site web: </p>
                        </div>
                        <div className="asso-info-mail">
                            <a href={`mailto:${clickAsso.Email}`}>{clickAsso.Email}</a>
                            <a href={clickAsso.Siteweb} target="blank">{clickAsso.Siteweb}</a>
                          
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    
    )
}
