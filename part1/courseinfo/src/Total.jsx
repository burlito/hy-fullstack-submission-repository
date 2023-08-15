function Total(props)
{
	const content_array = props.value;
	let total = 0;
	content_array.forEach(content => {
		total += content.exercises;
	});

	return (
		<p>Number of exercises {total}</p>
	)
}

export default Total
