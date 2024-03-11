import React, { useState } from "react";

function Conditionloop() {
  const [loggedIn] = useState(1); // Removed setloggedIn since it's not used

  return (
    <div>
      {loggedIn === 1 ? <h1>first</h1> : loggedIn === 2 ? <h2>second</h2> : <h3>third</h3>}
    </div>
  );
}

export default Conditionloop;
