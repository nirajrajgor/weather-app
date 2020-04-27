import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Main from './main';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() { }

	render() {
		return (
			<div className="container">
				<main>
					<Main />
				</main>
				<aside></aside>
			</div>
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