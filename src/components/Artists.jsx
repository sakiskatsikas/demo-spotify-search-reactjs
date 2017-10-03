import React from 'react';
import Item from './Item';

export default React.createClass(
{
    propTypes:
    {
        items: React.PropTypes.array
    },

    render()
    {
        return (
            <div className="artists-tab">
                {
                    this.props.items.map( function( item, k )
                    {
                        return (
                            <Item key={ k } item={ item } />
                        )
                    } )
                }
            </div>
        )
    }
});
