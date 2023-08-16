import React from "react";

export default function PersonalCard(props) {
  return(
    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div className="card d-inline-block my-2" style={{width: "16rem"}}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <footer id="footer">
                <a href={props.githubLink}><i className="fa-brands fa-github"></i></a>
                <a href={props.instaLink}><i className="fa-brands fa-instagram"></i></a>
                <a href={props.linkedinLink}><i className="fa-brands fa-linkedin"></i></a>
                <a href={props.twitterLink}><i className="fa-brands fa-twitter"></i></a>
              </footer>
            </div>
          </div>
    </div>
  );
}