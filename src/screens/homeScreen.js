import React, { Component } from 'react';
import Banner from '../components/banner';
import requests from '../components/Requests';
import Row from "../components/Row"


class homeScreen extends Component {
    state = {  } 
    render() { 
        return (
            <div className='homeScreen'>
               <Banner/>
    
               <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}
                   isLargeRow
               />
               <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
               <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
               <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
               <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
               <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
               <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
               <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
               
            </div>
        );
    }
}
 
export default homeScreen;