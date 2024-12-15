const dateOfBirth = "12/12/1980";
const getStudentName = () => "John Doe";
const getCampusName = () => "UEL Campus";

exports.getName = getStudentName;
exports.location = getCampusName;
exports.dob = dateOfBirth;
exports.studentGrade = (marks) => {
    return (marks > 50 && marks < 70) ? "B grade" : "A grade";
};
