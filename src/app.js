class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options : ['Thing one', 'Thing two', 'Thing three']
    };
  }

  handleAddOption(option) {
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render() {
    const title = 'Indecision';
    const subtitle = "Put your life in hands of a computer";
    //const options = ['Thing one', 'Thing two', 'Thing three'];

    return (
      <div>
          <Header title={title} subtitle={subtitle} />
          <Action hasOption={this.state.options.length > 0}/>
          <Options options={this.state.options} />
          <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

class Header extends React.Component {
    render() {
        return (
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
      alert('Button Clicked');
    }
    render() {
        return (
            <div>
                <button 
                  onClick={this.handlePick}
                  disabled={!this.props.hasOption}
                >
                  What should I do
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
      super(props);
      this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
      console.log(this.props.options);
      //alert('Remove All');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
                {
                  this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        Option: {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      this.props.handleAddOption(option);
    }
  }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
