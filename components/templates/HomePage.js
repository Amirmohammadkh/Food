import styles from "./HomePage.module.css"
import Banner from "@/components/modules/Banner";
import Attributes from "@/components/modules/Attributes";
import Definition from "@/components/modules/Definition";
import Companies from "@/components/modules/Companies";
import Instruction from "@/components/modules/Instruction";
import Guide from "@/components/modules/Guide";
import Restriction from "@/components/modules/Restrictions";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Banner/>
            <Attributes/>
            <Definition/>
            <Companies/>
            <Instruction/>
            <Guide/>
            <Restriction/>
        </div>
    );
};

export default HomePage;