import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { UserContext } from '../../contexts/userContext';
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const { isAuthenticated  } = useContext(UserContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    if ( isAuthenticated ) {
      context.addToFavourites(movie);
    }
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;
