import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour
            key={tour.id}
            image={tour.image}
            date={tour.date}
            title={tour.title}
            info={tour.info}
            location={tour.location}
            cost={tour.cost}
            duration={tour.duration}
          />
        ))}
      </div>
    </section>
  );
};

export default Tours;