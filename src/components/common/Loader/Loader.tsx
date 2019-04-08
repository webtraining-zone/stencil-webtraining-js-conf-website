import {Component} from '@stencil/core';

@Component({
  tag: 'app-loader',
  styleUrl: 'Loader.scss',
})
export class Loader {
  render() {
    return (
      <div class="app-loading">
        <div class="logo">
          Conference
        </div>
        <svg class="spinner" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"
                  strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      </div>
    );
  }

};
