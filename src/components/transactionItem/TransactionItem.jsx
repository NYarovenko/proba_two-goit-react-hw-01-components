import {
  TransactionItemTdStyled,
  TransactionItemTrStyled,
} from './TransactionItem.styled';

export const TransactionItem = ({ item: { id, type, amount, currency } }) => {
  return (
    <TransactionItemTrStyled key={id}>
      <TransactionItemTdStyled>{type}</TransactionItemTdStyled>
      <TransactionItemTdStyled>{amount}</TransactionItemTdStyled>
      <TransactionItemTdStyled>{currency}</TransactionItemTdStyled>
    </TransactionItemTrStyled>
  );
};
