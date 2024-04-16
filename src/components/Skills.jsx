import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import '../css/Skills.css';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Skills = () => {

    return <div className='parent1'>
        <div className='expand-skills mb-4'>
            <h1><span className='blur-languages'>LANGUAGES</span></h1>
                <div className='flexed'>
            <Card className='cards blur-languages'  sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/html.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">HTML</Typography>
                </CardContent>
            </Card>
            <Card className='cards blur-languages' sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/css.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">CSS</Typography>
                </CardContent>
            </Card>
            <Card className='cards blur-languages' sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/javascript.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">JS</Typography>
                </CardContent>
            </Card>
            <Card className='cards blur-languages' sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/python.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">PYTHON</Typography>
                </CardContent>
            </Card>
            <Card className='cards blur-languages' sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/c.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">C#</Typography>
                </CardContent>
            </Card>
            </div>
        </div>



        <div className='expand-skills mb-4'>
            <h1><span className=' blur-libraries'>LIBRARIES AND FRAMEWORKS</span></h1>
                <div className='flexed'>
            <Card className='cards blur-libraries'  sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/react.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">REACT</Typography>
                </CardContent>
            </Card>
            <Card className='cards blur-libraries' sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/net.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">.NET</Typography>
                </CardContent>
            </Card>
            <Card className='cards blur-libraries' sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/express.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">EXPRESS</Typography>
                </CardContent>
            </Card>
            <Card className='cards blur-libraries' sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/flask.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">FLASK</Typography>
                </CardContent>
            </Card>
            <Card className='cards blur-libraries' sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/node.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">NODE</Typography>
                </CardContent>
            </Card>
            <Card className='cards bootstap blur-libraries' sx={{ maxWidth: 150 }}>
                <CardMedia className="bootstap" component="img" height="110"  image="/images/languages/bootstrap.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">BOOTSTRAP</Typography>
                </CardContent>
            </Card>
            <Card className='cards blur-libraries' sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/materialui.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">MATERIAL UI</Typography>
                </CardContent>
            </Card>
            </div>
        </div>


        <div className='expand-skills mb-4'>
                <div className='flexed'>
                <Card className='cards blur-libraries' sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/jinja.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">JINJA</Typography>
                </CardContent>
            </Card>
                <Card className='cards blur-libraries' sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/pandas.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">PANDAS</Typography>
                </CardContent>
            </Card>
            <Card className='cards blur-libraries' sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/numpy.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">NUMPY</Typography>
                </CardContent>
            </Card>

            </div>
        </div>



        <div className='expand-skills mb-4'>
            <h1><span className=' blur-libraries'>DATABASES</span></h1>
                <div className='flexed'>
            <Card className='cards blur-libraries'  sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/sql.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">MYSQL</Typography>
                </CardContent>
            </Card>
            <Card className='cards blur-libraries' sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/mongo.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">MONGO</Typography>
                </CardContent>
            </Card>
            </div>
        </div>


        <div className='expand-skills'>
            <h1><span className='blur blur-libraries'>CLOUD / VERSION CONTROL</span></h1>
                <div className='flexed'>
            <Card className='cards blur-libraries'  sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/aws.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">AWS</Typography>
                </CardContent>
            </Card>
            <Card className='cards blur-libraries'  sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/git.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">GIT</Typography>
                </CardContent>
            </Card>
            <Card className='cards blur-libraries'  sx={{ maxWidth: 150 }}>
                <CardMedia component="img" height="110" image="/images/languages/github.png" lt="green iguana"/>
                <CardContent>
                    <Typography className='cardsText' variant="h6" component="div">GITHUB</Typography>
                </CardContent>
            </Card>
            </div>
            
        </div>



    </div>


}
export default Skills
