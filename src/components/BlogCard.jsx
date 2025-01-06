import blogImage from '../assets/BlogImage.png'
import userPic from '../assets/userpic.png'


export default function () {
    return (
        <div className="flex items-center justify-center bg-white rounded-2xl border border-gray-950 w-[327px] shadow-[8px_8px_0px_0px_rgba(17,17,17)]">
            <div className="flex flex-col gap-5 m-5">
                <div>
                    <img src={blogImage} alt='blog image' />
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='bg-customYellow w-[90px] h-[35px] flex items-center justify-center rounded-md'>
                        <p className='font-bold'>Learning</p>
                    </div>
                    <p className='text-base'>Published 21 Dec 2023</p>
                    <h1 className='font-extrabold text-2xl hover:text-customYellow'>HTML & CSS foundations</h1>
                    <p className='text-wrap'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
                </div>
                <div className='flex flex-row gap-2'>
                    <img src={userPic}/>
                    <p className='font-extrabold text-lg'>Greg Hooper</p>
                </div>
            </div>
        </div>
    )
}