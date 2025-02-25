const fetchHandler = async (props: string) => {
  const data = await fetch(props);
  const posts = await data.json();
  return posts;
};

export default fetchHandler;
