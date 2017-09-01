import reducers from "../index.js"
import * as types from "../../types"

describe("Reducers#assignee", () => {
	it("returns initial state", () => {
		const state = reducers(undefined, {})
		expect(state).toMatchObject({ assignee: {} })
	})

	it("returns initial state for unkown action types", () => {
		const state = reducers(undefined, { type: "SOMETHING_ELSE" })
		expect(state).toMatchObject({ assignee: {} })
	})

	it("handles SET_ASSIGNEE", () => {
		const assignee = { id: 9876, name: 'My Friend' }
		const state = reducers({}, {
			type: types.SET_ASSIGNEE,
			data: assignee
		})
		expect(state).toMatchObject({ assignee })
	})
})

