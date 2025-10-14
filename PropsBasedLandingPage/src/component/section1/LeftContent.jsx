import 'remixicon/fonts/remixicon.css';
import HeroText from './HeroText';
import LeftArrow from './LeftArrow';

const LeftContent = () => {
    return (
        <div className='h-full w-1/3 flex flex-col justify-between'>
            <HeroText />
            <LeftArrow />
        </div>
    )
}

export default LeftContent