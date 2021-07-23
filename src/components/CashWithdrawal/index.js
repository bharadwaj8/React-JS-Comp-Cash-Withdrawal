import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  getAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg">
        <div className="container">
          <div className="body">
            <div className="name-icon">S</div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance">
            <p className="balance-desc">Your Balance</p>
            <h1 className="balance-amount">{amount}</h1>
          </div>
          <p className="rupees-desc">In Rupees</p>
          <h1 className="withdraw">Withdraw</h1>
          <p className="sum-desc">CHOOSE SUM (IN RUPEES)</p>
          <ul className="amount-list">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                value={each.value}
                getAmount={this.getAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
