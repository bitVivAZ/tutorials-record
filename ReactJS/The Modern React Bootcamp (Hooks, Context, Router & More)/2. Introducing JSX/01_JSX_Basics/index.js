class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>My Image!</h1>
				<img src="https://images.unsplash.com/photo-1577158445641-d6f13acc6e06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />	
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
