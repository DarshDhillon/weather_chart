const TwentyFourHoursInSeconds = 90000;

const unixTimeInSeconds = Math.floor(
  new Date().getTime() / 1000 - TwentyFourHoursInSeconds
);

const conversionToMilliseconds = unixTimeInSeconds * 1000;

const prevTwentyFourHoursUnixToDate = new Date(
  conversionToMilliseconds
).toLocaleDateString('en-UK');

const UnixTimeToDateConverter = () => {
  return <p>{prevTwentyFourHoursUnixToDate}</p>;
};

export default UnixTimeToDateConverter;
