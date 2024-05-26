const loginHandler = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    return token==='userLogined';
  };
  
  export default loginHandler;
  