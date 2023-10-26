import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

let itemList = [
  {
    id: 1,
    name: "Cancha padel",
    img: "/img/imgPadel.jpg",
    desc: "Esta cancha esta copado por que nose que onda y aksjaksjaksjkajaskajksjakjskajskajskajksjaksjaksjaksjkasasdasdasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd hoaslasljalsjasa asahishasudhasdkaskdjasudhashidh",
    servicios: ["Cantina", "Quinchos", "Parrila"],
    caracteristicas: "Cancha de cemento",
  },
  {
    id: 2,
    name: "Cancha voley",
    img: "/img/imgVoleyPlaya.jpeg",
    desc: "Esta cancha esta copado por que nose que onda y aksjaksjaksjkajaskajksjakjskajskajskajksjaksjaksjaksjkas",
    servicios: ["Cantina", "Quinchos", "Parrila"],
    caracteristicas: "Cancha de cemento",
  },
  {
    id: 3,
    name: "Cancha padel",
    img: "/img/imgPadel.jpg",
    desc: "Esta cancha esta copado por que nose que onda y aksjaksjaksjkajaskajksjakjskajskajskajksjaksjaksjaksjkas",
    servicios: ["Cantina", "Quinchos", "Parrila"],
    caracteristicas: "Cancha de cemento",
  },
  {
    id: 4,
    name: "Cancha voley playa",
    img: "/img/imgVoleyPlaya.jpeg",
    desc: "Esta cancha esta copado por que nose que onda y aksjaksjaksjkajaskajksjakjskajskajskajksjaksjaksjaksjkas",
    servicios: ["Cantina", "Quinchos", "Parrila"],
    caracteristicas: "Cancha de cemento",
  },
  {
    id: 5,
    name: "Cancha padel",
    img: "/img/imgPadel.jpg",
    desc: "Esta cancha esta copado por que nose que onda y aksjaksjaksjkajaskajksjakjskajskajskajksjaksjaksjaksjkas",
    servicios: ["Cantina", "Quinchos", "Parrila"],
    caracteristicas: "Cancha de cemento",
  },
];

const DetailCourt = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = itemList[id - 1];

  return (
    <div className="h-screen">
      <NavBar />
      <div
        className="ml-[2%] mt-[20px] underline cursor-pointer"
        onClick={() => navigate("/")}
      >
        Volver
      </div>
      <div className="flex justify-center items-center flex-col p-[5%] m-[2%] shadow-lg border-[1px]">
        <h2 className="text-[35px] italic">{item.name}</h2>
        <img src={item.img} alt="" className="shadow-lg my-[20px]" />
        <div className="w-full my-[20px]">
          <p className="text-[25px]">DESCRIPCIÓN:</p>
          <h5 className="text-[22px] italic">- {item.desc}</h5>
        </div>
        <div className="flex justify-start items-start flex-col w-full">
          <p className="text-[25px]">CARACTERISTICAS:</p>
          <ul>
            {item.servicios.map((item, i) => {
              return <li className="text-[18px]"> - {item}</li>;
            })}
          </ul>
        </div>
        <div className="bg-yellow-200 h-[80px] w-full mt-[30px] flex justify-center items-center">
          <button className="bg-blue-950 text-white py-[10px] w-[300px] text-[25px] rounded-lg">
            Reservar ya!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCourt;
