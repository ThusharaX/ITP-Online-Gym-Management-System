import { createContext } from "react";

const AdminContext = createContext();

export function AdminProvider({ children }) {
	return <AdminContext.Provider value={{}}>{children}</AdminContext.Provider>;
}

export default AdminContext;
