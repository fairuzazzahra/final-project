import React from "react";
import { DefaultLayout } from "../layouts";
import { AspectRatio } from "@chakra-ui/react";

function VideoDetail() {
  return (
    <DefaultLayout>
      <div>
        <AspectRatio maxW="700px">
          <iframe
            title="exo"
            src="https://www.youtube.com/embed/r2VZQa2IgP4"
            allowFullScreen
          />
        </AspectRatio>
      </div>
    </DefaultLayout>
  );
}

export default VideoDetail;
