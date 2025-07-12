build:
	cd db && npm install

up:
	podman-compose up -d

down:
	podman-compose down -v 


migrate:
	podman exec -it coffeeks-postgres psql -U postgres -c "CREATE DATABASE IF NOT EXISTS coffeeks_dev;" || echo "Database creation check completed"
	cd db && npm run db:migrate

run-all-seeder:
	cd db && npm run db:seed

undo-all-seeder:
	cd db && npm run db:seed:undo:all 