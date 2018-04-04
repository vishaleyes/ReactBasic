console.log("APP.js is running");

// JSX - JavaScript XMLDocument
/*var template = React.createElement(
				"h1",
				{id: "someid"},
				"React Bas"
				);*/
/*var app = {
    title:"REACT NATIVE BASIC EXAMPLE",
    subTitle: "Please check the code"
}*/

const app = {
    title: "Indecision App",
    subTitle: "Put your life in the hands of a computer",
    options : ["One", "Two"]
};


var template = (
    <div>
        <h1>{app.title}</h1>
        <p>Testing paragraph</p>
        <p>Testing para 2</p>
        <p>Testing para 3</p>
        <p><ol>
            <li>ABC</li>
            <li>XYZ</li>
        </ol></p>
    </div>
);
var username = "Vishal Panchal";
var age = "30";
var address = "Ahmedabad";

function getLocation(location)
{
    if(location)
    {
        return location;
    }
    else
    {
        return "---";
    }
}

var template2 = (
    <div>
        <h1>{username.toUpperCase()}</h1>
        <p>Age : {age}</p>
        <p>Location : {getLocation(address)} </p>
        <p>Testing para 3</p>
        <p><ol>
            <li>ABC</li>
            <li>XYZ</li>
        </ol></p>
    </div>
);

//const appRoot = document.getElementById('app');
//ReactDOM.render(template2, appRoot);

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
    const option = e.target.elements.option.value;
    if(option)
    {
        app.options.push(option);
        e.target.elements.option.value = "";
    }
    render();
}

const removeAll = () => {
    console.log("Remove All");
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option  = app.options[randomNumber];
    alert(option);
}

const render = () => {
var template3 = (
    <div>
        <h1>Form Example</h1>
        <p>{app.title}</p>
        <p>{app.subTitle}</p>
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <p>{app.options.length}</p>

        <ol>
            {
                app.options.map((option)=> {
                    return <li key={option}>{option}</li>
                })
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add</button>
            <button onClick={removeAll}>Remove All</button>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template3, appRoot);

}

render();




