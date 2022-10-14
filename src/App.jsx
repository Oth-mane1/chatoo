import { showLoader, hideLoader } from "./components/utils/Loader";
import Auth from "./components/auth/Auth";
import Ochat from "./components/app/ChatApp";
import { IsUserAuthentified } from "./components/auth/Authenticator";
import { useEffect } from "react";

function App() {
  const [userAuthentified, loading, err] = IsUserAuthentified()

  useEffect(() => {
    !loading && hideLoader()
  })

  return (
    <div className="App">
      {userAuthentified ? <Ochat loading={loading} /> : <Auth loading={loading} />}
    </div>
  );
}

export default App;
