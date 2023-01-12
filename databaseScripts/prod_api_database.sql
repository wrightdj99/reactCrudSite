use mydb;
create table product(id int, name varchar(20), price int);
select * from product;
/*To make it currency-formatted*/
alter table product
modify price decimal(13,2);
alter table product
modify name varchar(50);

