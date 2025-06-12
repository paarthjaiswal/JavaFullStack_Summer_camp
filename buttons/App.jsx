// import React, { useState } from 'react';

// function ToggleButton() {
//  const [isOn, setIsOn] = useState(false);

//  const handleToggle = () => {
//  setIsOn((prevState) => !prevState);
//  };

//  return (
//  <div id="toggleButtonContainer">
//  <button id="toggleButton" onClick={handleToggle}>
//  {isOn ? "Click me!" : "Don't Click me!"}
//  </button>
//  </div>
//  );
// }

// export default ToggleButton;







// import React, { useState } from "react";

// function DateChanger() {
//   const [date, setDate] = useState(new Date());

//   const changeDate = (days) => {
//     const newDate = new Date(date);
//     newDate.setDate(newDate.getDate() + days);
//     setDate(newDate);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h1>{date.toDateString()}</h1>
//       <div>
//         <button onClick={() => changeDate(-1)} style={buttonStyle}>-</button>
//         <button onClick={() => changeDate(1)} style={buttonStyle}>+</button>
//       </div>
//     </div>
//   );
// }

// const buttonStyle = {
//   fontSize: "24px",
//   padding: "10px 20px",
//   margin: "0 10px",
//   cursor: "pointer"
// };

// export default DateChanger;

import React, { useState } from 'react';

function App() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          style={{
            padding: '10px 20px',
            backgroundColor: activeButton === i ? 'Pink' : 'Black',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            borderColor: 'blue',

            cursor: 'pointer'
          }}
        >
          Button {i + 1}
        </button>
      ))}
    </div>
  );
}

export default App;
