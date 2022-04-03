
import './Home.css'
import useCosmetics from '../../hooks/useCosmetics';
import Cosmetic from '../Cosmetic/Cosmetic';
import { useContext } from 'react';
import { CosmeticContext } from '../../App';


const Home = () => {
    // const [cosmetics, setCosmetics] = useCosmetics([]);
    const [cosmetics, setCosmetics] = useContext(CosmeticContext);

    return (
        <div>
            <h1 className='text-5xl text-orange-700 drop-shadow-lg font-serif font-extrabold pt-10 pb-10 bg-orange-200'>Orange Cosmetics</h1>

            <div className="cosmetics-container grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gradient-to-r from-orange-200 to-orange-600">
                {
                    cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic} ></Cosmetic>)
                }
            </div>

        </div>
    );
};

export default Home;