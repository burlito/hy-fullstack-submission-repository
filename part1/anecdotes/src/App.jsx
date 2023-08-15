import { useState } from 'react'

function NextAnecdoteButton({anecdotes, anecdoteSetter}) {
	const max = anecdotes.length;
	const onClickHandler = () => {
		anecdoteSetter(prev_val => (prev_val + 1) % max);
	}

	return (
		<button onClick={onClickHandler}>next anecdote</button>
	)
}

function VoteAnecdoteButton({anecdotes, voteSetter, selected}) {
	const onClickHandler = () => {
		voteSetter(prev_val => { 
			const updated_votes = [...prev_val]
			updated_votes[selected] += 1;

			return updated_votes;
		});
	}

	return (
		<button onClick={onClickHandler}>vote</button>
	)
}

function ShowAnecdote({anecdotes, selected, votes}) {
	return (
		<>
			<p> {anecdotes[selected]} </p>
			<p>has {votes[selected]} votes</p>
		</>
	)
}

function ShowTopAnecdote({anecdotes, votes}) {
	const most_votes = Math.max(...votes);
	const top_index = votes.indexOf(most_votes);

	return (
		<ShowAnecdote anecdotes={anecdotes} selected={top_index} votes={votes} />
	)
}

function App() {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
	]
	 
	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState(Array.from({length: anecdotes.length}, () => 0));

	return (
		<div>
			<h2>Anecdote of the day</h2>
			<ShowAnecdote anecdotes={anecdotes} selected={selected} votes={votes} />
			<NextAnecdoteButton anecdotes={anecdotes} anecdoteSetter={setSelected} />
			<VoteAnecdoteButton anecdotes={anecdotes} voteSetter={setVotes} selected={selected} />
			<h2>Anecdote with most wotes</h2>
			<ShowTopAnecdote anecdotes={anecdotes} votes={votes} />

		</div>
	)
}

export default App
