# [MEAN](http://mean.io/) Starter kit

Backend : Babel es2015

Frontend : es2015 native

## MongoDB Express Angular NodeJS

### Requirements

-   [Node](https://doc.ubuntu-fr.org/nodejs#depuis_un_ppa)
-   [MongoDB](https://doc.ubuntu-fr.org/mongodb#installation)
-   [Nodemon](http://nodemon.io/)
-   [Bower](https://bower.io/)

### Auto-install

[Bash script for Ubuntu & OSX](https://gist.github.com/adrienfloor/42656a1e9ae41f41c67204fe8ddecae4)

### Execution

#### Installation

```bash
git clone git@github.com/WildCodeSchool/laloupe-0916-ch-nogent.git
cd mean-starter-es6
npm install
bower install
```

#### Development

```bash
nodemon --exec npm start
```

#### Production

```bash
SECRET_TOKEN='secretToken' MONGODB_URI='mongodb://localhost:27017/mean-starter-es6' npm start
```
