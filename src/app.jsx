import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

export default React.createClass(
{
    getInitialState()
    {
        return {
            data: null
        ,   error: false
        };
    },

    results( response )
    {
        this.setState(
        {
            error: false
        });

        if ( response.status === 200 )
        {
            this.setState(
            {
                data: response.body
            });
        }
        else
        {
            this.setState(
            {
                error: true
            });
        }
    },

    render()
    {
        return (
          <div className="container main" style={ {marginTop: "80px", fontFamily: "Arial, sans-serif" } }>
            <SearchBar results={ this.results } />
            <Results data={ this.state.data } />
            {
                this.state.error
                    ? <h2>Something went wrong, please try again</h2>
                    : null
            }
          </div>
        )
    }
});
