import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Change({selectedId, update, updateAsso, updateAssoFct, createAssocation}) {

    const [assoSelected, setAssoSelected] = useState()
    const [baseLine, setBaseLine] = useState("")
    const [email, setEmail] = useState("")
    const [fondateur1, setFondateur1] = useState("")
    const [fondateur2, setFondateur2] = useState("")
    const [fondateur3, setFondateur3] = useState("")
    const [fondateur4, setFondateur4] = useState("")
    const [nom, setNom] = useState("")
    const [nombreDeCollaborateurs, setNombreDeCollaborateurs] = useState(null)
    const [pitch, setPitch] = useState("")
    const [secteur, setSecteur] = useState("")
    const [siteWeb, setSiteWeb] = useState("")
    const [log, setLog] = useState("")
    
    useEffect(() => {
        setLog(selectedId.Log)
        setNom(selectedId.Nom)
        setSecteur(selectedId.Secteur)
        setFondateur1(selectedId.Fondateur1)
        setFondateur2(selectedId.Fondateur2)
        setFondateur3(selectedId.Fondateur3)
        setFondateur4(selectedId.Fondateur4)
        setBaseLine(selectedId.BaseLine)
        setEmail(selectedId.Email)
        setNombreDeCollaborateurs(selectedId.NombreDeCollaborateurs)
        setPitch(selectedId.Pitch)
        setSiteWeb(selectedId.SiteWeb)
        setAssoSelected(selectedId)
    }, [selectedId])

    const [asso, setAsso] = useState({})

    const actualiser = () => {
        setAsso({
            BaseLine: baseLine,
            Email: email,
            Fondateur1: fondateur1,
            Fondateur2: fondateur2,
            Fondateur3: fondateur3,
            Fondateur4: fondateur4,
            Nom: nom,
            NombreDeCollaborateurs: nombreDeCollaborateurs,
            Pitch: pitch,
            Secteur: secteur,
            SiteWeb: siteWeb,
            Log: log
        }) 
        setTimeout(() => {
            console.log(asso)
            axios.patch(`/api/v1/tests/${selectedId.id}`, {
                BaseLine: baseLine,
                Email: email,
                Fondateur1: fondateur1,
                Fondateur2: fondateur2,
                Fondateur3: fondateur3,
                Fondateur4: fondateur4,
                Nom: nom,
                NombreDeCollaborateurs: nombreDeCollaborateurs,
                Pitch: pitch,
                Secteur: secteur,
                SiteWeb: siteWeb,
                Log: log
            })
            update()
        }, 1000)  
 
    }

    const supprimer = () => {
        axios.delete(`/api/v1/tests/${selectedId.id}`)
        alert("start-up supprimer")
        setBaseLine("")
        setEmail("")
        setFondateur1("")
        setFondateur2("")
        setFondateur3("")
        setFondateur4("")
        setNom("")
        setNombreDeCollaborateurs("")
        setPitch("")
        setSecteur("")
        setSiteWeb("")
        setLog("")
        updateAssoFct()
        update()
    }

    const addCreate = () => {
        setBaseLine("")
        setEmail("")
        setFondateur1("")
        setFondateur2("")
        setFondateur3("")
        setFondateur4("")
        setNom("")
        setNombreDeCollaborateurs("")
        setPitch("")
        setSecteur("")
        setSiteWeb("")
        setLog("")
        updateAssoFct()
    }
    const create = () => {
        setAsso({
            BaseLine: baseLine,
            Email: email,
            Fondateur1: fondateur1,
            Fondateur2: fondateur2,
            Fondateur3: fondateur3,
            Fondateur4: fondateur4,
            Nom: nom,
            NombreDeCollaborateurs: nombreDeCollaborateurs,
            Pitch: pitch,
            Secteur: secteur,
            SiteWeb: siteWeb,
            Log: log
        }) 

        if(nom !== "" && baseLine !== ""){
            setTimeout(() => {
                axios.post(`/api/v1/tests`, {
                    BaseLine: baseLine,
                    Email: email,
                    Fondateur1: fondateur1,
                    Fondateur2: fondateur2,
                    Fondateur3: fondateur3,
                    Fondateur4: fondateur4,
                    Nom: nom,
                    NombreDeCollaborateurs: nombreDeCollaborateurs,
                    Pitch: pitch,
                    Secteur: secteur,
                    SiteWeb: siteWeb,
                    Log: log
                })
            }, 1000)  
            setTimeout(() => {
                update()
            }, 1000)
        }
    }

    
    let updateButton
    let deleteButton
    let createButton
    let createStartUp

    let className = "create"


    if(nom === "" || baseLine === "") {
        className = "no-create"
    } else {
        className = "create"
    }

    if(updateAsso){ 
        updateButton = <button onClick={actualiser}className="update">Actualiser la startUp</button>
        deleteButton = <button onClick={supprimer} className="delete">Supprimer la Start-up</button>
        createButton = <button onClick={addCreate} className="add-new">Ajouter une nouvelle start-up</button>
    } else {
        createStartUp = <button onClick={create} className={className}>Création de la start-up</button>
    }


    return (
        <div>
            <div className="titre-change">
            <h2 id="titre-change">Formulaire de création/modification</h2>
            </div>
        <div className="input-start-up">
            <div className="btn-change">
                {createButton}
                {updateButton}
                {deleteButton}
                {createStartUp}
            </div>

            <label>Nom</label>
            <input type="text" value={nom} onChange={(event) => setNom(event.target.value)}/>
            <label>BaseLine</label>
            <input type="text" value={baseLine} onChange={(event) => setBaseLine(event.target.value)}/>
            <label>Email</label>
            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <label>Pitch</label>
            <input type="text" value={pitch} onChange={(event) => setPitch(event.target.value)}/>
            <label>Fondateur1</label>
            <input type="text" value={fondateur1} onChange={(event) => setFondateur1(event.target.value)}/>
            <label>Fondateur2</label>
            <input type="text" value={fondateur2} onChange={(event) => setFondateur2(event.target.value)}/>
            <label>Fondateur3</label>
            <input type="text" value={fondateur3} onChange={(event) => setFondateur3(event.target.value)}/>
            <label>Fondateur4</label>
            <input type="text" value={fondateur4} onChange={(event) => setFondateur4(event.target.value)}/>
            <label>SiteWeb</label>
            <input type="text" value={siteWeb} onChange={(event) => setSiteWeb(event.target.value)}/>
            <label>Secteur</label>
            <input type="text" value={secteur} onChange={(event) => setSecteur(event.target.value)}/>
            <label>Nombre de collaborateurs</label>
            <input type="text" value={nombreDeCollaborateurs} onChange={(event) => setNombreDeCollaborateurs( event.target.value)}/>
            <label>Logo: UNIQUEMENT UNE URL (exemple: https://h-7.eu/wp-content/uploads/2020/09/01-1.jpg)</label>
            <input type="text" value={log} onChange={(event) => setLog(event.target.value)}/>           

       </div>
       </div>
    )
}
