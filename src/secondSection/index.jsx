import section21 from "../assets/section21.jpg";
import section22 from "../assets/section22.jpg";

const SecondSection = () => {
  return (
    <div className="main__secondsection">
      <div className="main__secondsection__content">
        <img
          src={section21}
          alt="first image of second section"
          className="main__secondsection__content__image"
        />
        <div className="main__secondsection__wrapdescription">
          <div className="main__secondsection__wrapdescription__content">
            <p className="main__secondsection__wrapdescription__content_title">
              Lorem ipsum
            </p>

            <div className="main__secondsection__wrapdescription__content__pharagraph">
              <p className="main__secondsection__wrapdescription__content__pharagraph__title">
                Excepteur eiusmod consectetur
              </p>
              <p className="main__secondsection__wrapdescription__content__pharagraph__content">
                Proident dolore nisi eiusmod excepteur aliquip esse ut
                excepteur. Non excepteur sunt reprehenderit sit ex ullamco
                eiusmod Lorem incididunt nisi mollit nostrud. Irure velit enim
                elit minim commodo qui culpa cillum duis fugiat consequat
                pariatur.
              </p>
            </div>

            <div className="main__secondsection__wrapdescription__content__pharagraph">
              <p className="main__secondsection__wrapdescription__content__pharagraph__title">
                Quis aliqua reprehenderit
              </p>
              <p className="main__secondsection__wrapdescription__content__pharagraph__content">
                Proident dolore nisi eiusmod excepteur aliquip esse ut
                excepteur. Non excepteur sunt reprehenderit sit ex ullamco
                eiusmod Lorem incididunt nisi mollit nostrud. Irure velit enim
                elit minim commodo qui culpa cillum duis fugiat consequat
                pariatur.
              </p>
            </div>

            <div className="main__secondsection__wrapdescription__content__pharagraph">
              <p className="main__secondsection__wrapdescription__content__pharagraph__title">
                Ad sit cillum amet duis quis commodo
              </p>
              <p className="main__secondsection__wrapdescription__content__pharagraph__content">
                Proident dolore nisi eiusmod excepteur aliquip esse ut
                excepteur. Non excepteur sunt reprehenderit sit ex ullamco
                eiusmod Lorem incididunt nisi mollit nostrud. Irure velit enim
                elit minim commodo qui culpa cillum duis fugiat consequat
                pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile_main__secondsection__content main__secondsection__content">
        <div className="main__secondsection__wrapdescription">
          <div className="main__secondsection__wrapdescription__second__content">
            <p className="main__secondsection__wrapdescription__content_title">
              Mollit aliquip do ipsum consectetur
            </p>
            <p className="main__secondsection__wrapdescription__second__content__pharagraph">
              <span>
                Ex laborum ea qui consectetur mollit commodo eiusmod culpa dolor
                cupidatat. Ullamco dolore irure ea sit elit velit non officia.
                Ad eu reprehenderit in et voluptate mollit. Reprehenderit
                incididunt magna consequat enim sit eiusmod est dolor laborum
                cupidatat
              </span>
              <span>
                Ipsum minim mollit irure dolore. Sint fugiat deserunt dolor aute
                enim et cillum adipisicing cillum nostrud anim. Sit dolore
                incididunt dolore do sunt pariatur consectetur id qui pariatur
                eu incididunt adipisicing. Irure sint fugiat officia veniam
                consectetur. Esse laborum amet aliqua ad in sunt labore duis.
              </span>
            </p>
          </div>
        </div>

        <img
          src={section22}
          alt="second image of second section"
          className="main__secondsection__content__image"
        />
      </div>
    </div>
  );
};

export default SecondSection;
