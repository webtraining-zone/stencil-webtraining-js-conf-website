import {Component} from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {

  render() {
    return (
      <div>
        <app-header/>

        <main>
          <stencil-router id="router">
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true}/>
              <stencil-route url='/program' component='app-program' exact={true}/>
              <stencil-route url='/program/talk/:slug'
                             component='app-program-talk-detail'/>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
