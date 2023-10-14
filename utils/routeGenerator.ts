export const generateLink = (
  link: string,
  returnTo: string,
  id: string,
  mode: string,
  escapeReturnTo?: boolean,
): string => {
  let newLink = link;
  const query: any = {};

  // if(returnTo)
  if (!escapeReturnTo && (returnTo?.length as number) > 0 && mode == "edit") {
    return returnTo + `?mode=edit&id=${id}`;
  } else if (!escapeReturnTo && (returnTo?.length as number) > 0)
    return returnTo as string;
  else if (mode == "edit" && (id?.length as number) > 0) {
    return link + `?mode=edit&id=${id}`;
  } else {
    return link;
  }
};
