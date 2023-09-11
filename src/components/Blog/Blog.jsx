import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    // console.log(blog);
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
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
                </div>
            </div>
            <h3 className='text-3xl'>{title}</h3>
            {/* <p>#{hashtags[0]} #{hashtags[1]}</p>  */}
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a> </span>)
            }
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired
}
export default Blog;



// https://blog.logrocket.com/validate-react-props-proptypes/