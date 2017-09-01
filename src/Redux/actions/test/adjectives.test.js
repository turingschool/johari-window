import {
	actions,
	mockStore,
	fakeService,
	url,
	userInfo,
} from "./actionsTestHelper"

describe("Actions#adjectives", () => {
	const expectedAction = {
		type: "TOGGLE_ADJECTIVE",
		data: "cool"
	}

	describe("#toggleAdjective", () => {
		it("updates the action data for TOGGLE_ADJECTIVE", () => {
			const store = mockStore({ adjectives: [] })
			store.dispatch(actions.toggleAdjective("cool"))
			const updated = store.getActions().find(x => x.type == "TOGGLE_ADJECTIVE")
			expect(expectedAction).toMatchObject(updated)
		})

		it("returns an object with a type and data", () => {
			const result = actions.toggleAdjective("cool")
			expect(expectedAction).toMatchObject(result)
		})
	})
})

