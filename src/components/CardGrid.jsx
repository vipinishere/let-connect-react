import React from "react";
import PersonalCard from "./PersonalCard";
import personalDetails from "../personalInfo.js";

export default function CardGrid() {
    return(
        <div className="container text-center">
            <div className="row">
                {
                    personalDetails.map((personalDetail) => (
                        <PersonalCard
                        key={personalDetail.id}
                        name={personalDetail.name} 
                        img={personalDetail.img}
                        githubLink={personalDetail.githubLink}
                        instaLink={personalDetail.instaLink}
                        linkedinLink={personalDetail.linkedinLink}
                        twitterLink={personalDetail.twitterLink}
                        />
                    ))
                }
            </div>
      </div>
    );
}