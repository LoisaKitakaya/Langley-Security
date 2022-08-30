import { Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";

import service from "../json/services.json";

const ServicesContainer = () => {
  return (
    <div className="is-flex is-justify-content-space-between services-container">
      {service.map((srvc) => {
        const list = (
          <>
            <div key={srvc.id}>
              <Popup
                wide
                position="top center"
                content={srvc.description}
                trigger={
                  <Link to={`/services/${srvc.slug}`}>
                    <div className="card card-shadow card-hover m-3">
                      <div className="card-image">
                        <img
                          className="image"
                          src={srvc.thumbnail}
                          alt={srvc.headerOne}
                        />
                      </div>
                      <div class="card-content has-background-red">
                        <p class="content has-text-weight-bold has-text-light has-text-centered is-size-5">
                          {srvc.alias}
                        </p>
                      </div>
                    </div>
                  </Link>
                }
              />
            </div>
          </>
        );

        return list;
      })}
    </div>
  );
};

export default ServicesContainer;
