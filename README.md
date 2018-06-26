A Koa Project with koa-route and mongodb(mongoose)

mongodb
brew install mongodb
mongod --dbpath ./mongodb  --config /usr/local/etc/mongod.conf
mongo --host 127.0.0.1:27017
use admin
db.createUser({ user: "useradmin", pwd: "adminpassword", roles: [{ role: "userAdminAnyDatabase", db: "admin" }] })

Successfully added user: {
	"user" : "admin",
	"roles" : [
		{
			"role" : "userAdminAnyDatabase",
			"db" : "admin"
		}
	]
}

use admin
db.auth('admin','1')

mongodb://wooden:1@127.0.0.1:27017/wooden