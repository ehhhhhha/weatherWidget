import React from 'react';

class WindSwitch extends React.Component {

    state = { showWind: true };

    handleClick = () => {
        this.setState(
            {
                showWind: !this.state.showWind
            },
            () => this.props.toggleWindDisplay(this.state.showWind)
        );

    }

    render() {
        return (
            <div className="sixteen column row item">
                <div className="eight wide column item">
                    <input
                        id="editor-box"
                        type="radio"
                        checked={this.state.showWind}
                        onClick={this.handleClick}
                        onChange={() => null}
                    />
                    <label>On</label>
                </div>
                <div className="eight wide column item">
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