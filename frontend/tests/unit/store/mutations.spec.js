import mutations from "@/store/mutations";

describe("store", () => {
  describe("mutations", () => {
    describe("addTodo", () => {
      test("addTodoは未完状態のTODOを追加する", () => {
        const state = {
          tasks: [
            { name: "a", status: "done" },
            { name: "b", status: "todo" }
          ]
        };
        const expectedState = {
          tasks: [
            { name: "a", status: "done" },
            { name: "b", status: "todo" },
            { name: "c", status: "todo" }
          ]
        };
        mutations.addTodo(state, "c");
        expect(state).toEqual(expectedState);
      });
    });

    describe("deleteTodo", () => {
      test("deleteTodoは指定されたTODOの同じ名前のTODOをstateから削除する", () => {
        const state = {
          tasks: [
            { name: "a", status: "done" },
            { name: "b", status: "todo" }
          ]
        };
        const expectedState = {
          tasks: [{ name: "a", status: "done" }]
        };
        mutations.deleteTodo(state, { name: "b", status: "todo" });
        expect(state).toEqual(expectedState);
      });
    });

    describe("cleanTodo", () => {
      test("cleanTodoはstatusがdoneのTODOをstateから削除する", () => {
        const state = {
          tasks: [
            { name: "a", status: "done" },
            { name: "b", status: "doing" }
          ]
        };
        const expectedState = {
          tasks: [{ name: "b", status: "doing" }]
        };
        mutations.cleanTodo(state);
        expect(state).toEqual(expectedState);
      });
    });

    describe("changetaskstate", () => {
      test("changetaskstateはTODOの状態を指定したものに変える", () => {
        const state = {
          tasks: [
            { name: "a", status: "done" },
            { name: "b", status: "todo" }
          ]
        };
        const expectedState = {
          tasks: [
            { name: "a", status: "done" },
            { name: "b", status: "doing" }
          ]
        };
        mutations.changetaskstate(state, { target: "b", status: "doing" });
        expect(state).toEqual(expectedState);
      });
      test("changetaskstateはTODOの状態を指定したものに変える 対象がなかったらなにもしない", () => {
        const state2 = {
          tasks: [
            { name: "a", status: "done" },
            { name: "b", status: "doing" }
          ]
        };
        const expectedState2 = {
          tasks: [
            { name: "a", status: "done" },
            { name: "b", status: "doing" }
          ]
        };
        mutations.changetaskstate(state2, { target: "c", status: "done" });
        expect(state2).toEqual(expectedState2);
      });
    });
  });
});
