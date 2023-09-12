import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <>
            <div className="md:w-1/3 bg-gray-300 rounded-md ml-3">
                <div>
                    <h3 className='text-3xl text-center'>Reading time: {readingTime}</h3>
                </div>
                <div>
                    <h3 className="text-2xl text-center">Bookmarked Blogs: {bookmarks.length}</h3>
                    {
                        bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;