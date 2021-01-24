
let count = 0;

const addOne = () => {
    count++;
    console.log('AddOne', count);
    renderCounterApp();
}
const minusOne= () => {
    count--;
    console.log('MinusOne', count);
    renderCounterApp();
}

const reset = () => {
    count = 0;
    console.log('Reset', count);
    renderCounterApp();
}

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button  onClick={addOne}>+1</button><br></br><br></br>
            <button onClick={minusOne}>-1</button><br></br><br></br>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();