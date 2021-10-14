import React from 'react'
import { AppRouter } from './routers/AppRouter'

export const AnimeApp = () => {
    return (
        <>
            <AppRouter basename={process.env.PUBLIC_URL}/>
        </>
    )
}
