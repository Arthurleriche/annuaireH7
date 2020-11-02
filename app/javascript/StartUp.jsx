import React, {useEffect, useState} from 'react'
import Drop from './components_start_up/Drop'
import Change from './components_start_up/Change'

import axios from 'axios'

export default function StartUp() {
    const [list, setList] = useState([])
    const [selectedId, setSelectedId] = useState({
        Nom: "",
        BaseLine:""
    })
    const [id, setId] = useState(0)
    const [changement, setChangement] = useState(true)
    const [updateAsso, setUpdateAsso] = useState(false)

    useEffect(async () => {
       const result = await axios.get('/api/v1/tests')
        setList(result.data)      
    }, [])

    useEffect(async () => {
        const result = await axios.get('/api/v1/tests')
         setList(result.data)   
     }, [changement])
     
    
    const selectedAsso = async (idAsso) => {
        const result = await axios.get(`/api/v1/tests/${idAsso}`)
        setSelectedId(result.data)
        setId(result.data.id)
        setUpdateAsso(true)
    }

    const updateAssoFct = () => {
        setUpdateAsso(false)
    }

    const update =  () => {        
        setChangement(!changement)
        alert(`La start Up est mis à jour` )
    }

    const createAssocation = (option) => {
        axios.post('/api/v1/tests/', option)
        setChangement(!changement)
    }


    return (
        <div className="start-up">
            <Drop list={list} selectedAsso={selectedAsso}/>
            <Change selectedId={selectedId} id={id} update={update} updateAsso={updateAsso} updateAssoFct={updateAssoFct} createAssocation={createAssocation}/>
        </div>
    )
}
