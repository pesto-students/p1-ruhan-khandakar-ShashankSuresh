export const isUrlValid = (url) => {
  var res = url.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
  );
  return res != null;
};

export const getShortenResponse = async (url) => {
  const URL = `https://api.shrtco.de/v2/shorten?url=${url}`;
  try {
    let response = await fetch(URL);
    response = await response.json();
    if (!response.ok) {
      throw Error(response.error);
    }
    const { result } = response;

    return {
      url: result.full_short_link,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
