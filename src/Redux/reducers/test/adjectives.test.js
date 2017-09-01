import reducers from "../index.js"
import * as types from "../../types"

describe("Reducers#adjectives", () => {
	it("returns initial state", () => {
		const expectedState = reducers(undefined, {})
		expect(expectedState).toMatchObject({ adjectives: [] })
	})

	it("returns initial state for unkown action types", () => {
		const state = reducers(undefined, { type: "SOMETHING_ELSE" })
		expect(state).toMatchObject({ adjectives: [] })
	})

	describe("TOGGLE_ADJECTIVE", () => {
		const adjectives = [ "cool", "chill" ]

		it("adds a word", () => {
			const state = reducers({ adjectives }, {
				type: types.TOGGLE_ADJECTIVE,
				data: "nice"
			})
			expect(state).toMatchObject({
				adjectives: [ ...adjectives, "nice" ]
			})
		})

		it("removes a word", () => {
			const state = reducers({ adjectives }, {
				type: types.TOGGLE_ADJECTIVE,
				data: "cool"
			})
			const expected = adjectives.filter(x => x !== "cool")
			expect(state).toMatchObject({
				adjectives: expected
			})
		})
	})
})

