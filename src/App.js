import React, { Component } from 'react';
import cmjs from 'consent-manager-js-sdk';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onButtonClick() {
    cmjs.ask();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ogury Mocked Publisher</h1>
        </header>
        <button onClick={this.onButtonClick} style={styles.button}>
          Open the consent-manager
        </button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non ante vulputate,
          auctor ante ut, pharetra nisi. Ut mauris lacus, iaculis nec aliquam ut, vehicula eu risus.
          In ex felis, maximus non ornare sit amet, ornare ut arcu. Nullam dapibus, lectus aliquet
          volutpat tempor, lectus nulla bibendum lacus, in tempor leo quam vel nisl. Praesent
          accumsan enim sit amet eleifend cursus. Aliquam ac nisl vitae odio varius posuere.
          Praesent pulvinar tellus lorem, eu bibendum urna dictum nec. Donec libero quam, viverra
          sed felis eu, semper porttitor turpis. Suspendisse potenti. Morbi finibus porta velit, ut
          porttitor ipsum tempus vitae. Sed nunc nisl, molestie a dui non, sodales egestas lacus.
          Suspendisse aliquam porttitor dui a molestie. Proin arcu sapien, tempus eu tincidunt ac,
          finibus in justo. Donec lacus justo, placerat eu metus eu, tristique placerat lectus.
          Aliquam luctus volutpat sapien, at pharetra nisi consectetur aliquam. In nunc magna,
          tincidunt et iaculis vel, facilisis at nisi. Mauris ut elementum elit. Proin euismod
          libero ac est bibendum, in venenatis dui malesuada. Sed a ornare lacus. Nam urna velit,
          mattis vel volutpat sit amet, convallis sed justo. Quisque imperdiet elit vitae urna
          vehicula tempor. Aenean congue tempus tortor. Quisque ac erat eleifend ligula ornare
          pretium sit amet at diam. Nullam hendrerit, magna eu scelerisque euismod, nibh neque
          vehicula quam, efficitur mattis purus sapien at dolor. Nam iaculis justo sit amet odio
          sagittis, eget tincidunt purus sollicitudin. Nulla nunc nisi, laoreet et turpis non,
          laoreet rhoncus ante. Sed ultricies interdum dictum. Sed ullamcorper rutrum convallis.
          Suspendisse consectetur, arcu in accumsan convallis, purus sem viverra urna, quis sagittis
          lacus eros sodales velit. Donec elit sem, placerat vel eleifend nec, gravida ut nunc.
          Suspendisse potenti. Fusce vestibulum dignissim libero non convallis. Mauris id quam ut
          est hendrerit pretium. In vitae turpis ligula. Vestibulum vel lobortis nisl. Donec congue,
          purus eget rutrum rutrum, lectus nisi tempor diam, vitae gravida quam purus in tortor. Ut
          faucibus velit et ligula sollicitudin, at pretium urna fermentum. Cras mattis enim at urna
          euismod varius. Vestibulum ut ultricies dui. Praesent aliquet enim tempus congue
          tincidunt. Suspendisse potenti. Vestibulum rutrum, nulla a iaculis venenatis, eros ex
          condimentum dolor, in dictum odio leo a enim. Mauris dapibus porttitor sem ut sagittis.
          Etiam eleifend leo vel justo tempor, et euismod purus semper. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc non consequat ante. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nunc ipsum augue, auctor eu imperdiet
          quis, fermentum eu erat. Integer non quam lacinia, convallis diam sit amet, consequat
          velit. Praesent iaculis mi nec nunc vestibulum, non convallis lacus maximus. Suspendisse
          pharetra ac felis sit amet vulputate. Nulla quis ex id urna sollicitudin lacinia. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Praesent ac massa vitae dui commodo
          aliquam. Fusce eget volutpat libero, quis blandit lorem. Vivamus eros diam, blandit congue
          magna in, vehicula condimentum massa. Nunc nibh felis, molestie at eleifend quis, congue a
          felis. Cras faucibus dui in elit placerat, eget pellentesque nulla vestibulum. Vivamus
          finibus risus dui. Curabitur ac massa sed neque tristique aliquam in in mauris. Proin
          ultricies malesuada mauris, eu dapibus ante. Sed a dignissim arcu, eu scelerisque nisi.
          Maecenas in placerat urna, ac dapibus ipsum. Sed vel luctus urna. Nunc ipsum orci, luctus
          ac lectus ut, laoreet scelerisque sapien. Proin ipsum lectus, lacinia vitae orci vitae,
          finibus luctus arcu. Sed neque nulla, ornare in pretium nec, dignissim eu tortor. Quisque
          scelerisque ex ac lacus ultrices, ac volutpat justo commodo. Suspendisse sed pellentesque
          ipsum. Donec ut lacinia nisl. Nulla lectus arcu, consequat ut nunc eget, dapibus eleifend
          lorem. Aliquam lectus felis, bibendum id pellentesque a, laoreet ut arcu. Vestibulum eu
          metus facilisis, ultrices lorem ut, pretium nibh. Aliquam ac felis tellus. Vestibulum
          tempor orci enim, et feugiat ligula hendrerit sed. Duis non ullamcorper augue. Nunc
          imperdiet justo malesuada mi tempus, nec efficitur justo pretium. Integer porta facilisis
          nisl, non molestie urna. Cras sed magna ultrices, aliquet nunc ac, auctor lacus. Sed
          tincidunt leo ut facilisis maximus. Proin viverra mattis iaculis. Sed bibendum leo vitae
          neque semper, et commodo libero tincidunt. Duis vehicula risus nec interdum auctor. In ac
          finibus lorem. Integer sagittis nisi at justo imperdiet iaculis. Nam semper, erat et
          posuere posuere, ex tortor euismod nibh, sit amet commodo eros nibh non orci. Nullam
          ullamcorper odio ut ante auctor semper. Vivamus scelerisque tempor dictum. Pellentesque
          iaculis sem sit amet nulla lobortis, id tristique lectus malesuada. Curabitur tempor
          cursus accumsan. Cras non ex euismod, vehicula nulla vitae, varius justo. Morbi venenatis
          turpis id sagittis commodo. Sed a eleifend ex. Maecenas id aliquam orci. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Proin posuere ultrices nisi et
          condimentum. Maecenas vel volutpat neque. Vestibulum rhoncus mauris nulla, quis
          scelerisque dui volutpat ut. Donec vel diam non orci posuere ultricies interdum aliquam
          massa. Quisque in sagittis ante, eu pharetra lacus. Vivamus a nulla non nunc porta
          elementum. Sed maximus sit amet ligula consequat dapibus. Proin placerat diam a porta
          dignissim. Sed quis efficitur ante, eget rutrum neque. Curabitur mauris enim, dictum quis
          erat eget, facilisis molestie sapien. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Nulla imperdiet, nibh vel euismod finibus, mi urna
          porta nunc, vitae rutrum nunc diam sit amet dolor. Sed pulvinar, dolor nec fringilla
          tempus, turpis dui mollis augue, sed gravida lectus purus non sem. Vestibulum feugiat odio
          sapien, sit amet elementum nunc volutpat et. Curabitur ut velit vitae sapien vulputate
          gravida. Mauris non dolor mattis, ornare mauris at, finibus dui. Vivamus tempor ultrices
          lectus, sit amet ultricies lacus pulvinar et. Suspendisse dui elit, lobortis vel tortor
          ac, pellentesque molestie est.
        </p>
      </div>
    );
  }
}

const styles = {
  button: {
    width: 300,
    height: 30,
    marginTop: 50,
  },
};

export default App;
