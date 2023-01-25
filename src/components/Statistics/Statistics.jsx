import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  Title,
  StatList,
  StatItem,
  Percentage,
  Label,
} from './Statistics.styled';


const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,})
  )    
};

export default Statistics;
