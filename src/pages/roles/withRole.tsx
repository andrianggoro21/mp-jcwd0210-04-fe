// import React, { ReactNode, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useUserRole } from '.';

// interface WithRoleProps {
//   allowedRoles: string[];
//   children: ReactNode;
// }

// const WithRole: React.FC<WithRoleProps> = ({ allowedRoles, children }) => {
//   const { userRole } = useUserRole();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (userRole === null || !allowedRoles.includes(userRole)) {
//       // Redirect to login or unauthorized page
//       navigate('/login');
//     }
//   }, [allowedRoles, userRole, navigate]);

//   return <>{children}</>;
// };

// export default WithRole;