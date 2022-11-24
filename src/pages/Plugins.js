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

const recommmendedplugins = [
  {
    image: (
      <>
        <ChannelsLogo title="Docusaurus Logo" className="logo" />
      </>
    ),
    title: "Channels",
  },
  {
    image: (
      <>
        <TodoLogo />
      </>
    ),
    title: "Todo",
  },
  {
    image: (
      <>
        <MusicLogo />
      </>
    ),
    title: "Music",
  },
  {
    image: (
      <>
        <FilesLogo />
      </>
    ),
    title: "Files",
  },
  {
    image: (
      <>
        <ChessLogo />
      </>
    ),
    title: "Chess",
  },
  {
    image: (
      <>
        <DmLogo />
      </>
    ),
    title: "Direct Messages",
  },
];

const recentplugins = [
  {
    image: (
      <>
        <BlackboardLogo />
      </>
    ),
    title: " Blackboard",
    description: (
      <>
        see sales for your company <br />
        (integrated with Stripe)
      </>
    ),
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
        (integrated with Stripe)
      </>
    ),
  },
  {
    image: (
      <>
        <PhotoLogo />
      </>
    ),
    title: " Photo Share ",
    description: <>Present your screens</>,
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
        see notifications about your
        <br /> servers
      </>
    ),
  },
  {
    image: (
      <>
        <CalenderLogo />
      </>
    ),
    title: " Calender ",
    description: (
      <>
        see sales for your company <br />
        (integrated with Stripe)
      </>
    ),
  },
];

const RecommendCards = () => {
  return recommmendedplugins.map((plugin, index) => {
    return (
      <div className={styles.cardstyle} key={index}>
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
            <p className={styles.desc}>
              Bring the right people <br />
              together in one place <br />
              organizing work around a<br /> specific common goal.
            </p>
          </div>
        </div>
      </div>
    );
  });
};

const RecentCard = () => {
  return recentplugins.map((plugin, index) => {
    return (
      <div className={styles.cardstyle} key={index}>
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
      </div>
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
                  <p className={styles.buttontxt}>Learn more about Plugins</p>
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
                  <p className={styles.buttontxt}>Documentation</p>
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
