import { Box } from '@mui/material';
import React from 'react';
import Herobanner from '../Herobanner'
import Cartview from '../MainPage/Cartview'
import LifeStyle from './LifeStyle'
import AboutMe from './AboutMe'



const index = () => {
    return (
        <Box >
            
         <Herobanner/> 
         <Cartview/>
         <LifeStyle/>
       <AboutMe/>
        </Box>
    );
};

export default index;