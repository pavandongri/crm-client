
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo"><a href="/home">CRM</a></div>
        <div className="burger">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7KGiKhH24urEtzHkC4FQSddQFmsse3qqLQ&usqp=CAU"
            alt="hamburger" /></div>
        <div className="menubar">
          <div className="menu contacts"><a href="/contacts">Contacts</a></div>
          <div className="menu meetings"><a href="/meetings">Meetings</a></div>
          <div className="profile">
            <img id="profile-pic" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAACUCAMAAAA+hOw/AAAAaVBMVEX///8AAAAEBAT8/Pzj4+Pz8/M/Pz/Dw8MuLi7u7u4yMjL29va/v7/5+fnp6end3d06Ojp6enqFhYVtbW2Pj4/W1tacnJwpKSlnZ2dycnKioqIfHx8SEhK0tLSpqalVVVVISEhdXV3MzMydyTcEAAAIP0lEQVR4nO1cidKaMBAGAqKCgJyCyOH7P2TZDShKOLwS/k6+aacjELofSfbKJooiISEhISEhISEhISEhISEh8R+AwF/S/TrsHL2DszsIlOsbIDsnMq/Fsa42FFV9LK5m5OxES/YmLN28+MFGHWIT+BdTt0QL+DL0axxoyEBjsGquBrGpixbyFRjX4tR10JCS1l7anIqrIVrUhdjZ/qaj0zHStltvu9WeiW18+y9MLeuSer3e2AfH2DZN8wpo/rXjY+D1etBLL2ufWOR62t/6YlsXdqQ7j+PLcPTILOrt7an96UpG3rYKOP5dz6WZq48Zo4PuZuldD/oOVykXguCfyyZvx9w+dmes62Hnxl2X5psLNdSrAgG3oT7DJGk47QtnibtwcLKkbXGu8S0/lvI1NNKY21YzJFkzlA7z8sFncOKkVSdbc22cFCXLqSbTfDClhMx3FH1C9zWqA/PsxxK+ChLC524kK13oI7L4mzePuSVtq4Wr6qddTTspef7Wy6SEaQXt6xUZYPdEKW3M5zstp4NlGYZhWWMD0txQUif3h1K+BKTUSBTog46Bn5YTFaF/PAV+WESOpbAe0gP6irWQQnnA01ZYY82KsqrnwFZZNPSFoFVAvcNgFc66c0RhkmaGPzDCH+RuWLXWoW3MMbndvz9MQrRV6lG0T9EoOCNESc8DTWzBzUs9CDUaVdC4rQxln53xbmiItVNEORQJTIQkG4jYCGbE92jpIcqIDcYwPWT0VYXglAWxUY58SKkxqYbfGq0nTs0VnxUMHjJ0FxNbrJ1yNjhLQma86quMbmov+awGOI41dSNsSmHCi+oHf2Ar4WY4lovA62H3WB87n+oJkR11wa9eM41KNE4J70SsRm6N3Xj5rdhTMM4gnGczb1ajhCgqZivbA8JncbmXI4Y+GWEp3wtLPzzoCUZnNG/KMAg7/l54NlwcRMGBkCEnUrIVRE9NlIxWjXEIcMi6gqIpHHkVc14oUTIz9BrPY6RlBV8q+aXg44DRpeYh+2Y6S0lVU3bTMIebYtQEpumqEZ+zXsCpZjfVUbvsfyf4OAr4nI2bxxz2V28BJ489+MDxawZA8Uvh2SAn7KYdm5O5nyMEXTEIISl22FEn/jqCponG8iKfcCJK1iWSOOMIUm3GbONH/aQYmM3lbqMcsD9qPHb7M05KBrdL3q4shE2quhuzjB9xIsoObiectYTlQyheKz/hpFBTkPt8V3HcEvwbtvMKiD7R5Q1ssOcl3yTSJZn2ntHdmwPD4euAHn/C15fAeK+ceOC4gNOUYitvcSMvOAEMvanPaJ5nKZ2nDNAF07I8k30RDq1xXUsUo5wKc/FeORX4oeYrxyfc94H57XxCLRGl0GY4acVUhGSBNznMv/8QMYjFTP3cMRES0lvTzSHpNG7Tf4BwwX9ozkynmT6AdCdXJRHDuJpb15tWfXPeXMa5n1yMM2aVUklH2eMIbH9P2QGEDk9xXLqham82X2VQUgPtoM7oPNoYH+On+ExvESdll+ZMTnkwv8iJnDx+is8GD1Wb4QSK2ghZfp+H6fWZMNaAb7Ef9yi/DRti3LlcKSb9iBk8s/IC87G2lA0DHJEtZ07esvyvYftlfiOUl769sJ0ngNNo3P4M61qE6amu61MaFtfW+ZhNoGD8vlpOCtTGuoB7DezcyBPEacnYu7JdQmtBxZ6AsbdgPcUpjtXRHrKy7OZ6MZdA4a4j9tP2CUaWHpawDLBPs0d/Q89SaJ2U4bBCpA/eunzS5qKcTljlrc9wrurQNiNd1yPTDuvq3F7Pq9C5PT8Eb5s77Rs1AWFB1bfWhht5svUA24RebkOrvCzG+5q3bzTlw0Kh4TGnfDTmUmF3HZwkqFphdxRvH3Y61jBZ+xnGMBrKZvBZVhITHoqpkH0IrWD3E4bSfGNCdaxsg1WOM0WJFuoMwT12H82xGOEwCpykBM+yqmD451io4hsGQdBLr3WTprF7in8uzMEyxF7OkvpvSOkdxLT6sjezMGcZcF2tec4tU2my6TzlBAY6lH9umbUGQCD79cq4uwEamY9mSsQawHCtpvEekpfUQ59TI/9jdaUNr+e8VmP5ebumdr8E+by3hh5+iOODFq2hmoDzmhqsfaqg+bqPe1CKd+j0UChdraagtc92jfo2tQnR52rb5lDp9+BXzBq1ghWWvfjdf1Pj3aDd/RIDK1L517s91XxErziubGxuFlZUzcetNocizN81TV033UvMDFG1ObcaKoRefkgJbThGZERcDdVjrdvH3dTrKIG1blCTqLZykPRNc9uj1LRPSft9VGGly1iNW4Gxt72PuwnehRXQLnZTImjThouiBBYh8XzlwBKcY0IsLFNQhe2DwtXNc0aMJdWvS5AaQmuxcXkJK5c3ZrSkEmcJyggi6NbjF7TBAdREM7XD7ay0y7ANU/SDBe5taPegnJPPFQSFluDEFLoHRdl97hINeAncK4SAPV3q2xE7g08D0Xu6cO/ddzmJ33vXZvS+yAn2SIreJI57WaeLwJYS0tawlxXR7YH+Aqm17Dnulm4+jp8Aa9kb3pL6PNZYEyV61sIXsKazFuBMDI2uDL6Zs8TW6zoTo0Gc37fpv0wK10F5LjYtQf+MmTf6SV3jGTMoTf1+ZLjGs4Do4hGc2fQO2jObVkapBT1bS+uf6DYOrXMdVnq21g23M9AWcQKs/Qw05XZW3RJdAc/8gbPqALczBedxP1Nw7V31cPbjBKE/dPYjQjfjVOtPm6dppKV/7IxOhOVMnqXq/IVpxAI989bvnXnr/+kzb5Vu4v9fZxNLSEhISEhISEhISEhISEhIMPAP70llb1qmg3UAAAAASUVORK5CYII=" alt="profile-pic"/>
             <div className="submenu">
              <div><a href="/profile">Profile</a></div>
              <div><a href="/logout">Logout</a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Navbar;
