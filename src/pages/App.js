import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComonent from '../components/navbarComponent';
import {Link , Switch , BrowserRouter , Route} from "react-router-dom";
import About from './about';
import Home from './home';
import BookStore from './bookStore';

function App(){
return(
<>
<BrowserRouter>
<NavbarComonent></NavbarComonent>


<Switch>
<Route path={'/about'} exact component={About} ></Route>
<Route path={'/home'} exact  component={Home} ></Route>
<Route path={'/bookstore'} exact component={BookStore}></Route>
</Switch>
</BrowserRouter>
</>
);
}

export default App;