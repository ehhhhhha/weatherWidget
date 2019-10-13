import React from 'react';

class TitleBar extends React.Component {

    onInputChange = (event) => {
        this.props.onTitleInputChange(event.target.value);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (

            <div className="sixteen wide column item">
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