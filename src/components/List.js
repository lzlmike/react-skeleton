/**
 * Created by Mike on 8/17/16.
 */
var React = require('react');
const ListItem = require('./ListItem');

const list = [{"id":1, "name":'Mike'}, {"id":2, "name":'Diana'}, {"id":3, "name":'Johnson'}];

const List = () => {
    const item = list.map(function (e) {
        console.log(e.name);
       return (
           <ListItem key={e.id} name={e.name} />
       );
    });
    return <ul>{item}</ul>;
};

module.exports = List;