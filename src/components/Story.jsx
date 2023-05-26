import * as URI from "urijs";
import {useQuery} from "react-query";
import axios from "axios";
import {useState} from "react";

function Story({storyId}) {

    const getStoryURL = `https://hacker-news.firebaseio.com/v0/item/` + `${storyId}` + `.json`

    const {isSuccess, data: story} = useQuery([{storyId}], () =>
        axios
            .get(getStoryURL)
            .then((res) => res.data)
    );


    return (
        <>
            {story && (<div className={"text-sm"}>
                <a href={story.url}>{story.title}</a>
                <a className={"text-[11px] text-gray-500"}> { story.url && URI(story.url).domain()})</a>
                <div className={"text-[10px] leading-3 line- text-gray-500"}>
            <span>{story.score} points by <button>{story.by}</button> <span>
            </span> <button>{new Date(story.time).getHours()} hours ago </button> |</span>
                    <span> <button>hide</button> | </span>
                    <span><button>{story.descendants} comments</button></span>
                </div>
            </div>)}
        </>

    );
}

export default Story;