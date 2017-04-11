const Page = require('watch_framework').Page;

const template = require('../../templates/pages/genderMessagePage.hbs');

const responsePage = Page.extend({

  id: 'genderMessagePage',

  template,

  responses: {
    male: ['male msg 1', 'male msg 2'],
    female: ['female msg 1', 'female msg 2', 'female msg 3'],
    unspecified: ['unspecified msg 1', 'unspecified msg 2', 'unspecified msg 3'],
  },

  goToHomePage() {
    window.App.navigate('home');
  },

  render() {
    const gender = 'unspecified';
    // Generate an index between 0 - 9
    const index = Math.floor(Math.random() * 9);
    let genderMessage = '';

    const maleLength = this.responses.male.length;
    const femaleLength = this.responses.female.length;
    const unspecifiedLength = this.responses.unspecified.length;

    const unspecifiedIndex = Math.floor(Math.random() * unspecifiedLength);

    // let prevMale = 0;
    // let prevfemale = 0;

    switch (gender) {
      case 'male':
        if (index >= 0 && index <= 2) {
          // Show a male message
          const messageIndex = Math.floor(Math.random() * maleLength);
          genderMessage = this.responses.male[messageIndex];
        } else {
          // Show an unspecified message
          genderMessage = this.responses.unspecified[unspecifiedIndex];
        }
        break;
      case 'female':
        if (index >= 0 && index <= 4) {
          // Show a female message
          const messageIndex = Math.floor(Math.random() * femaleLength);
          genderMessage = this.responses.female[messageIndex];
        } else {
          // Show an unspecified message
          genderMessage = this.responses.unspecified[unspecifiedIndex];
        }
        break;
      default:
        genderMessage = this.responses.unspecified[unspecifiedIndex];
        break;
    }

    this.$el.html(this.template({ message: genderMessage }));
    return this;
  },
});

module.exports = responsePage;
