import React from 'react';

class TempUnit extends React.Component {
    state = { celsiusChecked: true };

    handleClick = () => {
        this.setState({
            celsiusChecked: !this.state.celsiusChecked
        });
        this.props.handleUnitChange();
    }

    render() {
        return (
            <div className="sixteen column row item">
                <div className="eight wide column item">
                    <input
                        id="editor-box"
                        type="radio"
                        checked={this.state.celsiusChecked}
                        onClick={this.handleClick}
                        onChange={() => null}
                    />
                    <label>°C</label>
                </div>
                <div className="eight wide column item">
                    <input
                        id="editor-box"
                        type="radio"
                        checked={!this.state.celsiusChecked}
                        onClick={this.handleClick}
                        onChange={() => null}
                    />
                    <label>°F</label>
                </div>
            </div >
        );
    }
};

export default TempUnit;