// import Ico from '../assets/zeus-assets/logo/ico.png'
// import Image from 'next/image'
import {
    BookmarkIcon
} from "@heroicons/react/solid";

const Logo = () => {
    return (
        <>
            <a className="text-lg font-medium flex items-center" href="#">
                <BookmarkIcon className='h-6 text-red-500' />
                <span className='ml-2 font-bold'>dailyQ</span>
                {/* <Image className="h-7 rounded-full" src={Ico} height={60} width={60} alt="" /> */}
            </a>
        </>
    )
}

export default Logo
