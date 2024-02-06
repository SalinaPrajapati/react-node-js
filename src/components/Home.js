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
const colors = ["#ffcccb", "#b0e57c", "#b3e0ff", "#ffc0cb"];
const styles = {
  main: {
    width: "20%",
    fontSize: "1.25rem",
    fontWeight:"800",
    color:"gray"
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
      <div>Dashboard</div>
      <div>
        <div
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
                {card.name}
                <div style={{ padding: "0" }}>
                  <p
                    style={{
                      fontSize: "1.25rem",
                      color: "gray",
                      fontWeight: "900",
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
