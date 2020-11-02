import React  from 'react'


export default function Drop({list, selectedAsso}) {
    const handleId = (event) => {
        selectedAsso(event.target.value)
    }
    


    const listDrop = list.map(data => {
        return <option key={data.id} value={data.id} onClick={handleId}>{data.Nom}</option>
    })
    return (
        <div className="drop">
            <div id="titre-drop">
            <h2 className="titre-drop">selection de la start-up à modifier</h2>
            </div>
            <div className="drop-down">
            <select name="SelectStartUp" id="" onChange={handleId} id="drop-down">
                <option value="" className="option">Select une start-up</option>
                {listDrop}
            </select>

            </div>
        </div>
    )
}
