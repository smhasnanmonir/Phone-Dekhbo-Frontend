const fetchHandler = async () => {
  const data = await fetch(
    "https://github.com/smhasnanmonir/Mobile-Dekhan-Frontend/blob/main/assets/test.json"
  );
  const posts = await data.json();
  return posts;
};

export default fetchHandler;
