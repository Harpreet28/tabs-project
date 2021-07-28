import '../styles/index.scss';
import surtseyIcon from '../assets/surtsey_eruption_1963.png';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}


function Tabs(args) {
  // Scope-safe constructors
  if (!(this instanceof Tabs)) { 
    return new Tabs();
  }
  
  const defaults = {
    container: '[data-tab-component]',
    trigger: '[role="tab"]',
    content: '[role="tabpanel"]'
  };

  // const surtseyText = "Surtsey ('Surtr's island in Icelandic, Icelandic pronunciation: ​[ˈsʏr̥(t)sˌeiː]) is a volcanic island located in the Vestmannaeyjar archipelago off the southern coast of Iceland. At 63.303°N 20.605°WCoordinates: 63.303°N 20.605°W, Surtsey is the southernmost point of Iceland.[1] It was formed in a volcanic eruption which began 130 metres (430 feet) below sea level, and reached the surface on 14 November 1963. The eruption lasted until 5 June 1967, when the island reached its maximum size of 2.7 km2 (1.0 sq mi). Since then, wave erosion has caused the island to steadily diminish in size: as of 2012, its surface area was 1.3 km2 (0.50 sq mi).[2] The most recent survey (2007) shows the island's maximum elevation at 155 m (509 ft) above sea level.";
  // const surtseyTextList = document.getElementsByTagName('p');
  // for(let text of surtseyTextList){
  //   text.innerHTML = surtseyText;
  // }

  const surtseyImgList = document.getElementsByTagName('img');
  for (let surtseyImg of surtseyImgList){
    surtseyImg.src = surtseyIcon;
  }

  // If there are no default settings override with defaults
  const settings = (typeof args !== 'undefined') ? args : defaults;


  const toggle = function() {
    const parent = this.closest(settings.container),
        target = this.getAttribute('aria-controls'),
        content = document.getElementById(target),
        toggles = parent.querySelectorAll(settings.trigger),
        all_content = parent.querySelectorAll(settings.content);

    // Update tab content visibility
    const len = toggles.length;
    for (let i = 0; i < len; i++) {
      toggles[i].setAttribute('aria-selected', 'false');
      all_content[i].setAttribute('aria-hidden', 'true');
    }
    
    this.setAttribute('aria-selected', 'true');
    content.setAttribute('aria-hidden', 'false');
  };

  const bindEventListeners = function() {
    const trigger = document.querySelectorAll(settings.trigger);
    const len = trigger.length;
    for (let i = 0; i < len; i++) {
      trigger[i].addEventListener('click', function(event) {
        toggle.call(this);
      });
      
      trigger[i].addEventListener('keydown', function(event) {
        if (event.which == 13) {
          toggle.call(this);
        }
      });
    };
  };
  return bindEventListeners();
}

// Create an instance of component
window.onload = () => {
  const tabs = new Tabs();
};

