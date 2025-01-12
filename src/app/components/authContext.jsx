// "use client";

// import { getSession } from "@/lib";
// import { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext({});

// export const AuthProvider = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadUser = async () => {
//       try {
//         const session = await getSession();
//         setUser(session?.name || null);
//       } catch (error) {
//         console.error("Error loading session:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadUser();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
