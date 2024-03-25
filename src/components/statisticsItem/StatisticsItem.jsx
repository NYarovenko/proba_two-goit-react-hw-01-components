import { ItemStyle } from './StatisticsItem.styled';

export const StatisticsItem = ({ stat: { id, label, percentage }, color }) => {
  return (
    <ItemStyle key={id} color={getRandomHexColor()}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </ItemStyle>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
