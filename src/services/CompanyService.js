const CompanyService = {
    getCompany: () => {
      return fetch(`http://localhost:3000/companies/${localStorage.getItem("company")}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            return data;
          })
          .catch(err => console.log(err));
    }
  
};

export default CompanyService;