import section11 from "../assets/section11.png";
import section12 from "../assets/section12.png";

const FisrtSection = () => {
  return (
    <div className="main__firstsection">
      <p className="main__firstsection__title">Lorem ullamco</p>
      <div className="main__firstsection__content">
        <img
          src={section11}
          alt="first image of first section"
          className="main__firstsection__content__image"
        />
        <img
          src={section12}
          alt="second image of first section"
          className="main__firstsection__content__image"
        />
      </div>
      <p className="main__firstsection__description">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur
          eiusmod consectetur proident Lorem reprehenderit esse do anim velit in
          aliquip dolore ut officia. Consectetur reprehenderit proident do
          exercitation eu. Sunt fugiat pariatur elit est laboris quis. Esse
          mollit incididunt quis amet. Qui non irure incididunt laborum nisi
          cillum consequat aliquip aliquip cillum in. Ut excepteur labore
          voluptate tempor cupidatat dolor eiusmod do ipsum Lorem cupidatat do
          labore.
        </span>
        <span>
          Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur. Non
          excepteur sunt reprehenderit sit ex ullamco eiusmod Lorem incididunt
          nisi mollit nostrud. Irure velit enim elit minim commodo qui culpa
          cillum duis fugiat consequat pariatur.
        </span>
      </p>
    </div>
  );
};

export default FisrtSection;
