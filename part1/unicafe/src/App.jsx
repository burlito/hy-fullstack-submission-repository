import { useState } from "react"

class StateDataclass
{
	constructor(value, setter)
	{
		this.value = value;
		this.setter = setter;
	}
}

function StatisticLine({text, value})
{
	return (
		<tr><td>{text}</td><td>{value}</td></tr>
	);
}

function Statistics({feedbacks})
{

	const good = feedbacks.good.value;
	const neutral = feedbacks.neutral.value;
	const bad = feedbacks.bad.value;

	const all = good + neutral + bad;
	let average = 0;
	let positive = "0 %";
	if (all > 0) {
		average = (good - bad) / all;
		positive = "" + good / all * 100 + " %";
	}

	return (
 		<div>
			<h1>Statistics</h1>
			<table>
				<tbody>
				<StatisticLine text="good" value={good} />
				<StatisticLine text="neutral" value={neutral} />
				<StatisticLine text="bad" value={bad} />
				<StatisticLine text="all" value={all} />
				<StatisticLine text="positive" value={positive} />
				<StatisticLine text="average" value={average} />
				</tbody>
			</table>
 		</div>
	);	
}

function FeedbackButton({text, handleOnClick})
{
	return (<button onClick={handleOnClick}>{text}</button>);
}

function GiveFeedback({feedbacks})
{
	const increment = type => {
		return () => {
			feedbacks[type].setter(prev_value => prev_value + 1);
		};
	}

	return (
		<div>
			<h1>give feedback</h1>
			<FeedbackButton text="good" handleOnClick={increment("good")} />
			<FeedbackButton text="neutral" handleOnClick={increment("neutral")} />
			<FeedbackButton text="bad" handleOnClick={increment("bad")} />
		</div>
	);
}

function App()
{
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const feedbacks = {
		"good" : new StateDataclass(good, setGood),
		"neutral" : new StateDataclass(neutral, setNeutral),
		"bad" : new StateDataclass(bad, setBad),
	}

	return (
	<div>
		<GiveFeedback feedbacks={feedbacks}/>
		<Statistics feedbacks={feedbacks} />
	</div>
	)
}

export default App
