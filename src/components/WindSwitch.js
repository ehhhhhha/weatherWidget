import React from 'react';


/**
 * Render two radio boxes to handle visibility of wind infomation 
 */
class WindSwitch extends React.Component {
    // show wind information as default
    state = { showWind: true };

    /**
     * Handle state change of box and call the call back function
     * given by parent components
     */
    handleClick = () => {
        this.setState(
            { showWind: !this.state.showWind },
            () => this.props.toggleWindDisplay(this.state.showWind)
        );
    }

    // render two raido boxes and listen to event through onClick
    render() {
        return (
            <div className="sixteen column row" id="editor-item">
                <div className="eight wide column" id="editor-item">
                    <input
                        id="editor-box"
                        type="radio"
                        checked={this.state.showWind}
                        onClick={this.handleClick}
                        onChange={() => null}
                    />
                    <label>On</label>
                </div>
                <div className="eight wide column" id="editor-item">
                    <input
                        id="editor-box"
                        type="radio"
                        checked={!this.state.showWind}
                        onClick={this.handleClick}
                        onChange={() => null}
                    />
                    <label>Off</label>
                </div>
            </div>
        );
    }
};

export default WindSwitch;