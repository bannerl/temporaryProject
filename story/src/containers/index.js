import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Index extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render () {
		
		return (
			<div>
				{this.props.children}  
			</div>
		)
	}
}


