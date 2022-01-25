import React, {useState} from "react";

class Foo extends React.Component {

    state = { showing: true };

    render() {
        const { showing } = this.state;
        return (
            <div className="outerrwrapper">
                <button onClick={() => this.setState({ showing: !showing })}>Hide Details</button>
                <div className="toggler" style={{ display: (showing ? 'block' : 'none') }}>
                    
                    <ul><li>APY calculated based on current rates</li>
                    <li>All figures are estimates provided for your convinience only</li></ul></div>
            </div>  
        )
    }
}

export default Foo;