var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hi {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var InputForm = React.createClass({
    onButtonClick: function (e) {
        e.preventDefault();

        var refName = this.refs.name.value;
        var refMessage = this.refs.message.value;
        var updates = {};

        if (refName.length > 0) {
            updates.name = refName;
            this.refs.name.value = '';
        }
        if (refMessage.length > 0) {
            updates.message = refMessage;
            this.refs.message.value = '';
        }
        this.props.onNewForm(updates);
    },
    render: function () {
        return (
            <form onSubmit={this.onButtonClick}>
                <input type="text" ref='name' placeholder="Enter name"/><br/>
                <textarea ref='message' placeholder="Enter message"/><br/>
                <button>Submit</button>
            </form>
        )
    }
});

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is the default message'
        }
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },
    handleNewForm: function (updates) {
       this.setState(updates)
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <InputForm onNewForm={this.handleNewForm} />
            </div>
        );
    }
});


ReactDOM.render(
    < Greeter/>,
    document.getElementById('container')
);