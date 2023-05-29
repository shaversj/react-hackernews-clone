import logo from '../assets/logo-p.png'

function Header() {
    return (
        <div>
            <div className={"bg-orange flex items-center"}>
                <div className={"ml-[2px] border border-white"}>
                    <img className={"w-[20px] h-[20px] md:w-[18px] md:h-[18px]"} src={logo} alt={""}/>
                </div>

                <div className={"pl-2"}>
                    <h1 className={"font-bold md:inline"}>Hacker News</h1>
                    <div className={"text-[12.5px] md:text-[13.5px] -mt-0.5 md:inline md:pl-2"}>
                        <button><span>topStories</span></button>
                        <span title={"divide"}> | </span>
                        <button><span>past</span></button>
                        <span title={"divide"}> | </span>
                        <button><span>comments</span></button>
                        <span title={"divide"}> | </span>
                        <button><span>ask</span></button>
                        <span title={"divide"}> | </span>
                        <button><span>show</span></button>
                        <span title={"divide"}> | </span>
                        <button><span>jobs</span></button>
                        <span title={"divide"}> | </span>
                        <button><span>submit</span></button>
                    </div>

                </div>
                <div className={"ml-auto pr-2 text-[12.5px]"}>
                    <button>login</button>
                </div>
            </div>

        </div>

    );
}

export default Header;