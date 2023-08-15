import Content from './Content.jsx'
import Header from './Header.jsx'
import Total from './Total.jsx'

class ContentItem
{
	constructor(part, exercises)
	{
		this.part = part;
		this.exercises = exercises;
	}
}

function App()
{
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	const content = [
		new ContentItem(part1, exercises1),
		new ContentItem(part2, exercises2),
		new ContentItem(part3, exercises3)
	];

	return (
		<div>
			<Header value={course} />
			<Content value={content} />
			<Total value={content} />
		</div>
	)
}

export default App
