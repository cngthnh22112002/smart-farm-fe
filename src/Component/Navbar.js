import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <div style={{background: '#333'}}>
      <div className="logo">
        <img src="logoyolofarm.png" alt="logo"/>
        <h4>Yolo Farm</h4>
      </div>
      <nav className="nav">
        <ul>
          <CustomLink to="/">Homepage</CustomLink>
          <CustomLink to="/fan">Fan</CustomLink>
          <CustomLink to="/light">Light</CustomLink>
          <CustomLink to="/pump">Pump</CustomLink>
          <CustomLink to="/chart/dayly">Chart</CustomLink>
          <CustomLink to="/growth">Growth</CustomLink>
          <CustomLink to="/chat">Chat</CustomLink>
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