
let visibility = false;


const toggleVisibility = () => {
    visibility = !visibility;
    render();
}
var appRoot = document.getElementById('app');
const render = () => {
    var template3 = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {
                (visibility && (<div>Testing</div>))
            }

        </div>
    );
    ReactDOM.render(template3, appRoot);
};


render();