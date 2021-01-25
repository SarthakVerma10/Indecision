class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
            name: 'Julie'
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        })
    }

    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            };
        })
    }

    render () {
        return (
            <div>
              <h1>{this.state.name}</h1>
              <h1>Count: {this.state.count}</h1>
              <button onClick={this.handleAddOne}>+1</button>
              <button onClick={this.handleMinusOne}>-1</button>
              <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;

// const addOne = () => {
//     count++;
//     console.log('AddOne', count);
//     renderCounterApp();
// }
// const minusOne= () => {
//     count--;
//     console.log('MinusOne', count);
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     console.log('Reset', count);
//     renderCounterApp();
// }

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button  onClick={addOne}>+1</button><br></br><br></br>
//             <button onClick={minusOne}>-1</button><br></br><br></br>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();