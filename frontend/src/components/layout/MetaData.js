import { Helmet } from 'react-helmet';
//  Helmet is used for SEO

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - QuintShop`}</title>
    </Helmet>
  );
};

export default MetaData;
