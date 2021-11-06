import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { images } from "./styled";
import { useStyles } from "./styled";
import { Link } from "react-router-dom";

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Link
              to={image.path}
              style={{
                color: "inherit",
                border: "inherit",
                textDecoration: "none",
              }}
            >
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </Link>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
