import { Box } from '@mui/material';
import React from 'react';
import Herobanner from '../Herobanner'
import Cartview from '../MainPage/Cartview'
import LifeStyle from './LifeStyle'
import AboutMe from './AboutMe'
import BlogSection from './BlogSection'



const index = () => {
    return (
        <Box  >
            
         <Herobanner/> 
         <Cartview/>
         <LifeStyle/>
       <AboutMe/>
       <BlogSection/>
        </Box>
    );
};

export default index;