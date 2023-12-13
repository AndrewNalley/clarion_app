
import { Link, useRouteError } from 'react-router-dom'
// import { ErrorBase } from '../../utils/errors'

export default function ProfileError() {
  // const error = useRouteError()
  
  return (
    <div className="profile-error">
      <h2>Error</h2>
      {/* <p>{displayError}</p> */}
      <Link to="/">Back to the Homepage</Link>
    </div>
  )
}