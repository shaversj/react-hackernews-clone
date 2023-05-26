
function Footer(props) {
    return (
        <>
            <div className={"border-t-2 border-orange"}>
                <div className={"bg-tanish grid place-items-center"}>
                    <div className={"pt-3"}>
                        <a className={"text-[14px]"} href={"https://www.ycombinator.com/apply/"}>Applications are open for YC Summer 2023</a>

                    </div>
                    <div className={"text-xs pt-4"}>
                        <button><span>Guidelines</span></button><span title={"divide"}> | </span>
                        <button><span>FAQ</span></button><span title={"divide"}> | </span>
                        <button><span>Lists</span></button><span title={"divide"}> | </span>
                        <button><span>API</span></button><span title={"divide"}> | </span>
                        <button><span>Security</span></button><span title={"divide"}> | </span>
                        <button><span>Legal</span></button><span title={"divide"}> | </span>
                        <button><span>Apply to YC</span></button><span title={"divide"}> | </span>
                        <button><span>Contact</span></button>
                        <p className={"text-[15px] text-gray-500 text-center pt-4 pb-8"}><span>Search: </span>
                            <input
                                type={"search"}
                                className={"bg-white border border-gray-400 h-6"}

                            />
                        </p>

                    </div>
                </div>

            </div>

        </>
    );
}

export default Footer;