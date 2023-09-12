import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    // console.log(blog);
    const { title, cover, author, author_img, posted_date, reading_time, hashtags, id} = blog;
    return (
        <div className='mb-14 space-y-4'>
            <img className='w-full rounded-md' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h4 className='text-2xl'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h3 className='text-3xl'>{title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a> </span>)
                }
            </p>
            <button
                onClick={()=> handleMarkAsRead(reading_time, id)}
                className='text-purple-800 font-semibold underline'
            >Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;



// https://blog.logrocket.com/validate-react-props-proptypes/