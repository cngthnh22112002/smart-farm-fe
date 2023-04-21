import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/homepage">Homepage</CustomLink>
        <CustomLink to="/fan">Fan</CustomLink>
        <CustomLink to="/light">Light</CustomLink>
        <CustomLink to="/pump">Pump</CustomLink>
        <CustomLink to="/chart">Chart</CustomLink>
        <CustomLink to="/growth">Growth</CustomLink>
        <CustomLink to="/chat">Chat</CustomLink>
      </ul>
    </nav>
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