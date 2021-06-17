import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import RecipePage from './pages/recipes'
import Account from './pages/account';
import signup from './pages/signUp';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/signin" component={SigninPage} exact />
				<Route path="/signup" component={signup} exact />
				<Route path="/recipes" component={RecipePage} exact />
				<Route path="/account" component={Account} exact />
			</Switch>
		</Router>
	);
}

export default App;
