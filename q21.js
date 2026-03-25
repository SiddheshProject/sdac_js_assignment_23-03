class InvalidMemberID extends Error{
    constructor(message) {
        super(message)
        this.name = "InvalidMemberID"
    }
}
function checkMemberID(member_id) {
    try {
        if (member_id <= 0) {
            throw new InvalidMemberID("Member ID is Invalid........");
        } else {
            console.log("Member ID is valid...");
        }
        } catch (error) {
            console.log(error.name+" :  "+error.message);  
        }
        finally{
            console.log("Closing library database connection...");
        }
}
checkMemberID(10)
console.log("------------------------------")
checkMemberID(-10)