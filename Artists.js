import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
class Artists extends React.Component{
    render(){
        return(
            <div className="itemDisplay">
                <h3>Music Directors</h3>
                <ListGroup className="menuList">
                    <ListGroup.Item id="menuListItem" active>MM.Keeravani</ListGroup.Item>
                    <ListGroup.Item id="menuListItem">AR Rehaman</ListGroup.Item>
                    <ListGroup.Item id="menuListItem">Devi Sri Prasad</ListGroup.Item>
                </ListGroup>
            </div>
        )
    };
}

export default Artists;