const ServiceList = ({ data }) => {
  return (
    <div className="card has-background-light is-fullheight has-text-left card-shadow">
      <div className="card-header">
        <p class="card-header-title is-size-4 has-text-centered">
          {data.alias} offered by Langley Security:
        </p>
      </div>
      <div className="card-content">
        <div className="content">
          <ul>
            {data.services.map((service) => {
              const list = (
                <>
                  <br />
                  <li key={service.id}>
                    <strong>{service.name}:</strong> {service.description}
                  </li>
                  <br />
                </>
              );

              return list;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
