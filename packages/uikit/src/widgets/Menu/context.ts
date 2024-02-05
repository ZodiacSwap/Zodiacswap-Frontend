import { createContext, ElementType } from "react";

interface MenuContextType {
  linkComponent: ElementType;
}

export const MenuContext = createContext<MenuContextType>({
  linkComponent: "a",
});
