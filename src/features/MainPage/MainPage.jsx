import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

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

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen">
      <NavBar></NavBar>
      <div className="grid grid-cols-3">
        {itemList.map((item, i) => {
          return (
            <div
              key={i}
              className="rounded-lg shadow-lg m-[20px] border-[1px] border-b-2"
            >
              <h3 className="p-[10px] text-center border-b-[2px] font-[500] text-[19px]">
                {item.name}
              </h3>
              <div className="p-[20px] border-b-[2px] min-h-[358px]">
                <img src={item.img} alt={item.name} className="" />
              </div>
              <div className="p-[10px] border-b-[2px] un">
                <p className="underline mb-[5px]">Descripción:</p>
                <div className="text-gray-400 italic susp min-h-[50px]">
                  {item.desc}
                </div>
              </div>
              <div className="flex justify-center items-center py-[20px]">
                <button
                  className="bg-yellow-400 py-[5px] px-[10px] rounded-lg"
                  onClick={() => navigate(`${item.id}`)}
                >
                  Conocer mas
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
