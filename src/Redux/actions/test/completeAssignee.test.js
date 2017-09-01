import {
	actions,
	mockStore,
	fakeService,
	url,
	userInfo,
} from "./actionsTestHelper"

describe("Actions#assignees", () => {
	const expectedAction = {
		type: "COMPLETE_ASSIGNEE",
		data: { id: "123" },
	}

	describe("#completeAssignee", () => {
		it("updates the action data for COMPLETE_ASSIGNEE", () => {
			const assignees = [
				{ "completed?": false, user: { id: 123 } },
				{ "completed?": false, user: { id: 321 } },
			]
			const store = mockStore({ assignees })
			store.dispatch(actions.completeAssignee("123"))
			const updated = store.getActions().find(x => x.type == "COMPLETE_ASSIGNEE")
			expect(expectedAction).toMatchObject(updated)
		})

		it("returns an object with a type and data", () => {
			const result = actions.completeAssignee("123")
			expect(expectedAction).toMatchObject(result)
		})
	})
})

