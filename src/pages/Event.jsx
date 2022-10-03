import PropTypes from 'prop-types';

export default function Event({ inputs }) {
  const {
    username, hostname, date, location,
  } = inputs;
  console.log(`${username} ${hostname} ${date} ${location}`);
  return (
    <div>
      hello
    </div>
  );
}

Event.propTypes = {
  inputs: PropTypes.objectOf(PropTypes.string).isRequired,
};
