export default function Event(details) {
  const {
    username, hostname, date, location,
  } = details;
  console.log(`${username} ${hostname} ${date} ${location}`);
  return (
    <div />
  );
}
