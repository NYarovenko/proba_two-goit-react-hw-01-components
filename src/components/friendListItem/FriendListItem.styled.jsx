import style from 'styled-components';

export const ItemStyle = style.li`
    margin-top: 4px;
    padding: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;

    border: 1px solid black;
    border-radius: 5px;
`;

export const StatusStyle = style.span`
    width: 8px;
    height: 8px;
    margin-left: 4px;
    
    border: 1px solid black;
    border-radius: 5px;
    background: ${({ isOnline }) => {
      return isOnline ? `#1fb952` : `#a22323`;
    }}

    
`;

export const AvatarStyle = style.img`
    margin-left: 4px;
    padding: 4px;

    border-radius: 5px;
    background: #ebebeb;
`;

export const NameStyle = style.p`
    margin-left: 12px;

    font-size: 18px;
    font-weight: 600;
`;
