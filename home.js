import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
class Home extends React.Component{
    render(){
        return (
            <div className={this.props.displayMenu ? 'displayMenu' : 'hideMenu'}>
                <h3>MENU</h3>
                <ListGroup className="menuList">
                    <ListGroup.Item id="menuListItem" className={this.props.activeItem === 'home'? 'active' : ''}>Home</ListGroup.Item>
                    <ListGroup.Item id="menuListItem" className={this.props.activeItem === 'music'? 'active' : ''}>Music</ListGroup.Item>
                    <ListGroup.Item id="menuListItem" className={this.props.activeItem === 'games'? 'active' : ''}>Games</ListGroup.Item>
                    <ListGroup.Item id="menuListItem" className={this.props.activeItem === 'settings'? 'active' : ''}>Settings</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default Home;