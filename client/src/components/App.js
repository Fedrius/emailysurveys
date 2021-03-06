import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>headeer</h2>
const Dashboard = () => <h2>Dash</h2>
const SurveyNew = () => <h2>Survey</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Landing} />
                    <Route path='/surveys' component={Dashboard} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;