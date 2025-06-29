import loading from "./spinner.gif";

const Spinner = () => {
  return (
    <div className="text-center my-3">
      <img src={loading} alt="loading" style={{ height: "50px" }} />
    </div>
  );
};

export default Spinner;
