import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { DirectorioScreen } from '../components/Screen/directorio/DirectorioScreen'
import { DirectorioSongScreen } from '../components/Screen/directorio/DirectorioSongScreen'
import { EpisodeListScreen } from '../components/Screen/episode/EpisodeListScreen'
import { HomeScreen } from '../components/Screen/home/HomeScreen'
import { LoginScreen } from '../components/Screen/login/LoginScreen'
import { RegisterScreen } from '../components/Screen/login/RegisterScreen'
import { RakingScreen } from '../components/Screen/ranking/RakingScreen'
import { SongsScreen } from '../components/Screen/Songs/SongsScreen'
import { TrailerScreen } from '../components/Screen/video/TrailerScreen'
import {Navigation} from '../components/Navbar/Navigation'

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Navigation/>
                <Switch>
                
                    <Route exact path="/" component={HomeScreen}/>
                    
                    
                    <Route  path="/directorio/anime" component={DirectorioScreen}/>
                    <Route  path="/directorio/song" component={DirectorioSongScreen}/>
                    <Route  path="/ranking" component={RakingScreen}/>
                    <Route  path="/ver/:id" component={EpisodeListScreen}/>
                    <Route  path="/ver/song/:id" component={SongsScreen}/>
                    <Route  path="/ver/video" component={TrailerScreen}/>
                    <Route  path="/auth/login" component={LoginScreen}/>
                    <Route  path="/auth/register" component={RegisterScreen}/>
                </Switch>    
            </BrowserRouter>   
        </>
    )
}
