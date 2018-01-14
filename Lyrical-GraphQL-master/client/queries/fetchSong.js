/**
 * Created by dasif on 1/14/2018.
 */
import gql from 'graphql-tag';

export  default gql`
    query SongQuery($id:ID!){
        song(id: $id){
            id
            title
        }
    }
`;