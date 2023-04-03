import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalTestimonial({ block, dataBinding }) {
  return (
    <section className="cards" data-cms-bind={dataBinding}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <div className="testimonial-content">
              <h2>
                {block.title} <span> {block.title_suffix}</span>
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {block.slider.map((slide, i) => (
            <div
              className="col-lg-4 col-md-6 mb-5"
              key={i}
              data-cms-bind={dataBinding ? `${dataBinding}.slider[${i}]` : null}
            >
            <div key={slide} className="card" >
            <img className="card-img-top" style={{width: '355px', height: '300px', objectFit: 'cover'}} src={slide.image} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{slide.author}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Saber mais</a>
            </div>
          </div>

           










             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
