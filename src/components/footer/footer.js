import React from "react";
import fb from 'C:/Users/Admin/Downloads/smart-farm-fe-long0339637721-patch-3/smart-farm-fe-long0339637721-patch-3/src/pages/img/fb.png';
import linkedin from 'C:/Users/Admin/Downloads/smart-farm-fe-long0339637721-patch-3/smart-farm-fe-long0339637721-patch-3/src/pages/img/linkedin.png';
import ins from 'C:/Users/Admin/Downloads/smart-farm-fe-long0339637721-patch-3/smart-farm-fe-long0339637721-patch-3/src/pages/img/ins.png';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-black  bottom-0">
      {/* <Link to='/'><img src={Logo} alt="ShoesHaul Logo" className="mx-3 h-36" /></Link>
       */}
      <div className="float-right">
        <div className="text-white font-bold text-2xl mx-11">Contact Us</div>
        <div className ='social-apps flex flex-1 justify-between mx-11'>
                      <div>
                          <img src={fb} alt='facebook' className='pic-social-apps rounded-sm cursor-pointer'/>
                          <img src={linkedin} alt='linkedin' className='pic-social-apps cursor-pointer'/>
                          <img src={ins} alt='instagram' className='pic-social-apps rounded-sm cursor-pointer'/>
                      </div>
                  </div>
      </div>
      
    </div>
    </div>
    
  );
};

export default Footer;