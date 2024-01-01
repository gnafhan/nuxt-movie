export default defineEventHandler(async (event) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzMwOWUzMDM3YzcyNGNmZWQ2ZGUxOWE0YmM5ODk1ZCIsInN1YiI6IjY1OTFjZGEwYTU4OTAyNzExOTk2NmY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pFgcknAE5s8GLonhg934DVkP8-RoJ0NmW8LkgeUpqW0'
      }
    };
  
    const response = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options);
    const data = await response.json();
  
    return data;
  })
  