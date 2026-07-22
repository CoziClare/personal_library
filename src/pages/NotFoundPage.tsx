import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="not-found">
      <div>
        <h1 className="not-found__title">寻隐者不遇</h1>
        <p className="not-found__body">{'你寻找的那一页，\n或许已经随风而去。'}</p>
        <Link className="btn" to="/">
          归去
        </Link>
      </div>
    </div>
  )
}
