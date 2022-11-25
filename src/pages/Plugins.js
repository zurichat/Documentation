import React from "react";
import Layout from "@theme/Layout";
import styles from "../pages/plugins.module.css";
import BulbLogo from "@site/static/img/bulb.svg";
import DocLogo from "@site/static/img/doc.svg";
import ChannelsLogo from "@site/static/img/channels.svg";
import ChessLogo from "@site/static/img/chess.svg";
import MusicLogo from "@site/static/img/music.svg";
import TodoLogo from "@site/static/img/todo.svg";
import FilesLogo from "@site/static/img/files.svg";
import DmLogo from "@site/static/img/dm.svg";
import BlackboardLogo from "@site/static/img/blackboard.svg";
import NotifLogo from "@site/static/img/notif.svg";
import SalesLogo from "@site/static/img/sales.svg";
import PhotoLogo from "@site/static/img/photo.svg";
import ExpensesLogo from "@site/static/img/expenses.svg";
import CalenderLogo from "@site/static/img/calender.svg";

import Link from "@docusaurus/Link";

const recommmendedplugins = [
  {
    image: (
      <>
        <ChannelsLogo title="Docusaurus Logo" className="logo" />
      </>
    ),
    text: (
      <>
        {" "}
        Bring the right people <br />
        together in one space <br />
        organizing work around a <br />
        specific common goal. <br />
      </>
    ),
    title: "Channels",
    link: "/plugins/channels",
  },
  {
    image: (
      <>
        <TodoLogo />
      </>
    ),
    text: (
      <>
        {" "}
        Helps you stay organized and <br />
        work together in a single space <br />
      </>
    ),
    title: "Todo",
    link: "/plugins/todo",
  },
  {
    image: (
      <>
        <MusicLogo />
      </>
    ),
    text: (
      <>
        {" "}
        Bring your music organized <br />
        in a single space <br />
      </>
    ),
    title: "Music",
    link: "/plugins/music",
  },
  {
    image: (
      <>
        <FilesLogo />
      </>
    ),
    text: (
      <>
        {" "}
        Access your file in a single <br />
        space <br />
      </>
    ),
    title: "Files",
    link: "/category/file-plugin",
  },
  {
    image: (
      <>
        <ChessLogo />
      </>
    ),
    text: (
      <>
        {" "}
        Play chess with friends <br />
        and colleague in a single space <br />
      </>
    ),
    title: "Chess",
    link: "/plugins/chess",
  },
  {
    image: (
      <>
        <DmLogo />
      </>
    ),
    title: "Direct Messages",
    link: "/plugins/dm_chat",
    text: (
      <>
        {" "}
        Connect with the colleagues <br />
        in organization to get task done <br />
      </>
    ),
  },
];

const recentplugins = [
  {
    image: (
      <>
        <BlackboardLogo />
      </>
    ),
    title: " Noticeboard",
    description: (
      <>
        see urgent notice from <br /> your company
      </>
    ),
    link: "/plugins/noticeboard",
  },
  {
    image: (
      <>
        <NotifLogo />
      </>
    ),
    title: " Notifications ",
    description: (
      <>
        see notifications about your
        <br /> servers
      </>
    ),
    link: "/plugins",
  },
  {
    image: (
      <>
        <SalesLogo />
      </>
    ),
    title: " Sales ",
    description: (
      <>
        see sales for your company <br />
      </>
    ),
    link: "/plugins/sales",
  },
  {
    image: (
      <>
        <PhotoLogo />
      </>
    ),
    title: " Goals ",
    description: (
      <>
        Help your organization meet <br />
        there goals
      </>
    ),
    link: "/plugins/goals",
  },
  {
    image: (
      <>
        <ExpensesLogo />
      </>
    ),
    title: " Expenses ",
    description: (
      <>
        Track organization operating
        <br /> cost
      </>
    ),
    link: "/plugins/expenses",
  },
  {
    image: (
      <>
        <CalenderLogo />
      </>
    ),
    title: " Calender ",
    link: "/plugins/calendar",
    description: (
      <>
        Plan activities better for <br /> your team
      </>
    ),
  },
];

const RecommendCards = () => {
  return recommmendedplugins.map((plugin, index) => {
    return (
      <Link to={plugin.link} className={styles.cardstyle} key={index}>
        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                flexBasis: "20%",
                display: "flex",
                alignItems: "center",
              }}
            >
              {plugin.image}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "10px",
            }}
          >
            <p className={styles.titletext}>{plugin.title}</p>
            <p className={styles.desc}>{plugin.text}</p>
          </div>
        </div>
      </Link>
    );
  });
};

const RecentCard = () => {
  return recentplugins.map((plugin, index) => {
    return (
      <Link to={plugin.link} className={styles.cardstyle} key={index}>
        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          {plugin.image}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "5px",
            }}
          >
            <p className={styles.titletext}>{plugin.title}</p>
            <p className={styles.desc}>{plugin.description}</p>
          </div>
        </div>
      </Link>
    );
  });
};

const Plugins = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.startedcontainer}>
          <p className={styles.getstarted}>Getting Started?</p>
          <p className={styles.desc} style={{ textAlign: "center" }}>
            Understanding everything you need to know to get to work in Zuri
            Chat.
          </p>
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <div className={styles.buttoncontainer}>
              <button className={styles.buttonpadding}>
                <div
                  style={{
                    alignItems: "center",
                  }}
                  className={styles.buttonstyle}
                >
                  <BulbLogo className={styles.buttonlogo} />
                  <Link
                    to="/plug-in/how-to-build-a-plugin"
                    className={styles.buttontxt}
                  >
                    Learn more about Plugins
                  </Link>
                </div>
              </button>
              <button className={styles.buttonpadding}>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className={styles.buttonstyle}
                >
                  <div className={styles.buttonlogo}>
                    <DocLogo />
                  </div>
                  <Link
                    to="/development/zuri-documentation"
                    className={styles.buttontxt}
                  >
                    Documentation
                  </Link>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "54px" }}>
          <div className={styles.parentinput}>
            <div className={styles.inputsearchcontainer}>
              <input
                className={styles.input}
                style={{ border: "1px solid #98A2B3", borderRadius: "5px" }}
              />
              <button
                style={{
                  height: "100%",
                  background: "white",
                  border: "1px solid #00B87C",
                  borderRadius: "5px",
                }}
                className={styles.searchbutton}
              >
                <p className={styles.primary}>Search</p>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.cardsection}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "80px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <p className={styles.cardheading}>Recommended Plugins</p>

              <div className={styles.gridcontainer}>
                <RecommendCards />
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <p className={styles.cardheading}>Recent Plugins</p>

              <div className={styles.gridcontainer}>
                <RecentCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Plugins;
