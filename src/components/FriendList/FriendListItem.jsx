import PropTypes from 'prop-types';

import {
  FrendListItemStyled,
  FrendListStatus,
  FriendListImg,
  FriendListName,
} from './FriendListItem.styled';


const FriendListItem = ({
    avatar,
    name,
    isOnline,
}) => {
    return (
        <FrendListItemStyled>
            <FrendListStatus isOnline={isOnline}></FrendListStatus>
            <FriendListImg src={avatar} alt={name} width="48" />
            <FriendListName>{name}</FriendListName>
        </FrendListItemStyled>
    )
};

FriendListItem.prototypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
};

export default FriendListItem;