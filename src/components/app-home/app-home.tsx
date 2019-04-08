import {Component} from '@stencil/core';
import {HomeHero} from '../app-home-hero/app-home-hero';
import {HomeQuestions} from '../app-home-questions/app-home-questions';
import {HomeMap} from '../app-home-map/app-home-map';

@Component({
  tag: 'app-home',
  styleUrls: ['app-home.scss', '../app-home-hero/app-home-hero.scss'],
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <HomeHero/>
        <HomeMap/>
        <HomeQuestions/>
      </div>
    );
  }
}
