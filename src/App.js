import React, { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home, Movie } from './pages';
const App = () => {
  const [movie, setMovie] = useState(NaN);
  const movies = [
    {
      name: 'Parasite',
      year: '2019',
      img: "https://northernvirginiamag.com/wp-content/uploads/2020/08/movie-popcorn.jpg",
      desc: "An unemployed family of four slips into the lives of the crazy wealthy Park family. Then, there's an incident that can’t entirely be cleaned up in a cleaning shift. Long after the credits roll, you’ll be questioning the ending and mulling over the tough, important themes."
    },{
      name: 'Casablanca',
      year: '1942',
      img: "https://northernvirginiamag.com/wp-content/uploads/2020/08/movie-popcorn.jpg",
      desc: "Set in the early years of World War II in Casablanca, Rick Blaine's (Humphrey Bogart) nightclub is an oasis for refugees despite the warnings he gets from local authorities. But things get rocky when an ex-lover and her boyfriend show up, bringing with them a challenge that Rick has to face. One of the most famous old Hollywood films of all time, Casablanca is a love story you won't forget."
    },{
      name: 'Dilwale Dulhania Le Jayenge',
      year: '1995',
      img: "https://northernvirginiamag.com/wp-content/uploads/2020/08/movie-popcorn.jpg",
      desc: "The longest-running Hindi film of all time (going on 25 years now!) is an absolute delight. The Bollywood rom-com about two young star-crossed lovers who fall in love despite their parents' critiques ended up winning 10 Filmfare Awards—India’s Academy Award equivalent —and changed the game forever."
    },{
      name: 'The Farewell',
      year: '2019',
      img: "https://northernvirginiamag.com/wp-content/uploads/2020/08/movie-popcorn.jpg",
      desc: "In her Golden Globe-winning role, Awkwafina plays Billi, a woman on a trip to China for a 'family wedding' that's actually a final goodbye to her grandmother. While there, Billi struggles to find a deeper connection to the country and tries to understand her family's decision to keep her grandmother's sickness a secret from her."
    },{
      name: 'Rebel Without a Cause',
      year: '1955',
      img: "https://northernvirginiamag.com/wp-content/uploads/2020/08/movie-popcorn.jpg",
      desc: "Two words for you: James! Dean! The old Hollywood icon's second to last film, as teenager Jim Stark, before his untimely death in 1955 ended up being one of his most celebrated. The unlikely bond shared on-screen between him, John 'Plato' Crawford (Sal Mineo), and Judy (Natalie Wood) gave American youths at the time a movie where they could finally see themselves on the screen."
    },{
      name: 'Promising Young Woman',
      year: '2020',
      img: "https://northernvirginiamag.com/wp-content/uploads/2020/08/movie-popcorn.jpg",
      desc: "This very dark comedy juxtaposes one woman's insatiable quest to avenge her best friend's tragic assault in front of a backdrop of all things frilly, pink, and sweet. That stark contrast only makes the movie's incredibly intense climax that much more shocking. Promising Young Woman was nominated for five Oscars in 2021, including Best Picture, Best Actress for Carey Mulligan, and a history-making Best Director nod for Emerald Fennell."
    },
  ]
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home movie={movie} setMovie={setMovie} movies={movies}/>
          </Route>
          <Route path="/movie">
            <Movie movie={movie} setMovie={setMovie} movies={movies}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
