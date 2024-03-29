const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

module.exports = {
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '',
  //       destination: '',
  //       permanent: false,
  //     },
  //   ];
  // },
  async rewrites() {
    return [
      {
        source: '/api/movies/popular/:page',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=:page`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
