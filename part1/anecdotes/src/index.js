import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  const [indexMaxVotes, setIndexMaxVotes] = useState(0)

  const handleRandomize = () => {
    setSelected(Math.floor((Math.random() * anecdotes.length)))
  }

  const handleVoting = () => {
      //Check if a vote has been entered for the anecdote, if not set the vote to else
      // else increment the already existing value
      const newVotes = {
        ...votes,
        [selected]: votes[selected] ? votes[selected] + 1 : 1
      }
      setVotes(newVotes)
      //  https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object
      setIndexMaxVotes(Object.keys(newVotes).reduce((a,b) => newVotes[a] > newVotes[b]? a: b))

  }

  return (
    <div className='container'>
      <h2 className='container-title'>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p> Has {votes[selected] ? votes[selected] : 0} {votes[selected] === 1 ? 'vote' : 'votes'}.</p>
      <Button text="Next anecdote" clickHandler={()=>handleRandomize()}/>
      <Button text="Vote" clickHandler={()=>handleVoting()}/>
      <h2 className='container-title'>Anecdote with most votes</h2>
      {indexMaxVotes  ? <p>{anecdotes[indexMaxVotes]}</p>  : ""}
      {indexMaxVotes  ? <p>has {votes[indexMaxVotes]} {votes[indexMaxVotes] === 1 ? 'vote' : 'votes'}.</p>:"" }


    </div>
  )
}

const Button = ({text, clickHandler}) => <button onClick={clickHandler} className='button'>{text}</button>

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
