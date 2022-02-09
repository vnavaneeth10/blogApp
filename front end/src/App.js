
import Home from './component/home/Home';
import About from './component/about/About';
import ArticleList from './component/article/ArticleList';
import Article from './component/article/Article';
import Error from './component/error/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import './App.css';
import Signup from './component/logs/Signup';

function App() {
  return (

    <Router>
    <div className="App"> {/*for fragments we are creating this */}
    <Header />
    <Routes>
       <Route path= "/" element={<Home />} />  {/*If user asking for Home take slash */}
       <Route path= "/about" element={<About />} />
       <Route path= "/article-list" element={<ArticleList />} />
       <Route path= "/article/:name" element={<Article />} />
       <Route path= "/signup" element={<Signup  />} />
       <Route path= "*" element={<Error/>} /> 
       {/* any path other than the above mentioned path will take the error path */}
    </Routes>
    </div>

    </Router>
  );
}

export default App;
