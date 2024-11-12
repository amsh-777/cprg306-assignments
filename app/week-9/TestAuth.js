// week-9/TestAuth.js
import { useUserAuth } from "./_utils/auth-context";

const TestAuth = () => {
  const { user } = useUserAuth();

  return (
    <div>
      {user ? <p>User is logged in: {user.displayName}</p> : <p>No user logged in</p>}
    </div>
  );
};

export default TestAuth;
