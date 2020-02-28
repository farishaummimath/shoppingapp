
### A simple NodeJS/Express backend with categories and products CRUD operations

#### Sample JSON data to be sent in POSTMAN for create
* Category
```bash
{
​   "name"​ : ​"Stationery"​ 
}
```

* Product

```bash
{
​   "name"​ : ​"Pen"​ ,
    "description" : "Some description here",
    "price" : 15,
    "quantity" :5,
    "category" : "5b7d700183f3c5ee665bb07b"
}
```



#### Sample JSON Response Object for create
* Category

```bash
{
    ​"_id"​: ​"5b7d700183f3c5ee665bb07b"​,
    "name" : "Stationery"
    ​"createdAt"​: ​"2020-02-28T03:53:24.065"
}
```
* Product

```bash
{
    ​"_id"​: ​"5e564fee4b1ed23bb14078ed"​,
    "name" : "Pen",
    "description" : "Some description here",
    "price" : 15,
    "quantity" :5,
    "category" : "5b7d700183f3c5ee665bb07b"
    ​"createdAt"​: ​"2020-02-26T12:23:18.023Z"
}
```

### API Endpoints 

* Category

| API | URI | Actions |
| --- | --- | --- |
| GET | /categories | Retrieve all categories with product length for each category |
| GET | /categories/:id | Retrieve a category by its ID |
| POST | /categories/ | Create a new a category  |
| PUT | /categories/:id | Update properties of a category by its ID |
| DELETE | /categories/:id | Delete a category by its ID |

* Products

| API | URI | Actions |
| --- | --- | --- |
| GET | /products | Retrieve all products |
| GET | /products/:id | Retrieve a product by its ID |
| POST | /products/ | Create a new a product  |
| PUT | /products/:id | Update properties of a product by its ID |
| DELETE | /products/:id | Delete a product by its ID |





 