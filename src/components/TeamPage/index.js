import React from 'react';
import Box from '@material-ui/core/Box';
import Header from 'src/components/Header';
import ContactPage from 'src/components/ContactPage';
import Lambert from 'src/assets/img/team-id/lambert.jpg';
import Geoffrey from 'src/assets/img/team-id/goeffrey.jpg';
import Francois from 'src/assets/img/team-id/francois.jpg';
import Zachary from 'src/assets/img/team-id/zachary.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Grow from '@material-ui/core/Grow';

import './styles.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
    margin: '.5rem',
  },
  img: {},
});

const TeamPage = () => {
  const classes = useStyles();
  const annimation = true;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100vh"
      >
        <Header />
        <Box width="100%" display="flex" id="body">
          <Box
            bgcolor="#C6C6C6"
            height="100%"
            width="100%"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="main-box"
          >
            <h1 className="main-box__main-title">
              Qui se cache derrière O'Medocs ?
            </h1>
            <Box display="flex" flexWrap="wrap" p={4} justifyContent="center">
              <Grow
                in={annimation}
                style={{ transformOrigin: '0 0 0' }}
                {...(annimation ? { timeout: 1000 } : {})}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="img-product-owner"
                      height="300"
                      image={Lambert}
                      title="lambert-img"
                      classname={classes.img}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h5"
                        align="center"
                      >
                        Lambert
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                      >
                        Product Owner
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<LinkedInIcon />}
                    >
                      LinkeDin
                    </Button>
                  </CardActions>
                </Card>
              </Grow>
              <Grow
                in={annimation}
                style={{ transformOrigin: '0 0 0' }}
                {...(annimation ? { timeout: 1500 } : {})}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="img-lead-dev-front"
                      height="300"
                      image={Francois}
                      title="francois-img"
                      classname={classes.img}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h5"
                        align="center"
                      >
                        François
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                      >
                        Lead dev front
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<LinkedInIcon />}
                    >
                      LinkeDin
                    </Button>
                  </CardActions>
                </Card>
              </Grow>
              <Grow
                in={annimation}
                style={{ transformOrigin: '0 0 0' }}
                {...(annimation ? { timeout: 2000 } : {})}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="img-git-master"
                      height="300"
                      image={Geoffrey}
                      title="lambert-img"
                      classname={classes.img}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h5"
                        align="center"
                      >
                        Geoffrey
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                      >
                        Git Master
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<LinkedInIcon />}
                    >
                      LinkeDin
                    </Button>
                  </CardActions>
                </Card>
              </Grow>
              <Grow
                in={annimation}
                style={{ transformOrigin: '0 0 0' }}
                {...(annimation ? { timeout: 2500 } : {})}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="img-lead-dev-back"
                      height="300"
                      image={Zachary}
                      title="zachary-img"
                      classname={classes.img}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h5"
                        align="center"
                      >
                        Zachary
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                      >
                        Lead dev back
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<LinkedInIcon />}
                    >
                      LinkeDin
                    </Button>
                  </CardActions>
                </Card>
              </Grow>
              <Grow
                in={annimation}
                style={{ transformOrigin: '0 0 0' }}
                {...(annimation ? { timeout: 3000 } : {})}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="img-scrum-master"
                      height="300"
                      image={Lambert}
                      title="lambert-img"
                      classname={classes.img}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h5"
                        align="center"
                      >
                        Bahri
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                      >
                        Scrum Master
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<LinkedInIcon />}
                    >
                      LinkeDin
                    </Button>
                  </CardActions>
                </Card>
              </Grow>
            </Box>
            <h1 className="main-box__main-title">Nous Contacter</h1>
            <Box display="flex" flexDirection="column">
              <ContactPage />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TeamPage;
