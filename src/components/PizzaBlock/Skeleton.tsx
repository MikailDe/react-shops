import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = props => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={465}
    viewBox='0 0 280 465'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}>
    <circle cx='145' cy='105' r='101' />
    <rect x='-1' y='217' rx='10' ry='10' width='273' height='19' />
    <rect x='0' y='263' rx='0' ry='0' width='280' height='88' />
    <rect x='5' y='378' rx='20' ry='20' width='95' height='30' />
    <rect x='110' y='367' rx='20' ry='20' width='152' height='45' />
  </ContentLoader>
);

export default Skeleton;
