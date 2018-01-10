/**
 * Created by dasif on 1/10/2018.
 */
import gql from 'graphql-tag';

export default gql`
    {
        songs{
            id
            title
        }
    }
`;