const timerLengths = process.argv.slice(2);

if (timerLengths){
  for (const time of timerLengths) {
    if (time > 0){
      setTimeout(() => {process.stdout.write('\x07');
      }, 1000 * time);
    }
  }
};