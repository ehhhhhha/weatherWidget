import React from 'react';

/**
 * To make this bar a controlled form, user input will be send to parent components
 * through call back, and the value of text bar is determined by values returned 
 * from parent components.
 */
class TitleBar extends React.Component {

    /**
     * This function handles user input and pass it to parent component through
     * call back received from props.
     * @param {event} event user event contaning input information
     */
    onInputChange = (event) => {
        this.props.onTitleInputChange(event.target.value);
    }

    // forbid default submit behavior of this form
    onFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="sixteen wide column" id="editor-item">
                <div className="ui fluid input">
                    <input
                        type="text"
                        value={this.props.titleBarValue}
                        placeholder="Title of Widget"
                        onChange={this.onInputChange}
                        onSubmit={this.onFormSubmit}
                    />
                </div>
            </div>


        );
    }
};

export default TitleBar;