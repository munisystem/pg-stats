'use strict'

const pg = require('./pg');

module.exports = (cn) => {
  const queries = {
   'pg_stat_activity'       : 'SELECT * FROM pg_stat_activity',
   'pg_stat_database'       : 'SELECT * FROM pg_stat_database',

   'pg_stat_user_tables'    : 'SELECT * FROM pg_stat_user_tables',
   'pg_stat_user_indexes'   : 'SELECT * FROM pg_stat_user_indexes',
   'pg_statio_user_tables'  : 'SELECT * FROM pg_statio_user_tables',
   'pg_statio_user_indexes' : 'SELECT * FROM pg_statio_user_indexes',

   'pg_stat_sys_tables'     : 'SELECT * FROM pg_stat_sys_tables',
   'pg_stat_sys_indexes'    : 'SELECT * FROM pg_stat_sys_indexes',
   'pg_statio_sys_tables'   : 'SELECT * FROM pg_statio_sys_tables',
   'pg_statio_sys_indexes'  : 'SELECT * FROM pg_statio_sys_indexes',

   'pg_stat_all_tables'     : 'SELECT * FROM pg_stat_all_tables',
   'pg_stat_all_indexes'    : 'SELECT * FROM pg_stat_all_indexes',
   'pg_statio_all_tables'   : 'SELECT * FROM pg_statio_all_tables',
   'pg_statio_all_indexes'  : 'SELECT * FROM pg_statio_all_indexes',
  }

  return pg(cn, queries).then(results => {
    return results;
  }).catch(error => {
    throw error;
  });
}
