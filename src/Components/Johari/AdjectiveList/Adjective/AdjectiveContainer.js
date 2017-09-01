import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as actions from "../../../../Redux/actions"
import Adjective from "./Adjective.js"

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  actions: {
    toggleAdjective: bindActionCreators(actions, dispatch).toggleAdjective
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Adjective)


