import { Container, Breadcrumb, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import IntroBanner from "../components/IntroBanner";
import PitchContainer from "../components/PitchContainer";

import industryCards from "../industry.json";

let image =
  "https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let header = "Solutions for Your Industry Needs";
let caption =
  "We’d like to understand your goals and challenges so we can provide you with tailored, industry-specific solutions.";

const Industries = () => {
  return (
    <div className="page">
      {/* breadcrumb */}
      <Container>
        <div className="mt-3 mb-3 ml-3">
          <Breadcrumb>
            <Breadcrumb.Section link as={Link} to={"/"}>
              <Icon name="home" /> Home
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>Industries</Breadcrumb.Section>
          </Breadcrumb>
        </div>
      </Container>
      {/* breadcrumb */}

      {/* intro */}
      <IntroBanner image={image} header={header} caption={caption} />
      {/* intro */}

      {/* industries */}
      <div className="has-background-dark has-text-light p-6 mb-6 reframe-2">
        <Container>
          <div className="is-flex is-flex-wrap-wrap is-justify-content-space-around">
            <h4 className="is-size-4 has-text-centered mb-3 mt-3">
              Langley Security provides customized security solutions to meet
              the unique needs of industries such as:
            </h4>
            {industryCards.map((card) => {
              const list = (
                <>
                  <Link
                    key={card.id}
                    to={`/industries/${card.slug}`}
                    className=" industry-card mb-3 mt-3 card-shadow card-hover"
                  >
                    <div className="card">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img src={card.image_one} alt={card.title} />
                        </figure>
                      </div>
                      <div class="card-content has-background-red">
                        <p class="content has-text-weight-bold has-text-light has-text-centered is-size-5">
                          {card.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                </>
              );

              return list;
            })}
          </div>
        </Container>
      </div>
      {/* industries */}

      {/* pitch */}
      <PitchContainer />
      {/* pitch */}
    </div>
  );
};

export default Industries;
