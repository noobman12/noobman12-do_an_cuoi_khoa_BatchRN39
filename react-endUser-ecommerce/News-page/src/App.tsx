import "./App.css";
import Banner from "./components/Banner";
import Post from "./components/Post";

function App() {
  return (
    <div className='w-[100vw] h-[full]'>
      <Banner />
      <section className='main grid grid-cols-1 lg:grid-cols-2 h-auto w-[100vw] lg:w-[63vw] mx-auto mt-[80px]'>
        <Post image='/public/images/Img-news 1.png' />
        <Post image='/public/images/Img-news 2.png' />
        <Post image='/public/images/Img-news 3.png' />
        <Post image='/public/images/Img-news 4.png' />
        <Post image='/public/images/Img-news 5.png' />
        <Post image='/public/images/Img-news 6.png' />
        <Post image='/public/images/Img-news 7.png' />
        <Post image='/public/images/Img-news 8.png' />
        <Post image='/public/images/Img-news 9.png' />
        <Post image='/public/images/Img-news 10.png' />
      </section>
    </div>
  );
}

export default App;
