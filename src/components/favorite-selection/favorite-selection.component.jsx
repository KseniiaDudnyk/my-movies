import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";

import "./favorite-selection.styles.scss";

import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton, Tooltip } from "@material-ui/core";
import { toggleFavorite } from "../../redux/review-inputs/review-inputs.actions";

const FavoriteSelection = ({ toggleFavorite, movieId, isFavorite, title }) => {
  const [actionMsg, setActionMsg] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (isFavorite) {
      setActionMsg("remove from fav");
    } else {
      setActionMsg("add to fav");
    }
  }, [isFavorite]);

  const handleClick = () => {
    enqueueSnackbar(`${title} is successfully ${actionMsg}`);

    toggleFavorite(movieId);
  };

  return (
    <div>
      <Tooltip title={actionMsg} id="tooltip">
        <IconButton onClick={handleClick} id="favorite-icon">
          <FavoriteIcon color={isFavorite ? 'secondary' : "inherit"} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (movieId) => dispatch(toggleFavorite(movieId)),
});

export default connect(null, mapDispatchToProps)(FavoriteSelection);
