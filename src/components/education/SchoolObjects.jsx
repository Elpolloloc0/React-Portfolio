const SchoolObject = (location) => {
  if(location === "Mentor"){
    return {   
      image: "",
      name: "Mentor High School",
      grade: "3.0 GPA",
      details: "From 2008-2011, I attended Mentor High School." 
    }
  }
  if(location === "Warrington"){
    return {
      image: "",
      name: "Warrington & Vale Royal College",
      grade: "BTeC: D*D*D*",
      details: "From 2012-2014."
    }
  }
  if(location === "Liverpool"){
    return {
      image: "",
      name: "University of Liverpool",
      grade: "First Class Honours",
      details: "From 2015-2019."
    }
  }
  return {};
};

export default SchoolObject;