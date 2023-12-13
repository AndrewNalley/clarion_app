import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      <h2>Page not found :( </h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

      <p>Go to the <NavLink to="/">Homepage</NavLink>.</p>
    </div>
  )
}