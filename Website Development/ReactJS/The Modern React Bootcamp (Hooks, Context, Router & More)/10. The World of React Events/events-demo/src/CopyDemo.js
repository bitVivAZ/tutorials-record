import React, { Component } from 'react';

class CopyDemo extends Component {
    handleCopy() {
        alert("STOP STEALING");
    }
    
    render() {
        return (
            <div>
                <h3>Try Copying Some of this Text: </h3>
                <section style={{width: "30px", display: "inline-block" }} onCopy={this.handleCopy}>
                    Lorem lorem lorem
                </section>
            </div>
        );
    }
}

export default CopyDemo;