import React from 'react';
import './codepen.css'

class Codepen extends React.Component {
  constructor(props) {
    super(props)
  }

  renderHomePage() {
    return(
      <div>
        <header>
          <nav>
            <h1>Shuo's Page</h1>
            <ul>
              <li>Notifications</li>
              <li>Profile</li>
              <li>Settings</li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <h2>Sidebar</h2>
            <p>Sed blandit, nisl at auctor fringilla, mi lacus convallis ex, sed ultricies lectus velit sed arcu. Sed fermentum erat eu leo sollicitudin, eget pulvinar tortor volutpat. Nam ultricies justo sed metus eleifend, non pretium metus ultricies. Ut dignissim quis enim at luctus. Integer feugiat condimentum mi, in venenatis purus scelerisque ut. Aenean sollicitudin sodales consectetur. Aliquam volutpat convallis tristique. Proin efficitur, enim non l</p>
          </section>
          <section>
            <h2>Main</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies, ligula a tristique sagittis, leo ligula vestibulum elit, nec dignissim est nulla non tellus. Etiam finibus magna ipsum, et mattis odio dictum viverra. Mauris laoreet urna luctus diam tincidunt, sit amet dignissim velit elementum. Suspendisse cursus, justo et bibendum mattis, elit neque cursus libero, at rhoncus velit ante eu eros. Nulla id lacus rhoncus, accumsan quam a, venenatis sapien. Maecenas mi dui, ultricies eu varius quis, porta a leo. Nulla id libero id odio vulputate pellentesque eget ac quam. Nullam at lacus non metus aliquet vehicula. Fusce quis feugiat nulla, quis efficitur tortor. Etiam hendrerit orci quis ex blandit consectetur. Integer ante orci, dictum porta lorem in, vulputate porta nunc. Fusce ornare posuere leo, vitae volutpat tortor. Curabitur pharetra semper augue, quis elementum ex posuere vitae. Sed a dapibus diam. Praesent faucibus a diam ac luctus.</p>
          </section>
        </main>
        <footer>
          <h3>Copyright stuff</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </footer>
      </div>
    );
  }

  render () {
    return(
      <div>
        <h1>
          This is my page
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies, ligula a tristique sagittis, leo ligula vestibulum elit, nec dignissim est nulla non tellus. Etiam finibus magna ipsum, et mattis odio dictum viverra. Mauris laoreet urna luctus diam tincidunt, sit amet dignissim velit elementum. Suspendisse cursus, justo et bibendum mattis, elit neque cursus libero, at rhoncus velit ante eu eros. Nulla id lacus rhoncus, accumsan quam a, venenatis sapien. Maecenas mi dui, ultricies eu varius quis, porta a leo. Nulla id libero id odio vulputate pellentesque eget ac quam. Nullam at lacus non metus aliquet vehicula. Fusce quis feugiat nulla, quis efficitur tortor. Etiam hendrerit orci quis ex blandit consectetur. Integer ante orci, dictum porta lorem in, vulputate porta nunc. Fusce ornare posuere leo, vitae volutpat tortor. Curabitur pharetra semper augue, quis elementum ex posuere vitae. Sed a dapibus diam. Praesent faucibus a diam ac luctus
        </p>
      </div>
    );
  }
}

export default Codepen;
