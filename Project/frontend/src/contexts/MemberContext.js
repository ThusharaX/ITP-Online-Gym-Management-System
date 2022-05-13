import { createContext } from "react";

const MemberContext = createContext();

export function MemberProvider({ children }) {
	return <MemberContext.Provider value={{}}>{children}</MemberContext.Provider>;
}

export default MemberContext;
