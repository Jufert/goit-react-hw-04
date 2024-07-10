const ErrorMessage = ({ message = "Whoops, something went wrong!" }) => {
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  };
  
  export default ErrorMessage;