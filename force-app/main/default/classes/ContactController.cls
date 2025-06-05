public with sharing class ContactController {
    @AuraEnabled(Cacheable=true)
    public static List<Contact> getContacts(String accIds) {
        try{
            return [
                SELECT Id, AccountId,FirstName,LastName,Phone FROM Contact WHERE AccountId = : accIds WITH SECURITY_ENFORCED
                ];
        } 
        catch (Exception e) {
            System.debug('Error: ' + e.getMessage());
            return null;
        }

    }
}