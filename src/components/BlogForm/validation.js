export const VALIDATION_RULES = {
  TITLE: [
    { required: true, message: 'This field is required'},
    { whitespace: true }
  ],
  CONTENT: [
    { required: true, message: 'This field is required'},
    { whitespace: true }
  ], 
};