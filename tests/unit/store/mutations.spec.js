import mutations from "@/store/mutations";

describe("store", () => {
  describe("mutations", () => {
    describe("addTodo", () => {
      test("addTodoは未完状態のTODOを追加する", () => {
        const state = {
          todos: [
            { name: "a", isDone: true },
            { name: "b", isDone: false }
          ]
        };
        const expectedState = {
          todos: [
            { name: "a", isDone: true },
            { name: "b", isDone: false },
            { name: "c", isDone: false }
          ]
        };
        mutations.addTodo(state, "c");
        expect(state).toEqual(expectedState);
      });
    });

    describe("deleteTodo", () => {
      test("deleteTodoは指定されたTODOの同じ名前のTODOをstateから削除する", () => {
        const state = {
          todos: [
            { name: "a", isDone: true },
            { name: "b", isDone: false }
          ]
        };
        const expectedState = {
          todos: [{ name: "a", isDone: true }]
        };
        mutations.deleteTodo(state, { name: "b", isDone: false });
        expect(state).toEqual(expectedState);
      });
    });

    describe("cleanTodo", () => {
      test("cleanTodoは全てのTODOをstateから削除する", () => {
        const state = {
          todos: [
            { name: "a", isDone: true },
            { name: "b", isDone: false }
          ]
        };
        const expectedState = {
          todos: [{ name: "b", isDone: false }]
        };
        mutations.cleanTodo(state);
        expect(state).toEqual(expectedState);
      });
    });

    describe("changeTodoState", () => {
      test("changeTodoStateはTODOの状態を指定したものに変える", () => {
        const state = {
          todos: [
            { name: "a", isDone: true },
            { name: "b", isDone: false }
          ]
        };
        const expectedState = {
          todos: [
            { name: "a", isDone: true },
            { name: "b", isDone: true }
          ]
        };
        mutations.changeTodoState(state, { target: "b", status: true });
        expect(state).toEqual(expectedState);
      });
      test("changeTodoStateはTODOの状態を指定したものに変える 対象がなかったらなにもしない", () => {
        const state2 = {
          todos: [
            { name: "a", isDone: true },
            { name: "b", isDone: true }
          ]
        };
        const expectedState2 = {
          todos: [
            { name: "a", isDone: true },
            { name: "b", isDone: true }
          ]
        };
        mutations.changeTodoState(state2, { target: "c", status: true });
        expect(state2).toEqual(expectedState2);
      });
    });
  });
});
