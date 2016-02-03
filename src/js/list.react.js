var React = requre('react');

var List = React.createClass({
    render : function(){
        return (
            <div>
                This Is List
                Hello, {this.props.name}
            </div>
        )
    }
})

module.exports = List
