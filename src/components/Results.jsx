import React from 'react';
import Artists from './Artists';
import Albums from './Albums';

export default React.createClass(
{
    propTypes:
    {
        data: React.PropTypes.object
    },

    getInitialState()
    {
        return {
            showArtists: true
        ,   showAlbums: false
        };
    },

    toggle( e )
    {
        console.log('e', e.target.getAttribute('data-type'));
        this.setState(
        {
            showArtists: !this.state.showArtists
        ,   showAlbums: !this.state.showAlbums
        });
    },

    render()
    {
        return (
            <div className="row" style={ {marginTop: "50px"} }>
                {
                    !this.props.data ? null :
                        <div className="col-sm-10 offset-sm-1">
                        {
                            this.props.data.albums.total === 0 && this.props.data.artists.total === 0
                            ?   <h2 style={ {textAlign: "center"} } >No results found, search again</h2>
                            :   <div>
                                    <div className="nav" style={ {overflow: "hidden", marginBottom: "50px"} } >
                                        {
                                            this.props.data.artists.total !== 0
                                                ? <li role="presentation" style={ {float: "left", marginRight: "10px"} } >
                                                    {
                                                        this.state.showArtists
                                                            ? <strong className="btn btn-lg" style={ {fontWeight: "bold"} } data-type="artists">ARTISTS</strong>
                                                            : <a className="btn btn-lg" onClick={ this.toggle } data-type="artists">ARTISTS</a>
                                                    }
                                                  </li>
                                                : null
                                        }
                                        {
                                            this.props.data.albums.total !== 0
                                                ? <li role="presentation" style={ {float: "left", marginRight: "10px"} } >
                                                    {
                                                        this.state.showAlbums
                                                            ? <strong className="btn btn-lg" style={ {fontWeight: "bold"} } data-type="artists">ALBUMS</strong>
                                                            : <a className="btn btn-lg" onClick={ this.toggle } data-type="artists">ALBUMS</a>
                                                    }
                                                  </li>
                                                : null
                                        }
                                    </div>
                                    {
                                        this.props.data.artists.total !== 0 && this.state.showArtists
                                            ? <Artists items={ this.props.data.artists.items } />
                                            : null
                                    }
                                    {
                                        this.props.data.albums.total !== 0 && this.state.showAlbums
                                            ? <Albums items={ this.props.data.albums.items } />
                                            : null
                                    }
                                </div>
                        }
                        </div>
                }
            </div>
        )
    }
});
