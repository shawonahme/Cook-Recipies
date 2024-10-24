

import PropTypes from 'prop-types';

const Ingreditent = ({item}) => {
    return (
        <ul className='text-gray-500 '>
            <li className='py-1'>{item}</li>
        </ul>
    );
};

Ingreditent.propTypes = {
    item: PropTypes.array 
};

export default Ingreditent;