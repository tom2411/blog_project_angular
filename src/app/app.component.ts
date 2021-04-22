import {Component} from '@angular/core';
import {Post} from './services/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-project';

  posts = [
    new Post('Mon premier post',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin arcu mauris, eu finibus ante consectetur in. Etiam pulvinar ipsum eget purus iaculis congue. Integer sodales lectus justo, ut hendrerit nisi efficitur sit amet. Mauris at nisi vel arcu faucibus consequat. Orci varius natoque penatibus et magnis dis parturient montes. ',
    10,
    new Date(2017, 10, 24, 11, 0o0 )),
    new Post('Mon deuxième post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin arcu mauris, eu finibus ante consectetur in. Etiam pulvinar ipsum eget purus iaculis congue. Integer sodales lectus justo, ut hendrerit nisi efficitur sit amet. Mauris at nisi vel arcu faucibus consequat. Orci varius natoque penatibus et magnis dis parturient montes. ',
      -10,
      new Date(2017, 10, 24, 11, 0o0 )),
    new Post('Encore un post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin arcu mauris, eu finibus ante consectetur in. Etiam pulvinar ipsum eget purus iaculis congue. Integer sodales lectus justo, ut hendrerit nisi efficitur sit amet. Mauris at nisi vel arcu faucibus consequat. Orci varius natoque penatibus et magnis dis parturient montes.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin arcu mauris, eu finibus ante consectetur in. Etiam pulvinar ipsum eget purus iaculis congue. Integer sodales lectus justo, ut hendrerit nisi efficitur sit amet. Mauris at nisi vel arcu faucibus consequat. Orci varius natoque penatibus et magnis dis parturient montes. ',
      0,
      new Date(2017, 10, 24, 11, 0o0 ))
  ];

  /*posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin arcu mauris, eu finibus ante consectetur in. Etiam pulvinar ipsum eget purus iaculis congue. Integer sodales lectus justo, ut hendrerit nisi efficitur sit amet. Mauris at nisi vel arcu faucibus consequat. Orci varius natoque penatibus et magnis dis parturient montes. ',
      love: 10,
      created_at: new Date(2017, 10, 24, 11, 0o0 )
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin arcu mauris, eu finibus ante consectetur in. Etiam pulvinar ipsum eget purus iaculis congue. Integer sodales lectus justo, ut hendrerit nisi efficitur sit amet. Mauris at nisi vel arcu faucibus consequat. Orci varius natoque penatibus et magnis dis parturient montes. ',
      love: -10,
      created_at: new Date(2017, 10, 24, 11, 0o0 )
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin arcu mauris, eu finibus ante consectetur in. Etiam pulvinar ipsum eget purus iaculis congue. Integer sodales lectus justo, ut hendrerit nisi efficitur sit amet. Mauris at nisi vel arcu faucibus consequat. Orci varius natoque penatibus et magnis dis parturient montes.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin arcu mauris, eu finibus ante consectetur in. Etiam pulvinar ipsum eget purus iaculis congue. Integer sodales lectus justo, ut hendrerit nisi efficitur sit amet. Mauris at nisi vel arcu faucibus consequat. Orci varius natoque penatibus et magnis dis parturient montes. ',
      love: 0,
      created_at: new Date(2017, 10, 24, 11, 0o0 )
    }
  ];*/
}

