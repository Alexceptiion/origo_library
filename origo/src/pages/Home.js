import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Navigation from "../components/Navigation";
import Button from "@material-ui/core/Button";
import SocialNetwork from "../components/SocialNetwork";






export default function Home() {
  return (
    <div>
      <Navigation />
    
      <Card className="example-card">
        <CardContent>
          <CardActions className="test">
            <img
              className="utilisateur"
              src="https://material.angular.io/assets/img/examples/shiba2.jpg"
              alt="image1"
            />
            <span>
              <a href="#nomDeUser">OussamaLeBest</a>
            </span>
            <div>
              <Button size="small" color="primary">
                J'aime
              </Button>
              <Button size="small" color="primary">
                Commenter
              </Button>
            </div>
          </CardActions>
        </CardContent>
      </Card>{" "}
      <br />
      <Card className="example-card">
        <CardContent>
          <CardActions>
            <img
              className="utilisateur"
              src="https://material.angular.io/assets/img/examples/shiba2.jpg"
              alt="image1"
            />
            <span>
              <a href="#nomDeUser">FilipeLeBest</a>
            </span>
            <div>
              <Button size="small" color="primary">
                J'aime
              </Button>
              <Button size="small" color="primary">
                Commenter
              </Button>
            </div>
          </CardActions>
        </CardContent>
      </Card>{" "}
      <br />
      <Card className="example-card">
        <CardContent>
          <CardActions>
            <img
              className="utilisateur"
              src="https://material.angular.io/assets/img/examples/shiba2.jpg"
              alt="image1"
            />
            <span>
              <a href="#nomDeUser">LoicRouleEnLambo</a>
            </span>
            <div>
              <Button size="small" color="primary">
                J'aime
              </Button>
              <Button size="small" color="primary">
                Commenter
              </Button>
            </div>
          </CardActions>
        </CardContent>
      </Card>
      <br />
      <Card className="expample-card">
        <CardContent>
          <CardActions>
            <img
              className="utilisateur"
              src="https://material.angular.io/assets/img/examples/shiba2.jpg"
              alt="image1"
            />
            <span>
              <a href="#nomDeUser">Alex&OussamaLove</a>
            </span>
            <div>
              <Button size="small" color="primary">
                J'aime
              </Button>
              <Button size="small" color="primary">
                Commenter
              </Button>
            </div>
          </CardActions>
        </CardContent>
      </Card>{" "}
      <br />
      <Card>
        <CardContent>
          <CardActions>
            <img
              className="utilisateur"
              src="https://material.angular.io/assets/img/examples/shiba2.jpg"
              alt="image1"
            />
            <span>
              <a href="#nomDeUser">FabienLeCondé</a>
            </span>
            <div>
              <Button size="small" color="primary">
                J'aime
              </Button>
              <Button size="small" color="primary">
                Commenter
              </Button>
            </div>
          </CardActions>
        </CardContent>
      </Card>{" "}
      <br />
      <SocialNetwork />
    </div>
  );
}
