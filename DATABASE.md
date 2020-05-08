# Database Structure

[PostgreSQL](https://www.postgresql.org/) was used for this project's database.

The database name is `holmes`.
The database has two tables: `districts` and `streets`.
`districts` table has `id` and `name` columns where `id` is the primary key.
`streets` table has `id`, `name`, `district_id` and `houses` columns. `id` is the primary key. `district_id` is a foreign key to the `districts` table referencing its `id` column. `houses` contains the number of houses in a particular street.

Details for connection to the database are provided by environment variables. Check `.env.sample` file to view expected environment variables.
