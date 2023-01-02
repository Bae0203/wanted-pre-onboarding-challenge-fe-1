import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const loginToken = atom<string>({
  key: "loginToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

const isLogIn = atom<boolean>({
  key: "isLogIn",
  default: false,
});
