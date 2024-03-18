function selectAllCheckboxes() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = true;
    });
  }


  function unselectAllCheckboxes() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
  }
  
  function getSelectedCheckboxes() {
    var selectedCheckboxes = [];
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        selectedCheckboxes.push(checkbox.value);
      }
    });
    alert("Selected Checkboxes: " + selectedCheckboxes.join(", "));
  }

  function nextStep() {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
  }
  function nextPage() {
    window.location.href = "210982_2.html";
  }