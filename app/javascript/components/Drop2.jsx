import React, {useState, useEffect} from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function Drop2({selectedCat}) {
    
    const [secteurs, setSecteurs] = useState("Tous les secteurs")

    const test = ({ key }) => {
        setTimeout(() => {
            setSecteurs(key)
        }, 200)
        selectedCat(key)
    };
    
    useEffect(() => {
        
    }, [])

    const menu = (
        <Menu onClick={test} className="menu">
            {secteurs === "Tous les secteurs" ?  "" : <Menu.Item key="Tous les secteurs">Tous les secteurs</Menu.Item>}
            <Menu.Item key="Art">Art</Menu.Item>
            <Menu.Item key="Digital">Digital</Menu.Item>
            <Menu.Item key="Education">Education</Menu.Item>
            <Menu.Item key="Santé ">Santé </Menu.Item>
            <Menu.Item key="E-commerce">E-commerce</Menu.Item>
            <Menu.Item key="Transport & Mobilité">Transport & Mobilité</Menu.Item>
            <Menu.Item key="Alimentation">Alimentation</Menu.Item>
            <Menu.Item key="Transformation digitale">Transformation digitale</Menu.Item>
            <Menu.Item key="Sport">Sport</Menu.Item>
            <Menu.Item key="IoT">IoT</Menu.Item>
            <Menu.Item key="Immobilier">Immobilier</Menu.Item>
            <Menu.Item key="Media">Media</Menu.Item>
            <Menu.Item key="Gaming">Gaming</Menu.Item>
            <Menu.Item key="RH">RH</Menu.Item>
            <Menu.Item key="Musique">Musique</Menu.Item>
        </Menu>
      );
    return (
        <div className="dropdown">
        <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {secteurs} <DownOutlined />
        </a>
        </Dropdown>   
        </div>
    )
}

