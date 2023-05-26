import './App.css'
import Header from "./components/Header.jsx";
import Story from "./components/Story.jsx";
import StoryList from "./components/StoryList.jsx";
import Footer from "./components/Footer.jsx";
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()
function App() {
    const data = [{
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8863,
        "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
        "score" : 111,
        "time" : 1175714200,
        "title" : "My YC app: Dropbox - Throw away your USB drive",
        "type" : "story",
        "url" : "http://www.getdropbox.com/u/2/screencast.html"
    },
        {
            "by" : "dhouston",
            "descendants" : 71,
            "id" : 8864,
            "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
            "score" : 999,
            "time" : 1175714200,
            "title" : "PyPI Was Subpoenaed",
            "type" : "story",
            "url" : "http://www.getdropbox.com/u/3/screencast.html"
        }]

  return (
    <>
        <QueryClientProvider client={queryClient}>
            <div className={"bg-white min-h-screen md:pt-2 md:pl-24 md:pr-24"}>
                <Header />
                <StoryList/>
                <Footer />
            </div>
        </QueryClientProvider>


    </>
  )
}

export default App
