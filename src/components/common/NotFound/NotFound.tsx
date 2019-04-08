import {FunctionalComponent} from '@stencil/core';

interface NotFoundProps {

}

export const NotFound: FunctionalComponent<NotFoundProps> = () => {
  return (
    <div class="container mt-4">
      <h1>Not found!</h1>
    </div>
  );
};
