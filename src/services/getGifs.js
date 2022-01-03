const API_KEY = "KcwROHbLG7jRYCCttlbEWdvreDqYc148";

export default function getGifs({ keyword = "rick" } = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, id, title } = image;
          const { url } = images.downsized_medium;

          return { title, id, url };
        });
        return gifs;
      }
    });
}
