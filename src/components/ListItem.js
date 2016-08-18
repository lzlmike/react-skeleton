/**
 * Created by Mike on 8/17/16.
 */
const React = require('react');

var ListItem = React.createClass ({
    render() {
        return (
            <li>
                <h4>{this.props.name}</h4>
            </li>
        );
    }
});

module.exports = ListItem;