create table rooms
(
    id    serial,
    title varchar
);

create unique index rooms_id_uindex
    on rooms (id);

alter table rooms
    alter column title set not null;

create table users
(
    id    serial,
    login varchar
);

create unique index users_id_uindex
    on users (id);

alter table users
  alter column login set not null;

create unique index users_login_uindex
  on users (login);

insert into rooms (title) values ('General');
insert into rooms (title) values ('Game #1');
insert into rooms (title) values ('Game #2');
insert into rooms (title) values ('Game #3');
insert into rooms (title) values ('AFK');

insert into users (login) values ('example');
insert into users (login) values ('admin');
insert into users (login) values ('fntastic');
insert into users (login) values ('heyvipho');
insert into users (login) values ('toppi');
insert into users (login) values ('white_wine');
insert into users (login) values ('GINGERcat');
insert into users (login) values ('B1ACKBE4RD');
