target = $@

dev:
	npx parcel src/index.html

clean:
	rm -rf dist
	rm -rf .parcel-cache
