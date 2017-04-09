# example: make deploy version=1-0-0

deploy:
	appcfg.py --application=captainsloggame-164023 --version=$(version) update_queues .
	appcfg.py --application=captainsloggame-164023 --version=$(version) update_indexes .
	appcfg.py --application=captainsloggame-164023 --version=$(version) update .

update_queues:
	appcfg.py --application=captainsloggame-164023 --version=$(version) update_queues .

update_indexes:
	appcfg.py --application=captainsloggame-164023 --version=$(version) update_indexes .
