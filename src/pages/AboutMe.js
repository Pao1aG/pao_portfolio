import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "../styles/About.css"


const useStyles = makeStyles((theme) => ({
    profile: {
        height: "500px",
    },

}));

export default function AboutMe() {
    const classes = useStyles();

    return (
        <Container>
        <div className="flexDiv">
            <div className="aboutPic">
                <img src="/images/profile-pic.jpg" className={classes.profile} alt=""/>
            </div>
            <div className="aboutDesc">
                <p>Welcome to my Portfolio! My name is Paola Gonzalez and I am currently a student of the Trilogy Coding Bootcamp through the University of Arizona (UArizona).</p>
                <p>Before I took the step to delve into the exciting world of coding, I studied public health at UArizona earning both a Bachelor of Science and a Masters degree. </p>
                <p> Throughout my career, I have served my community through projects that utilized my skills in organization and creativity. When I worked as a Community Nutrition Educator, I designed educational materials to teach over Zoom and co-directed, filmed, and edited videos for our participants. I have also managed and maintained the social media and outreach materials of different organizations. </p>
                <p>All roads have lead me here... The time spent researching, designing, and collaborating with people of many different backgrounds has inspired me to take on coding projects such as the ones you will see here.</p>
                <p>I will keep this page updated with new projects. Do visit again soon!</p>
            </div>
        </div>
        </Container>
    )
}