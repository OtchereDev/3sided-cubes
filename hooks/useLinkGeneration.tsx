import { useRouter } from "next/router";
import React from "react";

const useLinkGeneration = () => {
  const router = useRouter();
  const query = router.query;
  const returnTo = query?.returnTo as string;
  const mode = query?.mode as string;
  const id = query?.id as string;

  // instances:
  // routing with returnTo with edit mode
  // normal routing  with prev and next but has edit mode
  // routing with returnTo
  // normal routing of prev and next with no conditions

  const generateLink = (link: string) => {
    let newLink = link;
    if (returnTo?.length && mode == "edit") {
      newLink = returnTo + `?mode=edit&id=${id}`;
    } else if (!returnTo?.length && mode == "edit") {
      newLink = newLink + `?mode=edit&id=${id}`;
    } else if (returnTo?.length) {
      newLink = returnTo;
    }

    return newLink;
  };

  const generateEditLink = (link: string) => {
    let newLink = link + "?returnTo=/review";

    if (mode == "edit") {
      newLink = newLink + `&mode=edit&id=${id}`;
    }

    return newLink;
  };

  return { returnTo, mode, id, generateLink, generateEditLink };
};

export default useLinkGeneration;
