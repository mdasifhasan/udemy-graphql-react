/**
 * Created by dasif on 1/14/2018.
 */
import React, {Component} from 'react';

class LyricList extends Component{

    onLikeLyric(id){

    };

    renderLyrics(){
        return this.props.lyrics.map(({id, content}) => {
            return (
                <li key={id} className="collection-item" >
                    {content}
                    <i className="material-icons" onClick={ () => this.onLikeLyric(id) }>thumb_up</i>
                </li>
            );
        });
    }

    render(){
        return (
          <ul className="collection">
              {this.renderLyrics()}
          </ul>
        );
    }
}

export default LyricList;