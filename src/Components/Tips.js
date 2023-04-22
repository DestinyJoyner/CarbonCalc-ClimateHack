import { useState } from "react";
import { tips } from "../data";
import {AiFillCar} from "react-icons/ai"
import {BsFillBasket3Fill} from "react-icons/bs"
import {MdFastfood} from "react-icons/md"
import {HiHome} from "react-icons/hi"

import "./Tips.css"

function Tips(props) {
    const [tipData, setTipData] = useState([]) 

    // onClick function for setting tipData value
    function showTips(val){
        const data = tips.find(({category}) => category === val)
        setTipData(data.tips)
    }

    return (
        <div className="tips center">
            <h1>Tips</h1>
            <div className="tip-buttons">
            <button 
            onClick = {() => showTips("transportation")}
            className="transportation tip-category">
                <AiFillCar size ={"40px"} />
            </button>
            <button 
            onClick = {() => showTips("general")}
            className="general tip-category">
                <BsFillBasket3Fill size = {"40px"} />
            </button>
            <button 
            onClick = {() => showTips("food")}
            className="food tip-category">
                <MdFastfood size = {"40px"} />
            </button>
            <button 
            onClick = {() => showTips("home")}
            className="home-goods tip-category">
                <HiHome size={"40px"} />
            </button>
            </div>
            

            <section className="show-tips">
                { 
                    tipData.map((el,i) =>
                        <li key = {i}>{el}</li>)
                }
            </section>
        </div>
    );
}

export default Tips;