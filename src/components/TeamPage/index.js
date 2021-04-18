import React from 'react';
import Box from '@material-ui/core/Box';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import ContactPage from 'src/components/ContactPage';
import LeftMenu from 'src/components/LeftMenu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Lambert from '../../assets/Lambert.jpg';

import './styles.scss';

const TeamPage = () => (
  <>
    <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
      <Header />
      <Box height="100%" width="100%" display="flex" id="body">
        <LeftMenu />
        <Box
          bgcolor="#C6C6C6"
          height="100%"
          width="100%"
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box display="flex">
            <div className="err" />
            <div>
              <i className="far fa-question-circle fa-spin" />
            </div>
            <div className="err2" />
          </Box>
          <h1>Nous contacter</h1>
          <div className="cardmedia">
            <div className="lambert">
              <Card>
                <CardActionArea>
                  <CardMedia
                    background-size="30px"
                    component="img"
                    alt="Lambert"
                    src={Lambert}
                    title="Lambert"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lambert
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Scrum Master
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="geoffrey">
              <Card>
                <CardActionArea>
                  <CardMedia
                    background-size="30px"
                    component="img"
                    alt="Geoffrey"
                    src={Lambert}
                    title="Geoffrey"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Geoffrey
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Git Master
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="françois">
              <Card>
                <CardActionArea>
                  <CardMedia
                    background-size="30px"
                    component="img"
                    alt="François"
                    src={Lambert}
                    title="François"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      François
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lead Dev Front
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
          <div className="cardmedia2">
            <div className="bahri">
              <Card>
                <CardActionArea>
                  <CardMedia
                    background-size="30px"
                    component="img"
                    alt="Bahri"
                    src={Lambert}
                    title="Bahri"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Bahri
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Scrum Master
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="zachary">
              <Card>
                <CardActionArea>
                  <CardMedia
                    background-size="30px"
                    component="img"
                    alt="Zachary"
                    src={Lambert}
                    title="Zachary"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Zachary
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lead Dev Back
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </Box>
      </Box>
      <ContactPage />
      <Footer />
    </Box>
  </>
);

export default TeamPage;
