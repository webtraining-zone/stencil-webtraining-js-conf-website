import {Component} from '@stencil/core';

@Component({
  tag: 'app-program',
})
export class AppProgram {

  render() {

    return (
      <div>
        <h1>Program</h1>
        <app-program-agenda/>
      </div>
    );
  }
};
