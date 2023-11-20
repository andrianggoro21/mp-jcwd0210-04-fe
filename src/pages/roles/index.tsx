// // UserRoleContext.tsx
// import React, { createContext, useContext, useState } from 'react';

// interface UserRoleContextType {
//   userRole: string | null;
//   setRole: (role: string) => void;
// }

// const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

// interface UserProviderProps {
//   children: React.ReactNode;
// }

// export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
//   const [userRole, setUserRole] = useState<string | null>(null);

//   const setRole = (role: string) => {
//     setUserRole(role);
//   };

//   return (
//     <UserRoleContext.Provider value={{ userRole, setRole }}>
//       {children}
//     </UserRoleContext.Provider>
//   );
// };

// export const useUserRole = (): UserRoleContextType => {
//   const context = useContext(UserRoleContext);
//   if (!context) {
//     throw new Error('useUserRole must be used within a UserProvider');
//   }
//   return context;
// };

// UserRoleContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';


interface UserRoleContextType {
  userRole: string | null;
  setRole: (role: string) => void;
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userRole, setUserRole] = useState<string | null>(() => {
    // Initialize with the role from localStorage, if available
    return localStorage.getItem('userRole') || null;
  });

  const setRole = (role: string) => {
    setUserRole(role);
  };

  // Update localStorage whenever the userRole changes
  useEffect(() => {
    localStorage.setItem('userRole', userRole || '');
  }, [userRole]);

  return (
    <UserRoleContext.Provider value={{ userRole, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export const useUserRole = (): UserRoleContextType => {
  const context = useContext(UserRoleContext);
  if (!context) {
    throw new Error('useUserRole must be used within a UserProvider');
  }
  return context;
};

export const useLogout = () => {
  const { setRole } = useUserRole();

  const logout = () => {
    // Use non-null assertion (!) when assigning null
    setRole(null!);
    // Additional cleanup, if needed (e.g., clearing other user-related data from localStorage)
    localStorage.removeItem('userRole');
  };

  return logout;
};

