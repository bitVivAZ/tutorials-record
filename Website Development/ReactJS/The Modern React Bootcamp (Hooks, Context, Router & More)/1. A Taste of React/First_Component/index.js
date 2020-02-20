class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<h1>This is a class based component!</h1>
			</div>
		);
	}
}

function Hello2() {
	return(
		<div>
			<h1>Hello there again!</h1>
			<h1>This is a function based component!</h1>
		</div>
	);
}

ReactDOM.render(<Hello />, document.getElementById('Class'));
ReactDOM.render(<Hello2 />, document.getElementById('Function'));
