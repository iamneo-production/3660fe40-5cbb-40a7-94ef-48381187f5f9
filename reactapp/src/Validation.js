const validation =(values)=>
{
        let errors={};
        const regex='^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$';
        if(!values.email || !regex.test(values.email))
        {
          errors.email='re-check email';
        }
        if(!values.Username)
        {
          errors.Username="re-check Username";
        }
        if(values.password!==values.confirmpassword)
        {
          errors.password="values are not same.re-enter password";
          errors.confirmpassword="re-enter password";
        }
        var pattern = new RegExp(/^[0-9\b]+$/);
        if(!pattern.test(values.Mobilenumber))
        {
          errors.Mobilenumber="re-check mobile number";
        }
		
	return errors;
};
export default validation;