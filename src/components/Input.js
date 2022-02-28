export const Input = ({ setter }) => {
  return <input onChange={(e) => setter(e.target.value)}></input>;
};
