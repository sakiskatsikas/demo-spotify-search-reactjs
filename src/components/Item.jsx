import React from 'react';
import FontAwesome from 'react-fontawesome';

export default React.createClass(
{
    propTypes:
    {
        item: React.PropTypes.object
    },

    render()
    {
        return (
            <div className="artist-item" style={{ overflow: "hidden", marginBottom: "40px" }}>
                {
                    this.props.item.images.length
                    ? <img 
                        src={this.props.item.images[1].url}
                        alt={this.props.item.name}
                        width="140"
                        height="140"
                        style={{ float: "left", marginRight: "20px", borderRadius: "5px", border: "1px solid #ddd" }} />
                    : <div style={{ width: "140px",
                                    height: "140px",
                                    background: "#ddd",
                                    borderRadius: "5px",
                                    border: "1px solid #ddd",
                                    float: "left",
                                    marginRight: "20px",
                                    textAlign: "center",
                                    position: "relative",
                                    lineHeight: "9"
                                }}>
                                <FontAwesome
                                    name='picture-o'
                                    size='4x'
                                    style={ { color: "#ccc", position: "absolute", top: "40px", left: "35px" } }
                                />
                        </div>
                }
                <h5 className="text-muted" style={ { textTransform: "capitalize", marginTop: "40px" } }>{this.props.item.type}</h5>
                <h4><a target="_blank" href={this.props.item.external_urls.spotify}>{this.props.item.name}</a></h4>
            </div>
        )
    }
});
