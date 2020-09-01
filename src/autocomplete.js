import { throttle, debounce } from 'throttle-debounce';

export const register = () => {
  const autocompleteSearch = ({
    calls,
    query,
    location,
    setSuggestions,
    setCalls,
    setMessage,
  }) => {
    if (query.length >= 3) {
      const time = new Date().getTime();
      const locations = !isNaN(Number(location.longitude)) && !isNaN(Number(location.latitude))
        ? `&latitude=${location.latitude}&longitude=${location.longitude}`
        : '';

      setMessage('Searching...');

      fetch(
        `https://gentle-island-08430.herokuapp.com/suggestions?q=${query}${locations}`
      )
        .then((response) => response.json())
        .then((body) => {
          if (body.suggestions?.length === 0) {
            setMessage('Match not found!');
          }
          setSuggestions(body.suggestions);
          const average = new Date().getTime() - time;
          setCalls({ times: calls.times + 1, sum: calls.sum + average });
        })
        .catch((error) => {
          setMessage(error.message);
        });
    } else {
      setMessage("Please type minimum of 3 letter");
      setSuggestions([]);
    }
  };

  const autocompleteSearchDebounced = debounce(500, autocompleteSearch);
  const autocompleteSearchThrottled = throttle(500, autocompleteSearch);

  return [autocompleteSearchDebounced, autocompleteSearchThrottled];
};
