import {
	actions,
	mockStore,
	fakeService,
	url,
	userInfo,
} from "./actionsTestHelper"

describe("Actions#myWindow", () => {
	let expectedData, expectedAction

	beforeEach(() => {
		const response = fakeService.get(url + "/5000/descriptions")
		expectedData = response.data
		expectedAction = { type: "ADD_MY_WINDOW", data: expectedData }
	})

	describe("#fetchUser", () => {
		it("updates the action data for ADD_ASSIGNEES", async () => {
			const store = mockStore({ myWindow: {} })
			await store.dispatch(actions.fetchUser(userInfo, fakeService))
			const updated = store.getActions().find(x => x.type == "ADD_MY_WINDOW")
			expect(expectedAction).toMatchObject(updated)
		})
	})

	describe("#addMyWindow", () => {
		it("returns an object with a type and data", () => {
			const result = actions.addMyWindow(expectedData)
			expect(expectedAction).toMatchObject(result)
		})
	})
})

