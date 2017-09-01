import reducers from "../index.js"
import * as types from "../../types"

describe("Reducers#user", () => {
	it("returns initial state", () => {
		const state = reducers(undefined, {})
		expect(state).toMatchObject({ user: {} })
	})

	it("returns initial state for unkown action types", () => {
		const state = reducers(undefined, { type: "SOMETHING_ELSE" })
		expect(state).toMatchObject({ user: {} })
	})

	it("handles ADD_USER", () => {
		const user = {
			name: "Sample User",
			github: "sampler",
			id: 100101,
			token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ",
			role: "student"
		}
		const state = reducers({}, {
			type: types.ADD_USER,
			data: user
		})
		expect(state).toMatchObject({ user })
	})
})

