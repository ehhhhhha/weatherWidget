import React from 'react';

/**
 * Render two radio boxes to choose unit of temperature
 */
class TempUnit extends React.Component {
    // celsius box is checked as default
    // two boxes are mutually exclusive so one boolean variable will do
    state = { celsiusChecked: true };

    /**
     * If either unit box is checked, change unit state
     */
    handleClick = () => {
        this.setState({
            celsiusChecked: !this.state.celsiusChecked
        });
        this.props.handleUnitChange();
    }

    render() {
        return (
            <div className="sixteen column row" id="editor-item">
                <div className="eight wide column" id="editor-item">
                    <input
                        id="editor-box"
                        type="radio"
                        checked={this.state.celsiusChecked}
                        onClick={this.handleClick}
                        onChange={() => null}
                    />
                    <label>°C</label>
                </div>
                <div className="eight wide column" id="editor-item">
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