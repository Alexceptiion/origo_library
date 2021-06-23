import React from "react";
import Navigation from "../components/Navigation";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function Games() {
  return (
    <div>
      <Navigation />
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Une image"
            height="540"
            image="/assets/Cyber.jpg"
          />
        </CardActionArea>
        <CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Critiques
            </Button>
            <Button size="small" color="primary">
              Aperçu
            </Button>
            <Button size="small" color="primary">
              Videos
            </Button>
            <Button size="small" color="primary">
              Photos
            </Button>
          </CardActions>
        </CardContent>

        <cardContent>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Une image"
              height="540"
              image="/assets/devil.jpg"
            />
            <Typography variant="body2" color="textSecondary" component="p">
              Jeux 1 Devil
            </Typography>
          </CardActionArea>
        </cardContent>

        <cardContent>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Une image"
              height="540"
              image="/assets/valorant3.jpg"
            />
            <Typography variant="body2" color="textSecondary" component="p">
              Jeux 2 Valorant
            </Typography>
          </CardActionArea>
        </cardContent>

        <cardContent>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Une image"
              height="540"
              image="/assets/residentvillage.jpg"
            />
            <Typography variant="body2" color="textSecondary" component="p">
              Jeux 3 Resident Village
            </Typography>
          </CardActionArea>
        </cardContent>
      </Card>
    </div>
  );
}
