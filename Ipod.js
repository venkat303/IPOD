import React from "react";
import ZingTouch from 'zingtouch';
import Screen from "./screen";

class Ipod extends React.Component{
    constructor(){
        super();
        this.state={
            activePage:'home',
            activeItem:'home',
            enter: 0,
            displayMenu: false
        }
    }
    changePage = () => {
        if(this.state.activeItem === 'music'){
            this.setState({
                activeItem : 'AllSongs',
                activePage : this.state.activeItem
            })
        }else{
            this.setState({
                activePage : this.state.activeItem
            })
        }
    }
    toggleMenu = (e) => {  
        e.preventDefault();      
        this.setState({
            displayMenu: !this.state.displayMenu
        })
    }

    changePageToHomeScreen = () => {

        if(this.state.activePage === 'MyMusic' || this.state.activePage === 'Artists' || this.state.activePage === 'AllSongs'){
            this.setState({
                activeItem : this.state.activePage,
                activePage : 'music'
            })
        } else if(this.state.activeItem === 'MyMusic' || this.state.activeItem === 'Artists' || this.state.activeItem === 'AllSongs'){
            this.setState({
                activeItem : 'music',
                activePage : 'home'
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : 'home'
            })
        }
        
    }

    rotateWheel = (e) => {
        const targetElement = document.getElementById('wheel');
        const region = new ZingTouch.Region(targetElement);
        var change = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;
                region.bind(targetElement,'rotate',function(e){
                    var newAngle = e.detail.distanceFromLast;
                    if(newAngle <0){
                        change++;
                        if(change === 30){
                            change=0;
                            if(self.state.activePage === 'home'){
                                if(self.state.activeItem === 'home'){
                                    self.setState({
                                        activeItem : 'settings'
                                    })
                                } else if(self.state.activeItem === 'music'){
                                    self.setState({
                                        activeItem : 'home'
                                    })
                                } else if(self.state.activeItem === 'games'){
                                    self.setState({
                                        activeItem : 'music'
                                    })
                                } else if(self.state.activeItem === 'settings'){
                                    self.setState({
                                        activeItem : 'games'
                                    })
                                }
                            }else if(self.state.activePage === 'music'){
                                if(self.state.activeItem === 'AllSongs'){
                                    self.setState({
                                        activeItem : 'Artists'
                                    })
                                } else if(self.state.activeItem === 'MyMusic'){
                                    self.setState({
                                        activeItem : 'AllSongs'
                                    })
                                } else if(self.state.activeItem === 'Artists'){
                                    self.setState({
                                        activeItem : 'MyMusic'
                                    })
                                }
                            }
                        } 
                    }
                    else{
                        change++;
                        if(change === 30){
                            change = 0;
                            if(self.state.activePage === 'home'){
                                if(self.state.activeItem === 'home'){
                                    self.setState({
                                        activeItem : 'music'
                                    })
                                } else if(self.state.activeItem === 'music'){
                                    self.setState({
                                        activeItem : 'games'
                                    })
                                } else if(self.state.activeItem === 'games'){
                                    self.setState({
                                        activeItem : 'settings'
                                    })
                                } else if(self.state.activeItem === 'settings'){
                                    self.setState({
                                        activeItem : 'home'
                                    })
                                }
                            } else if(self.state.activePage === 'music'){
                                if(self.state.activeItem === 'AllSongs'){
                                    self.setState({
                                        activeItem : 'MyMusic'
                                    })
                                } else if(self.state.activeItem === 'MyMusic'){
                                    self.setState({
                                        activeItem : 'Artists'
                                    })
                                } else if(self.state.activeItem === 'Artists'){
                                    self.setState({
                                        activeItem : 'AllSongs'
                                    })
                                }
                            }
                        }
                    }
                })
            // }
    }

    render(){
        return (
            <div className="ipod">
                <Screen activePage = {this.state.activePage} activeItem = {this.state.activeItem} displayMenu = {this.state.displayMenu}/>  
                <div className="controls" id="wheel" onMouseOver={this.rotateWheel}>
                    <button className="menu button" onClick={this.toggleMenu} onDoubleClick={this.changePageToHomeScreen}>MENU</button>
                    <img className="fastForward" 
                    src="https://cdn-user-icons.flaticon.com/91448/91448217/1675096279846.svg?token=exp=1675097208~hmac=6826f2a113adab6559af77f5f68034a7" alt="fwd"></img>
                    <img className="fastBackward"
                    src="https://cdn-user-icons.flaticon.com/91448/91448217/1675096279846.svg?token=exp=1675097208~hmac=6826f2a113adab6559af77f5f68034a7" alt="back"></img>
                    <img className="pausePlay"
                    src="https://cdn-user-icons.flaticon.com/91448/91448217/1675096920256.svg?token=exp=1675097821~hmac=e44564e3f0407ecfff5075d6647f595f" alt="pp"></img>
                </div>
                <button className="playButton" onClick={this.changePage}></button>
            </div>
        );
    }

}

export default Ipod;