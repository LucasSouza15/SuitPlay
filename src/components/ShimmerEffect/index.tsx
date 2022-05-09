import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

import {ContainerShimmer} from './styles';

const ShimmerEffect: React.FC = () => {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <>
      <ContainerShimmer>
        <ShimmerPlaceHolder width={90} height={20} />
      </ContainerShimmer>
    </>
  );
};

export default ShimmerEffect;
