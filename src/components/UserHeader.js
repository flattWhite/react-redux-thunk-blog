import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
	render() {
		const { user } = this.props;
		if (!user) return null;

		return <div className="header">{user.name}</div>;
	}
}

// state from redux store
// ownProps a reference to the props that are about to be sent into UserHeader component
const mapStateToProps = (state, ownProps) => {
	return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
