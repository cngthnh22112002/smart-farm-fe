import { useState } from 'react';

const App = () => {
   const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

   const boxStyle = {
      height: '200px',
      width: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '30px',
      cursor: 'pointer',
      backgroundColor: isHover ? 'lightblue' : 'rgb(0, 191, 255)',
      color: isHover ? 'red' : 'green',
   };

   return (
      <div>
         <div
            style={boxStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         >
            <i className="bi bi-bell" role="img" aria-label="Toggle notifications menu" style={{color: "black"}}></i>
         </div>
      </div>
   );
};

export default App;