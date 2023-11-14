
// import { Grid } from '@mui/material';

// //components
// import Banner from '../banner/Banner';
// import Categories from './Categories';
// import Posts from './post/Posts';

// const Home = () => {

//     return (
//         <>
//             <Banner />
//             <Grid container>
//                 <Grid item lg={2} xs={12} sm={2}>
//                     <Categories />
//                 </Grid>
//                 <Grid container item xs={12} sm={10} lg={10}>
//                     <Posts />
//                 </Grid>
//             </Grid>
//         </>
//     )
// }

// export default Home;

import { Grid } from '@mui/material';

//components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

const Home = () => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;
