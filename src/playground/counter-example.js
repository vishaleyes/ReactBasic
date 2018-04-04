
let count = 0;
const addOne = () => {
    count++;
    renderTemplate();
};

const minusOne = () => {
    count--;
    renderTemplate();
}

const reset = () => {
    count = 0;
    renderTemplate();
}

const renderTemplate = () => {
    var template3 = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
            <p>Location : {getLocation(address)} </p>
            <p>Testing para 3</p>
            <p><ol>
                <li>ABC</li>
                <li>XYZ</li>
            </ol></p>
        </div>
    );
    ReactDOM.render(template3, appRoot);
};

var appRoot = document.getElementById('app');
renderTemplate();