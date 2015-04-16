import Ember from 'ember';

export function limitText(params) {
  var {text, max} = {text: params[0], max: params[1]};
  return text.substr(0, max) + (text.length > max ? '...': '');
}

export default Ember.HTMLBars.makeBoundHelper(limitText);
