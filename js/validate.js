$(function() {

  $.validator.addMethod('greaterThanMinCol', function(value, element) {
    var minCol = $("#minCol").val();
    return this.optional(element) || value > minCol;
  });
  $.validator.addMethod('greaterThanMinRow', function(value, element) {
    var minRow = $("#minRow").val();
    return this.optional(element) || value > minRow;
  });
  $.validator.addMethod('numberIsInteger', function(value, element) {
    return this.optional(element) || Number.isInteger(value);
  });

  $("#inputForm").submit(function(e) {
    e.preventDefault();
  }).validate({
    rules: {
      minCol: {
        required: true,
        number: true,
        min: -50,
        max: 50
      },
      maxCol: {
        required: true,
        number: true,
        min: -50,
        max: 50,
        greaterThanMinCol: true
      },
      minRow: {
        required: true,
        number: true,
        min: -50,
        max: 50,
        numberIsInteger: true
      },
      maxRow: {
        required: true,
        number: true,
        min: -50,
        max: 50,
        greaterThanMinRow: true

      }
    },
    messages: {
      minCol: {
        required: 'Please enter a Minimum Column Value.',
        number: 'Please enter a decimal number.',
        min: 'Minimun value is -50.',
        max: 'Maximum value is 50.'
      },
      maxCol: {
        required: 'Please enter a Maximum Column Value.',
        number: 'Please enter a decimal number.',
        min: 'Minimun value is -50.',
        max: 'Maximum value is 50.',
        greaterThanMinCol: 'This value should be greater than Minimum Column Value.'
      },
      minRow: {
        required: 'Please enter a Minimum Row Value.',
        number: 'Please enter a decimal number.',
        min: 'Minimun value is -50.',
        max: 'Maximum value is 50.',
        numberIsInteger: 'Please enter an integer.'
      },
      maxRow: {
        required: 'Please enter a Minimum Column Value.',
        number: 'Please enter a decimal number.',
        min: 'Minimun value is -50.',
        max: 'Maximum value is 50.',
        greaterThanMinRow: 'This value should be greater than Minimum Row Value.'
      },
    }
  });
});
