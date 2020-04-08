const timerLengths = process.argv.slice(2);

  for (const time of timerLengths) {
    setTimeout(() => {
      process.stdout.write('\x07');
}, 1000 * time)
  }
