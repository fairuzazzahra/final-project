import React, { useEffect } from "react";
import { useHistory, useLocation, NavLink } from "react-router-dom";
import { DefaultLayout } from "../layouts";
import { AspectRatio } from "@chakra-ui/react";

function HomePage() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log(history);
    console.log(location);
  }, []);

  return (
    <DefaultLayout>
      <AspectRatio maxW="700px">
        <iframe
          title="exo"
          src="https://www.youtube.com/embed/r2VZQa2IgP4"
          allowFullScreen
        />
      </AspectRatio>
      {/* <div>HomePage</div>
      <NavLink to="/about">
        <button onClick={() => console.log("go to about")}>Video Detail</button>
      </NavLink> */}
    </DefaultLayout>
  );
}

export default HomePage;
