const moment = require('moment');

module.exports = {
  format_date: (date) => {
    return moment(date).format('MMMM D, YYYY [at] h:mm A');
  },
};
