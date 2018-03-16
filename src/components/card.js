import React from 'react'
const Card = (props) => (
    <div className="col s12 m6 l4" style={{padding: '30px'}}>
      <div className="card">
        <div className="card-image">
          <img style={{height: '40vh'}} src={`${props.movie.thumbnail.path}.${props.movie.thumbnail.extension}`} />
          <span className="card-title">{props.movie.title}</span>
          {props.id && <a className="btn-floating waves-effect waves-light red" onClick={() => props.deleteBookmark(props.id)}><i className="material-icons">delete</i></a>}
          <a className="btn-floating halfway-fab waves-effect waves-light green" onClick={(()=> props.router.push({
              pathname: `/movie/${props.movie.id}`,
          }))}><i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
          <p style={{height: '10vh'}}>{props.movie.description.slice(0, 100)} ...</p>
        </div>
      </div>
    </div>
)

export default Card