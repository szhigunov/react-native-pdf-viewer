import React, { Component } from 'react';

import QuickLook from 'react-native-quick-look';

export default class extends Component {
	static propTypes = {
		url: React.propTypes.string.isRequired,
		style: React.propTypes.object
	}
	render() {
		return (
		<QuickLook
			{...props}
			style={[{
				flex: 1,
				alignSelf: 'stretch',
				borderWidth: 0,
				backgroundColor: '#f2f2f2'
			}, this.props.style]}
		/>
	}
}