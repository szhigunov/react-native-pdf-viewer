import React, { Component } from 'react';

import PDFView from 'react-native-pdf-view';

export default class extends Component {
	static propTypes = {
		url: React.propTypes.string.isRequired,
		onLoadComplete: React.propTypes.func,
		pageNumber: React.propTypes.number,
		style: React.propTypes.object
	}
	render() {
		return <PDFView {...props} />
	}
}