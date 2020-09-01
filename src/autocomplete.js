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
      const locations =
        location.longitude && location.latitude
          ? `&latitude=${location.latitude}&longitude=${location.longitude}`
          : '';
      setMessage('Searching...');
      fetch(
        `http://192.168.0.17:3333/suggestions?q=${query}${locations}`
        //`http://gentle-island-08430.herokuapp.com/suggestions?q=${query}${locations}`
      )
        .then((response) => response.json())
        .then((body) => {
          console.log(body)
          if (body.suggestions?.length === 0) {
            setMessage('Not found!');
          }
          setSuggestions(body.suggestions);
          const average = new Date().getTime() - time;
          setCalls({times: calls.times + 1, sum: calls.sum + average});
        })
        .catch((error) => {
          setMessage(error.message);
        });
    } else {
      setSuggestions([]);
    }
  };

  const autocompleteSearchDebounced = debounce(500, autocompleteSearch);
  const autocompleteSearchThrottled = throttle(500, autocompleteSearch);

  return [autocompleteSearchDebounced, autocompleteSearchThrottled];
};
