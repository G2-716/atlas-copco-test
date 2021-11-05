import React, {useContext} from "react";
import { ProgressContext } from '../../context/ProgressContext';
import {SEX_TYPES} from "../../screens.config";

export const IntroScreen = () => {
    const { setUserInfo, userData } = useContext(ProgressContext);
    const getSexButton = (sex) => {
        let activeBtn, btn;
        if (sex === SEX_TYPES.Male){
            activeBtn = (<button>Active M </button>);
            btn = (<button onClick={()=>setUserInfo('sex', SEX_TYPES.Male)}>M</button>);
        }
        else{
            activeBtn = (<button>Active F </button>);
            btn = (<button onClick={()=>setUserInfo('sex', SEX_TYPES.Female)}>F</button>);
        }
        if (sex === userData.sex){
            return activeBtn;
        }
        return btn;
    }
    return <div>
       <p>Привет! Atlas Copco приготовила для вас тренажер нестандартного собеседования. Всегда приятно попробовать себя в чем-то новом J Познакомимся?</p>
        <input value={userData.name ?? ''} onChange={(e)=>setUserInfo('name', e.target.value)} placeholder={'Твое имя'}/>
        {getSexButton(SEX_TYPES.Male)}
        {getSexButton(SEX_TYPES.Female)}
        <button>next</button>
    </div>
}