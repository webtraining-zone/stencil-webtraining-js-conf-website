import API from '../../config/API';
import FixUtils from '../../helpers/FixUtils';
import DateUtils from '../../helpers/DateUtils';
import {Component, Prop, State} from '@stencil/core';
import {MatchResults} from '@stencil/router';

@Component({
  tag: 'app-program-talk-detail',
  styleUrl: 'app-program-talk-detail.scss',
})
export class ProgramTalkDetail {
  @State() talk = null;
  @State() error = null;
  @State() isLoaded = false;
  @Prop() match: MatchResults;

  createMarkup(talk) {
    return {__html: talk.description};
  }

  render() {
    if (this.error) {
      return <div>Error: {this.error.message}</div>;
    } else if (!this.isLoaded) {
      return <app-loader/>;
    } else {
      return (<article class="b-talk">

          <section class="b-section b-section--dark b-section--talk-main">
            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                  <div class="b-talk__image pt-5">
                    <img src={FixUtils.fixImageURL(this.talk.image)}
                         alt={this.talk.title}
                         class="img-fluid img-thumbnail"/>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                  <div
                    class="mt-3 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5 text-center text-sm-left">
                  <span
                    class="b-talk__place text-uppercase d-block">{this.talk.room.name}</span>
                    <h1 class="b-talk__title">{this.talk.title}</h1>
                    <p class="b-talk__speaker pb-5">
                      <strong>Speaker: </strong>
                      <span>{this.talk.speaker.name}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="b-section b-section--highlighted">
            <span class="b-talk__time text-center d-block p-3">
              {DateUtils.formatDate
              (this.talk.starts_at, 'YYYY-MM-DD HH:mm:ss', 'HH:mm')}
              &nbsp;-&nbsp;
              {DateUtils.formatDate
              (this.talk.ends_at, 'YYYY-MM-DD HH:mm:ss', 'HH:mm')}
            </span>
          </section>

          <section class="b-section b-section--talk-extra">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="mt-5">
                    <div
                      class="text-center text-sm-left">
                      {/*{this.createMarkup(this.talk)}*/}
                      {this.talk.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </article>
      );
    }
  }

  // Runs as soon as the component is "mounted" / "added" to the page
  componentDidLoad() {
    // 1. Get the "slug" from the params (injected automatically)

    if (this.match && this.match.params.slug) {
      const {slug} = this.match.params;

      fetch(`${API.serverURL}/api/talks/${slug}`).
        then(response => response.json()).
        then(
          (result) => {
            this.isLoaded = true,
              this.talk = result;
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.error('Error', error);
            this.isLoaded = false;
            this.error = error;
          },
        );
    }

  }
}
