import AllWorks from "../components/AllWorks";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import WorkHero from "../components/WorkHero";

const Work = () => {
    return (
        <div className="">
            <WorkHero />
            <div className="container mx-auto">
                <AllWorks />
                <Contact />
                <Faq />
            </div>
        </div>
    );
};

export default Work;
