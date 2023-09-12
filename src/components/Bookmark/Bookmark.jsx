import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-50 rounded-md p-4 m-4'>
            <h3 className='text-lg'>{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;