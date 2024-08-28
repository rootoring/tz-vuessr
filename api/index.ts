export default () => ({
  async fetchQuery(q: string) {
    try {
      const data = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${q}&format=json`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  },
});
