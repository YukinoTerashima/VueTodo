import getters from "@/store/getters";

describe("store", () => {
  describe("getters", () => {
    describe("doneTodo", () => {
      test("doneTodoは完了していない Todoのみを返す", () => {
        const state = {
          todos: [
            { name: "a", isDone: true },
            { name: "b", isDone: false }
          ]
        };
        expect(getters.doneTodo(state)).toEqual([{ name: "a", isDone: true }]);
      });
    });

    describe("notDoneTodo", () => {
      test("doneTodoは完了している Todoのみを返す", () => {
        const state = {
          todos: [
            { name: "a", isDone: true },
            { name: "b", isDone: false }
          ]
        };
        expect(getters.notDoneTodo(state)).toEqual([
          { name: "b", isDone: false }
        ]);
      });
    });
  });
});
