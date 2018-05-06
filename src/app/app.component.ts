import {DOCUMENT} from '@angular/common';
import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public elements: string[] = [
    'example-angular-elements-component-box',
    'example-angular-elements-component-button'
  ];
  public scripts: string[] = [];

  constructor(@Inject(DOCUMENT) public document) {
  }

  public load(element: string) {
    this.loadScript(element)
      .then(() => {
        const $elements = document.getElementById('elements');
        const $element = document.createElement(element);
        $elements.appendChild($element);
      });
  }

  public loadScript(element: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      // If we've already loaded the angular element js script the return immediately.
      if (this.scripts[element] >= 0) {
        return resolve();
      }
      // Otherwise, signify that we are loading the angular element js script.
      this.scripts[element] = true;
      // Load the angular element js script.
      const $script = this.document.createElement('script');
      $script.src = `/assets/elements/${element}.js`;
      $script.onload = () => resolve();
      this.document.head.appendChild($script);
    });
  }
}
