import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() { }

	render() {
		return (
			<div>Home Component</div>
		)
	}
}

const mapStateToProps = state => ({
	// ...state
});
const mapDispatchToProps = {
	// getPosts: fetchPosts
}
Home.propTypes = {
	getPosts: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);