//for handlebars- copy and pasted from MVC mini project for example sake

// module.exports = {
//     format_date: (date) => {
      // Format date as MM/DD/YYYY
    //   return date.toLocaleDateString();
    // },
    // format_amount: (amount) => {
      // format large numbers with commas
    //   return parseInt(amount).toLocaleString();
    // },
    // get_emoji: () => {
    //   const randomNum = Math.random();
  
      // Return a random emoji
//       if (randomNum > 0.7) {
//         return `<span for="img" aria-label="lightbulb">💡</span>`;
//       } else if (randomNum > 0.4) {
//         return `<span for="img" aria-label="laptop">💻</span>`;
//       } else {
//         return `<span for="img" aria-label="gear">⚙️</span>`;
//       }
//     },
//   };

// will only server as auth for login page 
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;