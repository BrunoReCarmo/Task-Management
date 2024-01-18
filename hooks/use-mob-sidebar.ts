import { create } from "zustand";

type MobileSidebarStore = {
    isExpand: boolean;
    onExpand: () => void;
    onClose: () => void;
};

export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
    isExpand: false,
    onExpand:() =>  set({ isExpand: true }),
    onClose:() =>  set({ isExpand: false }),
}));