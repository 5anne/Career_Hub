import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import Featuredjobs from "../FeaturedJobs/Featuredjobs";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career hub | Home</title>
            </Helmet>
            <h1>Home</h1>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <Featuredjobs></Featuredjobs>
        </div>
    );
};

export default Home;