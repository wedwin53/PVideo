import React, { PureComponent } from 'react';
import './media.css'
import PropTypes from 'prop-types'

class Media extends PureComponent {
	// Version anterior a ES6
	// constructor(props){
	// 	super(props)
	// 	this.handleClick = this.handleClick.bind(this)
	// }

	// cambiar estado de componentes o cambiar props de componentes ES6
	// constructor(){
	// 	super(props)
	// 	this.state = {
	// 		author: props.author
	// 	}
	// }

	//nueva version de cambiar props de componentes
	state = {
		author: 'Marvel'
	}


	// nueva forma de hacerlo con arrow function

	handleClick = (event) => {
		//console.log(this.props.title)
		this.setState({
			author: 'Disney',
		})
	}

	render(){
		const styles = {
			container:{
				color: '#44546b',
				cursor: 'pointer',
				width: 260,
				border: '1px red solid',
			}
		}
		return (
			<div className="Media" onClick={this.handleClick}>
				<div>
					<img
					src={this.props.cover}
					alt=""
					width={260}
					height={160}
					/>
					<h3 className="Media-title" >{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
			)
	}
}

Media.propType = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(["video", "audio"]),
}
export default Media;