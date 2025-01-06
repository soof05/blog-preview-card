import blogImage from '../assets/BlogImage.png'


export default function () {
    return (
        <div className="flex items-center justify-center bg-white rounded-lg border border-gray-950">
            <div className="flex flex-col m-5">
                <div>
                    <img src={blogImage} alt='blog image' />
                </div>
                <p className='bg-customYellow w-[72px] h-[]'>Learning</p>
            </div>
        </div>
    )
}