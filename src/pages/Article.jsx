import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Container, Image, Item, Breadcrumb, Icon } from "semantic-ui-react";

import PageTitle from "../PageTitle";

import loader from "../assets/loader.gif";

const GET_ARTICLE = gql`
  query GetArticle($slug: String!) {
    article(where: { articleSlug: $slug }) {
      id
      title
      articleThumbnail {
        url
      }
      content {
        html
      }
      companyAuthor {
        authorName
        authorBio
        authorImage {
          url
        }
      }
      publishedDate
    }
  }
`;

const Article = () => {
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
            <Breadcrumb.Section active>{data.article.title}</Breadcrumb.Section>
          </Breadcrumb>
        </div>
      </Container>
      {/* breadcrumb */}

      {/* article */}
      <Container>
        <div className="p-3 mb-6 card-shadow rounded has-background-light">
          <div className="is-flex is-justify-content-space-between is-align-items-center mb-3 pl-3 pr-3">
            <p className="has-text-grey">
              <span className="to-hide">Title:</span> {data.article.title}
            </p>
            <p className="has-text-grey">
              <span className="to-hide">Date published:</span>{" "}
              {data.article.publishedDate}
            </p>
          </div>
          <Image
            src={data.article.articleThumbnail.url}
            fluid
            className="rounded mb-6"
          />
          <div
            className="is-size-5 content"
            dangerouslySetInnerHTML={{ __html: data.article.content.html }}
          />
        </div>
      </Container>
      {/* article */}

      {/* author */}
      <Container>
        <div className="p-3 mb-6 card-shadow rounded has-background-light">
          <Item.Group>
            <Item>
              <Item.Image
                size="small"
                src={data.article.companyAuthor.authorImage.url}
              />

              <Item.Content>
                <Item.Meta>
                  <span className="is-size-6 has-text-grey">
                    About the author
                  </span>
                </Item.Meta>
                <Item.Header>
                  {data.article.companyAuthor.authorName}
                </Item.Header>
                <Item.Description>
                  <p>{data.article.companyAuthor.authorBio}</p>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </div>
      </Container>
      {/* author */}
    </div>
  );
};

export default Article;
