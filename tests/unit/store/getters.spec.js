import getters from "@/store/getters";

describe("store", () => {
  describe("getters", () => {
    describe("doneTodo", () => {
      test("doneTodoは完了済みの Todoのみを返す", () => {
        const state = {
          tasks: [
            { name: "a", status: "done" },
            { name: "b", status: "doing" },
            { name: "c", status: "todo" }
          ]
        };
        expect(getters.doneTodo(state)).toEqual([
          { name: "a", status: "done" }
        ]);
      });
    });

    describe("todo", () => {
      test("todoは 未着手のTodoのみを返す", () => {
        const state = {
          tasks: [
            { name: "a", status: "done" },
            { name: "b", status: "doing" },
            { name: "c", status: "todo" }
          ]
        };
        expect(getters.todo(state)).toEqual([{ name: "c", status: "todo" }]);
      });
    });

    describe("doingTodo", () => {
      test("doingTodoは 着手済み・未完のTodoのみを返す", () => {
        const state = {
          tasks: [
            { name: "a", status: "done" },
            { name: "b", status: "doing" },
            { name: "c", status: "todo" }
          ]
        };
        expect(getters.doingTodo(state)).toEqual([
          { name: "b", status: "doing" }
        ]);
      });
    });
  });
});
