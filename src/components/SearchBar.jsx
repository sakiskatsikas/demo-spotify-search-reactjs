import React from 'react';
// import ReactDOM from 'react-dom';
import superagent from 'superagent';
import FontAwesome from 'react-fontawesome';

export default React.createClass(
{
    propTypes:
    {
        results: React.PropTypes.func
    },

    searchSpotify()
    {
        const that = this
        ,   q = this.refs.q.value
        ;

        if ( q !== '')
        {
            superagent.get( '//api.spotify.com/v1/search?q=' + q + '&type=artist,album')
            .then( function( response )
            {
                that.props.results( response );

                that.refs.q.value = '';
            });
        }
    },

    handleKeyPress( e )
    {
        if ( e.key === "Enter" )
        {
            this.searchSpotify();
        }
    },

    render()
    {
        return (
            <div className="searh-bar row" onKeyPress={ this.handleKeyPress }>
                <div className="col-sm-7 offset-sm-1">
                    <input
                        type="text"
                        className="form-control"
                        style={ { fontSize: "24px", padding: "20px 20px 20px 65px" } }
                        placeholder="Search artists and albums"
                        ref="q"
                    />
                    <FontAwesome
                        name='search'
                        size='2x'
                        style={ { position: "absolute", top: "20px", left: "35px" } }
                    />
                </div>
                <div className="col-sm-3">
                    <button
                        onClick={ this.searchSpotify }
                        className="btn btn-lg btn-success btn-block"
                        style={ { fontSize: "24px", paddingTop: "20px", paddingBottom: "20px"  } }
                    >
                        Search
                    </button>
                </div>
            </div>
        )
    }
});
