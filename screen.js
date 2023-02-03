import React from "react";
import Home from "./home";
import Games from "./Games";
import Settings from "./Settings";
import Music from "./Music";
import MyMusic from "./MyMusic";
import Artists from "./Artists";
import AllSongs from "./Allsongs";

class Screen extends React.Component{
    render(){
        return(
            <div className="display">
                <img className="wallpaper" src="https://th.bing.com/th/id/OIP.YTvRYxFSNHxMR1ZtZdNuxwHaHa?pid=ImgDet&w=1000&h=1000&rs=1" alt="wallpaper"></img>
                {this.props.activePage==='home' ? <Home  activeItem = {this.props.activeItem} displayMenu = {this.props.displayMenu}/> : null}
                {this.props.activePage==='music' ? <Music  activeItem = {this.props.activeItem}/> : null}
                {this.props.activePage==='games' ? <Games/> : null}
                {this.props.activePage==='settings' ? <Settings/> : null}
                {this.props.activePage==='AllSongs' ? <AllSongs/> : null}
                {this.props.activePage==='MyMusic' ? <MyMusic/> : null}
                {this.props.activePage==='Artists' ? <Artists/> : null}

            </div>
        );
    }
}
export default Screen;