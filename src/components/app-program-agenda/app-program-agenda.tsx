import FixUtils from '../../helpers/FixUtils';
import API from './../../config/API';
import DateUtils from '../../helpers/DateUtils';
import {Component, State} from '@stencil/core';

@Component({
  tag: 'app-program-agenda',
  styleUrl: 'app-program-agenda.scss',
})
export class ProgramAgenda {

  @State() talks: Array<any> = [];
  @State() error = null;
  @State() isLoaded = false;

  // @Prop() history?: RouterHistory;

  componentDidLoad() {
    fetch(`${API.serverURL}/api/talks/`).
      then(response => response.json()).
      then(
        (result) => {
          this.isLoaded = true;
          this.talks = result;
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

  // handleClick = (talk) => {
  // this.props.history.push(`/program/${talk.slug}`);
  // this.setState({navigate: true});
  // };
  // handleClick = () => {
  // this.history.push(`/program/talk/${talk.slug}`);
  // };

  getNavigationURL = (talk) => {
    return `/program/talk/${talk.slug}`;
  };

  render() {

    if (this.error) {
      return <div>Error: {this.error.message}</div>;
    } else if (!this.isLoaded) {
      return <app-loader/>;
    } else {
      // console.log('HISTORY', this.history);
      return (<section class="b-section b-section--news mt-5">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2>
                  Agenda
                </h2>
                {
                  this.talks.map(talk => {
                    return <article class="b-schedule-item" key={talk.id}>

                      <div class="b-schedule-item-header__date">
                            <span class="b-schedule-item-header__time">
                              {DateUtils.formatDate
                              (talk.starts_at, 'YYYY-MM-DD HH:mm:ss', 'HH:mm')}
                              &nbsp;-&nbsp;
                              {DateUtils.formatDate
                              (talk.ends_at, 'YYYY-MM-DD HH:mm:ss', 'HH:mm')}
                            </span>
                      </div>

                      <div class="b-schedule-item-body">
                        <div class="row">
                          <div
                            class="col-12 col-sm-7 col-md-5 col-lg-4 col-xl-4">
                            <stencil-route-link
                              url={this.getNavigationURL(talk)}>
                              <img src={FixUtils.fixImageURL(talk.thumbnail)}
                                   class="img-fluid rounded b-schedule-item__image"/>
                            </stencil-route-link>
                          </div>
                          <div
                            class='col-12 col-sm-7 col-md-7 col-lg-8 col-xl-8'>
                                 <span
                                   class='b-schedule-item__place text-uppercase'>
                               {talk.room.name}
                                 </span>
                            {/*<a href='#'*/}
                            {/*onClick={() => this.handleClick()}>*/}
                            <stencil-route-link
                              url={this.getNavigationURL(talk)}>
                              <h4 class='b-schedule-item__title'>
                                {talk.title}
                              </h4>
                            </stencil-route-link>
                            {/*</a>*/}

                            <p>
                              <strong>Conferencista: </strong>
                              <span
                                class='b-schedule-item__speaker'>{talk.speaker.name}</span>
                            </p>

                            <p class='b-schedule-item__summary'>
                              {talk.summary}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>;
                  })
                }
              </div>
            </div>
          </div>
        </section>
      );

    }
  }
}

