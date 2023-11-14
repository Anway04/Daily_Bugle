import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://i.ibb.co/SKndWLG/DALL-E-2023-11-09-04-16-21-A-lively-Indian-city-street-scene-bustling-with-the-activities-of-citizen.png) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 80px;
  color: #FFFFFF;
  line-height: 1;
  background: #04BADE;
  border-radius: 10px;
  font-weight: bold; 
  font-family: 'Lucida Handwriting', Cursive; 
  text-shadow: 10px 10px 8px #0492C2; 
  letter-spacing: 0.05em; 
`;

const SubHeading = styled(Typography)`
color: #0492C2;
font-size: 30px;
font-weight: bold;
background: #FFFFFF;
border-radius: 10px;
// text-shadow: 5px 5px 10px #82EEFD; /* Thicker shadow with increased blur radius */

`;

const Banner = () => {
    
    return (
        <Image>
            <Heading style={{ paddingLeft: '20px', paddingRight: '20px', marginBottom: '30px' }}>THE DAILY BUGLE</Heading>
             <SubHeading style={{ paddingLeft: '20px', paddingRight: '20px' }}>Echoing City Chronicles</SubHeading>
        </Image>
    )
}

export default Banner;

