import {Component} from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'Header.scss',
})
export class Header {

  render() {

    return (<header>
      <nav
        class="navbar navbar-expand-md navbar-light navbar-laravel b-navigation-bar">
        <div class="container">
          {/*<Link to="/" class="navbar-brand">Conference</Link>*/}
          <button class="navbar-toggler" type="button"
                  data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                {/*<Link to="/program" class="b-nav-link">Programa</Link>*/}
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>);
  }
}
