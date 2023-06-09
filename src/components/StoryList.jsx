import Story from "./Story.jsx";
import {IconContext} from "react-icons";
import {IoTriangleSharp} from "react-icons/io5";
import axios from "axios";
import {useQuery} from "react-query";

function StoryList() {

    const {isSuccess, isLoading, isError, data: storyids, error, refetch} = useQuery(["mydata"], () =>
        axios
            .get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy=\"$priority\"&limitToFirst=50")
            .then((res) => res.data)
    );


    return (
        <>
            <div className={"bg-tanish min-h-screen text-gray-500 font-medium pt-3 pl-2"}>
                <ol className=" ">
                    {storyids?.map((storyId, index) => {
                        return (
                            <div key={index} className={"list-decimal list-inside text-sm"}>
                                <li>
                                    <div className={"inline-flex"}>
                                        <button>
                                            <IconContext.Provider value={{size: "8px", className: "top-react-icons"}}>
                                                <IoTriangleSharp/><span></span>
                                            </IconContext.Provider>
                                        </button>
                                    </div>
                                    <div className={"inline-flex pl-1 text-black font-normal"}>
                                        <Story storyId={storyId}/>
                                    </div>
                                </li>
                            </div>
                        )
                    })}
                </ol>
            </div>
        </>
    );
}

export default StoryList;