Set = new Mongo.Collection("animals");
//


if (Meteor.isClient) {
  console.log("Launched In Client");

 

  var n = Set.find().count();
    var animalArray = Set.find().fetch();

Template.names.helpers({
  nameFunc: function(){
      
      for(i = 0; i < n; i++){
          document.writeln(animalArray[i].name);
          document.writeln("<br>");

      }
  }      //<---- REMEBER THiS DAMN COMMA. IT IS FATAL
});
  

Template.types.helpers({
  typeFunc: function(){

    for(i = 0; i < n; i++){
      document.writeln(animalArray[i].type);
      document.writeln("<br>");
    }
  }
});
}     //CLOSING BRACKET FOR IF CLIENT STATEMENT

/*
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

*/
if (Meteor.isServer) {

  console.log("Launched In server")
};
