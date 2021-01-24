console.log("app.js is running");

//JSX

const app = {
    title: "Indecision App",
    subtitle : "Put your hands in life of a computer",
    options: []
};

function showOptions(options) {
    if (options.length > 0) {
        return <p>Here are your options</p>;
    } else {
        return "No options";
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = '';
        renderApp();
    } 
};

const wipeArray = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById("app");

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>

            {app.subtitle && <p>{app.subtitle}</p>}

            {showOptions(app.options)}

            <button disabled={app.options.length < 2} onClick={onMakeDecision}>What should I do?</button>

            <button onClick={wipeArray}>Remove all</button>

            <ol>
                {app.options.map((option, i=0) => {
                    i++;
                    return <li key={i}>{option}</li>;
                })}
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

}

renderApp();