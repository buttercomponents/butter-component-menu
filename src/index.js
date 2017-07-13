import React from 'react';
import {translate} from 'react-i18next';
import TitleBar from './components/title-bar';
import Toolbar from './components/toolbar';
import Buttons  from './components/button';
import Dropdowns  from './components/dropdown';
import Switch  from './components/switch';
import View from './components/view';
import style from './style.styl';


let Test = ({...props, t}) => (
    <div className={style.layout}>
        <div className={style.window}>
            <TitleBar {...props.view.titlebar}/>
            <View {...props.view.viewOpts}/>
        </div>
        {
            props.titleBar.map((i, k) =>
                <div className={style.test}>
                    <TitleBar key={k} {...i}/>
                </div>
            )
        }

        {
            props.toolbars.map((i, k) =>
                <div key={k} className={style.test}>
                    <Toolbar {...i}/>
                </div>
            )
        }

        <div className={style.test}>
            {props.buttons.map((i, k) => <Buttons.Button key={k} {...i}/>)}
        </div>

        <div className={style.test}>
            {props.dropdowns.text.map((i, k) => <Dropdowns.Dropdown key={k} {...i}/>)}
        </div>

        <div className={style.test}>
            {props.dropdowns.color.map((i, k) => <Dropdowns.DropdownColor key={k} {...i}/>)}
        </div>


        <div className={style.test}>
            {props.switches.map((i, k) => <Switch key={k} {...i}/>)}
        </div>

    </div>
)

export default translate('test')(Test)
