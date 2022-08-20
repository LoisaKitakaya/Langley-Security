import { Item, Icon } from "semantic-ui-react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import loader from "../assets/Broken circle.gif";

const GET_ALL_Articles = gql`
  query GetAllArticles {
    articles {
      id
      title
      articleSlug
      articleCaption
      articleThumbnail {
        url
      }
      publishedDate
    }
  }
`;

const AllArticles = () => {
  const { loading, error, data } = useQuery(GET_ALL_Articles);

  if (loading)
    return (
      <div className="has-text-centered is-flex is-justify-content-center is-align-items-center p-6">
        <img src={loader} alt="loader" />
        <p className="is-size-4 ml-3 has-text-dark">loading ....</p>
      </div>
    );

  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Item.Group>
        {data.articles.map((item) => {
          const list = (
            <>
              <Item key={item.id}>
                <Item.Image size="small" src={item.articleThumbnail.url} />

                <Item.Content>
                  <Item.Header as={Link} to={`/blog/${item.articleSlug}`}>
                    <div className="is-flex is-align-items-center is-justify-content-space-between">
                      <Icon
                        name="linkify"
                        size="small"
                        className="has-text-grey"
                      />
                      {item.title}
                    </div>
                  </Item.Header>
                  <Item.Description>{item.articleCaption}</Item.Description>
                  <Item.Meta>{item.publishedDate}</Item.Meta>
                </Item.Content>
              </Item>
            </>
          );

          return list;
        })}
      </Item.Group>
    </div>
  );
};

export default AllArticles;
