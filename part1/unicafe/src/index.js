import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Statistics = ({good, neutral,bad}) => {
  return (
    <>
      <p className="container-title">Statistics</p>

      { good >0 || bad >0 || neutral >0 ?
      <>
      <table className="container-statistics">
        <tbody>
          <Statistic text="Good" value={good}/>
          <Statistic text="Neutral" value={neutral}/>
          <Statistic text="Bad" value={bad}/>
          <Statistic text="All" value={good + neutral + bad}/>
          <Statistic text="Average" value={ ((good * 1 + bad * -1) / (good + neutral + bad))} />
          <Statistic text="Positive" value={ `${(good / (good + neutral + bad)) * 100 }%` }/>
          </tbody>
      </table>
      </>
      :
      <p>No feedback given</p>}
    </>
  )
}

const Button = ({text, handleClick}) => <button className="button" onClick={handleClick}>{text}</button>
const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>


const App = () => {
  //save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div className="container">
        <p className="container-title">Give feedback</p>
        <Button  text='good' handleClick={()=> handleGood()}/>
        <Button  text='neutral' handleClick={()=> handleNeutral()}/>
        <Button  text='bad' handleClick={()=> handleBad()}/>
        <Statistics  good={good} bad={bad} neutral={neutral}/>

    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))