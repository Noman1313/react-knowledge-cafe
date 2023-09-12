import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  //add to bookmark
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  //add to time
  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead = (time, id) => {
    // console.log('add read', time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    //remove book mark
    // console.log('remone', id);
    const remaining = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remaining);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-screen-lg mx-auto mt-8'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
