import React from "react";
import "./works.css";
import goodfriends from "../images/goodfriends.jpg";
import grave from "../images/grave.jpg";
import aswelay from "../images/aswelay.jpg";
import oneheart from "../images/oneheart.jpg";
import goaldigger from "../images/goaldigger.jpg";
import threeshots from "../images/threeshots.jpg";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Music</h2>
      <span className="worksDesc">
        Welcome to the sonic realm of{" "}
        <span className="introName">
          <span>Kiki</span>
        </span>
        , where music transcends boundaries and emotions find their melody. — a
        diverse collection of soulful melodies, powerful lyrics, and innovative
        compositions that paint a vibrant picture of artistic expression.
        Explore the melodies that define moments and narratives that resonate,
        as Kiki invites you on a captivating auditory experience through this
        portfolio.
      </span>
      <div className="worksImgs">
        <a href="https://music.apple.com/us/album/good-friends-single/1552929337">
          <img src={goodfriends} alt="" className="worksImg" />
        </a>
        <a href="https://music.apple.com/us/album/grave-single/1509413037">
          <img src={grave} alt="" className="worksImg" />
        </a>
        <a href="https://open.spotify.com/album/4x2FrVcLXptxSMb8tEtZMv?si=jamktjeCQP2O56UPgxrQ3A">
          <img src={aswelay} alt="" className="worksImg" />
        </a>
        <a href="https://music.apple.com/us/album/one-heart/1671896308">
          <img src={oneheart} alt="" className="worksImg" />
        </a>
        <a href="https://open.spotify.com/album/1ypCJdz6cOEtXuMnCATIgH?si=kGWec0RNR1us3yxah5Gvpg">
          <img src={goaldigger} alt="" className="worksImg" />
        </a>
        <a href="https://open.spotify.com/album/19UQkovdPfdIpSE5XyAHg0?si=idE-DV8cQrWeREWii1XWBA">
          <img src={threeshots} alt="" className="worksImg" />
        </a>
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;
