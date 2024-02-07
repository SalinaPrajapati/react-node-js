import React from "react";
import { Card } from "primereact/card";

const cards = [
  {
    name: "Home Decore",
    icon: "pi pi-chevron-down",
    description: "223",
  },
  {
    name: "Home Decore",
    icon: "pi pi-sort-alpha-up",
    description: "4444",
  },
  {
    name: "Home Decore",
    icon: "pi pi-hashtag",
    description: "0",
  },
  {
    name: "Home Decore",
    icon: "pi pi-check",
    description: "321",
  },
];
const colors = ["rgb(174 125 124)", "rgb(159 221 98)", "rgb(154 209 247)", "rgb(240 155 170)"];
const styles = {
  main: {
    width: "20%",
    fontSize: "1.25rem",
    fontWeight:"700",
    color:"white"
  },
  cardBody: {
    padding: 0,
  },
  cardContent: {
    padding: 0,
  },
};

const Home = () => {
  return (
    <div style={{ padding: "10px 50px" }}>
      <div className="font-link">Dashboard</div>
      <div>
        <div
        className="font-link"
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "100px",
          }}
        >
          {cards.map((card, index) => (
            <Card
            
              role="region"
              style={{ ...styles.main, backgroundColor: colors[index] }}
            >
                <span className="font-link">{card.name}</span>
                <div style={{ padding: "0" }}>
                  <p
                  className="font-link"
                    style={{
                      fontSize: "1rem",
                      color: "white",
                      fontWeight: "600",
                      margin: 0,
                    }}
                  >
                    <i className={card.icon} style={{marginRight:"5px"}}></i>
                    {card.description}
                  </p>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
