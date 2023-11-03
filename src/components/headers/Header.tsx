export default function Header() {
    return (
        <div className="bg-[#272727] flex flex-row items-center p-2">

            <div className="p-2 ml-2 flex flex-row items-center relative w-3/5">
                <input type="text" placeholder="Search by Podcast Name, Host name, Categories, Tags..." 
                className="p-2.5 w-[49%] rounded-xl placeholder:text-sm placeholder:font-normal"/>
                <img src="/header/search.svg" alt="search icon" className="absolute left-[46%]" />
            </div>

            <div className="w-1/5 mr-12">
                <div className="flex flex-row items-center bg-black rounded-2xl gap-1 w-fit p-2 shadow shadow-[#1EAEA3]">
                    <img src="/header/mobile.svg" alt="mobile" />
                    <span className="tracking-tighter text-[#1EAEA3] font-medium lg:text-base md:text-sm text-xs">Download the app</span>
                </div>
            </div>

            <div className="w-1/5 flex flex-row flex-auto">

                <div className="flex flex-row items-center space-x-8">

                    <div className="flex flex-row items-center space-x-1 bg-[#1EAEA3] py-2 px-3 rounded-xl">
                        <img src="/sidenav/wokpa-podcasters.svg" alt="" />
                        <span className="tracking-tighter font-semibold text-base text-white">SIGN UP</span>
                    </div>

                    <div className="flex flex-row items-center space-x-1 outline rounded-xl outline-white outline-1.5 py-1.5 px-2.5">
                        <img src="/header/user.svg" alt="" />
                        <span className="tracking-tighter font-semibold text-base text-white">LOG IN</span>
                    </div>

                </div>

            </div>


        </div>
    )
}