import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cosmetic.css'
    ;
import { useNavigate } from 'react-router-dom';

const Cosmetic = ({ cosmetic }) => {

    const { picture, price, name, id, brand } = cosmetic;

    const navigate = useNavigate();

    return (
        <div className='cosmetic-main-container mx-auto my-10 drop-shadow-xl' >
            <img className='h-80 pt-4 mx-auto' src={picture} alt="" />
            <div className="product-info pt-6">
                <p><strong>Name:  </strong>{name}</p>
                <p><strong>Brand:  </strong>{brand}</p>



            </div>
            <button onClick={() => navigate(`/cosmetic/${id}`)} className='btn-btn'>
                <span className='pl-32 pr-5'> See Details</span>
                <FontAwesomeIcon className='text-xl' icon={faArrowCircleRight}></FontAwesomeIcon></button>
            {/* <button className='btn-btn'><span className='pl-32 pr-5'> Add To Cart</span> <FontAwesomeIcon className='pt-1' icon={faCartShopping}></FontAwesomeIcon></button> */}
        </div >
    );
};

export default Cosmetic;