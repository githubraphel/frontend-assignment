(function(){


    'use strict';
    angular
        .module('task')
        .controller('taskcontroller',controllerfunction)


    function controllerfunction(){

            console.log('inside the controller');
            var vm=this;
            vm.title="THE TITLE";
            vm.display=function(){
                console.log('we are inside the controllers display function');
            };
            vm.addUser=function(){



                console.log(vm.newuser);
                vm.users.unshift(vm.newuser);
                console.log('user added');






            };


            vm.deleteUser=function(firstName){

                _.remove(vm.users,function(user){
                    return user.firstName===firstName;
                });





            };





            vm.users=[
                {
                    "id": "cca42caa-e188-4263-bd7d-4e6d8078833f",
                    "firstName": "Bernard",
                    "lastName": "Daniel",
                    "email": "Orville45@gmail.com",
                    "address": {
                        "street": "76416 Durgan Ranch",
                        "city": "North Destinee",
                        "zip": "66963",
                        "state": "MN",
                        "country": "USA"
                    },
                    "dateCreated": "2016-10-02T13:27:26.264Z",
                    "company": {
                        "name": "Morissette Inc",
                        "website": "http://rafael.net"
                    },
                    "profilePic": "http://lorempixel.com/640/480/food"
                },
                {
                    "id": "d036aaa3-ff69-4443-9ccc-f91979825a14",
                    "firstName": "Monte",
                    "lastName": "Weimann",
                    "email": "Alena_Willms@gmail.com",
                    "address": {
                        "street": "48404 Ora Plain",
                        "city": "Rhiannonfort",
                        "zip": "54939",
                        "state": "IA",
                        "country": "USA"
                    },
                    "dateCreated": "2016-10-03T07:57:28.457Z",
                    "company": {
                        "name": "Johnston LLC",
                        "website": "http://franco.com"
                    },
                    "profilePic": "http://lorempixel.com/640/480/abstract"
                },
                {
                    "id": "3a851e58-0c63-410b-8247-82bf2f8f5a2d",
                    "firstName": "Veda",
                    "lastName": "Rosenbaum",
                    "email": "Berniece2@hotmail.com",
                    "address": {
                        "street": "093 Reilly Canyon",
                        "city": "Lake Blancheshire",
                        "zip": "95719-7264",
                        "state": "AL",
                        "country": "USA"
                    },
                    "dateCreated": "2016-10-02T18:15:23.590Z",
                    "company": {
                        "name": "Ritchie, Dickens and Block",
                        "website": "http://arvid.biz"
                    },
                    "profilePic": "http://lorempixel.com/640/480/abstract"
                },
                {
                    "id": "1b1f6505-0f11-4a48-b605-6935ac2162a4",
                    "firstName": "Katelynn",
                    "lastName": "Reinger",
                    "email": "Mustafa_Robel@hotmail.com",
                    "address": {
                        "street": "43832 Gleichner Rapids",
                        "city": "West Jewell",
                        "zip": "74920",
                        "state": "LA",
                        "country": "USA"
                    },
                    "dateCreated": "2016-10-02T18:28:18.131Z",
                    "company": {
                        "name": "Brown - Wilkinson",
                        "website": "http://sharon.biz"
                    },
                    "profilePic": "http://lorempixel.com/640/480/cats"
                },
                {
                    "id": "c81561bb-12aa-43d7-bd67-523fa5bdbbc7",
                    "firstName": "Carmen",
                    "lastName": "Casper",
                    "email": "Brooks_Schulist15@gmail.com",
                    "address": {
                        "street": "69963 Runolfsson Creek",
                        "city": "Beierland",
                        "zip": "77760",
                        "state": "ME",
                        "country": "USA"
                    },
                    "dateCreated": "2016-10-02T20:48:01.013Z",
                    "company": {
                        "name": "Smitham Group",
                        "website": "https://kali.info"
                    },
                    "profilePic": "http://lorempixel.com/640/480/fashion"
                },
                {
                    "id": "bbf8c093-bc01-447f-9a85-94f76a01ca22",
                    "firstName": "Alexys",
                    "lastName": "Hahn",
                    "email": "Eliseo62@yahoo.com",
                    "address": {
                        "street": "075 Schinner Tunnel",
                        "city": "West Kelly",
                        "zip": "54413-7706",
                        "state": "WA",
                        "country": "USA"
                    },
                    "dateCreated": "2016-10-03T03:41:29.707Z",
                    "company": {
                        "name": "Crona, Spinka and Kiehn",
                        "website": "https://aaron.org"
                    },
                    "profilePic": "http://lorempixel.com/640/480/cats"
                },
                {
                    "id": "bc8dacbf-62c8-4861-8aa5-6b3ccf7c5f39",
                    "firstName": "Lucienne",
                    "lastName": "Collier",
                    "email": "Aiyana15@yahoo.com",
                    "address": {
                        "street": "787 Murray Coves",
                        "city": "South Nikkoborough",
                        "zip": "98102",
                        "state": "MO",
                        "country": "USA"
                    },
                    "dateCreated": "2016-10-02T23:58:12.992Z",
                    "company": {
                        "name": "Cronin and Sons",
                        "website": "http://zella.com"
                    },
                    "profilePic": "http://lorempixel.com/640/480/people"
                },
                {
                    "id": "1668a89f-581a-4fb3-9b0b-13c15147ba6a",
                    "firstName": "Emmanuelle",
                    "lastName": "Lindgren",
                    "email": "Georgette53@gmail.com",
                    "address": {
                        "street": "18488 Bartoletti Locks",
                        "city": "Connellyshire",
                        "zip": "72706-7079",
                        "state": "MA",
                        "country": "USA"
                    },
                    "dateCreated": "2016-10-03T08:35:38.963Z",
                    "company": {
                        "name": "Borer - Kovacek",
                        "website": "https://javonte.info"
                    },
                    "profilePic": "http://lorempixel.com/640/480/sports"
                },
                {
                    "id": "c24e934f-f959-4f78-93db-84c89e31e3eb",
                    "firstName": "Rashad",
                    "lastName": "Bayer",
                    "email": "Ayden.Barton35@yahoo.com",
                    "address": {
                        "street": "63894 Dennis Terrace",
                        "city": "North Adonis",
                        "zip": "90725",
                        "state": "OH",
                        "country": "USA"
                    },
                    "dateCreated": "2016-10-03T01:45:42.112Z",
                    "company": {
                        "name": "Crooks - Sporer",
                        "website": "https://terrence.biz"
                    },
                    "profilePic": "http://lorempixel.com/640/480/transport"
                },
                {
                    "id": "7ac80d3d-a31d-472f-9eed-6c16e86dfa50",
                    "firstName": "Alejandra",
                    "lastName": "Robel",
                    "email": "Susan.Runolfsson@yahoo.com",
                    "address": {
                        "street": "22914 Borer Skyway",
                        "city": "Marcosbury",
                        "zip": "51323",
                        "state": "CT",
                        "country": "USA"
                    },
                    "dateCreated": "2016-10-02T12:09:00.915Z",
                    "company": {
                        "name": "Larkin - Predovic",
                        "website": "http://frances.name"
                    },
                    "profilePic": "http://lorempixel.com/640/480/fashion"
                }


            ]




    }



})();