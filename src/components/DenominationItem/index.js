import './index.css'

const DenominationItem = props => {
  const {value, getAmount} = props

  const getValue = () => {
    getAmount(value)
  }

  return (
    <li className="item">
      <button className="button" type="button" onClick={getValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
