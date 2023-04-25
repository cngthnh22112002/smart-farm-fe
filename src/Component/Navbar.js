import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <div style={{background: '#D4FFF0', paddingRight:"15px"}}>
      <div className="logo">
        <img src="logo.png" alt="logo"/>
        <h4>Yolo Farm</h4>
      </div>
      <nav className="nav">
        <ul>
          <CustomLink to="/homepage">
            <img src="Home.png" alt="logo" style={{width:'22px', height:'22px', marginRight: '1px'}}/>
            Homepage
          </CustomLink>
          <CustomLink to="/fan">
            <img src="Fan.png" alt="logo" style={{width:'20px', height:'20px'}}/>
            Fan
          </CustomLink>
          <CustomLink to="/light">
            <img src="Sun.png" alt="logo" style={{width:'20px', height:'20px'}}/>
            Light
          </CustomLink>
          <CustomLink to="/pump">
            <img src="Rain.png" alt="logo" style={{width:'20px', height:'20px'}}/>
            Pump
          </CustomLink>
          <CustomLink to="/chart/dayly">
            <img src="Chart.png" alt="logo" style={{width:'20px', height:'20px'}}/>
            Chart
          </CustomLink>
          <CustomLink to="/growth">
            <img src="Growth.png" alt="logo" style={{width:'20px', height:'20px'}}/>
            Growth
          </CustomLink>
          {/* <CustomLink to="/chat">
            <img src="Chat.png" alt="logo" style={{width:'20px', height:'20px'}}/>
            Chat
          </CustomLink> */}
        </ul>
      </nav>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}