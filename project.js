
 var count=0;
 function show()
{

  var name=document.getElementById("fname").value;
  var mob=document.getElementById("cell").value;
  var mail=document.getElementById("email").value;
  if(name==""||mob==""||mail=="")
  {
    alert('Please enter the details');
  }
  else{
   count++;
  
  var table = document.getElementById("myTable");
  var row = table.insertRow(count);
  var col1 = row.insertCell(0);
  var col2 = row.insertCell(1);
  var col3 = row.insertCell(2);
  var col4= row.insertCell(3);
  col1.innerHTML = name;
  col2.innerHTML = mob;
  col3.innerHTML = mail;
  col4.innerHTML='<input type="button" value="Delete" onclick="deleteRow(this)">'
  document.getElementById("myForm").reset();
}
}

function deleteRow(r)
{
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
  count--;
}
 