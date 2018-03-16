import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import toastr from 'toastr';
import { getComics } from '../../actions/marvel';
import { addBookmark } from '../../actions/bookmark'
import Card from '../../components/card';
import Navbar from '../../components/navbar'

class MoviePage extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    if(!this.props.comics){
      this.props.getComics()
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.bookmarkError){
      toastr.clear();
      toastr.error(nextProps.bookmarkError);
    }
  }

  render(){
    const { params } = this.props.match;
    const { comics } = this.props
    let comic
    if(comics){
      comic = comics.filter((comic)=> comic.id === parseInt(params.id))[0]
    }
    return(
      <div>
        <Navbar />
        <div className="row">
            {comic && 
            <div className="col offset-s1 s10" style={{padding: '30px'}}>
            <div className="card">
              <div className="card-image">
                <img style={{height: '60vh'}} src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
                <span className="card-title">{comic.title}</span>
                <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=> this.props.addBookmark(comic)}><i className="material-icons">bookmark</i></a>
              </div>
              <div className="card-content">
                <p style={{height: '10vh'}}>{comic.description}</p>
              </div>
            </div>
          </div>
        }
        </div>
      </div>
    )
  }
}

MoviePage.contextTypes = {
  router: propTypes.object.isRequired
}

const mapStateToProps = ({loader, user, marvel, bookmark}) => {
  return {
    user: user.user,
    loader: loader.isLoading,
    comics: marvel.comics,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   getComics: () => dispatch(getComics()),
   addBookmark: (comic) => dispatch(addBookmark(comic)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);