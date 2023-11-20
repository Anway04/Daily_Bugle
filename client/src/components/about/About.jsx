
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Citizen Journalism MERN Full Stack Project</Typography>
                <Text variant="h5">Btech VIT VELLORE.<br />
                     ETHNUS MERN FULL STACK INTERNSHIP
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Mritunjay-ranjan" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                Team -536
Project-41 <br />
Team Members: Vishwajeet Pratap Patil,
Anway Sameer Nagarkar,
Punya Kakkar,
Ranjan Kumar Mritunjay Ravi,
Vivek Karmakar.                    
                       
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;
