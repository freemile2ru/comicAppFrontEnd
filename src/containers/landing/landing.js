import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import toastr from 'toastr';
import { getComics } from '../../actions/marvel';
import Card from '../../components/card';
import Navbar from '../../components/navbar'

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0,
      comics: []
    }
  }
  componentWillMount(){
      this.props.getComics(this.state.page)
  }
  componentWillReceiveProps(nextProps){
    if(!this.props.comics || (JSON.stringify(this.state.comics) !== JSON.stringify(nextProps.comics))){
      this.state.comics = this.state.comics.concat(nextProps.comics)
      this.state.page = this.state.page + 1
    }

    if(nextProps.comicError){
      toastr.clear();
      toastr.error(nextProps.comicError);
      this.props.resetComicError()
    }
  }

  loadMore(){
    this.props.getComics(this.state.page)
  }

  showDetails(e){
    e.preventDefault();
  }

  render(){
    const { comics } = this.state
    return(
      <div>
        <Navbar />
        <div className="row">
            {comics.filter((comic=> comic.description)).map((comic, index) => <Card router={this.context.router.history} 
            movie={comic} key={index}/>)}
        </div>
        <a style={{ marginLeft: '47%'}} className="waves-effect waves-light btn"  disabled={this.props.isLoading} onClick={this.loadMore.bind(this)}>Load More</a>
      </div>
    )
  }
}

LandingPage.contextTypes = {
  router: propTypes.object.isRequired
}

const mapStateToProps = ({loader, user, marvel}) => {
  return {
    user: user.user,
    loader: loader.isLoading,
    comics: marvel.comics,
    comicError: marvel.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComics: (page) => dispatch(getComics(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);