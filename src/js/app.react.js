var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list.react');

var Hello = React.createClass({
    render : function() {
        return (
            <div className="greeting">
                <List name={this.props.name} />
            </div>
        )
    }
})

ReactDOM.render(
    <Hello name="yumere" />,
    document.getElementById('container')
)
