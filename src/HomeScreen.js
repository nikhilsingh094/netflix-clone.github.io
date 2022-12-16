import React from 'react'
import Banner from './Banner'
import './css/homescreen.css'
import Nav from './Nav'
import userrequest from './Request'
import Row from './Row'
function HomeScreen() {
  return (
    <div className='homescreen'>
        <Nav/>
        <Banner/>
        <Row title ="Netflix Original" isLargeRow fetchURL={userrequest.fetchNetflixOriginals}/>
        <Row title ="Trending Now" fetchURL={userrequest.fetchTrending}/>
        <Row title ="Top Rated" fetchURL={userrequest.fetchTopRated}/>
        <Row title ="Action Movies" fetchURL={userrequest.fetchActionMovies}/>
        <Row title ="Comedy" fetchURL={userrequest.fetchComedyMovies}/>
        <Row title ="Documentaries" fetchURL={userrequest.fetchDocumentaries}/>
        <Row title ="Romance" fetchURL={userrequest.fetchRomanceMovies}/>
    </div>
  )
}

export default HomeScreen