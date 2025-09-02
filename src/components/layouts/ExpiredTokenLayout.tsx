import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { signOut, useSession } from "next-auth/react";

const ExpiredTokenLayout = ({ children }) => {
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      const token = jwtDecode(session?.user?.Token);
      const date = Number(Date.now() / 1000);
      if (token.exp < date) {
        alert("Login expirado, entre em sua conta novamente");
        signOut();
      }
    }
  }, [session]);
  return <>{children}</>;
};

export default ExpiredTokenLayout;
