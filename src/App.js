import React from 'react';
import {BrowserRouter,Switch,Route} from'react-router-dom'
import Home from './pages/Home';
import { from } from 'array-flatten';
import About from './pages/About';
import Age from './components/Age';
import Sex from './components/Sex';
import Countries from './components/Countries';
import Companies from './components/Companies';
import Couple from './components/Couple';
import Culture from './components/Culture';
import Family from './components/Family';
import Logo from './components/Logo';
import Job_categories from './components/Job_categories';
import Poverty from './components/Poverty';
import Births from './components/Births';
import Price_new_house from './components/Price_new_house';
import Schools from './components/Schools';
import Services from './components/Services';
import Shops from './components/Shops';
import Social from './components/Social';
import Sports from './components/Sports';
import Population from './components/Population';
import Students from './components/Students';
import Health from './components/Health';
import Activity from './components/Activity';
import Price_new_apt from './components/Price_new_apt';
import Polygon from './components/Polygon';
import Indices from './components/Indices';
import Salary from './components/Salary';
import Sales_price_house from './components/Sales_price_house';
import Sales_price_apt from './components/Polygon';
import Surface from './components/Sales_price_apt';
import Sales_number from './components/Sales_number';
import Sales_price_type from './components/Sales_price_type';
import Online_ads from './components/Online_ads';








const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/a-propos" exact component={About}/>
          <Route path="/Age" exact component={Age}/>
          <Route path="/Births" exact component={Births}/>
          <Route path="/Companies" exact component={Companies}/>
          <Route path="/Countries" exact component={Countries}/>
          <Route path="/Couple" exact component={Couple}/>
          <Route path="/Culture" exact component={Culture}/>
          <Route path="/Family" exact component={Family}/>
          <Route path="/Logo" exact component={Logo}/>
          <Route path="/Job_categories" exact component={Job_categories}/>
          <Route path="/Poverty" exact component={Poverty}/>
          <Route path="/Price_new_house" exact component={Price_new_house}/>
          <Route path="/schools" exact component={Schools}/>
          <Route path="/Services" exact component={Services}/>
          <Route path="/Shops" exact component={Shops}/>
          <Route path="/Social" exact component={Social}/>
          <Route path="/Sports" exact component={Sports}/>
          <Route path="/Sex" exact component={Sex}/>
          <Route path="/Population" exact component={Population}/>
          <Route path="/Students" exact component={Students}/>
          <Route path="/Health" exact component={Health}/>
          <Route path="/Activity" exact component={Activity}/>
          <Route path="/Price_new_apt" exact component={Price_new_apt}/>
          <Route path="/Polygon" exact component={Polygon}/>
          <Route path="/Indices" exact component={Indices}/>
          <Route path="/Salary" exact component={Salary}/>
          <Route path="/Sales_price_house" exact component={Sales_price_house}/>
          <Route path="/Sales_price_apt" exact component={Sales_price_apt}/>
          <Route path="/Surface" exact component={Surface}/>
          <Route path="/Sales_number" exact component={Sales_number}/>
          <Route path="/Sales_price_type" exact component={Sales_price_type}/>
          <Route path="/Online_ads" exact component={Online_ads}/>
          
        </Switch>
      </BrowserRouter>
  );

}
export default App ;
