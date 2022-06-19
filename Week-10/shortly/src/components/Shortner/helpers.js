export const getShortenResponse = async (url) => {
  const URL = `https://api.shrtco.de/v2/shorten?url=${url}`;
  try {
    let response = await fetch(URL);
    response = await response.json();
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
