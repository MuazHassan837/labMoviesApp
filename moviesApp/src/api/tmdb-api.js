export const getMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies?page=${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getUpComingMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/upcoming?page=${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/image/${id}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

export const getGenres = async () => {
  return fetch(
    "/api/genres"
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};  

export const getMovieReviews = (id) => {
  return fetch(
    `/api/reviews/${id}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json.results;
    });
};

export const signup = (email, password) => {
  return fetch('/api/accounts', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ email: email, password: password})
  }).then(res => res.json())
};

export const login = (email, password) => {
  return fetch('/api/accounts/security/token', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ email: email, password: password })
  }).then(res => res.json())
};

export const checkForId = (email) => {
  return fetch(
    `/api/accounts/email/${email}`
  )
    .then((res) => res.json())
};

export const addToFavouritesAPI = async (movieId, id) => {
  try {
    const response = await fetch(`/api/accounts/${id}/favourites`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ movieId: movieId })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const addToWatchlistAPI = async (movieId, id) => {
  try {
    const response = await fetch(`/api/accounts/${id}/watchlist`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ movieId: movieId })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const DeleteFromFavouritesAPI = async (movieId, id) => {
  try {
    const response = await fetch(`/api/accounts/${id}/favourites?movieId=${movieId}`, {
      method: 'delete'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const DeleteFromWatchlistAPI = async (movieId, id) => {
  try {
    const response = await fetch(`/api/accounts/${id}/watchlist?movieId=${movieId}`, {
      method: 'delete'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const GetFavouritesAPI = async (id, token) => {
  try {
    const response = await fetch(`/api/accounts/${id}/favourites`, {
      headers: {
        'token' : `${token}`
      },
      method: 'get'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const GetWatchlistAPI = async (id, token) => {
  try {
    const response = await fetch(`/api/accounts/${id}/watchlist`, {
      headers: {
        'token' : `${token}`
      },
      method: 'get'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

