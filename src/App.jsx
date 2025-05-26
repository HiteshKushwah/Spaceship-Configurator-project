



// import React, { useState, useEffect } from "react";
// import "./index.css";

// function App() {
//   const [color, setColor] = useState("Snow");
//   const [colorPrice, setColorPrice] = useState(0);
//   const [power, setPower] = useState("100 MW");
//   const [powerPrice, setPowerPrice] = useState(0);
//   const [warp, setWarp] = useState("NO");
//   const [warpPrice, setWarpPrice] = useState(0);
//   const [pack, setPack] = useState("Basic");
//   const [packPrice, setPackPrice] = useState(0);
//   const [total, setTotal] = useState(1000);

//   useEffect(() => {
//     const basePrice = 1000;
//     const newTotal = basePrice + colorPrice + powerPrice + warpPrice + packPrice;
//     setTotal(newTotal);
//   }, [colorPrice, powerPrice, warpPrice, packPrice]);

//   const pickColor = (newColor, price) => {
//     setColor(newColor);
//     setColorPrice(price);
//   };

//   const pickPower = (newPower, price) => {
//     setPower(newPower);
//     setPowerPrice(price);
//   };

//   const pickWarp = (newWarp, price) => {
//     setWarp(newWarp);
//     setWarpPrice(price);
//   };

//   const pickPack = (newPack, price) => {
//     setPack(newPack);
//     setPackPrice(price);
//   };

//   return (
//     <div className="main-container">
//       <div className="box">
//         <h1 className="title">Spaceship Configurator</h1>

//         <h2 className="section-title">Select color:</h2>
//         <div className="options">
//           <div onClick={() => pickColor("Snow", 0)}
//            className={`color-box ${color === "Snow" ? "selected" : ""}`}>
//             <div className="color-square white"></div>
//             <span className="price">+0€</span>
//             <span className="name">Snow</span>
//           </div>
//           {/* <div onClick={() => pickColor("Volcano", 100)} className="color-box"> */}
//           <div
//           onClick={() => pickColor("Volcano", 100)}
//           className={`color-box ${color === "Volcano" ? "selected" : ""}`}
// >

//             <div className="color-square orange"></div>
//             <span className="price">+100€</span>
//             <span className="name">Volcano</span>
//           </div>
//              <div onClick={() => pickColor("Sky", 0)}
//            className={`color-box ${color === "Sky" ? "selected" : ""}`}>
//             <div className="color-square skyblue"></div>
//             <span className="price">+100€</span>
//             <span className="name">Sky</span>
//           </div>
//         </div>

//         <div className="total-box">
//           <div className="total-row">
//             <span>Base price:</span>
//             <span className="total-value">1000€</span>
//           </div>
//           <div className="total-row">
//             <span>Color:</span>
//             <span className="total-value">{color} (+{colorPrice}€)</span>
//           </div>
//           <div className="total-row">
//             <span>Power:</span>
//             <span className="total-value">{power} (+{powerPrice}€)</span>
//           </div>
//           <div className="total-row">
//             <span>Warp drive:</span>
//             <span className="total-value">{warp} (+{warpPrice}€)</span>
//           </div>
//           <div className="total-row">
//             <span>Option package:</span>
//             <span className="total-value">{pack} (+{packPrice}€)</span>
//           </div>
//           <hr className="divider" />
//           <div className="total-row">
//             <span>Total:</span>
//             <span className="total-value">{total}€</span>
//           </div>
//         </div>

//         <h2 className="section-title">Select power:</h2>
//         <div className="options">
//           {/* <div onClick={() => pickPower("100 MW", 0)} className="small-box"> */}
//                     <div
//             onClick={() => pickPower("100 MW", 0)}
//             className={`small-box ${power === "100 MW" ? "selected" : ""}`}
//           >

//             <span className="name">100 MW</span>
//             <span className="price">+0€</span>
//           </div>
//           {/* <div onClick={() => pickPower("150 MW", 200)} className="small-box"> */}

//            <div
//             onClick={() => pickPower("150 MW", 0)}
//             className={`small-box ${power === "150 MW" ? "selected" : ""}`}
//           >

//             <span className="name">150 MW</span>
//             <span className="price">+200€</span>
//           </div>
//           {/* <div onClick={() => pickPower("200 MW", 500)} className="small-box"> */}
//           <div  onClick={() => pickPower("200 MW", 0)}
//             className={`small-box ${power === "200 MW" ? "selected" : ""}`}>
//             <span className="name">200 MW</span>
//             <span className="price">+500€</span>
//           </div>
//         </div>

//         <h2 className="section-title">Warp drive:</h2>
//         <div className="options">
//           {/* <div onClick={() => pickWarp("NO", 0)} className="small-box"> */}
//             <div onClick={() => pick("NO", 0)}
//           className={`small-box ${color === "PickWrap" ? "selected" : ""}`}>
//             <span className="name">NO</span>
//             <span className="price">+0€</span>
//           </div>
//           <div onClick={() => pickWarp("YES", 1000)} className="small-box">
//             <span className="name">YES</span>
//             <span className="price">+1000€</span>
//           </div>
//         </div>

//         <h2 className="section-title">Select option package:</h2>
//         <div className="options">
//           <div onClick={() => pickPack("Basic", 0)} className="large-box">
//             <span className="name">Basic</span>
//             <span className="features">
//               Air conditioning <br /> Cloth seats <br /> AM/FM radio
//             </span>
//           </div>
//           <div onClick={() => pickPack("Sport", 100)} className="large-box">
//             <span className="name">Sport</span>
//             <span className="price">+100€</span>
//             <span className="features">
//               Air conditioning <br /> Leather seats <br /> AM/FM radio <br /> Chrome wheels
//             </span>
//           </div>
//           <div onClick={() => pickPack("Lux", 500)} className="large-box">
//             <span className="name">Lux</span>
//             <span className="price">+500€</span>
//             <span className="features">
//               Air conditioning <br /> Leather seats <br /> AM/FM radio <br /> Chrome wheels <br /> Subwoofer <br /> Window tint <br /> Personal tech support
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App







// // import React, { useState, useEffect } from "react";
// // import "./index.css";

// // function App() {
// //   const [color, setColor] = useState("Snow");
// //   const [colorPrice, setColorPrice] = useState(0);
// //   const [power, setPower] = useState("100 MW");
// //   const [powerPrice, setPowerPrice] = useState(0);
// //   const [warp, setWarp] = useState("NO");
// //   const [warpPrice, setWarpPrice] = useState(0);
// //   const [pack, setPack] = useState("Basic");
// //   const [packPrice, setPackPrice] = useState(0);
// //   const [total, setTotal] = useState(1000);

// //   useEffect(() => {
// //     const basePrice = 1000;
// //     const newTotal = basePrice + colorPrice + powerPrice + warpPrice + packPrice;
// //     setTotal(newTotal);
// //   }, [colorPrice, powerPrice, warpPrice, packPrice]);

// //   const pickColor = (newColor, price) => {
// //     setColor(newColor);
// //     setColorPrice(price);
// //   };

// //   const pickPower = (newPower, price) => {
// //     setPower(newPower);
// //     setPowerPrice(price);
// //   };

// //   const pickWarp = (newWarp, price) => {
// //     setWarp(newWarp);
// //     setWarpPrice(price);
// //   };

// //   const pickPack = (newPack, price) => {
// //     setPack(newPack);
// //     setPackPrice(price);
// //   };

// //   return (
// //     <div className="main-container">
// //       <div className="box">
// //         <h1 className="title">Spaceship Configurator</h1>

// //         <h2 className="section-title">Select color:</h2>
// //         <div className="options">
// //           <div onClick={() => pickColor("Snow", 0)} className="color-box">
// //             <div className="color-square white"></div>
// //             <span className="price">+0€</span>
// //             <span className="name">Snow</span>
// //           </div>
// //           <div onClick={() => pickColor("Volcano", 100)} className="color-box">
// //             <div className="color-square orange"></div>
// //             <span className="price">+100€</span>
// //             <span className="name">Volcano</span>
// //           </div>
// //           <div onClick={() => pickColor("Sky", 100)} className="color-box">
// //             <div className="color-square skyblue"></div>
// //             <span className="price">+100€</span>
// //             <span className="name">Sky</span>
// //           </div>
// //         </div>

// //         <div className="total-box">
// //           <div className="total-row">
// //             <span>Base price:</span>
// //             <span className="total-value">1000€</span>
// //           </div>
// //           <div className="total-row">
// //             <span>Color:</span>
// //             <span className="total-value">+{colorPrice}€</span>
// //           </div>
// //           <div className="total-row">
// //             <span>Power:</span>
// //             <span className="total-value">+{powerPrice}€</span>
// //           </div>
// //           <div className="total-row">
// //             <span>Warp drive:</span>
// //             <span className="total-value">+{warpPrice}€</span>
// //           </div>
// //           <div className="total-row">
// //             <span>Option package:</span>
// //             <span className="total-value">+{packPrice}€</span>
// //           </div>
// //           <hr className="divider" />
// //           <div className="total-row">
// //             <span>Total:</span>
// //             <span className="total-value">{total}€</span>
// //           </div>
// //         </div>

// //         <h2 className="section-title">Select power:</h2>
// //         <div className="options">
// //           <div onClick={() => pickPower("100 MW", 0)} className="small-box">
// //             <span className="name">100 MW</span>
// //             <span className="price">+0€</span>
// //           </div>
// //           <div onClick={() => pickPower("150 MW", 200)} className="small-box">
// //             <span className="name">150 MW</span>
// //             <span className="price">+200€</span>
// //           </div>
// //           <div onClick={() => pickPower("200 MW", 500)} className="small-box">
// //             <span className="name">200 MW</span>
// //             <span className="price">+500€</span>
// //           </div>
// //         </div>

// //         <h2 className="section-title">Warp drive:</h2>
// //         <div className="options">
// //           <div onClick={() => pickWarp("NO", 0)} className="small-box">
// //             <span className="name">NO</span>
// //             <span className="price">+0€</span>
// //           </div>
// //           <div onClick={() => pickWarp("YES", 1000)} className="small-box">
// //             <span className="name">YES</span>
// //             <span className="price">+1000€</span>
// //           </div>
// //         </div>

// //         <h2 className="section-title">Select option package:</h2>
// //         <div className="options">
// //           <div onClick={() => pickPack("Basic", 0)} className="large-box">
// //             <span className="name">Basic</span>
// //             <span className="features">
// //               Air conditioning <br /> Cloth seats <br /> AM/FM radio
// //             </span>
// //           </div>
// //           <div onClick={() => pickPack("Sport", 100)} className="large-box">
// //             <span className="name">Sport</span>
// //             <span className="price">+100€</span>
// //             <span className="features">
// //               Air conditioning <br /> Leather seats <br /> AM/FM radio <br /> Chrome wheels
// //             </span>
// //           </div>
// //           <div onClick={() => pickPack("Lux", 500)} className="large-box">
// //             <span className="name">Lux</span>
// //             <span className="price">+500€</span>
// //             <span className="features">
// //               Air conditioning <br /> Leather seats <br /> AM/FM radio <br /> Chrome wheels <br /> Subwoofer <br /> Window tint <br /> Personal tech support
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;






// // this is the second logic what i made ans this is the logic for the indivuudal function for me...............


// //   const calculateTotal = () => {
// //     const basePrice = 1000;
// //     const newTotal = basePrice + colorPrice + powerPrice + warpPrice + packPrice;
// //     setTotal(newTotal);
// //   };

// //   const pickColor = (newColor, price) => {
// //     setColor(newColor);
// //     setColorPrice(price);
// //     calculateTotal(); 
// //   };

// //   const pickPower = (newPower, price) => {
// //     setPower(newPower);
// //     setPowerPrice(price);
// //     calculateTotal();
// //   };

// //   const pickWarp = (newWarp, price) => {
// //     setWarp(newWarp);
// //     setWarpPrice(price);
// //     calculateTotal();
// //   };

// //   const pickPack = (newPack, price) => {
// //     setPack(newPack);
// //     setPackPrice(price);
// //     calculateTotal();
// //   };



import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState(null); 
  const [colorPrice, setColorPrice] = useState(0);
  const [power, setPower] = useState(null); 
  const [powerPrice, setPowerPrice] = useState(0);
  const [warp, setWarp] = useState(null);
  const [warpPrice, setWarpPrice] = useState(0);
  const [pack, setPack] = useState(null); 
  const [packPrice, setPackPrice] = useState(0);
  const [total, setTotal] = useState(1000);
  const [selectedOptions, setSelectedOptions] = useState({
    color: null,
    power: null,
    warp: null,
    pack: null,
  });

  useEffect(() => {
    const basePrice = 1000;
    const newTotal = basePrice + colorPrice + powerPrice + warpPrice + packPrice;
    setTotal(newTotal);
  }, [colorPrice, powerPrice, warpPrice, packPrice]);

  const pickColor = (newColor, price) => {
    setColor(newColor);
    setColorPrice(price);
    setSelectedOptions((prev) => ({ ...prev, color: newColor }));
  }; 

  const pickPower = (newPower, price) => {
    setPower(newPower);
    setPowerPrice(price);
    setSelectedOptions((prev) => ({ ...prev, power: newPower }));
  };

  const pickWarp = (newWarp, price) => {
    setWarp(newWarp);
    setWarpPrice(price);
    setSelectedOptions((prev) => ({ ...prev, warp: newWarp }));
  };

  const pickPack = (newPack, price) => {
    setPack(newPack);
    setPackPrice(price);
    setSelectedOptions((prev) => ({ ...prev, pack: newPack }));
  };

  return (
    <div className="main-container">
      <div className="box">
        <h1 className="title">Spaceship Configurator</h1>

        <h2 className="section-title">Select color:</h2>
        <div className="options">
          <div
            onClick={() => pickColor("Snow", 0)}
            className={`color-box ${selectedOptions.color === "Snow" ? "selected" : ""}`}
          >
            <div className="color-square white"></div>
            <span className="price">+0€</span>
            <span className="name">Snow</span>
          </div>
          <div
            onClick={() => pickColor("Volcano", 100)}
            className={`color-box ${selectedOptions.color === "Volcano" ? "selected" : ""}`}
          >
            <div className="color-square orange"></div>
            <span className="price">+100€</span>
            <span className="name">Volcano</span>
          </div>
          <div
            onClick={() => pickColor("Sky", 100)}
            className={`color-box ${selectedOptions.color === "Sky" ? "selected" : ""}`}
          >
            <div className="color-square skyblue"></div>
            <span className="price">+100€</span>
            <span className="name">Sky</span>
          </div>
        </div>

        <div className="total-box">
          <div className="total-row">
            <span>Base price:</span>
            <span className="total-value">1000€</span>
          </div>
          <div className="total-row">
            <span>Color:</span>
            <span className="total-value">{color } (+{colorPrice}€)</span>
          </div>
          <div className="total-row">
            <span>Power:</span>
            <span className="total-value">{power } (+{powerPrice}€)</span>
          </div>
          <div className="total-row">
            <span>Warp drive:</span>
            <span className="total-value">{warp } (+{warpPrice}€)</span>
          </div>
          <div className="total-row">
            <span>Option package:</span>
            <span className="total-value">{pack } (+{packPrice}€)</span>
          </div>
          <hr className="divider" />
          <div className="total-row">
            <span>Total:</span>
            <span className="total-value">{total}€</span>
          </div>
        </div>

        <h2 className="section-title">Select power:</h2>
        <div className="options">
          <div
            onClick={() => pickPower("100 MW", 0)}
            className={`small-box ${selectedOptions.power === "100 MW" ? "selected" : ""}`}
          >
            <span className="name">100 MW</span>
            <span className="price">+0€</span>
          </div>
          <div
            onClick={() => pickPower("150 MW", 200)}
            className={`small-box ${selectedOptions.power === "150 MW" ? "selected" : ""}`}
          >
            <span className="name">150 MW</span>
            <span className="price">+200€</span>
          </div>
          <div
            onClick={() => pickPower("200 MW", 500)}
            className={`small-box ${selectedOptions.power === "200 MW" ? "selected" : ""}`}
          >
            <span className="name">200 MW</span>
            <span className="price">+500€</span>
          </div>
        </div>

        <h2 className="section-title">Warp drive:</h2>
        <div className="options">
          <div
            onClick={() => pickWarp("NO", 0)}
            className={`small-box ${selectedOptions.warp === "NO" ? "selected" : ""}`}
          >
            <span className="name">NO</span>
            <span className="price">+0€</span>
          </div>
          <div
            onClick={() => pickWarp("YES", 1000)}
            className={`small-box ${selectedOptions.warp === "YES" ? "selected" : ""}`}
          >
            <span className="name">YES</span>
            <span className="price">+1000€</span>
          </div>
        </div>

        <h2 className="section-title">Select option package:</h2>
        <div className="options">
          <div
            onClick={() => pickPack("Basic", 0)}
            className={`large-box ${selectedOptions.pack === "Basic" ? "selected" : ""}`}
          >
            <span className="name">Basic</span>
            <span className="features">
              Air conditioning <br /> Cloth seats <br /> AM/FM radio
            </span>
          </div>
          <div
            onClick={() => pickPack("Sport", 100)}
            className={`large-box ${selectedOptions.pack === "Sport" ? "selected" : ""}`}
          >
            <span className="name">Sport</span>
            <span className="price">+100€</span>
            <span className="features">
              Air conditioning <br /> Leather seats <br /> AM/FM radio <br /> Chrome wheels
            </span>
          </div>
          <div
            onClick={() => pickPack("Lux", 500)}
            className={`large-box ${selectedOptions.pack === "Lux" ? "selected" : ""}`}
          >
            <span className="name">Lux</span>
            <span className="price">+500€</span>
            <span className="features">
              Air conditioning <br /> Leather seats <br /> AM/FM radio <br /> Chrome wheels <br /> Subwoofer <br /> Window tint <br /> Personal tech support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



