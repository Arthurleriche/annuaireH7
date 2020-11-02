import React from 'react'

export default function Drop({selectedCat}) {

    let categorie = ["Tous les secteurs", "Education", "Santé Education",
    "E-commerce",
    "Transport & Mobilité",
    "Santé",
    "Alimentation",
    "Transformation digitale",
    "Sport",
    "Education",
    "IoT",
    "Immobilier",
    "Media",
    "Gaming",
    "Santé",
    "IoT",
    "RH",
    "Musique"]

    function changeFunc() {
        const selectBox = document.getElementById("selectBox");
        const selectedValue = selectBox.options[selectBox.selectedIndex].value;
        selectedCat(selectedValue)
       }

    let list = categorie.map(data => {
        return (
            <option value={data} className="nrv">
                {data} 
            </option>
        )
    })

    return (
        <div>          
            <select id="selectBox" className='drop-down' onChange={changeFunc}>
            {list}
            </select>     
        </div>
    )
}
