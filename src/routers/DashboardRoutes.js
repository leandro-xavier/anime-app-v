import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Navigation } from '../components/Navbar/Navigation'
import { DirectorioScreen } from '../components/Screen/directorio/DirectorioScreen'
import { DirectorioSongScreen } from '../components/Screen/directorio/DirectorioSongScreen'
import { EpisodeListScreen } from '../components/Screen/episode/EpisodeListScreen'
import { HomeScreen } from '../components/Screen/home/HomeScreen'
import { RakingScreen } from '../components/Screen/ranking/RakingScreen'
import { SongsScreen } from '../components/Screen/Songs/SongsScreen'
import { TrailerScreen } from '../components/Screen/video/TrailerScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navigation/>
            <div>
                <Switch>
                <Route exact path="/" component={HomeScreen}/>
                    <Route  path="/directorio/anime" component={DirectorioScreen}/>
                    <Route  path="/directorio/song" component={DirectorioSongScreen}/>
                    <Route  path="/ranking" component={RakingScreen}/>
                    <Route exact path="/ver/:id" component={EpisodeListScreen}/>
                    <Route exact path="/ver/song/:id" component={SongsScreen}/>
                    <Route  path="/ver/video" component={TrailerScreen}/>

                    <Redirect to="/" />
                </Switch>    
            </div>   
        </>
    )
}
