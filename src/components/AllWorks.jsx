import WorksSlider from "./WorksSlider";
import LongVideo1 from "../assets/videos/long_video/1.2 Split Screen Effect.mp4"
import LongVideo2 from "../assets/videos/long_video/Editing breakdown.mp4"
import LongVideo3 from "../assets/videos/long_video/Chatgpt memory update.mp4"
import LongVideo4 from "../assets/videos/long_video/AI Tools.mp4"
import ShortVideo1 from "../assets/videos/short_video/Animators.mp4"
import ShortVideo2 from "../assets/videos/short_video/Deep Fake Tiktok.mp4"
import ShortVideo3 from "../assets/videos/short_video/Flux Tiktok.mp4"
import ShortVideo4 from "../assets/videos/short_video/Sales Ai Tiktok.mp4"

const AllWorks = () => {
  const slider1Videos = [
    { id: 1, src: LongVideo1 },
    { id: 2, src: LongVideo2 },
    { id: 3, src: LongVideo3 },
    { id: 4, src: LongVideo4 },
    { id: 5, src: LongVideo1 },
    { id: 6, src: LongVideo2 },
    { id: 7, src: LongVideo3 },
    { id: 8, src: LongVideo4 },
  ];

  const slider2Videos = [
    { id: 1, src: ShortVideo1 },
    { id: 2, src: ShortVideo2 } ,
    { id: 3, src: ShortVideo3 },
    { id: 4, src: ShortVideo4 },
    { id: 5, src: ShortVideo1 },
    { id: 6, src: ShortVideo2 },
    { id: 7, src: ShortVideo3 },
    { id: 8, src: ShortVideo4 },
  ];

  const slider3Videos = [
    { id: 1, src: LongVideo1 },
    { id: 2, src: LongVideo2 },
    { id: 3, src: LongVideo3 },
    { id: 4, src: LongVideo4 },
    { id: 5, src: LongVideo1 },
    { id: 6, src: LongVideo2 },
    { id: 7, src: LongVideo3 },
    { id: 8, src: LongVideo4 },
  ];

  return (
    <div>
        <div className="py-20">
            <div className="slider-section mb-8">
                <h2 className="text-3xl font-semibold text-center">Youtube Videos</h2>
                <WorksSlider videos={slider1Videos} videoClass="bg-black  h-64 w-full" />
            </div>

            <div className="slider-section mb-8">
                <h2 className="text-3xl font-semibold text-center">Instagrum Reels</h2>
                <WorksSlider videos={slider2Videos} videoClass="h-auto w-40 mx-auto" />
            </div>

            <div className="slider-section mb-8">
                <h2 className="text-3xl font-semibold text-center">Music Videos</h2>
                <WorksSlider videos={slider3Videos} videoClass="bg-black  h-64 w-full" />
            </div>
        </div>
    </div>
  );
};

export default AllWorks;
