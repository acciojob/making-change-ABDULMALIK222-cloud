const makeChange = (c) => {
  c = parseInt(c); // Convert input to an integer if it's a string

  const change = {
    q: 0, // quarters (25¢)
    d: 0, // dimes (10¢)
    n: 0, // nickels (5¢)
    p: 0  // pennies (1¢)
  };

  change.q = Math.floor(c / 25);
  c %= 25;

  change.d = Math.floor(c / 10);
  c %= 10;

  change.n = Math.floor(c / 5);
  c %= 5;

  change.p = c;

  return change;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
