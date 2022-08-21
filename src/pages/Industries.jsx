import { Container, Breadcrumb, Icon, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";

import IntroBanner from "../components/IntroBanner";
import PitchContainer from "../components/PitchContainer";

let image =
  "https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let header = "Solutions for Your Industry Needs";
let caption =
  "We’d like to understand your goals and challenges so we can provide you with tailored, industry-specific solutions.";

const industryCards = [
  {
    image:
      "https://images.pexels.com/photos/3646913/pexels-photo-3646913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Commercial real estate",
    slug: "commercial-real-estate",
  },
  {
    image:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Construction",
    slug: "construction",
  },
  {
    image:
      "https://images.pexels.com/photos/9552902/pexels-photo-9552902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Distribution & logistics",
    slug: "distribution-&-logistics",
  },
  {
    image:
      "https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Education",
    slug: "education",
  },
  {
    image:
      "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Healthcare",
    slug: "healthcare",
  },
  {
    image:
      "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Finance",
    slug: "finance",
  },
  {
    image:
      "https://images.pexels.com/photos/265884/pexels-photo-265884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Hotel & hospitality",
    slug: "hotel-&-hospitality",
  },
  {
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Residential",
    slug: "residential",
  },
  {
    image:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Retail",
    slug: "retail",
  },
  {
    image:
      "https://images.pexels.com/photos/172074/pexels-photo-172074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Transport",
    slug: "transport",
  },
  {
    image:
      "https://images.pexels.com/photos/207541/pexels-photo-207541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Utility",
    slug: "utility",
  },
  {
    image:
      "https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Hight tech & telecom",
    slug: "high-tech-&-telecom",
  },
];

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
            {industryCards.map((card, index) => {
              const list = (
                <>
                  <Link
                    key={index}
                    to={`/industries/${card.slug}`}
                    className=" industry-card mb-3 mt-3 card-shadow card-hover"
                  >
                    <Popup
                      wide
                      position="top center"
                      content={`Security solutions for the ${card.title} sector`}
                      trigger={
                        <div className="card">
                          <div class="card-image">
                            <figure class="image is-4by3">
                              <img src={card.image} alt={card.title} />
                            </figure>
                          </div>
                          <div class="card-content has-background-red">
                            <p class="content has-text-weight-bold has-text-light has-text-centered is-size-5">
                              {card.title}
                            </p>
                          </div>
                        </div>
                      }
                    />
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
