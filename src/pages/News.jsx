import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Container, Image, Breadcrumb, Icon } from "semantic-ui-react";

import PageTitle from "../PageTitle";

import loader from "../assets/loader.gif";

const GET_ARTICLE = gql`
  query GetNews($slug: String!) {
    newsModel(where: { newsSlug: $slug }) {
      newsHeadline
      newsThumbnail {
        url
      }
      content {
        html
      }
      publishedDate
    }
  }
`;

const News = () => {
  const slug = useParams();

  PageTitle(`${slug.slug}`);

  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: { slug: slug.slug },
  });

  if (loading)
    return (
      <div className="has-text-centered is-flex is-justify-content-center is-align-items-center p-6 load-container">
        <img src={loader} alt="loader" />
        <p className="is-size-4 ml-3 has-text-dark">loading ....</p>
      </div>
    );

  if (error) return `Error! ${error.message}`;

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
            <Breadcrumb.Section link as={Link} to={"/resource-center"}>
              Resources
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>
              {data.newsModel.newsHeadline}
            </Breadcrumb.Section>
          </Breadcrumb>
        </div>
      </Container>
      {/* breadcrumb */}

      {/* article */}
      <Container>
        <div className="p-3 mb-6 card-shadow rounded has-background-light">
          <div className="is-flex is-justify-content-space-between is-align-items-center mb-3 pl-3 pr-3">
            <p className="has-text-grey">
              <span className="to-hide">Title:</span>{" "}
              {data.newsModel.newsHeadline}
            </p>
            <p className="has-text-grey">
              <span className="to-hide">Date published:</span>{" "}
              {data.newsModel.publishedDate}
            </p>
          </div>
          <Image
            src={data.newsModel.newsThumbnail.url}
            fluid
            className="rounded mb-6"
          />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.newsModel.content.html }}
          />
        </div>
      </Container>
      {/* article */}

      {/* author */}
      {/* <Container>
        <div className="p-3 mb-6 card-shadow rounded has-background-light">
          <Item.Group>
            <Item>
              <Item.Image
                size="small"
                src={data.newsModel.companyAuthor.authorImage.url}
              />

              <Item.Content>
                <Item.Meta>
                  <span className="is-size-6 has-text-grey">
                    About the author
                  </span>
                </Item.Meta>
                <Item.Header>
                  {data.newsModel.companyAuthor.authorName}
                </Item.Header>
                <Item.Description>
                  <p>{data.newsModel.companyAuthor.authorBio}</p>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </div>
      </Container> */}
      {/* author */}
    </div>
  );
};

export default News;
