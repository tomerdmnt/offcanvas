
build: components index.js offcanvas.css
	@component build --dev

components:
	@component install --dev

clean:
	rm -fr build components template.js

standalone:
	@component build --standalone offcanvas -n offcanvas -o ./standalone

.PHONY: clean
