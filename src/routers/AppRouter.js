import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { DirectorioScreen } from '../components/Screen/directorio/DirectorioScreen'
import { DirectorioSongScreen } from '../components/Screen/directorio/DirectorioSongScreen'
import { EpisodeListScreen } from '../components/Screen/episode/EpisodeListScreen'
import { HomeScreen } from '../components/Screen/home/HomeScreen'
import { LoginScreen } from '../components/Screen/login/LoginScreen'
import { RegisterScreen } from '../components/Screen/login/RegisterScreen'
import { RakingScreen } from '../components/Screen/ranking/RakingScreen'
import { SongsScreen } from '../components/Screen/Songs/SongsScreen'
import { TrailerScreen } from '../components/Screen/video/TrailerScreen'

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route path="/directorio/anime" component={DirectorioScreen}/>
                    <Route path="/directorio/song" component={DirectorioSongScreen}/>
                    <Route exact path="/ranking" component={RakingScreen}/>
                    <Route exact path="/ver/:id" component={EpisodeListScreen}/>
                    <Route exact path="/ver/song/:id" component={SongsScreen}/>
                    <Route exact path="/ver/video" component={TrailerScreen}/>
                    <Route exact path="/auth/login" component={LoginScreen}/>
                    <Route exact path="/auth/register" component={RegisterScreen}/>
                </Switch>    
            </Router>   
        </>
    )
}
