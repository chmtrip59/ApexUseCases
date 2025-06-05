public class ApexUseCase1 {
    public static void createContact(String firstName, String lastName, String email ) {

        List<Contact> myContacts = new List<Contact>();
        if(lastName == null){
        Contact con = new Contact();
        con.FirstName = firstName;
        con.LastName = lastName;
        con.Email = email;
        myContacts.add(con);
        }
        // Insert the contact
        // Note: In a real-world scenario, you would want to handle exceptions and bulkify this code
        // to handle multiple records at once.
        // For example, you could use a loop to create multiple contacts and then perform a single insert operation.
        if(myContacts.size() > 0) {
            insert myContacts;
        }
        
    }
}