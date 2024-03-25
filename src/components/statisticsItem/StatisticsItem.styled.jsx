import style from 'styled-components';

export const ItemStyle = style.li`
    padding: 4px;
     background-color: ${({ color }) => {
       return color;
     }};
   
`;
