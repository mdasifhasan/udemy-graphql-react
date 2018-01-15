/**
 * Created by dasif on 1/14/2018.
 */
import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {hashHistory} from 'react-router';
import gql from 'graphql-tag';

class LyricCreate extends Component {
    constructor(props){
        super(props);

        this.state = {content: ''};
    }

    onSubmit(event){
        event.preventDefault();
        this.props.mutate({
           variables: {
               content: this.state.content,
               songID: this.props.songID
           }
        }).then(() => this.setState({content: ''}));
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit.bind(this) }>
                <label>Add a Lyric</label>
                <input
                value={this.state.content}
                onChange={event => this.setState({ content:event.target.value })}
                />
            </form>
        );
    }
}



const mutation = gql`
    mutation AddLyricToSong($content: String, $songID:ID){
        addLyricToSong(content: $content, songId: $songID){
            id
            title
            lyrics{
                id
                content
                likes
            }
        }
    }
`;

export default graphql(mutation)  (LyricCreate);