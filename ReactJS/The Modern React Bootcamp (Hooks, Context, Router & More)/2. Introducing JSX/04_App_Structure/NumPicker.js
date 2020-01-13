function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
	render() {
		const num = getNum();
		let msg;
		if(num === 7) {
			msg = 
				<div>
					<h2>CONGRATS YOU WIN!</h2>
					<img src="https://media1.giphy.com/media/nXxOjZrbnbRxS/giphy.webp?cid=790b76118fa736cb3df6233338a5e537223dc9ccef7b6344&rid=giphy.webp" />				
				</div>
		} else {
			msg = <p>Sorry You Lose!</p>
		}
		return (
			<div>
				<h1>Your number is {num}</h1>
				{msg}	
				{/* <p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p> */}
				{/* { num === 7 ? <img src="https://media1.giphy.com/media/nXxOjZrbnbRxS/giphy.webp?cid=790b76118fa736cb3df6233338a5e537223dc9ccef7b6344&rid=giphy.webp" /> : null} */}
				{/* { num === 7 && <img src="https://media1.giphy.com/media/nXxOjZrbnbRxS/giphy.webp?cid=790b76118fa736cb3df6233338a5e537223dc9ccef7b6344&rid=giphy.webp" />} */}
			</div>
		);
	}
}