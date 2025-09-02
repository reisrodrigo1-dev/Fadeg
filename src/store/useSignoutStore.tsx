import { signOut } from "next-auth/react";
import { create } from "zustand";

type LougoutStore = {
  handleSignOut: () => void;
};

const useSignoutStore = create<LougoutStore>(() => ({
  handleSignOut: () => {
    signOut();
    localStorage.removeItem("apiResponseData");
  },
}));

export default useSignoutStore;
