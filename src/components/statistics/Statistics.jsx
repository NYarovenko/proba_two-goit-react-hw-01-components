import { StatisticsItem } from 'components/statisticsItem/StatisticsItem';
import { SectionStyle, TitleStyle, UlStatsStyle } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStyle>
      {title !== undefined && <TitleStyle>Upload stats</TitleStyle>}

      <UlStatsStyle>
        {stats.map(stat => (
          <StatisticsItem stat={stat} />
        ))}
      </UlStatsStyle>
    </SectionStyle>
  );
};
