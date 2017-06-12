var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory=ReactRouter.hashHistory;
var Main=require('../components/Main');
var Home=require('../components/Home');
var PromptContainer=require('../containers/PromptContainer');
var ConfirmBattleContainer=require('../containers/ConfirmBattleContainer');
var ResultsContainer=require('../containers/ResultsContainer');

var routes = (
 <Router history={hashHistory}>
<Route path="/" component={Main}>
     <IndexRoute path="/home" component={Home}/>
    <Route path="playerOne" header="player One" component={PromptContainer}/>
    <Route path="playerTwo/:playerOne" header="player Two" component={PromptContainer}/>
    <Route path="battle"  component={ConfirmBattleContainer}/>
    <Route path="results" component={ResultsContainer}/>
</Route>
 </Router>
);
module.exports = routes;
