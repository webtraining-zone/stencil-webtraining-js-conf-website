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
          <stencil-route-link url='/'>
            <span class="b-nav-link">Conference</span>
          </stencil-route-link>
          <button class="navbar-toggler" type="button"
                  data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <stencil-route-link url='/program'>
                  <span class="b-nav-link">Programa</span>
                </stencil-route-link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>);
  }
}
