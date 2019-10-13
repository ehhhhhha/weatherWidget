import React from 'react';

import TitleBar from './TitleBar';
import TempUnit from './TempUnit';
import WindSwitch from './WindSwitch';
import '../CSS/Editor.css';

const Edtior = (props) => {

    return (
        <div className="ui left aligned grid" >
            <div className="sixteen wide column item">
                <label>Title</label>
            </div>
            <TitleBar
                titleBarValue={props.titleBar}
                onTitleInputChange={props.onTitleInputChange}
            />
            <div className="sixteen wide column item">
                <label>Temparature</label>
            </div>
            <TempUnit
                handleUnitChange={props.handleUnitChange}
            />
            <div className="sixteen wide column item">
                <label>Wind</label>
            </div>
            <WindSwitch
                toggleWindDisplay={props.toggleWindDisplay}
            />
        </div>

    );
};

export default Edtior;