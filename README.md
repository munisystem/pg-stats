# pg-stats
Collect PostgreSQL statistics information like 'pg_stat_activity'.

## Install
```sh
$ npm i pg-stats --save
```

## Usage
```js
'use strict';

const pgs = require('pg-stats');

const cn = 'postgres://postgres:password@localhost:5432/postgres';
pgs(cn).then(results => {
  console.log(results['pg_stat_activity']);
})
```

## Support view
|view name|
|-----|
|pg_stat_acrivity|
|pg_stat_database|
|pg_stat_user_tables|
|pg_stat_sys_tables|
|pg_stat_all_tables|
|pg_stat_user_indexes|
|pg_stat_sys_indexes|
|pg_stat_all_indexes|
|pg_statio_user_tables|
|pg_statio_sys_tables|
|pg_statio_all_tables|
|pg_statio_user_indexes|
|pg_statio_sys_indexes|
|pg_statio_all_indexes|

Please check official document https://www.postgresql.org/docs/9.6/static/monitoring-stats.html

## LICENSE
MIT © munisystem
