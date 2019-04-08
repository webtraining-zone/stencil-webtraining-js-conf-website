import {Component} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <stencil-route-link url='/program'>
          <button>
            Program
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
