import { Item } from "semantic-ui-react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import loader from "../assets/Broken circle.gif";

const GET_RECENT_FEED = gql`
  query GetRecentFeed {
    newsModels(last: 361) {
      id
      newsHeadline
      newsSlug
      newsBrief
      newsThumbnail {
        url
      }
      publishedDate
    }
  }
`;

const NewsFeed = () => {
  const { loading, error, data } = useQuery(GET_RECENT_FEED);

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
        {data.newsModels.map((item) => {
          const list = (
            <>
              <Item key={item.id}>
                <Item.Image size="tiny" src={item.newsThumbnail.url} />
                <Item.Content
                  header={item.newsHeadline}
                  meta={item.publishedDate}
                />
                <Link to={`/feed/${item.newsSlug}`}>Read</Link>
              </Item>
            </>
          );

          return list;
        })}
      </Item.Group>
      <Link to={"/media-center"} className="button is-danger is-pulled-right">
        More news
      </Link>
    </div>
  );
};

export default NewsFeed;
