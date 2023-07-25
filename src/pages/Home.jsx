import React from "react";
import Background from "../assets/mainBackground.png";

export default function Home() {
  return (
    <div style={{ display: "block"}}>
      <div
        style={{
          width: "100%",
          height: "400px",
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
          url(${Background})`,
          // backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   backdropFilter: "brightness(140%)",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 22,
            paddingTop: 1,
            textAlign: "center",
            margin: "auto",
          }}
        >
          <h3 style={{ marginTop: "10%" }}>MALARIA DISEASE USING</h3>
          <h5>MACHINE LEARNING</h5>
        </div>
      </div>
      <center>

      <h3 style={{ color: "black" }}>ABSTRACT</h3>
      <div style={{width: '90%', textAlign:'justify'}}>
        Malaria is a life-threatening disease primarily found in tropical
        countries. It is both preventable and curable. However, without prompt
        diagnosis and effective treatment, a case of uncomplicated malaria can
        progress to a severe form of the disease, which is often fatal without
        treatment. Malaria is not contagious and cannot spread from one person
        to another; the disease is transmitted through the bites of female
        Anopheles mosquitoes. Five species of parasites can cause malaria in
        humans and 2 of these species – Plasmodium falciparum and Plasmodium
        vivax – pose the greatest threat. There are over 400 different species
        of Anopheles mosquitoes and around 40, known as vector species, can
        transmit the disease. This risk of infection is higher in some areas
        than others depending on multiple factors, including the type of local
        mosquitoes. It may also vary according to the season, the risk being
        highest during the rainy season in tropical countries.Nearly half of the
        world’s population is at risk of malaria. In 2021, an estimated 247
        million people contracted malaria in 85 countries. That same year, the
        disease claimed approximately 619 000 lives. Some people are more
        susceptible to developing severe malaria than others. Infants and
        children under 5 years of age, pregnant women and patients with HIV/AIDS
        are at particular risk. Other vulnerable groups include people entering
        areas with intense malaria transmission who have not acquired partial
        immunity from long exposure to the disease, or who are not taking
        chemopreventive therapies, such as migrants, mobile populations and
        travellers.Some people in areas where malaria is common will develop
        partial immunity. While it never provides complete protection, partial
        immunity reduces the risk that malaria infection will cause severe
        disease. For this reason, most malaria deaths in Africa occur in young
        children, whereas in areas with less transmission and low immunity, all
        age groups are at risk.
      </div>
      </center>
    </div>
  );
}
