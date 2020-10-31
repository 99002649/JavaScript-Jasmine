describe('To test Customer', () => {
letcust = null;
it('should check name', () => {
constcust = newcustomer("sushank", "ysushank@gmail.com" , "12-12-2020","1234567890","500");
expect(cust.name).toMatch("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");        
    });
 
it('should check whether name has min 5 characters', () => {
constcust = newcustomer("sushank", "ysushank@gmail.com" , "12-12-2020","1234567890","500");
expect(cust.name.length).toBe(5);
    });
it('should check if email is of valid format', () => {
constcust = newcustomer("sushank", "ysushank@gmail.com" , "12-12-2020","1234567890","500");
expect(cust.email).toMatch("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"); 
    });
});
