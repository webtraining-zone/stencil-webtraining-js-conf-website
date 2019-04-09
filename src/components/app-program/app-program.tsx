import {Component} from '@stencil/core';
// import {RouterHistory} from '@stencil/router';

@Component({
  tag: 'app-program',
})
export class AppProgram {
  // @Prop() history?: RouterHistory;

  render() {

    return (
      <div>
        <app-program-agenda />
      </div>
    );
  }
}

