import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useEffect, useState } from 'react';
import './CosmeticDetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import { CosmeticContext } from '../App';

const CosmeticDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [cosmetics, setCosmetics] = useContext(CosmeticContext);

    const cosmetic = cosmetics.find(cosmetic => cosmetic.id === id);



    // const [cosmetic, setCosmetic] = useState([]);
    // console.log(cosmetic);
    // useEffect(() => {
    //     const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setCosmetic(data[0]));
    // }, [brand]);
    return (
        <div>
            <div className='btn'>
                <button onClick={() => navigate(-1)} className='flex justify-start items-center ml-20 pt-14 text-2xl'>
                    <FontAwesomeIcon className='mr-2 text-3xl' icon={faArrowCircleLeft}></FontAwesomeIcon>
                    <p>Back</p>
                </button>
            </div>



            <div className="info">
                <img className='h-80 mx-auto' src={cosmetic.picture} alt="" />
                <p><strong>Name:</strong> {cosmetic.name}</p>
                <p><strong>Brand:</strong> {cosmetic.brand}</p>
                <p><strong>Price:</strong> {cosmetic.price}</p>
                <p><strong>Product_type:</strong> {cosmetic.description}</p>
            </div>
        </div>
    );
};

export default CosmeticDetails;