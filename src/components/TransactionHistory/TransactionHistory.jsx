import PropTypes from 'prop-types';
import {
  Transaction,
  Head,
  BodyRow,
  BodyData,
  HeadData,
} from './TransactionHistory.styled';


const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
  <Head>
    <tr>
      <HeadData>Type</HeadData>
      <HeadData>Amount</HeadData>
      <HeadData>Currency</HeadData>
    </tr>
  </Head>

      <tbody>
        {items.map(item => (
          <BodyRow key = {item.id}>
      <BodyData>{item.type}</BodyData>
      <BodyData>{item.amount}</BodyData>
      <BodyData>{item.currency}</BodyData>
         </BodyRow>))}
      </tbody>
  </Transaction>
  )
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;