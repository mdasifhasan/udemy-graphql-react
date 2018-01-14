/**
 * Created by dasif on 1/7/2018.
 */
import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component{
    renderSongs(){
        return this.props.data.songs.map(song => {
            return (
                <li key={song.id} className="collection-item">
                    <Link to={`/songs/${song.id}`}>{song.title}</Link>
                    <i className="material-icons right" onClick={() => {this.OnSongDelete(song.id)}}>delete</i>
                </li>
            )
        })
    }

    OnSongDelete(id){
        console.log("delete id: " + id);
        console.log(this.props);
        this.props.mutate({
            variables: {
                id: id
            }
        }).then(this.props.data.refetch());
    }

    render(){
        if(this.props.data.loading) return (<div>Loading...</div>)

        return (
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link to="/songs/new" className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
}

const mutationDeleteSong = gql`mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
        id
    }
}`;

export default graphql(mutationDeleteSong) (
    graphql(query)(SongList)
);