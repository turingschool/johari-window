import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as actions from "../../../Redux/actions"
import JohariSubmit from "./JohariSubmit.js"

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
	actions: {
		completeAssignee: bindActionCreators(actions, dispatch).completeAssignee
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(JohariSubmit)

