Template.exerciseSection.helpers({
  exercises: function() {
  	return Exercises.find({section: FlowRouter.current().params.section});
  }
});