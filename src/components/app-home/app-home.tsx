import {Component} from '@stencil/core';
import {HomeMap} from '../app-home-hero/app-home-hero';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: false,
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        {/*<HomeHero/>*/}
        <HomeMap/>
        {/*<HomeQuestions/>*/}
      </div>
    );
  }
}
