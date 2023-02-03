import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
class Music extends React.Component{
    render(){
        return (
            <div className= 'displayMenu'>
                <h3>Music</h3>
                <ListGroup className="menuList">
                    <ListGroup.Item id="menuListItem" className={this.props.activeItem === 'AllSongs'? 'active' : ''}>All Songs</ListGroup.Item>
                    <ListGroup.Item id="menuListItem" className={this.props.activeItem === 'MyMusic'? 'active' : ''}>My Music</ListGroup.Item>
                    <ListGroup.Item id="menuListItem" className={this.props.activeItem === 'Artists'? 'active' : ''}>Artists</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default Music;