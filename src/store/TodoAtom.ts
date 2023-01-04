import { atom } from "recoil";

const todoList = atom<any[]>({
  key: "todo",
  default: [],
});

export { todoList };
