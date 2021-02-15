# CaseJs
 All Case on Branch.

 ## Running Query Todos Apps 
 ```
 # Write your query or mutation here
# Write your query or mutation here
# query {

# }

mutation {
  # signupAdmin(username:"jogjaDev1",email:"jogjaDev@kreatiflab.id",password:"123!",role:"admin"){
  #   username
  #   email
  #   password
  #   role
  # }
  
  # signupGuest(
  #   username: "purnama"
  #   password: "123!"
  #   email: "sofi@kreatiflabs.id"
  # ) {
  #   username
  #   role
  # }
  
  signin(username:"jogjaDev1",password:"123!"){
   token
  }
  # createTodo(userId:1,title:"try progres",description:"try progres desc."){
  #   user_id
  #   title
  #   description
  # }
  
  # updateTodo(id:16,userId:1,title:"update title",description:"update description"){
  #   user_id
  #   title
  #   description
  # }
  
	# deleteTodo(id:18){
	# user_id
	# title
	# description
	# }
  
}

 ```
## Running  Query
```
 # Write your query or mutation here

# mutation {
   # createCategory(category: "Learning") {
   #   category
   # }
   # updateCategory(id:1, category:"psyco2"){
   #   category
   # }
   # deleteCategory(id:100){
   #    category
   #    id
   # }
  
  # createWriter(full_name:"heriipurnama", email:"heriipurnama@gmail.com", photo:"ok"){
  #   full_name
  # }
  # updateWriter(id:11, full_name:"heriipur",email:"heriipurnama@gmail.com", photo:"ok"){
  #   full_name
  #   email
  #   photo
  # }
  # deleteWriter(id:12){
  #   full_name
  #   email
  # }
  
  # createBook(writer_id:1,category_id:2,title:"try",description:"try",photo:"null"){
  #   writer_id
  # }
  # updateBook(id:11,writer_id:1,category_id:2,title:"tryUpdate",description:"tryUpdate",photo:"tryUpdate"){
  #   writer_id
  #   title
  # }
  # deleteBook(id:11){
  #   title
  # }
  
 #}

query {
  
  # writers{full_name}
  # books{description}
  # categories{category}
  
  # writerById(id: 1) {
  #   full_name
  #   email
  #   photo
  #   books {
  #     writer_id
  #     title
  #   }
  # }
  # categories {
  #   id
  #   category
  # }

}

```