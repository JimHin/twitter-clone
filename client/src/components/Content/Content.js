import PropTypes from 'prop-types';

import Card from '../Card/Card';

function Content({ tweets }) {
  return tweets.map((item) => {
    return <Card tweet={item} key={item.id}/>;
  });
}

Content.propTypes = {
  tweets: PropTypes.array.isRequired,
};
export default Content;
