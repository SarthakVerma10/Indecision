const details = "here are the details"
let visibility = false;

const showDetails = (e) => {
    visibility = !visibility;
    renderPage();
}

const appRoot = document.getElementById("app");

const renderPage = () => {
    const template = (
        <div>
            <h1>Visibility</h1>
            <button name="myButton" onClick={showDetails}>{visibility ? "hide details" : "show details"}</button>
            {visibility && (
                <div>
                    <p>Here are the details</p>
                </div>
            )
            }
        </div>
    );

    ReactDOM.render(template, appRoot);
    
}

renderPage();