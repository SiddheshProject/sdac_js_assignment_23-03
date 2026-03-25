class InvalidMemberID extends Error{
    constructor(message) {
        super(message)
        this.name = "InvalidMemberID"
    }
}
function checkMemberID(member_id) {
    if (member_id <= 0) {
        try {
            throw new InvalidMemberID("Member ID is Invalid........");
        } catch (error) {
            console.log(error.name+" :  "+error.message);  
        }
    } else {
        console.log("Member ID is valid...");
    }
}
checkMemberID(10)
checkMemberID(-10)

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
checkMemberID(-10)