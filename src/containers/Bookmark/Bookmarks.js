import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import toastr from 'toastr';
import { getBookmarks, deleteBookmark } from '../../actions/bookmark';
import Card from '../../components/card';
import Navbar from '../../components/navbar'

class BookmarksPage extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
      this.props.getBookmarks()
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.bookmarkError){
      toastr.clear();
      toastr.error(nextProps.bookmarkError);
    }
  }

  render(){
    const { bookmarks } = this.props
    return(
      <div>
        <Navbar />
        <div className="row">
            {bookmarks && bookmarks.length > 0 ?bookmarks.map((bookmark, index) => <Card movie={bookmark.comic} 
              router={this.context.router.history}
              key={index} 
              id={bookmark.id} 
              deleteBookmark={((id)=>this.props.deleteBookmark(id)).bind(this)}/>):
            <h2 style={{position: 'absolute', top: '50%', bottom: '50%', transform: 'translateX(40%)'}}>You currently have no movie saved</h2>
        }
        </div>
      </div>
    )
  }
}

BookmarksPage.contextTypes = {
  router: propTypes.object.isRequired
}

const mapStateToProps = ({loader, user, marvel, bookmark}) => {
  return {
    user: user.user,
    loader: loader.isLoading,
    bookmarks: bookmark.bookmarks,
    bookmarkError: bookmark.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBookmarks: () => dispatch(getBookmarks()),
    deleteBookmark: (id) => dispatch(deleteBookmark(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarksPage);