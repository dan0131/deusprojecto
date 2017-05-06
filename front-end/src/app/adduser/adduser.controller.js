export class AdduserController {
constructor ($timeout, webDevTec, toastr, $http) {
    'ngInject';
    this.$http=$http;
    this.getUsers();
}

    getUsers(){
      var vm=this;
      this.$http.get('http://localhost:5000/api/user').then(function(result){
        vm.users=result.data;
      });
      
    }

    postUser(){
      this.$http.post('http://localhost:5000/api/user', {firstname:this.firstname,lastname:this.lastname ,username:this.username, password:this.pwd, empType:this.empType});
    }
}