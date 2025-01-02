import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";;

const Clients = () => {
  const clients = [
    { name: "Behance", logo: "https://cdn.worldvectorlogo.com/logos/behance-2.svg" },
    { name: "Trello", logo: "https://cdn.worldvectorlogo.com/logos/trello.svg" },
    { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
    { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-1.svg" },
    { logo: "https://cdn.worldvectorlogo.com/logos/upwork.svg" },
    { name: "Fiverr", logo: "https://cdn.worldvectorlogo.com/logos/fiverr.svg" },
  ];

  return (
    <section className="bg-slate-900 text-white py-12 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Content Creation And Strategy</h2>
        <p className="text-gray-300 text-lg mb-8">
          High-quality, engaging content across blogs, videos, and graphics designed to captivate and retain audiences.
        </p>
      </div>

      {/* Splide Carousel */}
      <div className="mx-auto">
        <Splide
          options={{
              type: "loop",
              autoplay: false,
              interval: 3000,
              perPage: 5, // Default perPage for large screens
              perMove: 1,
              gap: "1rem",
              arrows: false,
              pagination: false,
              breakpoints: {
              640: { perPage: 1 }, 
              1024: { perPage: 2 }, 
              1200: { perPage: 5 }, 
              },
              autoScroll: { speed: 0.5 },
          }}
          extensions={{ AutoScroll }}
          className="flex items-center"
        >
          {clients.map((client, index) => (
            <SplideSlide key={index} className="flex justify-center">
              <div className="flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 mx-auto"
                  title={client.name}
                />
                <h3>{ client.name }</h3>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Clients;

  