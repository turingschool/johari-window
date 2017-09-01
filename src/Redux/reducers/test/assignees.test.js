import reducers from "../index.js"
import * as types from "../../types"

describe("Reducers#assignees", () => {
	it("returns initial state", () => {
		const state = reducers(undefined, {})
		expect(state).toMatchObject({ assignees: [] })
	})

	it("returns initial state for unkown action types", () => {
		const state = reducers(undefined, { type: "SOMETHING_ELSE" })
		expect(state).toMatchObject({ assignees: [] })
	})

	it("handles ADD_ASSIGNEES", () => {
		const assignees = [
			{
				user: { id: 9876, name: 'Other user' },
				'completed?': true
			},
			{
				user: { id: 6789, name: 'Another user' },
				'completed?': false
			},
		]
		const state = reducers({}, {
			type: types.ADD_ASSIGNEES,
			data: assignees
		})
		expect(state).toMatchObject({ assignees })
	})

	it("handles COMPLETE_ASSIGNEE", () => {
		const assignees = [
			{
				user: { id: 6789, name: 'Another user' },
				'completed?': false
			},
		]
		const state = reducers({ assignees }, {
			type: types.COMPLETE_ASSIGNEE,
			data: { id: "6789" },
		})
		expect(state).not.toMatchObject({ assignees })

		const updatedUser = state.assignees
			.find(x => x.user.id === 6789)
		expect(updatedUser["completed?"]).toBeTruthy()
	})
})

