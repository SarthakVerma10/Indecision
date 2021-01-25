class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggle () {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
                }
            })
    }

    render () {
        return(
         <div>
             <h1>Visibility</h1>
             <button onClick={this.handleToggle}>{this.state.visibility ? "hide details" : "show details"}</button>
             {this.state.visibility && (
                 <div>
                     <p>Here are the details</p>
                 </div>
            )
            }
        </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
