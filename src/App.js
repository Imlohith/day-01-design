import './App.css';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { Container, Row, Col } from 'reactstrap'
import { useStyles } from './AppStyle';
import Avatar from '@material-ui/core/Avatar';

import design1 from './assets/design-01.jpg';
import design2 from './assets/design-02.jpg';
import design3 from './assets/design-03.jpg';
import profile from './assets/profile.png';

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container>
        <Row>
           <Col xs="6">
               <div className={classes.profile}>
                  <Row>
                     <Col>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <div style={{ display: 'flex' }}>
                             <div>
                               <Avatar style={{  marginRight: 10 }} alt="Remy Sharp" src={profile} />
                             </div>
                             <div>
                               <Typography variant="h5" style={{ fontFamily: 'Oswald' }}>Lohith kumar - CJ</Typography>
                               <Typography variant="span">Full stack web developer</Typography>
                             </div>
                            </div> 
                           <div>
                             <Button variant="contained" color="primary">follow +</Button>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </div>
           </Col>
        </Row>
        <Row>
          <Col>
            <div className={classes.box}>
                   <Typography variant="h6" style={{ fontFamily: 'Oswald' }}>Design work</Typography>
                   <div style={{ marginTop: 10 }}>
                      <Chip label="Basic" />
                      <Chip label="Basic" />
                      <Chip label="Disabled" disabled />
                   </div>
                   <div className="mt-2">
                      <Chip avatar={<Avatar>M</Avatar>} label="Clickable"  />
                      <Chip avatar={<Avatar>M</Avatar>} label="Clickable"  />
                   </div>
              </div>
              <div className={classes.box}>
                   <div style={{ display: 'flex' }}>
                   <Typography  variant="h6" style={{ marginRight: 6, color: '#fff', backgroundColor: '#4C84FF', width: 40, textAlign: 'center', borderRadius: 20 }}>12</Typography>
                   <Typography variant="h6" style={{ fontFamily: 'Oswald' }}>Interactive</Typography>
                   </div>
                   <div>
                       <Row className="mt-3">
                           <Col>
                              <img src={design1} style={{ width: 320 }} />
                           </Col>
                           <Col className="mt-2">
                              <img src={design2} style={{ width: 320 }} />
                           </Col>
                       </Row>
                   </div>
              </div>
           </Col>
          <Col>
           <div className={classes.box}>
                  <div style={{ display: 'flex' }}>
                   <Typography  variant="h6" style={{ marginRight: 6, color: '#fff', backgroundColor: '#4C84FF', width: 40, textAlign: 'center', borderRadius: 20 }}>5</Typography>
                   <Typography variant="h6" style={{ fontFamily: 'Oswald' }}>Web</Typography>
                   </div>
                  <div>
                       <Row className="mt-3">
                           <Col >
                              <img src={design3} style={{ width: 320 }} />
                           </Col>
                           <Col className="mt-2">
                              <img src={design1} style={{ width: 320 }} />
                           </Col>
                       </Row>
                   </div>
            </div>
          </Col>
          <Col>
             <div className={classes.box}>
                  <div style={{ display: 'flex' }}>
                   <Typography  variant="h6" style={{ marginRight: 6, color: '#fff', backgroundColor: '#4C84FF', width: 40, textAlign: 'center', borderRadius: 20 }}>6</Typography>
                   <Typography variant="h6" style={{ fontFamily: 'Oswald' }}>Font</Typography>
                   </div>
                  <div>
                       <Row className="mt-3">
                           <Col >
                              <img src={design1} style={{ width: 280 }} />
                           </Col>
                       </Row>
                   </div>
            </div>
            <div className={classes.box}>
               <div style={{ display: 'flex' }}>
                   <Typography  variant="h6" style={{ marginRight: 6, color: '#fff', backgroundColor: '#4C84FF', width: 40, textAlign: 'center', borderRadius: 20 }}>6</Typography>
                   <Typography variant="h6" style={{ fontFamily: 'Oswald' }}>CAD</Typography>
                </div>
             </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
