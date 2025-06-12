// Define a dictionary (JavaScript object) with key-value pairs
let student = {
  name: "Patricia",
  grade: "A",
  subject: "JavaScript",
  status: "Active"
};

// This function deletes the 'status' key before displaying the value (should return undefined)
function deleteKeyAndDisplay() {
  // Delete the 'status' key from the dictionary
  delete student.status;

  // Output the deleted key's value (should show 'undefined')
  document.getElementById("Dictionary").innerHTML = "Status after deletion: " + student.status;
}
