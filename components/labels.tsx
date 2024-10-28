import Image from "next/image";
import React from "react";

export default function Labels() {
  const cards = [
    {
      id: "Card_1",
      title: "Feature",
      icon: {
        src: "/icon-card-1.svg",
        height: 91,
        width: 133,
      },
      descrition: `Utilizamos materiales ecológicos y biodegradables, lo que reduce el impacto ambiental. Cada lámpara es fabricada bajo demanda, minimizando residuos y asegurando un proceso de producción responsable.`,
    },
    {
      id: "Card_2",
      title: "Feature",
      icon: {
        src: "/icon-card-2.svg",
        height: 109,
        width: 46,
      },
      descrition: `Eficiencia Energética: Equipadas con tecnología LED de bajo consumo, nuestras lámparas no solo son estéticamente atractivas, sino que también te ayudan a reducir el consumo energético.`,
    },
    {
      id: "Card_3",
      title: "Feature",
      icon: {
        src: "/icon-card-1.svg",
        height: 91,
        width: 133,
      },
      descrition: `Utilizamos materiales ecológicos y biodegradables, lo que reduce el impacto ambiental. Cada lámpara es fabricada bajo demanda, minimizando residuos y asegurando un proceso de producción responsable.`,
    },
  ];

  return (
    <div className={"labels_container"}>
      <div className={"labels_wrapper overflow-hidden"}>
        <Image
          src={"/hero-title.webp"}
          alt="Logo"
          width={1548}
          height={380}
          className="top-[30%] absolute w-[110vw] left-[50%] translate-x-[-50%] max-w-[1548px]"
          id={"Title_Hero"}
        />
        <div
          id={"Subtitle_Hero"}
          className="opacity-0 absolute bottom-0 -right-full translate-x-1/2"
        >
          <h2 className="font-redHatDisplay text-7xl not-prose font-light text-white text-nowrap">
            Diseños inspirados <br />
            <span className="font-normal text-[156px] ml-16">
              en la naturaleza
            </span>
          </h2>
        </div>
        {cards.map((card) => (
          <div
            id={card.id}
            key={card.id}
            className={"label_card label_card--hidden"}
          >
            <div>
              <h3 className={"text_header font-redHatDisplay"}>{card.title}</h3>
              <Image width={card.icon.width} height={card.icon.height} src={card.icon.src} alt={card.title} />
              <p className={"text_body font-poppins"}>{card.descrition}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
