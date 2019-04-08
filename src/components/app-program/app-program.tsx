import {Component} from '@stencil/core';

@Component({
  tag: 'app-program',
})
export class AppProgram {

  render() {

    return (
      <div>
        <app-program-agenda/>
      </div>
    );
  }
}
