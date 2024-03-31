import React from 'react';
import SwitchComponent from "./SwitchComponent";
import {useSelector} from "react-redux";
import './MenuStyle.css'

interface MenuProps {
    isOpen: boolean;
    lightTheme: boolean
}

const MenuComponent: React.FC<MenuProps> = ({isOpen,lightTheme}) => {
    const photoUrl = useSelector((state:any) => state.photo.photoUrl)
    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <img className={'avatar_manu'} src={photoUrl} alt={`ph`}/>
            <SwitchComponent/>
        </div>
    );
};

export default MenuComponent;