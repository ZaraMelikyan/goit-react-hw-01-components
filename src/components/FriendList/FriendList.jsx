import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import FrendListStyled  from './FriendList.styled';


const FriendList = ({friends}) => {
    return (
        <FrendListStyled>
            {friends.map(friend => (                
                    <FriendListItem
                        key={friend.id}
                        avatar = {friend.avatar}
                        name = {friend.name}
                        isOnline = {friend.isOnline}/>
))}
        </FrendListStyled>
    )
}



FriendList.propTypes = {  
   friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    })
  )    
};

export default FriendList;

