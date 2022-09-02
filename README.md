# Fntastic Test

A test for Fntastic company

## Default user logins in database
- example
- admin
- fntastic
- heyvipho
- toppi
- white_wine
- GINGERcat
- B1ACKBE4RD

## Project Setup

### Server

It's necessary a server for the application. Run it by this command.

```sh
docker-compose up -d
```

### Client

When the server is running you can start the electron application.

#### Install npm dependencies

```sh
npm i
```

#### Build vue application

```sh
npm run vite-build
```

#### Start electron application

```sh
npm run start
```

#### You can use an environment variable in order to start some applications on one machine. It will replace storage dir path.

```sh
ELECTRON_STORE_PATH=./electron-data npm run start
```
