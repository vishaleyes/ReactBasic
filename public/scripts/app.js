'use strict';

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};
var appRoot = document.getElementById('app');
var render = function render() {
    var template3 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            'Testing'
        )
    );
    ReactDOM.render(template3, appRoot);
};

render();
