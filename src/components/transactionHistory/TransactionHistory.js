import { TransactionItem } from 'components/transactionItem/TransactionItem';
import {
  ColumnHeaderStyled,
  TbodyStyled,
  TransactionHistoryStyled,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryStyled>
      <thead>
        <tr>
          <ColumnHeaderStyled>Type</ColumnHeaderStyled>
          <ColumnHeaderStyled>Amount</ColumnHeaderStyled>
          <ColumnHeaderStyled>Currency</ColumnHeaderStyled>
        </tr>
      </thead>

      <TbodyStyled>
        {items.map(item => (
          <TransactionItem item={item} />
        ))}
      </TbodyStyled>
    </TransactionHistoryStyled>
  );
};
