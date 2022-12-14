import { Item, Icon } from "semantic-ui-react";
import { gql, useQuery } from "@apollo/client";

import loader from "../assets/loader.gif";

const GET_RECENT_FEED = gql`
  query GetRecentFeed {
    newsModels(last: 3, orderBy: createdAt_DESC) {
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
                <a href={`/feed/${item.newsSlug}`} className="view-news-link">
                  Read more
                </a>
              </Item>
            </>
          );

          return list;
        })}
      </Item.Group>
      <a href="/resource-center" className="button is-red this-btn btn-fluid">
        <strong>More news</strong> <Icon name="newspaper" />
      </a>
    </div>
  );
};

export default NewsFeed;
