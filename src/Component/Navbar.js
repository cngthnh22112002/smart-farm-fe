import { Link, useMatch, useResolvedPath, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div style={{background: '#D4FFF0'}}>
      <div className="logo">
        <img src="logoyolofarm.png" alt="logo"/>
        <h4>Yolo Farm</h4>
      </div>
      <nav className="nav">
        <ul>
          <CustomLink to="/homepage">
            <img src="Home.png" alt="logo" style={{width:'26px', height:'26px', marginRight: '3px'}}/>
            Homepage
          </CustomLink>
          <CustomLink to="/fan">
            <img src="Fan.png" alt="logo"/>
            Fan
          </CustomLink>
          <CustomLink to="/light">
            <img src="Sun.png" alt="logo"/>
            Light
          </CustomLink>
          <CustomLink to="/pump">
            <img src="Rain.png" alt="logo"/>
            Pump
          </CustomLink>
          <CustomLink to="/chart/dayly">
            <img src="Chart.png" alt="logo"/>
            Chart
          </CustomLink>
          <CustomLink to="/growth">
            <img src="Growth.png" alt="logo"/>
            Growth
          </CustomLink>
          <CustomLink to="/notify">
              <i className="bi bi-bell" style={{color: "black"}} />
            Notification
          </CustomLink>
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