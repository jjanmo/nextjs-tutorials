const API_KEY = process.env.API_KEY;

module.exports = {
  images: {
    domains: ['image.tmdb.org'],
  },
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
  basePath: '',
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
