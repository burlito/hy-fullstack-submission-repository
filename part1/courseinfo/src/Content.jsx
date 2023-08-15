function Content(props)
{
	const content_array = props.value;

	return (
		<div>
			<p>
				{content_array[0].part} {content_array[0].exercises}
			</p>
			<p>
				{content_array[1].part} {content_array[1].exercises}
			</p>
			<p>
				{content_array[2].part} {content_array[2].exercises}
			</p>
		</div>
	)
}

export default Content
